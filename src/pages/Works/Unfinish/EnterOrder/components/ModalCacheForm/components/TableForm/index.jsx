import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider, DatePicker } from 'antd';
import isEqual from 'lodash/isEqual';
import styles from './style.less';
import moment from 'moment';
import { formatTime } from '@/utils/utils';

class TableForm extends PureComponent {
  cacheOriginData = {};

  constructor(props) {
    super(props);
    this.state = {
      data: props.value,
      loading: false,
      /* eslint-disable-next-line react/no-unused-state */
      value: props.value,
      hasEdit:false
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
    const {pauseBeginTime}=target;
    const {setHasEdit}=this;
    if(pauseBeginTime){
      setHasEdit(true)
    }
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
    const {setHasEdit}=this;
    setHasEdit(false)
    newData.push({
      id: Math.random(),
      pauseReason: '',
      pauseBeginTime: '',
      pauseEndTime: '',
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

  setHasEdit=(flag)=>{
    this.setState({
      hasEdit:!!flag
    })
  }
  handleFieldChange(e, fieldName, id) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(id, newData);
    if (target) {
      if (fieldName.endsWith('Time')) {
        const time = moment(e).format('YYYY-MM-DD HH:mm');
        target[fieldName] = time;
      } else {
        target[fieldName] = e.target.value;
      }
      this.setState({ data: newData });
    }
  }

  saveRow(e, id) {
    e.persist();
    this.setState({
      loading: true,
    });
    const {setHasEdit}=this;
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(id) || {};
      if (!target.pauseReason || !target.pauseBeginTime) {
        message.error('请填写完整信息。');
        e.target.focus();
        this.setState({
          loading: false,
        });
        return;
      }
      delete target.isNew;
      const { toggleEditable } = this;
      const { dispatch, tradeCode } = this.props;
      const { pauseBeginTime, pauseEndTime, pauseReason } = target;
      const newValues = {
        pauseBeginTime,
        pauseReason,
      };
      if (pauseEndTime) {
        newValues.pauseEndTime = pauseEndTime;
        delete newValues.pauseBeginTime;
      }
      const { closeLoading,setHasEdit } = this;
      const hasSave=e.target.innerText.includes('保存')?false:true;
      const result=pauseEndTime?'暂存结束':'暂存成功'
      dispatch({
        type: 'addCache/submit',
        payload: {
          data: {
            tradeCode,
            ...newValues,
          },
        },
        callBack(msg) {
          if (msg === 'OK') {
            message.success(result);
            setHasEdit(hasSave);
            toggleEditable(e, id);
            closeLoading();
          } else {
            message.error(msg);
          }
        },
      });
    }, 500);
  }
  closeLoading = () => {
    const { data } = this.state;
    const { onChange } = this.props;
    onChange(data);
    this.setState({
      loading: false,
    });
  };
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
    const { realName, tradeCode } = this.props;
    const {hasEdit}=this.state;
    const columns = [
      {
        title: '暂存人',
        dataIndex: 'realName',
        id: 'realName',
        width: 100,
        render: (text, record) => {
          return realName;
        },
      },
      {
        title: '暂存原因',
        dataIndex: 'pauseReason',
        id: 'pauseReason',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'pauseReason', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="暂存原因"
              />
            );
          }
          return text;
        },
      },
      {
        title: '开始时间',
        dataIndex: 'pauseBeginTime',
        id: 'pauseBeginTime',
        render: (text, record) => {
          if (record.editable) {
            return (
              <DatePicker
                showTime
                style={{
                  width: '100%',
                }}
                onChange={e => this.handleFieldChange(e, 'pauseBeginTime', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                value={text ? moment(formatTime(text), 'YYYY-MM-DD HH:mm:ss') : null}
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="请选择开始时间"
              />
            );
          }
          return formatTime(text);
        },
      },
      {
        title: '结束时间',
        dataIndex: 'pauseEndTime',
        id: 'pauseEndTime',
        render: (text, record) => {
          if (record.editable) {
            return (
              <DatePicker
                showTime
                style={{
                  width: '100%',
                }}
                disabled={!hasEdit?true:false}
                onChange={e => this.handleFieldChange(e, 'pauseEndTime', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                value={text ? moment(formatTime(text), 'YYYY-MM-DD HH:mm:ss') : null}
                format="YYYY-MM-DD HH:mm:ss"
                placeholder="请选择结束时间"
              />
            );
          }
          return text ? formatTime(text) : '--';
        },
      },
      {
        title: '操作',
        id: 'action',
        width: 100,
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
              </span>
            );
          }
          return (
            <span>
              <a
                disabled={record.pauseEndTime ? true : false}
                onClick={e => this.toggleEditable(e, record.id)}
              >
                编辑
              </a>
            </span>
          );
        },
      },
    ];

    const {
      loading,
      data,
      data: { length },
    } = this.state;
    const { pauseEndTime, editable } = length > 0 && data[length - 1];
    return (
      <>
        <Table
          bordered
          size={'middle'}
          loading={loading}
          columns={columns}
          rowKey={'id'}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />
        {(!editable && pauseEndTime) || length === 0 ? (
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
