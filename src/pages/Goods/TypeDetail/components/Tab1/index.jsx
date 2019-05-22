import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Radio, Row, Col, message } from 'antd';
import styles from './../css/style.less';
const FormItem = Form.Item;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

@connect(
  ({
    setlistOfFinancingProjects,
    previousStepTypeDataTotal,
    goodTypeStep2,
    typeDataTotal,
    loading,
  }) => ({
    setlistOfFinancingProjects,
    previousStepTypeDataTotal,
    goodTypeStep2,
    typeDataTotal,
  })
)
@Form.create()
class Tab1 extends PureComponent {
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

  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    const { setBaseInfo } = this;
    if (!id) return;

    dispatch({
      type: 'getptprojects/fetch',
      payload: { data: { id } },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
    dispatch({
      type: 'getptinfo/fetch',
      payload: {
        data: {
          id,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
    // 获取首付信息
    dispatch({
      type: 'getptpayments/fetch',
      payload: {
        data: {
          paymentGroup: 'pt_firstpayment',
          ptInfoId: id,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const {paymentMode}=data[0];
          setBaseInfo(data[0]);
          if(paymentMode==='2'){
            setBaseInfo(data[0]);
          }
        }
      },
    });
  }

  render() {
    const {
      location: {
        query: { id },
      },
      form: { getFieldDecorator, validateFields, getFieldValue },
      dispatch,
      typeDataTotal: {
        flcs_templatePeriod,
        flcs_projectNum,
        flcs_firstPaymentType,
        flcs_interestKey,
        flcs_firstPaymentRef,
        flcs_package,
      },
    } = this.props;

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
              </>
            ) : null}
            {getFieldValue('paymentMode') === '2' ? (
              <>
                <Form.Item {...formItemLayout} label="选择对比方式">
                  {getFieldDecorator('paymentRef')(
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
            <Form.Item {...formItemLayout} label="打包/计入融资项目">
              {getFieldDecorator('projectKey')(
                <Select mode="multiple" autoClearSearchValue style={{ width: '100%' }} disabled>
                  {flcs_package &&
                    Object.entries(flcs_package).map(item => (
                      <Option value={item[0]} key={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="保险年限">
              {getFieldDecorator('projectNum')(
                <Select style={{ width: '100%' }} disabled>
                  {flcs_projectNum &&
                    Object.entries(flcs_projectNum).map(item => (
                      <Option value={Number(item[0])} key={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
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
        </Row>
      </Form>
    );
  }
}

export default Tab1;
