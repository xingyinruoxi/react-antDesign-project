/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable lines-between-class-members */
import React, { PureComponent } from 'react';
import { Form, Modal, Row, Col, Select, Table, Button } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;
const { Option } = Select;

@connect(state => ({
  rule: state.rule,
  loading: state.loading.models.rule,
}))
@Form.create()
class ModalChannel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'rule/fetch',
    });
  }
  // eslint-disable-next-line lines-between-class-members
  // eslint-disable-next-line react/sort-comp
  handleFieldChange(e, fieldName, key) {
    const { data } = this.state;
    const newData = data.map(item => ({ ...item }));
    const target = this.getRowByKey(key, newData);
    if (target) {
      target[fieldName] = e.target.value;
      this.setState({ data: newData });
    }
  }
  // eslint-disable-next-line lines-between-class-members
  handleKeyPress(e, key) {
    if (e.key === 'Enter') {
      this.saveRow(e, key);
    }
  }
  // eslint-disable-next-line lines-between-class-members
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line lines-between-class-members
  okHandle = e => {
    const { handleBatchLinkageChannel } = this.props;
    handleBatchLinkageChannel();
  };
  // eslint-disable-next-line lines-between-class-members
  newMember = () => {
    const { data } = this.state;
    const newData = data.map(item => ({
      ...item,
    }));
    newData.push({
      id: Math.random(),
      processKey: '',
      listKey: '',
      editable: true,
      isNew: true,
    });
    this.index += 1;
    this.setState({ data: newData });
  };
  render() {
    const {
      modalVisible,
      handleBatchLinkageChannel,
      data,
      form: { getFieldDecorator },
      loading,
    } = this.props;
    const columns = [
      {
        title: '大区',
        dataIndex: 'processKey',
        id: 'processKey',
        width: '13%',
        render: (text, record) => {
          if (record.editable) {
            return (
              // eslint-disable-next-line react/jsx-filename-extension
              <Input
                value={text}
                autoFocus
                onChange={e => this.handleFieldChange(e, 'processKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择业务流程"
              />
              // <Select placeholder="请选择" onChange={e => this.handleFieldChange(e, 'businessId', record.id)} onKeyPress={e => this.handleKeyPress(e, record.id)}>
              //   {tb_cg_business_type &&Object.entries(tb_cg_business_type).map(item => (
              //       <Option value={Number(item[0])} id={item[0]}>
              //         {item[1]}
              //       </Option>
              //     ))}
              // </Select>
            );
          }
          return text;
        },
      },
      {
        title: '渠道省份',
        dataIndex: 'listKey',
        id: 'listKey',
        width: '13%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'listKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择资料清单"
              />
            );
          }
          return text;
        },
      },
      {
        title: '渠道城市',
        dataIndex: 'listKey',
        id: 'listKey',
        width: '13%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'listKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择资料清单"
              />
            );
          }
          return text;
        },
      },
      {
        title: '渠道区县',
        dataIndex: 'listKey',
        id: 'listKey',
        width: '13%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'listKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择资料清单"
              />
            );
          }
          return text;
        },
      },
      {
        title: '渠道名称',
        dataIndex: 'listKey',
        id: 'listKey',
        width: '13%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'listKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择资料清单"
              />
            );
          }
          return text;
        },
      },
      {
        title: '合作方式',
        dataIndex: 'listKey',
        id: 'listKey',
        width: '13%',
        render: (text, record) => {
          if (record.editable) {
            return (
              <Input
                value={text}
                onChange={e => this.handleFieldChange(e, 'listKey', record.id)}
                onKeyPress={e => this.handleKeyPress(e, record.id)}
                placeholder="选择资料清单"
              />
            );
          }
          return text;
        },
      },
      {
        title: '操作',
        id: 'action',
        width: '13%',
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
            // return (
            //   <span>
            //     <a onClick={e => this.saveRow(e, record.id)}>保存</a>
            //     <Divider type="vertical" />
            //     <a onClick={e => this.cancel(e, record.id)}>取消</a>
            //   </span>
            // );
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
      // eslint-disable-next-line react/jsx-filename-extension
      <Modal
        destroyOnClose
        title="批量关联设置"
        width={800}
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleBatchLinkageChannel()}
      >
        <Row gutter={{ lg: 24 }}>
          <Col>
            <FormItem label="关联渠道列表">
              {getFieldDecorator('templateAssociated')(
                <Select placeholder="请选择" style={{ width: 200 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="Yiminghe">yiminghe</Option>
                  {/* {Object.values(associateSettings).map((val, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Option value={index + 1} key={index}>
                      {val}
                    </Option>
                  ))} */}
                </Select>
              )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="关联流程资料清单" />
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          pagination={false}
          rowClassName={record => (record.editable ? styles.editable : '')}
        />
        <Button
          style={{
            width: '100%',
            marginTop: 16,
            marginBottom: 8,
          }}
          type="dashed"
          onClick={this.newMember}
          icon="plus"
        >
          新增一行数据
        </Button>
      </Modal>
    );
  }
}
export default ModalChannel;
