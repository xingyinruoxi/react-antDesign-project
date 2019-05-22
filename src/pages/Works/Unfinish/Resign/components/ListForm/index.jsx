import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, Select, Icon, InputNumber } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
import styles from './less/style.less';
@Form.create()
export default class ListForm extends PureComponent {
  /* state = {
    formValues: {},
  }; */
  //重置表单
  handleFormReset = () => {
    const {
      form,
      dispatch,
      ResignList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'ResignList/fetch',
      payload: { queryCondition: {}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      ResignList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      // dispatch({
      //   type: 'ResignList/fetch',
      //   payload: values,
      // })
      dispatch({
        type: 'ResignList/fetch',
        payload: { queryCondition: { ...values }, limit },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator, },
      trade_status_3
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="申请编号">
                  {getFieldDecorator('tradeCode', {
                    rules: [
                      {
                        pattern: /^[^\u4e00-\u9fa5]{0,}$/,
                        message: '编号格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入编号'} />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="购车人">
                  {getFieldDecorator('createBy')(<Input placeholder="请输入姓名" />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="重签状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择">
                      {trade_status_3&&Object.entries(trade_status_3).map(item =><Option value={item[0]} key={item[0]}>{item[1]}</Option>)}
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
