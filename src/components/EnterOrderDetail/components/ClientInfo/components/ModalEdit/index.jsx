import React, { PureComponent } from 'react';
import moment from 'moment';
import { Modal, Form, Row, message, Col, Input, Select, Button, Radio, DatePicker,InputNumber } from 'antd';
const FormItem = Form.Item;
const { Option } = Select;
const RadioGroup = Radio.Group;

@Form.create()
class ModalEdit extends PureComponent {
  formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  formLayout1 = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form, handleModalVisible, customerId: tbCustomerInfoId } = this.props;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const { workHireDate } = fieldsValue;
      fieldsValue.workHireDate = workHireDate && moment(workHireDate).format('YYYY-MM-DD');
      dispatch({
        type: 'changeCustomer/submit',
        payload: { data: { ...fieldsValue, tbCustomerInfoId } },
        callBack(msg) {
          if (msg === 'OK') {
            handleModalVisible();
            dispatch({
              type: 'customerInfo/fetch',
              payload: {
                data: tbCustomerInfoId,
              },
            });
            message.success('保存成功');
          } else {
            message.success(msg);
          }
        },
      });
    });
  };
  okHandle = e => {
    this.handleSubmit(e);
  };
  componentDidUpdate() {}
  setBaseInfo = () => {
    let { customerInfo, form } = this.props;
    const { workHireDate } = customerInfo;
    customerInfo.workHireDate = workHireDate && moment(workHireDate);
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      if (customerInfo[key]) {
        obj[key] = customerInfo[key] || null;
      }
      form.setFieldsValue(obj);
    });
  };
  render() {
    const {
      form: { getFieldDecorator },
      modalVisible,
      handleModalVisible,
      customer_workType,
      customer_position,
      customer_sex,
      customer_married,
      customer_industryType,
      customerInfo,
    } = this.props;
    return (
      <Modal
        title={'编辑基本信息'}
        width={640}
        destroyOnClose
        visible={modalVisible}
        okText="保存"
        onOk={e => this.okHandle(e)}
        onCancel={() => handleModalVisible()}
      >
        <Form onSubmit={this.handleSubmit} hideRequiredMark>
          <Row gutter={0}>
            <Col md={10} sm={24}>
              <FormItem key="maritalStatus" {...this.formLayout} label="婚姻状况">
                {getFieldDecorator('maritalStatus', {
                  initialValue: customerInfo.marriedStatus,
                  rules: [{ required: true, message: '请选择婚姻状况' }],
                })(
                  <Select placeholder={'请选择婚姻状况'}>
                    {customer_married &&
                      Object.entries(customer_married).map(item => (
                        <Option value={Number(item[0])} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </FormItem>
              <FormItem key="workType" {...this.formLayout} label="单位类型">
                {getFieldDecorator('workType', {
                  initialValue: customerInfo.workType,
                  rules: [{ required: true, message: '请选择单位类型' }],
                })(
                  <Select placeholder={'请选择单位类型'}>
                    {customer_workType &&
                      Object.entries(customer_workType).map(item => (
                        <Option value={Number(item[0])} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </FormItem>
              <FormItem key="workPhone" {...this.formLayout} label="单位电话">
                {getFieldDecorator('workPhone', {
                  initialValue: customerInfo.workPhone,
                  rules: [{ required: true,pattern:/^[0-9]*$/, message: '请输入电话' }],
                })(<InputNumber placeholder="请输入正确的单位电话" maxLength={'20'} />)}
              </FormItem>
              <FormItem key="hireDate" {...this.formLayout} label="入职时间">
                {getFieldDecorator('hireDate', {
                  initialValue: moment(customerInfo.workHireDate) || null,
                  rules: [{ required: true, message: '请选择入职时间' }],
                })(<DatePicker format="YYYY-MM-DD" placeholder="请输入入职日期" />)}
              </FormItem>
            </Col>
            <Col md={14} sm={24}>
              <FormItem key="workName" {...this.formLayout} label="单位名称">
                {getFieldDecorator('workName', {
                  initialValue: customerInfo.workName,
                  rules: [{ required: true, message: '请输入单位名称' }],
                })(<Input placeholder="请输入单位名称"  />)}
              </FormItem>
              <FormItem key="workAddress" {...this.formLayout} label="单位地址">
                {getFieldDecorator('workAddress', {
                  initialValue: customerInfo.workAddress,
                  rules: [{ required: true, message: '请输入单位地址' }],
                })(<Input placeholder="请输入单位地址 " />)}
              </FormItem>
              <FormItem key="industryType" {...this.formLayout} label="所属行业">
                {getFieldDecorator('industryType', {
                  initialValue: customerInfo.workIndustryType,

                  rules: [{ required: true, message: '请选择所属行业' }],
                })(
                  <Select placeholder={'请选择所属行业'}>
                    {customer_industryType &&
                      Object.entries(customer_industryType).map(item => (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </FormItem>
              <FormItem key="position" {...this.formLayout} label="职务">
                {getFieldDecorator('position', {
                  initialValue: customerInfo.workPosition,
                  rules: [{ required: true, message: '请选择职务' }],
                })(
                  <Select placeholder={'请选择职务'}>
                    {customer_position &&
                      Object.entries(customer_position).map(item => (
                        <Option value={Number(item[0])} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
export default ModalEdit;
