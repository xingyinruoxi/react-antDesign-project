import React, { PureComponent } from 'react';
import {
  Table,
  Button,
  Input,
  message,
  Popconfirm,
  Divider,
  Form,
  Select,
  InputNumber,
} from 'antd';
import { connect } from 'dva';
import isEqual from 'lodash/isEqual';
import styles from './less/style.less';
const { Option } = Select;
@connect(({ typeDataTotal, addShareholder, delShareholder }) => ({
  typeDataTotal,
  addShareholder,
  delShareholder,
}))
@Form.create()
class groupsTable extends PureComponent {
  index = 0;
  cacheOriginData = {};
  constructor(props) {
    super(props);
    this.state = {
      data: props.value,
      loading: false,
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
    const {
      typeDataTotal: { tb_cg_post },
    } = this.props;
    const newData = data.map(item => ({ ...item }));
    newData.push({
      id: Math.random(),
      titleId: '',
      name: '',
      proportion: '',
      mobile: '',
      editable: true,
      isNew: true,
    });
    this.index += 1;
    this.setState({ data: newData });
  };

  remove(id) {
    const { dispatch, groupId } = this.props;
    const { data } = this.state;
    const { removeCall } = this;
    const newData = data.filter(item => item.id !== id);
    dispatch({
      type: 'delShareholder/step2',
      payload: {
        data: id,
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
  handleKeyPress(e, id) {
    if (e.id === 'Enter') {
      this.saveRow(e, id);
    }
  }

  handleFieldChange(e, fieldName, id) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (target) {
      if (typeof e === 'number') {
        target[fieldName] = e;
      } else {
        target[fieldName] = e.target.value;
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
      const { dispatch, groupId } = this.props;
      const {
        updateData,
        state: { data },
      } = this;
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      const { toggleEditable } = this;
      delete target.isNew;
      delete target.editable;
      delete target.id;
      const { titleId, name, proportion, mobile } = target;
      target.titleId = titleId.toString();
      if (!target.mobile || !target.name || !target.proportion || !target.titleId) {
        message.error('请填写完整信息。');
        e.target.focus();
        this.setState({
          loading: false,
        });
        return;
      }
      if (e.target.innerText.includes('保存')) {
        delete target.id;
      }
      dispatch({
        type: 'addShareholder/step2',
        payload: {
          data: {
            channelGroupId: groupId,
            titleId,
            titleName: '',
            name,
            mobile,
            proportion,
          },
        },
        callBack(msg, editId) {
          if (msg === 'OK') {
            const newData = data.map(item => {
              if (item.id === target.id) {
                return { ...item, id: editId, editable: true };
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
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
  }

  render() {
    const {
      form,
      typeDataTotal: { tb_cg_post },
      groupShareholder,
    } = this.props;
    const columns = [
      {
        title: '集团职务',
        dataIndex: 'titleId',
        id: 'id',
        width: '20%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                placeholder="请选择"
                onChange={e => this.handleFieldChange(e, 'titleId', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {tb_cg_post &&
                  Object.entries(tb_cg_post).map(item => (
                    <Option value={Number(item[0])} id={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
              </Select>
            );
          }
          return tb_cg_post[text] || '--';
        },
      },
      {
        title: '股东姓名',
        dataIndex: 'name',
        id: 'id',
        width: '20%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'name', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder=""
              />
            );
          }
          return text;
        },
      },
      {
        title: '所占股权',
        dataIndex: 'proportion',
        id: 'id',
        width: '20%',
        render: (text, record) => {
          const { getFieldDecorator, validateFields } = form;
          if (record.editable) {
            return (
              <>
                {getFieldDecorator('proportion', {
                  rules: [
                    {
                      required: true,
                      pattern: /^\d+\.?\d{0,2}%$/,
                      message: '请输入百分比',
                    },
                  ],
                })(
                  <InputNumber
                    min={1}
                    max={100}
                    value={text}
                    formatter={value => `${value}%`}
                    parser={value => value.replace('%', '')}
                    onChange={e => this.handleFieldChange(e, 'proportion', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                    addonAfter="%"
                  />
                  // <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                )}
              </>
            );
          }
          return text;
        },
      },
      {
        title: '联系电话',
        dataIndex: 'mobile',
        id: 'id',
        width: '20%',
        render: (text, record) => {
          const { getFieldDecorator, validateFields } = form;
          if (record.editable) {
            return (
              <>
                {getFieldDecorator('mobile', {
                  rules: [
                    {
                      required: true,
                      pattern: /^\d{11}$/,
                      message: '请输入数字',
                    },
                  ],
                })(
                  <Input
                    value={text}
                    onChange={e => this.handleFieldChange(e, 'mobile', record.id)}
                    onKeyPress={e => this.handleKeyPress(e, record.id)}
                    placeholder=""
                  />
                )}
              </>
            );
          }
          return text;
        },
      },
      {
        title: '操作',
        id: 'id',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          if (record.editable) {
            if (record.isNew) {
              return (
                <span>
                  <a onClick={e => this.saveRow(e, record.id)}>添加</a>
                  <Divider type="vertical" />
                  <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>
                    <a>删除</a>
                  </Popconfirm>
                </span>
              );
            }
            return (
              <span>
                <a onClick={e => this.saveRow(e, record.id)}>保存</a>
                <Divider type="vertical" />
                <a onClick={e => this.cancel(e, record.id)}>取消</a>
              </span>
            );
          }
          return (
            <span>
              {/* <a onClick={e => this.toggleEditable(e, record.id)}>编辑</a> */}
              {/* <Divider type="vertical" /> */}
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.id)}>
                <a>删除</a>
              </Popconfirm>
            </span>
          );
        },
      },
    ];

    const { loading, data } = this.state;

    return (
      <>
        <Table
          // loading={loading}
          columns={columns}
          rowKey={'id'}
          bordered
          size={'middle'}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />
        <Button
          style={{ width: '100%', marginTop: 16, marginBottom: 8 }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增
        </Button>
      </>
    );
  }
}

export default groupsTable;
