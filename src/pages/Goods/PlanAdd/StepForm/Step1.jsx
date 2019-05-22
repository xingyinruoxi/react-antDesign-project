import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Row, Col, DatePicker, message } from 'antd';
import router from 'umi/router';
import styles from './style.less';
import moment from 'moment';
const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

@connect(({ maintenance, planTypeStep1 }) => ({ maintenance, planTypeStep1 }))
@Form.create()
class Step1 extends PureComponent {
  setBaseInfo = () => {
    let { planTypeStep1, form } = this.props;
    const { startDate, endDate } = planTypeStep1;
    planTypeStep1.startDate = startDate && moment(startDate);
    planTypeStep1.endDate = endDate && moment(endDate);
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      if (planTypeStep1[key]) {
        obj[key] = planTypeStep1[key] || null;
      }
      form.setFieldsValue(obj);
    });
  };
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    //类型维护列表
    dispatch({
      type: 'maintenance/fetch',
      payload: { queryCondition: {}, limit: 100 },
    });

    const { setBaseInfo } = this;
    if (!id) return;
    dispatch({
      type: 'planTypeStep1/fetch',
      payload: { data: { id } },
      callBack(msg) {
        if (msg === 'OK') {
          setBaseInfo();
        }
      },
    });
  }
  render() {
    const {
      form: { getFieldDecorator, validateFields, getFieldValue },
      dispatch,
      maintenance: { list },
      location: {
        query: { id },
        pathname,
      },
    } = this.props;
    const onValidateForm = () => {
      const postUrl = id ? 'updatepsinfo/submit' : 'planAdd/essentialInformation';
      const hasEdit = pathname.includes('edit');
      const nextPage = `/goods/plan/list/${hasEdit ? 'edit' : 'add'}/confirm`;
      validateFields((err, values) => {
        const { schemaCode, schemaDesc } = values;
        if (!schemaDesc) {
          delete values.schemaCode;
        }
        if (!schemaCode) {
          delete values.schemaCode;
        }
        if (!err) {
          const { startDate, endDate } = values;
          values.startDate = startDate.format('YYYY-MM-DD');
          values.endDate = endDate.format('YYYY-MM-DD');
          if (id) {
            values.id = id;
          }
          dispatch({
            type: postUrl,
            payload: {
              data: {
                ...values,
              },
            },
            callBack(msg, data) {
              if (msg === 'OK') {
                const { tbProductTemplateInfoId, id } = data;
                router.push({
                  pathname: nextPage,
                  query: {
                    tbProductTemplateInfoId,
                    id,
                  },
                });
              } else {
                message.error(msg);
              }
            },
          });
        }
      });
    };
    return (
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <Row gutter={30}>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="产品方案编码">
              {getFieldDecorator('schemaCode')(<Input placeholder="请输入产品方案编码" disabled />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="选择所属类型">
              {getFieldDecorator('tbProductTemplateInfoId', {
                rules: [
                  {
                    required: true,
                    message: '选择所属类型',
                  },
                ],
              })(
                <Select placeholder="选择所属类型">
                  {list &&
                    list.map(({ templateName, id }) => (
                      <Option value={id} key={id}>
                        {templateName}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label={'产品上架时间'}>
              {getFieldDecorator('startDate', {
                rules: [
                  {
                    required: true,
                    message: '请选择产品上架时间',
                  },
                ],
              })(
                <DatePicker
                  showTime
                  style={{
                    width: '100%',
                  }}
                  format="YYYY-MM-DD"
                  placeholder="请选择商品上架时间"
                />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="产品方案说明">
              {getFieldDecorator('schemaDesc')(
                <TextArea
                  style={{
                    minHeight: 32,
                  }}
                  placeholder={''}
                  rows={4}
                />
              )}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="产品方案名称">
              {getFieldDecorator('schemaName', {
                rules: [
                  {
                    required: true,
                    message: '请输入产品方案名称',
                  },
                ],
              })(<Input placeholder="请输入产品方案名称" />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="产品方案状态">
              {getFieldDecorator('schemaStatus', {
                rules: [
                  {
                    required: true,
                    message: '请选择付款账户',
                  },
                ],
              })(
                <Select placeholder="请选择产品方案状态">
                  <Option value="1">上架</Option>
                  <Option value="2">待上架</Option>
                  <Option value="3">下架</Option>
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label={'产品下架时间'}>
              {getFieldDecorator('endDate', {
                rules: [
                  {
                    required: true,
                    message: '请选择产品下架时间',
                  },
                ],
              })(
                <DatePicker
                  showTime
                  style={{
                    width: '100%',
                  }}
                  format="YYYY-MM-DD"
                  placeholder="请选择商品上架时间"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
          }}
        >
          <Button type="primary" onClick={onValidateForm}>
            下一步
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step1;
