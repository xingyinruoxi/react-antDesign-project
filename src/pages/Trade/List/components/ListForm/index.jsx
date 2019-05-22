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
      TradeManageList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'TradeManageList/fetch',
      payload: { queryCondition: {
        tradeStatus: '2101,2106,2109,2110,2001,2002,2003,2007,2008,2222,2004,2107,2108,2009,2010,2001,2006',
        bigStatus: '2',
      }, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      TradeManageList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      if(!fieldsValue.tradeCode&&!fieldsValue.tradeStatus) return;
      const values = {
          bigStatus: '2',
        ...fieldsValue,
      };
      // dispatch({
      //   type: 'TradeManageList/fetch',
      //   payload: values,
      // })
      dispatch({
        type: 'TradeManageList/fetch',
        payload: {
            "limit": 10,
            "page": 0,
            "queryCondition": {
                ...values
            }
        },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      trade_status_2,
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
                <FormItem label="申请状态">
                  {getFieldDecorator('tradeStatus')(
                    <Select placeholder="请选择">
                      {trade_status_2&&Object.entries(trade_status_2).map(item => {
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
