import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, Icon } from 'antd';
const FormItem = Form.Item;
import styles from './less/style.less';
@Form.create()
export default class ListForm extends PureComponent {
  //重置表单
  handleFormReset = () => {
    const {
      form,
      dispatch,
      areaList2: { formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'areaList2/fetch',
      payload: { queryCondition: {...formValues,channelName:''}},
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      areaList2: {formValues },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...formValues,
        ...fieldsValue,
      };
      dispatch({
        type: 'areaList2/fetch',
        payload: { queryCondition: { ...values} },
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
              <Col md={12} sm={24}>
                <FormItem label="渠道名称">
                  {getFieldDecorator('channelName')(<Input placeholder={'请输入渠道名称'} />)}
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
