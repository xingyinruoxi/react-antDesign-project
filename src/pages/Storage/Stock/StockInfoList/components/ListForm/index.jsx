import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, Select, Icon, Upload, message } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
import { productTypeJson, storeStatusJson } from './../../../StockInfoDetail/status';
import styles from './less/style.less';
const token = localStorage.getItem('token').replace(/\"/g, '');
@Form.create()
export default class ListForm extends PureComponent {
  state = {
    loading1: false,
  };
  setLoading = status => {
    this.setState({
      loading1: status,
    });
  };
  //重置表单
  handleFormReset = () => {
    const {
      form,
      dispatch,
      listData: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'listData/fetch',
      payload: { queryCondition: {}, limit },
    });
  };
  
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      listData: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'listData/fetch',
        payload: { queryCondition: { ...values }, limit },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      dispatch
    } = this.props;
     const { loading1 } = this.state;
    const { setLoading } = this;
    const props = {
      name: 'file',
      action: '/oraflfile/upload/excel',
      headers: {
        service: 'bsw',
        methed: 'excel/upload',
        Authorization: `Bearer ${token}`
      },
      accept: '.xls,.xlsx',
      showUploadList: false,
      onChange({ file }) {
        setLoading(true);
        if (file.status === 'done') {
          const {
            response: { data },
          } = file;
          message.success(`${file.name}文件上传成功`);
          dispatch({
            type: 'listData/fetch',
            payload: { queryCondition: { }, limit:10 },
          });
          setLoading(false);
        } else if (file.status === 'error') {
          message.error(`${file.name} 文件上传失败`);
          setLoading(false);
        }
      },
    };
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={8} sm={24}>
                <FormItem label="车架号">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        // pattern: /^[^\u4e00-\u9fa5]{0,}$/,
                        message: '编号格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入车架号'} />)}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="商品存放仓库">
                  {getFieldDecorator('address')(
                    <Input disabled placeholder="请输入商品存放仓库" />
                  )}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="库存状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择">
                      {Object.entries(storeStatusJson).map(item => (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={8} sm={24}>
                <FormItem label="车辆属性">
                  {getFieldDecorator('productType')(
                    <Select placeholder="请选择">
                      {Object.entries(productTypeJson).map(item => (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <span>
                  <Button type="primary" htmlType="submit">
                    查询
                  </Button>
                  <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                    重置
                  </Button>
                  <Upload {...props} style={{ marginLeft: 8 }}>
                    <Button type="primary" loading={loading1}>
                      导入
                    </Button>
                  </Upload>
                </span>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
