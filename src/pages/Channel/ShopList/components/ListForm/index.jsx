import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, Select } from 'antd';
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
      shopList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'shopList/fetch',
      payload: { queryCondition: {}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      shopList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'shopList/fetch',
        payload:{ queryCondition: { ...values}, limit }
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      typeDataTotal:{
        tb_shop_user_status
      },
      allChannel
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="姓名"> 
                    {getFieldDecorator('realName', {
                      rules: [
                        {
                          message: '名称格式不正确',
                        },
                      ],
                    })(<Input placeholder={'请输入姓名'} />)}
                  </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="所属店端">
                  {getFieldDecorator('channelId')(
                      <Select placeholder="请选择所属店端">
                        {allChannel &&
                          Object.entries(allChannel).map(item => (
                            <Option value={item[0]} key={item[0]}>
                              {item[1]}
                            </Option>
                          ))}
                      </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="账号状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择">
                      {tb_shop_user_status&&Object.entries(tb_shop_user_status).map(item => {
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
