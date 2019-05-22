import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Row, Col, Select, Radio, message, InputNumber } from 'antd';
import router from 'umi/router';
import MoneyList from './components/MoneyList';
import ServiceList from './components/ServiceList';
import TableForm from './components/TableForm';
import styles from './style.less';
const { Option } = Select;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

@connect(({ loading, typeDataTotal }) => ({
  submitting: loading.effects['typeAdd/addSupplementaryOtherRuless'],
  typeDataTotal,
}))
@Form.create()
class Step4 extends React.PureComponent {
  state = {
    moneyList: [],
    serviceList: [],
  };
  setBaseInfo = data => {
    let { form } = this.props;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      if (data[key]) {
        obj[key] = data[key] || null;
      }
      form.setFieldsValue(obj);
    });
  };
  setData = (key, values) => {
    this.setState({ [key]: values });
  };
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
  }
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { productTemplateInfoId },
      },
      typeDataTotal,
    } = this.props;

    if (!productTemplateInfoId) return;
    const { setBaseInfo, setData } = this;
    dispatch({
      type: 'payMentInfo/fetch',
      payload: {
        data: { paymentGroup: 'pt_lastpayment', ptInfoId: productTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          if (!typeDataTotal.ch_attribute) return;
          setBaseInfo(data);
          if (data.paymentMode === '2') {
            setBaseInfo(data);
          }
        }
      },
    });
    // 渲染定金
    dispatch({
      type: 'payMentInfo/fetch',
      payload: {
        data: { paymentGroup: 'pt_depositpayment', ptInfoId: productTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const { maxAmount: earMaxAmount, mixAmount: earMixAmount } = data;
          const newData = {
            earMaxAmount,
            earMixAmount,
          };
          setBaseInfo(newData);
        }
      },
    });
    dispatch({
      type: 'getptpayments/fetch',
      payload: {
        data: {
          paymentGroup: 'pt_marginpayment',
          ptInfoId: productTemplateInfoId,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          /* const newData=data.map(item=>{
            const {maxProportion,minProportion}=item;
            if(minProportion){
              item.minProportion=minProportion/100;
              item.maxProportion=maxProportion/100;
            }
            return {
              ...item
            }
          }) */
          setData('moneyList', data);
        }
      },
    });
    dispatch({
      type: 'getptpayments/fetch',
      payload: {
        data: {
          paymentGroup: 'pt_servicepayment',
          ptInfoId: productTemplateInfoId,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          /* const newData=data.map(item=>{
            const {maxProportion,minProportion}=item;
            if(minProportion){
              item.minProportion=minProportion/100;
              item.maxProportion=maxProportion/100;
            }
            return {
              ...item
            }
          }) */
          setData('serviceList', data);
        }
      },
    });
  }

  render() {
    const {
      form: { getFieldDecorator, validateFields, getFieldValue },
      dispatch,
      submitting,
      location: {
        query: { productTemplateInfoId, id },
        pathname,
      },
      typeDataTotal: {
        flcs_firstPaymentType,
        flcs_firstPaymentRef,
        flcs_lastPaymentRef,
        flcs_lastRefundType,
      },
    } = this.props;
    const { serviceList, moneyList } = this.state;
    const propsMoneyListData = {
      dispatch,
      value: moneyList,
      typeDataTotal: this.props.typeDataTotal,
      productTemplateInfoId,
    };
    const propsSerListData = {
      dispatch,
      value: serviceList,
      typeDataTotal: this.props.typeDataTotal,
      productTemplateInfoId,
    };
    const hasEdit = pathname.includes('edit') ? 'edit' : 'add';
    const prevPage = `/goods/type/list/${hasEdit}/step2`;
    const nextPage = `/goods/type/list/${hasEdit}/result`;
    const onPrev = () => {
      router.push({ pathname: prevPage, query: { productTemplateInfoId, id } });
    };
    const onValidateForm = e => {
      e.preventDefault();
      validateFields((err, values) => {
        delete values.paymentGroup;
        delete values.paymentKey;
        if (!err) {
          values.paymentGroup = 'pt_lastpayment';
          values.paymentKey = 'pt_lastpayment';
          values.paymentKey1 = 'pt_depositpayment';
          values.paymentGroup1 = 'pt_depositpayment';
          // const { minProportion, maxProportion } = values;
          // if (maxProportion) {
          //   values.minProportion = minProportion / 100;
          //   values.maxProportion = maxProportion / 100;
          // }
          dispatch({
            type: 'typeAdd/addSupplementaryOtherRuless',
            payload: {
              data: {
                ...values,
                productTemplateInfoId,
              },
            },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: nextPage,
                  query: {
                    productTemplateInfoId,
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
        <Row gutter={50}>
          <div className={styles.title}>尾款</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="尾款">
              {getFieldDecorator('paymentMode', {
                initialValue: '1',
              })(
                <Radio.Group>
                  <Radio value="1">金额</Radio>
                  <Radio value="2">比例</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            {getFieldValue('paymentMode') === '1' ? (
              <>
                <Form.Item {...formItemLayout} label="最低金额">
                  {getFieldDecorator('mixAmount', {
                    rules: [
                      {
                        message: '请输入最低金额',
                        required: true,
                      },
                      {
                        pattern: /^(\d+)((?:\.\d+)?)$/,
                        message: '请输入合法金额数字',
                      },
                    ],
                  })(
                    <InputNumber
                      placeholder="请输入最低金额"
                      className={styles.inputNum}
                    />
                  )}
                  <span className="ant-form-text">元</span>
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高金额">
                  {getFieldDecorator('maxAmount', {
                    rules: [
                      {
                        message: '请输入最高金额',
                        required: true,
                      },
                      {
                        pattern: /^(\d+)((?:\.\d+)?)$/,
                        message: '请输入合法金额数字',
                      },
                    ],
                  })(
                    <InputNumber
                      placeholder="请输入最高金额"
                      min={getFieldValue('mixAmount')}
                      className={styles.inputNum}
                    />
                  )}
                  <span className="ant-form-text">元</span>
                </Form.Item>
              </>
            ) : null}
            {getFieldValue('paymentMode') === '2' ? (
              <>
                <Form.Item {...formItemLayout} label="选择对比方式">
                  {getFieldDecorator('paymentRef', {
                    rules: [
                      {
                        message: '选择对比方式',
                        required: true,
                      },
                    ],
                  })(
                    <Select placeholder="不限" style={{ width: '100%' }}>
                      {flcs_lastPaymentRef &&
                        Object.entries(flcs_lastPaymentRef).map(item => (
                          <Option value={item[0]} key={item[1]}>
                            {item[1]}
                          </Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
                <Form.Item {...formItemLayout} label="最低比例">
                  {getFieldDecorator('minProportion', {
                    rules: [
                      {
                        message: '请输入最低比例',
                        required: true,
                      },
                      {
                        pattern: /^[0-9]+(.[0-9]{1,3})?$/,
                        message: '请输入正确格式',
                      },
                    ],
                  })(
                    <InputNumber
                      placeholder="请输入最低比例"
                      max={100}
                      className={styles.inputNum}
                    />
                  )}
                  <span className="ant-form-text">%</span>
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高比例">
                  {getFieldDecorator('maxProportion', {
                    rules: [
                      {
                        message: '请输入最高比例',
                        required: true,
                      },
                      {
                        pattern: /^[0-9]+(.[0-9]{1,3})?$/,
                        message: '请输入正确格式',
                      },
                    ],
                  })(
                    <InputNumber
                      placeholder="请输入最高比例"
                      min={getFieldValue('minProportion')}
                      max={100}
                      className={styles.inputNum}
                    />
                  )}
                  <span className="ant-form-text">%</span>
                </Form.Item>
              </>
            ) : null}
            <Form.Item {...formItemLayout} label="收取方式">
              {getFieldDecorator('paymentType', {
                rules: [
                  {
                    message: '请选择收取方式',
                    required: true,
                  },
                ],
              })(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {flcs_firstPaymentType &&
                    Object.entries(flcs_firstPaymentType).map(item => (
                      <Option value={item[0]} key={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...formItemLayout} label="处理方式">
              {getFieldDecorator('refundType', {
                rules: [{ required: true, message: '请选择处理方式' }],
              })(
                <Select placeholder="请选择" style={{ width: '100%' }}>
                  {flcs_lastRefundType &&
                    Object.entries(flcs_lastRefundType).map(item => (
                      <Option value={item[0]} key={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={50}>
          <div className={styles.title}>定金</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最低金额">
              {getFieldDecorator('earMixAmount', {
                rules: [
                  {
                    message: '请输入最低金额',
                    required: true,
                  },
                  {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入最低金额"
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">元</span>
            </Form.Item>
            <Form.Item {...formItemLayout} label="最高金额">
              {getFieldDecorator('earMaxAmount', {
                rules: [
                  {
                    message: '请输入最高金额',
                    required: true,
                  },
                  {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入最高金额"
                  min={getFieldValue('earMixAmount')}
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">元</span>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={50}>
          <div className={styles.title}>押金列表</div>
          <MoneyList {...propsMoneyListData} />
          <div className={styles.title} style={{ paddingTop: 20 }}>
            服务费列表
          </div>
          <ServiceList {...propsSerListData} />
        </Row>
        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
          }}
        >
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            提交
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step4;
