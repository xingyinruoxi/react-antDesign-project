import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, Select, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
const { Option } = Select;
import styles from './css/style.less';

class TableForm extends PureComponent {
  cacheOriginData = {};

  constructor(props) {
    super(props);
    this.state = {
      data: props.value,
      loading: false,
      /* eslint-disable-next-line react/no-unused-state */
      value: props.value,
    };
  }

  static getDerivedStateFromProps(nextProps, preState) {
    if (isEqual(nextProps.value, preState.value)) {
      return null;
    }
    return {
      data: nextProps.value,
      value: nextProps.value,
    };
  }

  getRowByKey(id, newData) {
    const { data } = this.state;
    return (newData || data).filter(item => item.id === id)[0];
  }

  toggleEditable = (e, id) => {
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (target) {
      // 进入编辑状态时保存原始数据
      if (!target.editable) {
        this.cacheOriginData[id] = { ...target };
      }
      target.editable = !target.editable;
      this.setState({ data: newData });
    }
  };

  newMember = () => {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const { length } = newData;
    const {contactSort}=length>0&&newData[length-1];
    const sort = contactSort <= 2 ? 3 : contactSort + 1;
    newData.push({
      id: Math.random(),
      contactName: '',
      contactPhone: '',
      contactSort: sort,
      contactCard: '',
      contactAddress: '',
      contactType: '',
      editable: true,
      isNew: true,
    });
    this.setState({ data: newData });
  };

  handleKeyPress(e, id) {
    if (e.id === 'Enter') {
      this.saveRow(e, id);
    }
  }
  remove(id) {
    const { dispatch } = this.props;
    const { data } = this.state;
    const { removeCall } = this;
    const newData = data.filter(item => item.id !== id);
    dispatch({
      type: 'form/moneyRuleDelete',
      payload: {
        data: {
          id,
        },
      },
      callBack(msg) {
        if (msg === 'OK') {
          removeCall(newData);
        } else {
          message.error(msg);
        }
      },
    });
  }

  removeCall = newData => {
    this.setState({ data: newData });
  };

  handleFieldChange(e, fieldName, id) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);

    if (target) {
      if (typeof e === 'object') {
        target[fieldName] = e.target.value;
      } else {
        target[fieldName] = e;
      }
      this.setState({ data: newData });
    }
  }

  updateData = (newData, e, editId) => {
    this.setState({ data: newData }, () => this.toggleEditable(e, editId));
  };
  saveRow(e, id) {
    e.persist();
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      const { dispatch, customerId } = this.props;
      const {
        updateData,
        state: { data },
      } = this;
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      if (e.target.innerText.includes('保存')) {
        delete target.customerId;
        delete target.infomation;
        delete target.optionUser;
      }
      const newTarget = target;
      const { contactType } = newTarget;
      newTarget.contactType = contactType + '';
      for (var key in newTarget) {
        if (key !== 'contactSort' && !newTarget[key]) {
          message.error('请填写完整信息');
          e.target.focus();
          this.setState({
            loading: false,
          });
          return;
        }
      }
      delete target.isNew;
      delete newTarget.editable;
      /* if (!e.target.innerText.includes('保存')) {
        delete newTarget.id;
      } */
      if(typeof(newTarget.contactType)==='string'){
        newTarget.contactType=Number(newTarget.contactType);
      }
      dispatch({
        type: 'contactUser/submit',
        payload: {
          data: {
            ...newTarget,
            customerId,
          },
        },
        callBack(msg, editId) {
          if (msg === 'OK') {
            const newData = data.map(item => {
              if (e.target.innerText.includes('添加')&&item.id === target.id) {
                const curId=editId||target.id;
                return { ...item, id:curId , editable: false };
              } else {
                return { ...item };
              }
            });
            updateData(newData, e, editId);
          } else {
            message.error(msg);
          }
        },
      });
      this.setState({
        loading: false,
      });
    }, 500);
  }
  cancel(e, id) {
    this.clickedCancel = true;
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (this.cacheOriginData[id]) {
      Object.assign(target, this.cacheOriginData[id]);
      delete this.cacheOriginData[id];
    }
    target.editable = false;
    this.setState({ data: newData });
    this.clickedCancel = false;
  }

  render() {
    const { loading, data } = this.state;
    const { customer_realation_type, customerId, formList } = this.props;
    const columns = [
      {
        title: '紧急联系人姓名',
        dataIndex: 'contactName',
        key: 'contactName',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'contactName', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="紧急联系人姓名"
              />
            );
          }
          return text;
        },
      },
      {
        title: '与客户关系',
        dataIndex: 'contactType',
        width: '150px',
        key: 'contactType',
        render: (text, record) => {
          if (record.editable) {
            if(text===0){
              text=text+''
            }

            return (
              <Select
                placeholder={'请选择'}
                style={{ width: '100%' }}
                onChange={e => this.handleFieldChange(e, 'contactType', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                defaultValue={text || null}
                // value={text}
              >
                {customer_realation_type &&
                  Object.entries(customer_realation_type).map(item => (
                    <Option value={text==='0'?item[0]:Number(item[0])} key={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return customer_realation_type && customer_realation_type[text];
        },
      },
      {
        title: '身份证号码',
        dataIndex: 'contactCard',
        key: 'contactCard',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'contactCard', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="身份证号码"
              />
            );
          }
          return text;
        },
      },
      {
        title: '联系电话',
        dataIndex: 'contactPhone',
        key: 'contactPhone',

        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'contactPhone', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="联系电话"
              />
            );
          }
          return text;
        },
      },
      {
        title: '居住地址',
        dataIndex: 'contactAddress',
        key: 'contactAddress',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'contactAddress', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="居住地址"
              />
            );
          }
          return text || '--';
        },
      },
      {
        title: '操作',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          if (record.editable) {
            if (record.isNew) {
              return (
                <>
                  <a onClick={e => this.saveRow(e, record.id)}>添加</a>
                </>
              );
            }
            return (
              <>
                <a onClick={e => this.saveRow(e, record.id)}>保存</a>
                <Divider type="vertical" />
                <a onClick={e => this.cancel(e, record.id)}>取消</a>
              </>
            );
          }
          return (
            <>
              <a
                onClick={e => this.toggleEditable(e, record.id)}
                disabled={!this.props.formList ? true : false}
              >
                编辑
              </a>
            </>
          );
        },
      },
    ];

    return (
      <>
        <Table
          style={{ paddingTop: 15 }}
          bordered
          rowKey={'id'}
          loading={loading}
          columns={columns}
          size={'middle'}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />
        {formList ? (
          <Button
            style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
            type="dashed"
            onClick={this.newMember}
            icon="plus"
          >
            新增
          </Button>
        ) : null}
      </>
    );
  }
}

export default TableForm;
