import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button,Select  } from 'antd';
import GeographicView from '@/components/Geographic3';
const FormItem = Form.Item;
const { Option } = Select;
import styles from './less/style.less';
@Form.create()
class ListForm extends PureComponent {
  //重置表单
  handleFormReset = () => {
    const {
      form,
      dispatch,
      companyList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    if (!Object.values(formValues).some(item => item)) return;
    dispatch({
      type: 'companyList/fetch',
      payload: { queryCondition: { "name":"","zoneId":""}, limit },
    });
  };
  handleSearch = e => {
    e.preventDefault();
    const {
      dispatch,
      form,
      companyList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      const { zoneId:{province,city} } = values
      delete values.zoneId;
      dispatch({
        type: 'companyList/fetch',
        payload:{ queryCondition: { 
          ...values,
          province: province.key,
          city:city.key,
        }, limit }
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      parentAreaList
    } = this.props;
    
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="集团名称">
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        message: '名称格式不正确',
                      },
                    ],
                  })(<Input placeholder={'请输入集团名称'} />)}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label={'集团地域'} >
                  {getFieldDecorator('zoneId',)(
                    <GeographicView />
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
export default ListForm;