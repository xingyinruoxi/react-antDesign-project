import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, Select, Icon, InputNumber } from 'antd';
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
      carTypeList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'carTypeList/fetch',
      payload: { queryCondition: {}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      carTypeList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err || !Object.values(fieldsValue).some(item => item)) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'carTypeList/fetch',
        payload: { queryCondition: { ...values }, limit },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      cm_status,
    } = this.props;
   
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="商品简称">
                  {getFieldDecorator('referred', {
                    rules: [
                      {
                        // pattern: /^[^\u4e00-\u9fa5]{0,}$/,
                        message: '编号格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入商品简称'} />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="商品状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择">
                      {Object.entries(cm_status).map(item => {
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
              {/* <Col md={6} sm={24}>
                <FormItem label="录入人">
                  {getFieldDecorator('createBy')(<Input placeholder="请输入录入人" />)}
                </FormItem>
              </Col> */}
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
