import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Row, Col, DatePicker, message } from 'antd';
import router from 'umi/router';
import moment from 'moment';
import styles from './style.less';
import autoHeight from '@/components/Charts/autoHeight';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

@connect(({ proTypeEnd, loading, typeDataTotal, carTypeDetail }) => ({
  loading: loading.models.carTypeDetail,
  carTypeDetail,
  proTypeEnd,
  typeDataTotal,
}))
@Form.create()
class Step1 extends PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    const { setBaseInfo } = this;

    dispatch({
      type: 'proTypeEnd/fetch',
      payload: { data: {} },
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
    const { carTypeDetail, form } = this.props;
    const { endDate, startDate } = carTypeDetail;
    if(startDate,endDate){
      carTypeDetail.endDate = moment(endDate);
      carTypeDetail.startDate = moment(startDate);
    }
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = carTypeDetail[key] || null;
      form.setFieldsValue(obj);
    });
  };

  render() {
    const {
      form,
      dispatch,
      data,
      location: {
        query: { id },
        pathname,
      },
      proTypeEnd,
      typeDataTotal: { cm_status },
    } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const preUrl = `/store/products/cartypestore/${pathname.includes('edit') ? 'edit' : 'add'}`;
    const onValidateForm = () => {
      validateFields((err, values) => {
        if (!err) {
          const { endDate, startDate } = values;
          values.startDate = moment(startDate).format('YYYY-MM-DD HH:mm');
          values.endDate = moment(endDate).format('YYYY-MM-DD HH:mm');
          const { rule, tbCommodityProductId } = values;
          const editId = id;
          const hasEidt=pathname.includes('edit')||editId;
          if(hasEidt){
            values.id=id;
          }
          dispatch({
            type: `${hasEidt? 'carTypeUpdate/submit' : 'carTypeAdd/baseInfo'}`,
            payload: { data: { ...values } },
            callBack(msg, id) {
              if (msg === 'OK') {
                router.push({
                  pathname: `${preUrl}/confirm`,
                  state: { rule, tbCommodityProductId },
                  query: { id: `${id || editId}` },
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
      <>
        <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
          <Row gutter={50}>
            {pathname.includes('edit') ? (
              <Col lg={8}>
                <Form.Item label="商品编号">
                  {getFieldDecorator('code', {
                    rules: [
                      {
                        required: true,
                        message: '请输入商品编号',
                      },
                    ],
                  })(<Input placeholder="请输入商品编号" disabled />)}
                </Form.Item>
              </Col>
            ) : null}
            <Col lg={{ span: 8 }}>
              <Form.Item label="商品名称">
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入商品名称',
                    },
                  ],
                })(<Input placeholder="请输入商品名称" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label="商品简称规则">
                {getFieldDecorator('rule', {
                  rules: [
                    {
                      required: true,
                      message: '请输入商品简称规则',
                    },
                    /*  {
                      pattern: /^#[\u4e00-\u9fa5]#$/,
                      message: '规则格式不正确',
                    } */
                    {
                      pattern: /^#.*#$/,
                      message: '规则格式不正确',
                    },
                  ],
                })(<Input placeholder="#商品型号# #年款# #配置# #变速器# #颜色#" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label="选择所属品牌型号">
                {getFieldDecorator('tbCommodityProductId', {
                  rules: [
                    {
                      required: true,
                      message: '请选择所属品牌型号',
                    },
                  ],
                })(
                  <Select placeholder="请选择所属品牌型号">
                    {proTypeEnd.map(({ name, id }) => (
                      <Option value={id} key={id}>
                        {name}
                      </Option>
                    ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label="商品状态">
                {getFieldDecorator('status', {
                  rules: [
                    {
                      required: true,
                      message: '请选择商品状态',
                    },
                  ],
                })(
                  <Select placeholder="请选择商品状态">
                    {cm_status &&
                      Object.entries(cm_status).map(item => (
                        <Option value={Number(item[0])} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label="商品上架时间">
                {getFieldDecorator('startDate', {
                  rules: [
                    {
                      required: true,
                      message: '请选择商品上架时间',
                    },
                  ],
                })(
                  <DatePicker
                    showTime
                    style={{ width: '100%' }}
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="请选择商品上架时间"
                  />
                )}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label="商品下架时间">
                {getFieldDecorator('endDate', {
                  rules: [
                    {
                      required: true,
                      message: '请选择商品下架时间',
                    },
                  ],
                })(
                  <DatePicker
                    showTime
                    style={{ width: '100%' }}
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="请选择商品下架时间"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <footer className={styles.footer}>
            <Button type="primary" onClick={onValidateForm}>
              下一步
            </Button>
          </footer>
        </Form>
      </>
    );
  }
}

export default Step1;
