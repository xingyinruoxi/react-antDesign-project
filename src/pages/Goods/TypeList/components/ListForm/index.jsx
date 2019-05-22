import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, Select, Icon, InputNumber } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
import styles from './less/style.less';
@Form.create()
export default class ListForm extends PureComponent {
  //重置表单
  handleFormReset = () => {
    const { form, dispatch, list, loading, pageNum, pageSize, pages, total } = this.props;
    form.resetFields();
    dispatch({
      type: 'maintenance/fetch',
      payload: { queryCondition: {} },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err || !Object.values(fieldsValue).some(item => item)) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'maintenance/fetch',
        payload: { queryCondition: { ...values } },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      // typeData,
      associateSettings,
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="类型编号">
                  {getFieldDecorator('templateCode', {
                    rules: [
                      {
                        pattern: /^[^\u4e00-\u9fa5]{0,}$/,
                        message: '类型编号格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入编号'} />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="类型名称">
                  {getFieldDecorator('templateName')(<Input placeholder="请输入类型名称" />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="是否关联设置">
                  {getFieldDecorator('templateAssociated')(
                    <Select placeholder="请选择">
                      {Object.values(associateSettings).map((val, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Option value={index + 1} key={index}>
                          {val}
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
                </span>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
