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
      productTypeList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'productTypeList/fetch',
      payload: { queryCondition: {}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      productTypeList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err || !Object.values(fieldsValue).some(item => item)) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'productTypeList/fetch',
        payload: { queryCondition: { ...values }, limit },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      allBrandList
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="型号名称">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        // pattern: /^[^\u4e00-\u9fa5]{0,}$/,
                        message: '编号格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入型号名称'} />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="所属品牌"> 
                  {getFieldDecorator('brandId')(
                      <Select placeholder="请选择所属品牌">
                        {allBrandList && allBrandList.map(({ name, id }) => (
                          <Option value={id} key={id}>
                            {name}
                          </Option>
                        ))}
                      </Select>
                  )}
                </FormItem>
              </Col>
             {/*  <Col md={6} sm={24}>
                <FormItem label="申请状态">
                  {getFieldDecorator('status')(
                    <Select placeholder="请选择">
                      <Option value="1">审核通过</Option>
                      <Option value="0">补充回复</Option>
                      <Option value="2">已取消</Option>
                    </Select>
                  )}
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
