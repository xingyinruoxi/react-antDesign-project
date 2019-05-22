import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, Select, Icon } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
import styles from './less/style.less';
@Form.create()
export default class ListForm extends PureComponent {
  //重置表单
  handleFormReset = () => {
    const {
      form,
      dispatch,
      channelList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'channelList/fetch',
      payload:{ 
        queryCondition: {
          
        },
      }
    });
  };
  handleSearch = e => { 
    e.preventDefault();
    const {
      dispatch,
      form,
      channelList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'channelList/fetch',
        payload:{ queryCondition: { ...values}, limit }
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      typeDataTotal:{
        ch_status,
        ch_cooperation,
        ch_setting,
      }
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="渠道名称">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        message: '名称格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入渠道名称'} />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="渠道状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择">
                      {ch_status&&Object.entries(ch_status).map(item => {
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
              <Col md={6} sm={24}>
                <FormItem label="合作方式">
                  {getFieldDecorator('cooperation')(
                    <Select placeholder="请选择">
                      {ch_cooperation&&Object.entries(ch_cooperation).map(item => {
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
			        <Col md={6} sm={24}>
                <FormItem label="是否设置管理员">
                  {getFieldDecorator('isAdmin')(
                    <Select placeholder="请选择">
                      {ch_setting&&Object.entries(ch_setting).map(item => {
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
			  
            </Row>
			      <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
			        {/* <Col md={6} sm={24}>
                <FormItem label="是否设置关键岗位">
                  {getFieldDecorator('isPost')(
                    <Select placeholder="请选择">
                        {ch_setting&&Object.entries(ch_setting).map(item => {
                          return (
                            <Option value={item[0]} key={item[0]}>
                              {item[1]}
                            </Option>
                          );
                        })}
                    </Select>
                  )}
                </FormItem>
              </Col> */}
			        {/* <Col md={6} sm={24}>
                <FormItem label="是否关联商品">
                  {getFieldDecorator('operating')(
                    <Select placeholder="请选择">
                      {ch_setting&&Object.entries(ch_setting).map(item => {
                        return (
                          <Option value={item[0]} key={item[0]}>
                            {item[1]}
                          </Option>
                        );
                      })}
                    </Select>
                  )}
                </FormItem>
              </Col> */}
			        <Col md={6} sm={24}>
                <FormItem label="是否关联产品">
                  {getFieldDecorator('isProduct')(
                    <Select placeholder="请选择">
                      {ch_setting&&Object.entries(ch_setting).map(item => {
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
              <Col md={6} sm={24}>
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
    );
  }
}
