import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Divider, Row, Col, Select, DatePicker, message } from 'antd';
import router from 'umi/router';
import { digitUppercase } from '@/utils/utils';
import styles from './style.less';
const { Option } = Select;
import moment from 'moment';

@connect(({ typeDataTotal, loading, carTypeDetail }) => ({
  submitting: loading.models.carTypeDetail,
  typeDataTotal,
  carTypeDetail,
}))
@Form.create()
class Step2 extends React.PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
        pathname,
      },
    } = this.props;
    const { setBaseInfo } = this;
    dispatch({
      type: 'carTypeDetail/fetch',
      payload: { data: { id } },
      callBack() {
        if (pathname.includes('add')) return;
        setBaseInfo();
      },
    });
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: { data: { version: 0 } },
    });
    if (!id) return;
    dispatch({
      type: 'carTypeDetail/fetch',
      payload: { data: { id } },
      callBack() {
        setBaseInfo();
      },
    });
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({ type: 'carTypeDetail/remove' });
  }
  setBaseInfo = () => {
    let { carTypeDetail, form } = this.props;
    const { deliveryDate } = carTypeDetail;
    carTypeDetail.deliveryDate = deliveryDate && moment(deliveryDate);
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      if (carTypeDetail[key]) {
        obj[key] = carTypeDetail[key] || null;
      }
      form.setFieldsValue(obj);
    });
  };
  render() {
    const {
      form: { getFieldDecorator, validateFields },
      data,
      dispatch,
      submitting,
      location: {
        query: { id },
        pathname,
        state:{rule, tbCommodityProductId}
      },
      typeDataTotal: {
        cm_type,
        cm_paragraph,
        cm_assurance,
        cm_emissionNum,
        cm_powerType,
        cm_emissionStandard,
        cm_transmission,
        cm_configuration,
        cm_interior,
      },
      carTypeDetail:{tbCommodityInfoDetailId:detailId}
    } = this.props;
    const preUrl = `/store/products/cartypestore/${pathname.includes('edit') ? 'edit' : 'add'}`;
    const onPrev = () => {
      router.push({ pathname: `${preUrl}/info`, query: { id } });
    };
   
    const onValidateForm = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          if (pathname.includes('add')) {
            values.id = id;
          }
          if (pathname.includes('edit')) {
            values.id = id;
          }
          
          values.deliveryDate = moment(values.deliveryDate).format('YYYY-MM-DD HH:mm:ss');
          dispatch({
            type: `${pathname.includes('edit') ? 'carTypeUpdate/submit' : 'carTypeAdd/step2'}`,
            payload: { data: { ...values, rule, tbCommodityProductId } },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: `${preUrl}/img`,
                  state: { rule, tbCommodityProductId },
                  query: { id,detailId },
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
      <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
        <Row gutter={50}>
          <Col lg={8}>
            <Form.Item label={'车辆类型'}>
              {getFieldDecorator('type', {
                rules: [
                  {
                    required: true,
                    message: '请选择车辆类型',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_type &&
                    Object.entries(cm_type).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'年款'}>
              {getFieldDecorator('paragraph', {
                rules: [
                  {
                    required: true,
                    message: '请选择年款',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_paragraph &&
                    Object.entries(cm_paragraph).map(item => (
                      <Option key={item[0]} value={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'车辆指导价'}>
              {getFieldDecorator('priceGuided', {
                rules: [
                  { required: true, message: '请输入车辆指导价' },
                  {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                  },
                ],
              })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'配置'}>
              {getFieldDecorator('configuration', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_configuration &&
                    Object.entries(cm_configuration).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'内饰'}>
              {getFieldDecorator('interior', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_interior &&
                    Object.entries(cm_interior).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'变速器'}>
              {getFieldDecorator('transmission', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_transmission &&
                    Object.entries(cm_transmission).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'颜色'}>
              {getFieldDecorator('color', {
                rules: [
                  {
                    required: true,
                    message: '请输入颜色',
                  },
                ],
              })(<Input placeholder="请输入颜色" />)}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'车型卖点'}>
              {getFieldDecorator('selling', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(<Input placeholder="以“，”号分隔标签" />)}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'动力类型'}>
              {getFieldDecorator('powerType', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_powerType &&
                    Object.entries(cm_powerType).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'排放标准'}>
              {getFieldDecorator('emissionStandard', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_emissionStandard &&
                    Object.entries(cm_emissionStandard).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'排量'}>
              {getFieldDecorator('emissionNum', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_emissionNum &&
                    Object.entries(cm_emissionNum).map(item => (
                      <Option key={item[0]} value={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'出厂时间'}>
              {getFieldDecorator('deliveryDate', {
                rules: [
                  {
                    required: true,
                    message: '请选择出厂时间',
                  },
                ],
              })(
                <DatePicker
                  style={{ width: '100%' }}
                  format="YYYY-MM-DD"
                  placeholder="请选择出厂时间"
                />
              )}
            </Form.Item>
          </Col>

          <Col lg={8}>
            <Form.Item label={'整车质保'}>
              {getFieldDecorator('assurance', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {cm_assurance &&
                    Object.entries(cm_assurance).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <footer className={styles.footer}>
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            下一步
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step2;
