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
      storeHouse: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'storeHouse/fetch',
      payload: { queryCondition: {}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      storeHouse: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err || !Object.values(fieldsValue).some(item => item)) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'storeHouse/fetch',
        payload: { queryCondition: { ...values }, limit },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      st_storeLevel,
      st_houseStatus
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }} >
              <Col md={6} sm={24}>
                <FormItem label="仓库名称">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        // pattern: /^[^\u4e00-\u9fa5]{0,}$/,
                        message: '编号格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入仓库名称'} />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="仓库地域">
                  {getFieldDecorator('address')(<Input placeholder="请输入仓库地域" />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="仓库状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择">
                    {
                      st_houseStatus&&Object.entries(st_houseStatus).map(item=>(<Option key={item[0]} value={item[0]}>{item[1]}</Option>))
                    }
                    </Select>
                  )}
                </FormItem>
              </Col>
              </Row>
              <Row gutter={{ md: 4, lg: 12, xl: 24 }} >
              <Col md={6} sm={24}>
                <FormItem label="仓库级别">
                  {getFieldDecorator('level')(
                    <Select placeholder="请选择">
                    {
                      st_storeLevel&&Object.entries(st_storeLevel).map(item=>(<Option key={item[0]} value={item[0]}>{item[1]}</Option>))
                    }
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
