import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Button, Select, Radio, Row, Col, message, InputNumber } from 'antd';
import router from 'umi/router';
import styles from './style.less';
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

@connect(({ goodTypeStep2, typeDataTotal, loading }) => ({
  goodTypeStep2,
  typeDataTotal,
  submitting: loading.effects['typeAdd/addProductTypeRule'],
}))
@Form.create()
class Step1 extends PureComponent {
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

  onDeselect = key => {
    const {
      dispatch,
      location: {
        query: { productTemplateInfoId },
      },
    } = this.props;
    dispatch({
      type: 'goodTypeStep2/packageDelete',
      payload: {
        data: { productTemplateInfoId, projectKey: key },
      },
    });
  };
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { productTemplateInfoId },
      },
    } = this.props;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: { version: 1 },
      },
    });
    const { setBaseInfo } = this;
    if (!productTemplateInfoId) return;
    // 上一步值
    dispatch({
      type: 'getptinfo/fetch',
      payload: { data: { id: productTemplateInfoId } },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
    dispatch({
      type: 'getptprojects/fetch',
      payload: {
        data: {
          id: productTemplateInfoId,
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
          ptInfoId: productTemplateInfoId,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const { paymentMode } = data[0];
          setBaseInfo(data[0]);
          if (paymentMode === '2') {
            setBaseInfo(data[0]);
          }
        }
      },
    });
  }

  render() {
    const {
      submitting,
      location: {
        query: { productTemplateInfoId, id },
        pathname,
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
    const hasEdit = pathname.includes('edit') ? 'edit' : 'add';
    const prevPage = `/goods/type/list/${hasEdit}/info`;
    const nextPage = `/goods/type/list/${hasEdit}/step2`;

    const onPrev = () => {
      router.push({ pathname: prevPage, query: { productTemplateInfoId } });
    };

    const onValidateForm = () => {
      validateFields((err, values) => {
        if (!err) {
          if (!pathname.includes('add')) {
            values.id = id;
          }
          dispatch({
            type: `typeAdd/addProductTypeRule`,
            payload: {
              data: {
                ...values,
                productTemplateInfoId,
                paymentGroup: 'pt_firstpayment',
                paymentKey: 'pt_firstpayment',
              },
            },
            callBack(msg, id) {
              if (msg === 'OK') {
                router.push({
                  pathname: nextPage,
                  query: { productTemplateInfoId, id },
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
          <div className={styles.title}>首付</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="首付">
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
                  })(<InputNumber placeholder="请输入最低金额" className={styles.inputNum} />)}
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
                      // min={getFieldValue('mixAmount')}
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
                  {getFieldDecorator('minProportion', {
                    rules: [
                      {
                        message: '请输入最低比例',
                        required: true,
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
                    ],
                  })(
                    <InputNumber
                      placeholder="请输入最高比例"
                      // min={getFieldValue('minProportion')}
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
          </Col>
        </Row>
        <Row gutter={50}>
          <div className={styles.title}>周期</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="还款周期">
              {getFieldDecorator('templatePeriod', {
                rules: [{ required: true, message: '请选择还款周期' }],
              })(
                <Select placeholder="不限" style={{ width: '100%' }}>
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
              {getFieldDecorator('minLimit', {
                rules: [
                  {
                    message: '请输入最低期限',
                    required: true,
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入最低期限"
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">次</span>
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最高期限">
              {getFieldDecorator('maxLimit', {
                rules: [
                  {
                    message: '请输入最高期限',
                    required: true,
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入最高期限"
                  // min={getFieldValue('minLimit')}
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">次</span>
            </Form.Item>
          </Col>
          <div className={styles.title}>利率</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最低利率">
              {getFieldDecorator('minInterest', {
                rules: [
                  {
                    message: '请输入最低利率',
                    required: true,
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入最低利率"
                  max={100}
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">%</span>
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最高利率">
              {getFieldDecorator('maxInterest', {
                rules: [
                  {
                    message: '请输入最高利率',
                    required: true,
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入最高利率"
                  // min={getFieldValue('minInterest')}
                  max={100}
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">%</span>
            </Form.Item>
          </Col>
          <div className={styles.title}>融资总额</div>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最低金额">
              {getFieldDecorator('loanAmountMin', {
                rules: [
                  {
                    message: '请输入融资最低金额',
                    required: true,
                  },
                  {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入融资最低金额"
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">元</span>
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="最高金额">
              {getFieldDecorator('loadAmountMax', {
                rules: [
                  {
                    message: '请输入融资最高金额',
                    required: true,
                  },
                  {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                  },
                ],
              })(
                <InputNumber
                  placeholder="请输入融资最高金额"
                  // min={getFieldValue('loanAmountMin')}
                  className={styles.inputNum}
                />
              )}
              <span className="ant-form-text">元</span>
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="打包/计入融资项目">
              {getFieldDecorator('projectKey', {
                rules: [
                  {
                    message: '请输入打包/计入融资项目',
                    required: true,
                  },
                ],
              })(
                <Select
                  mode="multiple"
                  autoClearSearchValue
                  style={{ width: '100%' }}
                  onDeselect={this.onDeselect}
                  placeholder="选择融资项目"
                >
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
              {getFieldDecorator('projectNum', {
                rules: [{ required: true, message: '请输入保险年限' }],
              })(
                <Select placeholder="不限" style={{ width: '100%' }}>
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
              {getFieldDecorator('interestKey', {
                rules: [{ required: true, message: '请输入计息方式' }],
              })(
                <Select placeholder="不限" style={{ width: '100%' }}>
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
            下一步
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step1;
