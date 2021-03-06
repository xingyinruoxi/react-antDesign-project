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
      payCarList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return; 
    dispatch({
      type: 'payCarList/fetch',
      payload: { queryCondition: {"bigStatus": "5",}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      payCarList: { pageSize: limit },
    } = this.props;
    // form.validateFields((err, fieldsValue) => {
    //   if (err) return;
    //   const values = {
    //     ...fieldsValue,
    //   };
    //   dispatch({
    //     type: 'payCarList/fetch',
    //     payload: { queryCondition: { ...values,tradeStatus: "2003", bigStatus: "2" }, limit },
    //   });
    // });
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        "bigStatus": "5",
        ...fieldsValue,
      };

    //   // this.setState({
    //   //   formValues: values,
    //   // });

      // dispatch({
      //   type: 'payCarList/fetch',
      //   payload: values,
      // })
      dispatch({
        type: 'payCarList/fetch',
        payload: { queryCondition: { ...values }, limit },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      trade_status_5
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
                <FormItem label="提车状态">
                  {getFieldDecorator('carStatus')(
                    <Select placeholder="请选择">
                      {trade_status_5&&Object.entries(trade_status_5).map(item => {
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
