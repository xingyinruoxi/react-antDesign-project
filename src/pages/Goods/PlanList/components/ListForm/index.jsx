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
    const { form, dispatch, list, current: pageNum, pageSize, pages, total } = this.props;
    form.resetFields();
    // if (!Object.values(list).some(item => item)) return;
    dispatch({
      type: 'goodPlanList/fetch',
      payload: { queryCondition: {} },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const { dispatch, form, list, current: pageNum, pageSize, pages, total } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err || !Object.values(fieldsValue).some(item => item)) return;
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'goodPlanList/fetch',
        payload: { queryCondition: { ...values } },
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      maintenance: { list },
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="方案名称">
                  {getFieldDecorator('schemaName')(<Input placeholder="请输入方案名称" />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="所属类型">
                  {getFieldDecorator('tbProductTemplateInfoId')(
                    <Select placeholder="请选择所属类型">
                      {list &&
                        list.map(({ templateName, id }) => (
                          <Option value={id} key={id}>
                            {templateName}
                          </Option>
                        ))}
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="是否关联渠道">
                  {getFieldDecorator('channelAssociated')(
                    <Select placeholder="请选择">
                      <Option value="1">未设置</Option>
                      <Option value="2">已设置</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="方案状态">
                  {getFieldDecorator('schemaStatus')(
                    <Select placeholder="请选择">
                      <Option value="1">上架</Option>
                      <Option value="2">待上架</Option>
                      <Option value="3">下架</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col md={24} sm={24} style={{ marginBottom: 30 }}>
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
