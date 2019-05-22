import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Row, Col, Select, DatePicker, Radio, message } from 'antd';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import styles from './style.less';
import moment from 'moment';
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
@connect(
  ({ loading, channelAdd, typeDataTotal, channelDetail, channelUpdatetwo, channelQueryStep2 }) => ({
    submitting: loading.effects['channelUpdatetwo/submit'] || loading.effects['channelAdd/step2'],
    channelAdd,
    typeDataTotal,
    channelDetail,
    channelUpdatetwo,
    channelQueryStep2,
  })
)
@Form.create()
class Step2 extends React.PureComponent {
  state = {
    channelGroupList: [],
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentDidMount() {
    const {
      dispatch,
      typeDataTotal,
      location: {
        query: { id },
        pathname,
      },
    } = this.props;
    const hasEdit = pathname.includes('edit');
    const { setBaseInfo, setData } = this;
    if (!id) return;
    dispatch({
      type: 'channelQueryStep2/fetch',
      payload: { data: id },
      callBack() {
        // if (pathname.includes('add')) return;
        setBaseInfo();
      },
    });
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
    dispatch({
      type: 'channelGroupList/fetch',
      payload: {
        data: '',
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('channelGroupList', data);
        }
      },
    });
    if (!hasEdit) return;
    dispatch({
      type: 'channelQueryStep2/fetch',
      payload: {
        data: id,
      },
      callBack() {
        setBaseInfo();
      },
    });
  }
  setBaseInfo = () => {
    const { channelQueryStep2, form } = this.props;
    const { signedEndtime, signedStarttime } = channelQueryStep2;
    channelQueryStep2.signedEndtime = moment(signedEndtime);
    channelQueryStep2.signedStarttime = moment(signedStarttime);
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = channelQueryStep2[key] || null;
      form.setFieldsValue(obj);
    });
  };
  render() {
    const {
      form,
      data,
      dispatch,
      submitting,
      typeDataTotal: { ch_attribute, ch_status, ch_operating, ch_bank },
      location: {
        query: { id },
        pathname,
      },
    } = this.props;
    const { channelGroupList } = this.state;
    const { getFieldDecorator, validateFields, getFieldValue } = form;
    const hasEdit = pathname.includes('edit');
    const nextUrl = `/channel/channel/list/${hasEdit ? 'edit' : 'add'}`;
    const onPrev = () => {
      router.push({ pathname: `${nextUrl}/info`, query: { id } });
    };
    const onValidateForm = () => {
      validateFields((err, values) => {
        if (!err) {
          if (hasEdit) {
            values.id = id;
          }
          dispatch({
            type: `${pathname.includes('edit') ? 'channelUpdatetwo/submit' : 'channelAdd/step2'}`,
            payload: {
              data: {
                ...values,
                optionUser: '',
                id: id,
              },
            },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: `${nextUrl}/upload`,
                  query: { id },
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
          <Col lg={12}>
            <Form.Item label={'渠道属性'}>
              {getFieldDecorator('attribute', {
                rules: [
                  {
                    required: true,
                    message: '请选择渠道属性',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {ch_attribute &&
                    Object.entries(ch_attribute).map(item => {
                      return (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      );
                    })}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item label={'选择所属集团'}>
              {getFieldDecorator('tbChannelGroupId', {
                rules: [
                  {
                    required: getFieldValue('attribute') == '0' ? true : false,
                    message: '请选择所属集团',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {channelGroupList &&
                    channelGroupList.map(({ groupName, id }) => (
                      <Option value={id} key={id}>
                        {groupName}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={24}>
            <FormItem {...formItemLayout} label={'合作方式'}>
              <div>
                {getFieldDecorator('cooperation', {
                  initialValue: '0',
                })(
                  <Radio.Group>
                    <Radio value="0">自营</Radio>
                    <Radio value="1">加盟</Radio>
                    <Radio value="2">SP店</Radio>
                    <Radio value="3">入驻</Radio>
                  </Radio.Group>
                )}
                <FormItem style={{ marginTop: 20 }}>
                  {getFieldValue('cooperation') == '1' ? (
                    <Row gutter={50}>
                      <Col lg={12}>
                        <Form.Item label={'合同开始时间'}>
                          {getFieldDecorator('signedStarttime', {
                            rules: [
                              {
                                required: true,
                                message: '请选择合同开始时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择合同开始时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'合同结束时间'}>
                          {getFieldDecorator('signedEndtime', {
                            rules: [
                              {
                                required: true,
                                message: '请选择合同结束时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择合同结束时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'加盟保证金'}>
                          {getFieldDecorator('signedAmount', {
                            rules: [
                              { required: true, message: '请输入加盟保证金' },
                              {
                                pattern: /^(\d+)((?:\.\d+)?)$/,
                                message: '请输入合法金额数字',
                              },
                            ],
                          })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                  ) : null}
                  {getFieldValue('cooperation') == '2' ? (
                    <Row gutter={50}>
                      <Col lg={12}>
                        <Form.Item label={'合作开始时间'}>
                          {getFieldDecorator('signedStarttime', {
                            rules: [
                              {
                                required: true,
                                message: '请选择合同开始时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择合作开始时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'合作结束时间'}>
                          {getFieldDecorator('signedEndtime', {
                            rules: [
                              {
                                required: true,
                                message: '请选择合同结束时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择合作结束时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'保证金'}>
                          {getFieldDecorator('signedAmount', {
                            rules: [
                              {
                                pattern: /^(\d+)((?:\.\d+)?)$/,
                                message: '请输入合法金额数字',
                              },
                            ],
                          })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                  ) : null}
                  {getFieldValue('cooperation') == '3' ? (
                    <Row gutter={50}>
                      <Col lg={12}>
                        <Form.Item label={'合作开始时间'}>
                          {getFieldDecorator('signedStarttime', {
                            rules: [
                              {
                                required: true,
                                message: '请选择合同开始时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择合作开始时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'合作结束时间'}>
                          {getFieldDecorator('signedEndtime', {
                            rules: [
                              {
                                required: true,
                                message: '请选择合同结束时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择合作结束时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'保证金'}>
                          {getFieldDecorator('signedAmount', {
                            rules: [
                              {
                                pattern: /^(\d+)((?:\.\d+)?)$/,
                                message: '请输入合法金额数字',
                              },
                            ],
                          })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                  ) : null}
                </FormItem>
              </div>
            </FormItem>
          </Col>
          <Col lg={24}>
            <FormItem label={'结算方式'} {...formItemLayout}>
              <div>
                {getFieldDecorator('settlement', {
                  initialValue: '0',
                })(
                  <Radio.Group>
                    <Radio value="0">集团</Radio>
                    <Radio value="1">单店</Radio>
                  </Radio.Group>
                )}
                <FormItem style={{ marginTop: 20 }}>
                  {getFieldValue('settlement') == '1' ? (
                    <Row gutter={50}>
                      <Col lg={12}>
                        <Form.Item label={'账户名称'}>
                          {getFieldDecorator('channelBankName', {
                            rules: [
                              {
                                required: true,
                                message: '请输入账户名称',
                              },
                            ],
                          })(<Input placeholder="请输入账户名称" />)}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'选择开户银行'}>
                          {getFieldDecorator('channelBank', {
                            rules: [
                              {
                                required: true,
                                message: '请选择开户银行',
                              },
                            ],
                          })(
                            <Select placeholder="请选择">
                              {ch_bank &&
                                Object.entries(ch_bank).map(item => {
                                  return (
                                    <Option value={item[0]} key={item[0]}>
                                      {item[1]}
                                    </Option>
                                  );
                                })}
                            </Select>
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'开户账号'}>
                          {getFieldDecorator('channelBankAccount', {
                            rules: [
                              { required: true, message: '请输入开户账号' },
                              {
                                pattern: /^\d{10,25}$/,
                                message: '请输入开户账号',
                              },
                            ],
                          })(<Input placeholder="请输入开户账号" />)}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'联行号'}>
                          {getFieldDecorator('channelBankNumber', {
                            rules: [
                              { required: true, message: '请输入联行号' },
                              {
                                pattern: /^\d{12}$/,
                                message: '请输入联行号',
                              },
                            ],
                          })(<Input placeholder="请输入联行号" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                  ) : null}
                </FormItem>
              </div>
            </FormItem>
          </Col>
          <Col lg={12}>
            <Form.Item label={'渠道状态'}>
              {getFieldDecorator('status', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {ch_status &&
                    Object.entries(ch_status).map(item => {
                      return (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      );
                    })}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item label={'渠道营业状态'}>
              {getFieldDecorator('operating', {
                rules: [
                  {
                    required: true,
                    message: '请选择',
                  },
                ],
              })(
                <Select placeholder="请选择">
                  {ch_operating &&
                    Object.entries(ch_operating).map(item => {
                      return (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      );
                    })}
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

export default Step2;
