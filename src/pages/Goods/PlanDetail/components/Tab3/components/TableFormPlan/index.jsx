import React, { PureComponent, Fragment } from 'react';
import { Table, Button, Input, message, Popconfirm, Divider } from 'antd';
import isEqual from 'lodash/isEqual';
import styles from './css/style.less';

class TableForm extends PureComponent {
  index = 1;

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

  getRowByKey(planPeriod, newData) {
    const { data } = this.state;
    return (newData || data).filter(item => item.planPeriod === planPeriod)[0];
  }

  toggleEditable = (e, planPeriod) => {
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(planPeriod, newData);
    if (target) {
      // 进入编辑状态时保存原始数据
      if (!target.editable) {
        this.cacheOriginData[planPeriod] = { ...target };
      }
      target.editable = !target.editable;
      this.setState({ data: newData });
    }
  };

  newMember = () => {
    const { data } = this.state;

    const { tbProductSchemaInfoId, tbProductTemplateInfoId } = this.props;

    const newData = data.map(item => ({ ...item }));
    newData.push({
      planPeriod: `${this.index}`,
      planBegin: '',
      planEnd: '',
      currentAmount: '',
      tbProductSchemaInfoId,
      tbProductTemplateInfoId,
      editable: true,
      isNew: true,
    });
    this.index += 1;
    this.setState({ data: newData });
  };

  remove(planPeriod) {
    const { data } = this.state;
    const { onChange } = this.props;
    const newData = data.filter(item => item.planPeriod !== planPeriod);
    this.setState({ data: newData });
    onChange(newData);
  }

  handleKeyPress(e, planPeriod) {
    if (e.planPeriod === 'Enter') {
      this.saveRow(e, planPeriod);
    }
  }

  handleFieldChange(e, fieldName, planPeriod) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(planPeriod, newData);
    if (target) {
      target[fieldName] = e.target.value;
      this.setState({ data: newData });
    }
  }

  saveRow(e, planPeriod) {
    e.persist();
    this.setState({
      loading: true,
    });
    setTimeout(() => {
      if (this.clickedCancel) {
        this.clickedCancel = false;
        return;
      }
      const target = this.getRowByKey(planPeriod) || {};
      if (!target.planBegin || !target.planEnd || !target.currentAmount) {
        message.error('请填写完整信息。');
        e.target.focus();
        this.setState({
          loading: false,
        });
        return;
      }
      delete target.isNew;
      this.toggleEditable(e, planPeriod);
      const { data } = this.state;
      const { onChange } = this.props;
      onChange(data);
      this.setState({
        loading: false,
      });
    }, 500);
  }

  cancel(e, planPeriod) {
    this.clickedCancel = true;
    e.preventDefault();
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(planPeriod, newData);
    if (this.cacheOriginData[planPeriod]) {
      Object.assign(target, this.cacheOriginData[planPeriod]);
      delete this.cacheOriginData[planPeriod];
    }
    target.editable = false;
    this.setState({ data: newData });
    this.clickedCancel = false;
  }

  render() {
    const columns = [
      {
        title: '还款起始期数',
        dataIndex: 'planBegin',
        planPeriod: 'planBegin',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                autoFocus
                onChange={e => this.handleFieldChange(e, 'planBegin', record.planPeriod)}
                onKeyPress={e => this.handleKeyPress(e, record.planPeriod)}
                placeholder="还款起始期数"
              />
            );
          }
          return text;
        },
      },
      {
        title: '还款结束期数',
        dataIndex: 'planEnd',
        planPeriod: 'planEnd',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'planEnd', record.planPeriod)}
                onKeyPress={e => this.handleKeyPress(e, record.planPeriod)}
                placeholder="还款结束期数"
              />
            );
          }
          return text;
        },
      },
      {
        title: ' 还款金额（元）',
        dataIndex: 'currentAmount',
        planPeriod: 'currentAmount',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'currentAmount', record.planPeriod)}
                onKeyPress={e => this.handleKeyPress(e, record.planPeriod)}
                placeholder=" 还款金额（元）"
              />
            );
          }
          return text;
        },
      },
      {
        title: '操作',
        planPeriod: 'action',
        render: (text, record) => {
          const { loading } = this.state;
          if (!!record.editable && loading) {
            return null;
          }
          if (record.editable) {
            if (record.isNew) {
              return (
                <span>
                  <a onClick={e => this.saveRow(e, record.planPeriod)}>添加</a>
                  <Divider type="vertical" />
                  <Popconfirm
                    title="是否要删除此行？"
                    onConfirm={() => this.remove(record.planPeriod)}
                  >
                    <a>删除</a>
                  </Popconfirm>
                </span>
              );
            }
            return (
              <span>
                <a onClick={e => this.saveRow(e, record.planPeriod)}>保存</a>
                <Divider type="vertical" />
                <a onClick={e => this.cancel(e, record.planPeriod)}>取消</a>
              </span>
            );
          }
          return (
            <span>
              <a onClick={e => this.toggleEditable(e, record.planPeriod)}>编辑</a>
              <Divider type="vertical" />
              <Popconfirm title="是否要删除此行？" onConfirm={() => this.remove(record.planPeriod)}>
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
          bordered
          size={'middle'}
          rowKey={'planPeriod'}
          loading={loading}
          columns={columns}
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

export default TableForm;
