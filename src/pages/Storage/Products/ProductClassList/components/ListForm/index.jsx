import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, Select, Icon } from 'antd';
const FormItem = Form.Item;
import GeographicView2 from '@/components/Geographic2';
const { Option } = Select;
import styles from './less/style.less';
@Form.create()
export default class ListForm extends PureComponent {
  //重置表单
  handleFormReset = () => {
    const {
      form,
      dispatch,
      productClassList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'productClassList/fetch',
      payload: { queryCondition: {}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      productClassList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      // if (err || !Object.values(fieldsValue).some(item => item)) return;
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'productClassList/fetch',
        payload: { queryCondition: { ...values }, limit },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      typeData,
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}> 
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="类别名称">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        pattern: /^[\u4e00-\u9fa5]{0,}$/,
                        message: '名称格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入类别名称'} />)}
                </FormItem>
              </Col>
            
              <Col md={6} sm={24}>
                <FormItem label="申请类别级别">
                  {getFieldDecorator('level')(
                    <Select placeholder="请选择">
                      {Object.values(typeData).map((val, index) => {
                        return (
                          <Option value={index + 1} key={index}>
                            {val}
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
            {/* <Row>
            <Col  md={12} sm={24}>
              <FormItem label={'选择省市区'}>
                {getFieldDecorator('geographic', {
                  rules: [
                    {
                      required: true,
                      message: '请输入您的所在省市',
                    },
                  ],
                })(<GeographicView2 />)}
              </FormItem></Col>
            </Row> */}
          </Form>
        </div>
      </div>
    );
  }
}
