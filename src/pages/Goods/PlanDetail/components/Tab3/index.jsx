import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Row, Icon, Col, Select, Radio, message } from 'antd';
import router from 'umi/router';
import styles from './../style.less';
const { Option } = Select;
import { setFormInfo } from '@/utils/utils';
import TableForm from './components/TableForm';
import TableForm1 from './components/TableForm.1';
import MoneyList from './components/MoneyList';
import ServiceList from './components/ServiceList';
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
const formItemLayout1 = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
@connect(({ getptpayments, typeDataTotal,getpsinfo }) => ({
  typeDataTotal,
  getptpayments,
  getpsinfo
}))
@Form.create()
class Step3 extends React.PureComponent {
  state = {
    moneyList: [],
    serviceList: [],
    getptplanperiods: [],
  };
  setData = (key, values) => {
    this.setState({ [key]: values });
  };
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: { version: 1 },
      },
    });
  }
  // 设置尾款
  setLastInfo = () => {
    const {
      dispatch,
      location: {
        query: { id },
      },
      tbProductTemplateInfoId
    } = this.props;
    const { setBaseInfo } = this;
    dispatch({
      type: 'payMentInfo/fetch',
      payload: {
        data: { paymentGroup: 'pt_lastpayment', ptInfoId: tbProductTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          let newData = {
            lastMixAmount: data.mixAmount,
            lastMaxAmount: data.maxAmount,
            lastMaxProportion: data.maxProportion,
            lastMinProportion: data.minProportion,
            lastPaymentMode: data.paymentMode,
            lastPaymentType: data.paymentType,
            lastRefundType: data.refundType,
            lastPaymentRef:data.paymentRef
          };
          setBaseInfo(newData);
          if (data.paymentMode === '2') {
            setTimeout(()=>{setBaseInfo(newData)})
          }
        }
      },
    });
  };
  // 设置定金
  setMoneyInfo = () => {
    const {
      dispatch,
      location: {
        query: { id },
      },
      tbProductTemplateInfoId
    } = this.props;
    const { setBaseInfo } = this;
    dispatch({
      type: 'payMentInfo/fetch',
      payload: {
        data: { paymentGroup: 'pt_depositpayment', ptInfoId: tbProductTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          let newData = {
            earMixAmount: data.mixAmount,
            earMaxAmount: data.maxAmount,
          };
          setBaseInfo(newData);
        }
      },
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
      tbProductTemplateInfoId
    } = this.props;
    const { setBaseInfo, setData, setLastInfo, setMoneyInfo } = this;
    dispatch({
      type: 'payMentInfo/fetch',
      payload: {
        data: { paymentGroup: 'pt_firstpayment', ptInfoId: tbProductTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
          const { paymentMode } = data;
          if (paymentMode === '2') {
            setBaseInfo(data);
          }
        }
      },
    });
    dispatch({
      type: 'getptpayments/fetch',
      payload: {
        data: { paymentGroup: 'pt_lastpayment', ptInfoId: tbProductTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setLastInfo();
          setMoneyInfo();
        }
      },
    });

    dispatch({
      type: 'getptplanperiods/fetch',
      payload: {
        data: { id: tbProductTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('getptplanperiods', data);
        } else {
          message.error(msg);
        }
      },
    });

    //押金列表
    dispatch({
      type: 'getptpayments/fetch',
      payload: {
        data: {psInfoId:id, ptInfoId: tbProductTemplateInfoId, paymentGroup: 'pt_marginpayment' },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const newData =
            data &&
            data.map(item => {
              return { ...item, editable: false };
            });
          setData('moneyList', newData);
        }
      },
    });
    //服务费列表
    dispatch({
      type: 'getptpayments/fetch',
      payload: {
        data: {psInfoId:id, ptInfoId: tbProductTemplateInfoId, paymentGroup: 'pt_servicepayment' },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const newData =
            data &&
            data.map(item => {
              return { ...item, editable: false };
            });
          setData('serviceList', newData);
        }
      },
    });
    dispatch({
      type: 'getptplan/fetch',
      payload: {
        data: { id: tbProductTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
    dispatch({
      type: 'getptinfo/fetch',
      payload: {
        data: { id: tbProductTemplateInfoId },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
    dispatch({
      type: 'getpsinfo/fetch',
      payload: {
        data: { id },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          delete data.planMode;
          setBaseInfo(data);
        }
      },
    });
  }
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

  render() {
    const {
      form: { getFieldDecorator, validateFields, getFieldValue },
      dispatch,
      submitting,
      typeDataTotal: {
        flcs_templatePeriod,
        flcs_projectNum,
        flcs_firstPaymentType,
        flcs_interestKey,
        flcs_firstPaymentRef,
        flcs_lastRefundType,
        flcs_lastPaymentRef
      },
      location: {
        query,
        query: { id },
        pathname,
      },
      tbProductTemplateInfoId,
      getptpayments,
      getpsinfo:{lastPaymentProperty}
    } = this.props;
    const { moneyList, serviceList, getptplanperiods } = this.state;
    
    const propsTableForm = {
      productTemplateInfoId: tbProductTemplateInfoId,
      dispatch,
    };
    const propsTableForm1 = {
      productTemplateInfoId: tbProductTemplateInfoId,
      dispatch,
      typeDataTotal: this.props.typeDataTotal,
    };
    const propsMoneyListData = {
      productTemplateInfoId: tbProductTemplateInfoId,
      dispatch,
      typeDataTotal: this.props.typeDataTotal,
    };

    
    return (
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <Row gutter={50}>
          <div className={styles.title}>首付</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="首付">
              {getFieldDecorator('paymentMode', {
                initialValue: '1',
              })(
                <Radio.Group disabled>
                  <Radio value="1">金额</Radio>
                  <Radio value="2">比例</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            {getFieldValue('paymentMode') === '1' ? (
              <>
                <Form.Item {...formItemLayout} label="最低金额">
                  {getFieldDecorator('mixAmount')(<Input addonAfter="元" disabled />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高金额">
                  {getFieldDecorator('maxAmount')(<Input addonAfter="元" disabled />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="金额">
                  {getFieldDecorator('firstPayment')(<Input addonAfter="元" disabled/>)}
                </Form.Item>
              </>
            ) : null}

            {getFieldValue('paymentMode') === '2' ? (
              <>
                <Form.Item {...formItemLayout} label="选择对比方式">
                  {getFieldDecorator('paymentRef')(
                    <Select style={{ width: '100%' }} disabled>
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
                  {getFieldDecorator('minProportion')(<Input addonAfter="%" disabled />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高比例">
                  {getFieldDecorator('maxProportion')(<Input addonAfter="%" disabled />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="比例">
                  {getFieldDecorator('firstPaymentProperty')(<Input addonAfter="%" disabled />)}
                </Form.Item>
              </>
            ) : null}
            <Form.Item {...formItemLayout} label="收取方式">
              {getFieldDecorator('paymentType')(
                <Select style={{ width: '100%' }} disabled>
                  {flcs_firstPaymentType &&
                    Object.entries(flcs_firstPaymentType).map(item => (
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
          <div className={styles.title}>周期</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="还款周期">
              {getFieldDecorator('templatePeriod')(
                <Select style={{ width: '100%' }} disabled>
                  {flcs_templatePeriod &&
                    Object.entries(flcs_templatePeriod).map(item => (
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
          <div className={styles.title}>期限</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最低期限">
              {getFieldDecorator('minLimit')(<Input addonAfter="次" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最高期限">
              {getFieldDecorator('maxLimit')(<Input addonAfter="次" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="期限">
              {getFieldDecorator('schemaLimit')(<Input addonAfter="次" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item>&nbsp;</Form.Item>
          </Col>
          <div className={styles.title}>利率</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最低利率">
              {getFieldDecorator('minInterest')(<Input addonAfter="%" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最高利率">
              {getFieldDecorator('maxInterest')(<Input addonAfter="%" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="利率">
              {getFieldDecorator('schemaInterest')(<Input addonAfter="%" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item>&nbsp;</Form.Item>
          </Col>
          <div className={styles.title}>融资总额</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最低金额">
              {getFieldDecorator('loanAmountMin')(<Input addonAfter="元" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最高金额">
              {getFieldDecorator('loadAmountMax')(<Input addonAfter="元" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="计息方式">
              {getFieldDecorator('interestKey')(
                <Select style={{ width: '100%' }} disabled>
                  {flcs_interestKey &&
                    Object.entries(flcs_interestKey).map(item => (
                      <Option value={item[0]} key={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="融资总额">
              {getFieldDecorator('loanAmount')(<Input addonAfter="元" disabled />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={50}>
          <div className={styles.title}>起租及还款日规则</div>
          <Col lg={18}>
            <Form.Item {...formItemLayout1} label="规则">
              {getFieldDecorator('planMode')(
                <Radio.Group disabled>
                  <Radio value="1">固定还款日</Radio>
                  <Radio value="2">根据起租日设置还款日</Radio>
                  <Radio value="3">起租日即还款日</Radio>
                </Radio.Group>
              )}
            </Form.Item>
            {getFieldValue('planMode') === '1' ? (
              <Form.Item {...formItemLayout1} label="还款日">
                {getFieldDecorator('planDay')(
                  <Input addonAfter="周期" disabled style={{ width: 300 }} />
                )}
              </Form.Item>
            ) : null}
            {getFieldValue('planMode') === '2' ? (
              <>
                {getFieldDecorator('getptplanperiods', {
                  initialValue: getptplanperiods,
                })(<TableForm {...propsTableForm} />)}
              </>
            ) : null}
          </Col>
        </Row>
        {getptpayments.length > 0 ? (
          <>
            <Row gutter={50} style={{ paddingTop: 30 }}>
              <div className={styles.title}>尾款</div>
              <Col lg={12}>
                <Form.Item {...formItemLayout} label="尾款">
                  {getFieldDecorator('lastPaymentMode', {
                    initialValue: '1',
                  })(
                    <Radio.Group disabled>
                      <Radio value="1">金额</Radio>
                      <Radio value="2">比例</Radio>
                    </Radio.Group>
                  )}
                </Form.Item>
                {getFieldValue('lastPaymentMode') === '1' ? (
                  <>
                    <Form.Item {...formItemLayout} label="最低金额">
                      {getFieldDecorator('lastMixAmount')(<Input disabled addonAfter="元" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="最高金额">
                      {getFieldDecorator('lastMaxAmount')(<Input disabled addonAfter="元" />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="金额">
                      {getFieldDecorator('lastPayment')(<Input addonAfter="元" disabled/>)}
                    </Form.Item>
                  </>
                ) : null}
                {getFieldValue('lastPaymentMode') === '2' ? (
                  <>
                    <Form.Item {...formItemLayout} label="选择对比方式">
                      {getFieldDecorator('lastPaymentRef')(
                        <Select style={{ width: '100%' }} disabled>
                          {flcs_firstPaymentRef &&
                            Object.entries(flcs_firstPaymentRef).map(item => (
                              <Option value={item[0]} key={item[1]}>
                                {item[1]}
                              </Option>
                            ))}
                        </Select>
                      )}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="最低比例">
                      {getFieldDecorator('lastMinProportion')(<Input disabled addonAfter="%" disabled />)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="最高比例">
                      {getFieldDecorator('lastMaxProportion')(<Input disabled addonAfter="%"  disabled/>)}
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="比例">
                      {getFieldDecorator('lastPaymentProperty', {
                        initialValue:lastPaymentProperty,
                      })(<Input addonAfter="%" disabled />)}
                    </Form.Item>
                  </>
                ) : null}
                <Form.Item {...formItemLayout} label="收取方式">
                  {getFieldDecorator('lastPaymentType')(
                    <Select disabled style={{ width: '100%' }}>
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
                  {getFieldDecorator('lastRefundType')(
                    <Select disabled style={{ width: '100%' }}>
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
                  {getFieldDecorator('earMixAmount')(<Input disabled addonAfter="元" />)}
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item {...formItemLayout} label="最高金额">
                  {getFieldDecorator('earMaxAmount')(<Input disabled addonAfter="元" />)}
                </Form.Item>
              </Col>
              <Col lg={12}>
                <Form.Item {...formItemLayout} label="金额">
                  {getFieldDecorator('depositAmount')(<Input disabled addonAfter="元" />)}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={50}>
              {moneyList.length > 0 ? (
                <>
                  <div className={styles.title}>押金列表</div>
                  {getFieldDecorator('marginPayments', {
                    initialValue: moneyList,
                  })(<MoneyList {...propsMoneyListData} />)}
                </>
              ) : null}
              {serviceList.length > 0 ? (
                <>
                  <div className={styles.title} style={{ paddingTop: 40 }}>
                    服务费列表
                  </div>
                  {getFieldDecorator('serivcePayments', {
                    initialValue: serviceList,
                  })(<ServiceList {...propsMoneyListData} />)}
                </>
              ) : null}
            </Row>
          </>
        ) : null}

       
      </Form>
    );
  }
}

export default Step3;
