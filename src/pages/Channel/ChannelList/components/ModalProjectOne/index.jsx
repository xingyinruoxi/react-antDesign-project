import React, { PureComponent } from 'react';
import moment from 'moment';
import {Table,Form,Modal,Input,message,Col,Select,Row,Button,} from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;
const { Option } = Select;
import styles from './less/style.less';
import StandardTable from '@/components/StandardTable';
import { stat } from 'fs';
const productStatusJson={
  1:'上架',
  2:'待上架',
  3:'下架'
}
@connect(state => {
  return {
    produceList: state.produceList,
    typeDataTotal: state.typeDataTotal,
    goodProductList: state.goodProductList,
    channelList: state.channelList,
    // queryProduceList: state.queryProduceList
  };
})
@Form.create()
class ModalProjectOne extends PureComponent {
  state = {
    selectedRows: [],
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      goodProductList: { formValues },
    } = this.props;
    /* const filters = Object.keys(filtersArg).reduce((obj, key) => {
          const newObj = { ...obj };
          newObj[key] = getValue(filtersArg[key]);
          return newObj;
        }, {}); */
    const params = {
      page: pagination.current,
      limit: pagination.pageSize,
      queryCondition: { ...formValues },
      // ...filters,
    };
    /* if (sorter.field) {
          params.sorter = `${sorter.field}_${sorter.order}`;
        } */

    dispatch({
      type: 'goodProductList/fetch', 
      payload: params,
    });
  };
  //重置表单
  handleFormReset = () => {
    const {
      form,
      dispatch,
      goodProductList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'goodProductList/fetch',
      payload: { 
        queryCondition: {
          
        } ,
        limit
      },
    });
  };
  handleSearch = e => { 
    e.preventDefault();
    const {
      dispatch,
      form,
      goodProductList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'goodProductList/fetch',
        payload: { 
          queryCondition: {
            ...values
          } ,
          limit
        },
      });
    });
  };
  componentDidMount() {
    const { dispatch,id,item:{isProduct} } = this.props;
    const { setData } = this;
    dispatch({
      type: 'queryProduceList/fetch',
      payload: {
        data: { id },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const listId = data.map(({ id }) => id);
          setData('selectedRows', listId);
        }
      },
    }); 
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    }); 
    dispatch({
      type: 'goodProductList/fetch', 
      payload: {
        queryCondition: {},
        limit:10
      },
    }); 
  }
  okHandle= e => {
    e.preventDefault();
    const { selectedRows } = this.state;
    if (selectedRows.length <= 0) {
      message.error('请选择方案');
      return;
    }
    const listId = selectedRows.length&&selectedRows.map(({id}) => {
      return id;
    });
    const { dispatch,handleModalProject,id } = this.props
    dispatch({
      type: 'produceList/submit',
      payload: {
        data: {
          channelId:id, 
          // optionUser:'',
          psInfoIds:selectedRows,
        },
      },
      callBack(msg) {
        if (msg === 'OK') {
          message.success('关联成功');
          handleModalProject()
          dispatch({
            type: 'channelList/fetch',
            payload: {
              limit: 10,
              queryCondition: { 
                cooperation: '', //参考字典 ch_cooperation
                isAdmin: '', //0 否 1 是
                isPost: '', //0 否 1 是
                isProduct: '', //0 否 1 是
                name: '', //渠道名称
                operating: '', //参考字典 ch_operating
                status: '', //参考字典 ch_status
              },
            },
          });
        } else {
          message.error(msg);
        }
      },
    });
  }
  render() {
    const columns=[
      {
        title: '方案状态',
        dataIndex: 'schemaStatus',
        width:'100px',
        render: schemaStatus => <>{productStatusJson[schemaStatus]}</>,
      },
      {
        title: '产品方案名称',
        dataIndex: 'schemaName',
        render: schemaName => <>{schemaName || '--'}</>,
      },
      {
        title: '产品利率',
        dataIndex: 'schemaInterest',
        width:'100px',
        render: schemaInterest => <>{schemaInterest || '--'}</>,
      },
      {
        title: '产品期数',
        dataIndex: 'schemaLimit',
        width:'100px',
        render: schemaLimit => <>{schemaLimit || '--'}</>,
      },
      {
        title: '首付（元）',
        dataIndex: 'firstPayment',
        width:'120px',
        render: firstPayment => <>{firstPayment || '--'}</>,
      },
    ]
    const {
      loading,
      modalVisible,
      form,
      dispatch,
      handleModalProject,
      form: { getFieldDecorator },
      goodProductList:{ list, pageNum: current, total, pageSize },
      typeDataTotal:{
        cm_status
      },
    } = this.props;
    const { selectedRows } = this.state;
    return (
      <Modal
        destroyOnClose
        title="批量关联产品"
        width={820}
        visible={modalVisible}
        onOk={this.okHandle}
        // confirmLoading={confirmLoading}
        onCancel={() => handleModalProject()}
      >
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              <Form layout="inline" onSubmit={this.handleSearch}>
                <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
                  <Col md={8} sm={24}>
                    <FormItem label="方案名称">
                      {getFieldDecorator('schemaName', {
                        rules: [
                          {
                            message: '名称格式不正确',
                          },
                        ],
                      })(<Input placeholder={'请输入渠道名称'} />)}
                    </FormItem>
                  </Col>
                  <Col md={8} sm={24}>
                    <FormItem label="方案状态">
                      {getFieldDecorator('schemaStatus')(
                        <Select placeholder="请选择">
                          {cm_status&&Object.entries(cm_status).map(item => {
                            return (
                              <Option value={item[0]} key={item[0]}>
                                {item[1]}
                              </Option>
                            );
                          })}
                        </Select>
                      )}
                    </FormItem>
                  </Col>  
                  <Col md={8} sm={24}>
                    <span>
                      <Button type="primary" htmlType="submit">
                        查询
                      </Button>
                      <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                        重置
                      </Button>
                    </span>
                  </Col>          
                </Row>
              </Form>
            </div>
          </div>
          <StandardTable
            rowKey={'id'}
            loading={loading}
            columns={columns}
            size={'middle'}
            bordered
            onChange={this.handleStandardTableChange}
            dataSource={list}
            selectedRows={selectedRows}
            onSelectRow={this.handleSelectRows}
            pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
            rowSelection={{
              selectedRowKeys: selectedRows,
              type: 'checkbox',
              onChange: selectedRows => {
                this.setState({
                  selectedRows,
                });
              },
            }}
          />
      </Modal>
    );
  }
}
export default ModalProjectOne;
