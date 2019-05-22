import React, { PureComponent } from 'react';
import { Row, Col, Form, Input, Button, Select } from 'antd';
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
      areaList: { pageSize: limit, formValues },
    } = this.props;
    form.resetFields();
    dispatch({
      type: 'areaList/fetch',
      payload:{
        data:{}   
      }
    })
  };
  handleSearch = e => { 
    e.preventDefault();
    const {
      dispatch,
      form,
      areaList: { pageSize: limit },
    } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const values = {
        ...fieldsValue,
      };
      dispatch({
        type: 'areaList/fetch',
        payload:{data:{...values}}
      });
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <div className={styles.tableList}>
        <div className={styles.tableListForm}>
          <Form layout="inline" onSubmit={this.handleSearch}>
            <Row gutter={{ md: 4, lg: 12, xl: 24 }}>
              <Col md={6} sm={24}>
                <FormItem label="区域名称">
                  {getFieldDecorator('name')(<Input placeholder={'请输入区域名称'} />)}
                </FormItem>
              </Col>
              <Col md={6} sm={24}>
                <FormItem label="区域级别">
                  {getFieldDecorator('level')(
                    // <Input placeholder={'请选择区域级别'} />
                    <Select placeholder="请选择上级区域">
                      <Option value={1}>一级</Option>
                      <Option value={2}>二级</Option>
                      <Option value={3}>三级</Option>
                      <Option value={4}>四级</Option>
                      <Option value={5}>五级</Option>
                      <Option value={6}>六级</Option>
                      <Option value={7}>七级</Option>
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
