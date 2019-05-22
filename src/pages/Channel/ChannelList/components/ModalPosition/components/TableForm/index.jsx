import React, { PureComponent } from 'react';
import { Table, Button, Select, Input, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
import styles from './style.less';
const { Option } = Select;

class TableForm extends PureComponent {
  cacheOriginData = {};
  constructor(props) {
    super(props);
    this.state = {
      data: props.newPositionList,
      loading: false,
      value: props.newPositionList,
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
    const { positionDate } = this.props
    if(!positionDate){
      message.error('已经全部设置关键岗位,请点击关闭或取消');
      return
    }
    const newData = data&&data.map(item => ({ ...item }));
    newData&&newData.push({
      id: Math.random(),
      // username: '',
      roleId: '',
      editable: true,
      isNew: true,
    });
    this.setState({ data: newData });
  };

  remove(id) {
    const { data } = this.state;
    const { onChange } = this.props;
    const newData = data.filter(item => item.id !== id);
    this.setState({ data: newData });
    onChange(newData);
  }

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
      if (typeof e === 'object') {
        target[fieldName] = e.target.value;
      } else {
        target[fieldName] = e;
      }
      this.setState({ data: newData });
    }
  }

  saveRow(e, id) {
    e.persist();
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      if (!target.roleId) {
        message.error('请填写完整信息。');
        e.target.focus();
        this.setState({
          loading: false,
        });
        return;
      }
      delete target.isNew;
      this.toggleEditable(e, id);
      const { data } = this.state;
      const { onChange } = this.props;
      onChange(data);
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
    const { positionDate } = this.props;
    const posiObj={}
    positionDate&&positionDate.forEach(({id,roleName}) => {
      posiObj[id]=roleName
    });
    // data.forEach(({id,roleName}) => {
    //   posiObj[id]=roleName
    // });
    const columns = [
      {
        title: '选择岗位',
        dataIndex: 'roleId',
        id: 'roleId',
        width: '50%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Select
                defaultValue={text}
                placeholder="请选择"
                style={{ width: '100%' }}
                onChange={e => this.handleFieldChange(e, 'roleId', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
              >
                {positionDate.map(({ id:roleId ,roleName}) => (
                  <Option value={Number(roleId)} key={roleId}>
                    {roleName}
                  </Option>
                ))}
              </Select>
            );
          }
          return posiObj[text]|| '--';
          // return text;
        },
      },
      // {
      //   title: '人员姓名',
      //   dataIndex: 'username',
      //   id: 'username',

      //   render: (text, record) => {
      //     if (record.editable) {
      //       return (
      //         <Input
      //           disabled
      //           value={text}
      //           onChange={e => this.handleFieldChange(e, 'username', record.id)}
      //           onKeyPress={e => this.handleKeyPress(e, record.id)}
      //           placeholder="人员姓名"
      //         />
      //       );
      //     }
      //     return text;
      //   },
      // },

      {
        title: '操作',
        id: 'action',
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

    return (
      <>
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey={'id'}
          bordered
          size={'middle'}
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

export default TableForm;
