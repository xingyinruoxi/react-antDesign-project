import React from 'react';
import { Form, Input, Button, Row, Col, Select, Radio, message } from 'antd';
import MoneyList from './../components/MoneyList';
import ServiceList from './../components/ServiceList';
import TableForm from './../components/TableForm';
import styles from './../css/style.less';
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
@Form.create()
class Tab3 extends React.PureComponent {
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

  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
      typeDataTotal,
    } = this.props;

    if (!id) return;
    const { setBaseInfo, setData } = this;
    dispatch({
      type: 'payMentInfo/fetch',
      payload: {
        data: { paymentGroup: 'pt_lastpayment', ptInfoId: id },
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
        data: { paymentGroup: 'pt_depositpayment', ptInfoId: id },
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
          ptInfoId: id,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('moneyList', data);
        }
      },
    });
    dispatch({
      type: 'getptpayments/fetch',
      payload: {
        data: {
          paymentGroup: 'pt_servicepayment',
          ptInfoId: id,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
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
        query: { id },
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
    };
    const propsSerListData = {
      dispatch,
      value: serviceList,
      typeDataTotal: this.props.typeDataTotal,
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
              </>
            ) : null}
            {getFieldValue('paymentMode') === '2' ? (
              <>
                <Form.Item {...formItemLayout} label="选择对比方式">
                  {getFieldDecorator('paymentRef')(
                    <Select placeholder="不限" style={{ width: '100%' }} disabled>
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
                  {getFieldDecorator('minProportion')(<Input addonAfter="%" disabled />)}
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高比例">
                  {getFieldDecorator('maxProportion')(<Input addonAfter="%" disabled />)}
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
            <Form.Item {...formItemLayout} label="处理方式">
              {getFieldDecorator('refundType')(
                <Select style={{ width: '100%' }} disabled>
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
              {getFieldDecorator('earMixAmount')(<Input addonAfter="元" disabled />)}
            </Form.Item>
            <Form.Item {...formItemLayout} label="最高金额">
              {getFieldDecorator('earMaxAmount')(<Input addonAfter="元" disabled />)}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={50}>
          <div className={styles.title}>押金列表</div>
          <MoneyList {...propsMoneyListData} />
          <div className={styles.title} style={{paddingTop:30}}>服务费列表</div>
          <ServiceList {...propsSerListData} />
        </Row>
      </Form>
    );
  }
}

export default Tab3;
