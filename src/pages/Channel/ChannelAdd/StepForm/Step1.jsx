import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {Form,Input,Button,Select,Row,Col,DatePicker,Radio,TreeSelect,message} from 'antd';
import router from 'umi/router';
import { formatMessage, FormattedMessage } from 'umi/locale';
import styles from './style.less';
import moment from 'moment';
import GeographicView from '@/components/Geographic';
const TreeNode = TreeSelect.TreeNode;
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
@connect(({ channelAdd,channelUpdate,typeDataTotal,channelQueryStep1,loading }) => ({
  channelAdd,
  channelUpdate,
  typeDataTotal,
  channelQueryStep1,
  submitting: loading.effects['channelUpdate/submit']||loading.effects['channelAdd/baseInfo'],
}))
@Form.create()
class Step1 extends PureComponent {
  state = {
    parentAreaList:[]
  };
  setData = (key, data) => {
    this.setState({
      [key]: data 
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
        pathname
      },
    } = this.props;
    const hasEdit=pathname.includes('edit')
    const { setBaseInfo,setData } = this;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    }); 
    dispatch({
			type: 'parentAreaList/fetch',
			payload: {
        data:{
          "name":"",
          id:id||'0'
        }
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('parentAreaList', data)
        }
      }
    }); 
    if (!id) return;
    dispatch({
      type: 'channelQueryStep1/fetch',
      payload: { 
        data: id
      },
      callBack() {
        setBaseInfo();
      },
    });
    if (!hasEdit) return;
    dispatch({
      type: 'channelQueryStep1/fetch',
      payload: { 
        data: id
      },
      callBack() {
        setBaseInfo();
      },
    });
  }
  setBaseInfo = () => {
    const { channelQueryStep1,channelQueryStep1:{
      regionIdProvince,regionIdCity,regionIdCounty
    }, form } = this.props;

    const { enddate, startdate,opendate,cityShowName } = channelQueryStep1;
    channelQueryStep1.opendate = moment(opendate);
    channelQueryStep1.enddate = moment(enddate);
    channelQueryStep1.startdate = moment(startdate);

    let [storeAddrProvince,storeAddrCity,storeAddrCounty]= cityShowName.split(',')
    let  newGeographic={
      province: { key: regionIdProvince, label: storeAddrProvince },
      city: { key: regionIdCity, label: storeAddrCity },
      area: { key: regionIdCounty, label: storeAddrCounty },
    };
    delete channelQueryStep1.geographic;
    
    channelQueryStep1.geographic=newGeographic;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = channelQueryStep1[key] || null;
      form.setFieldsValue(obj); 
    });
  };
  onValidateForm = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
      location:{pathname}
    } = this.props;
    validateFieldsAndScroll((err, values) => {
      const {
        geographic: {
          province: { key: regionIdProvince, label: storeAddrProvince },
          city: { key: regionIdCity, label: storeAddrCity },
          area: { key: regionIdCounty, label: storeAddrCounty },
        },
        storeBeginTime,
        storeEndTime,
        startdate,
      } = values;
      values.storeBeginTime = storeBeginTime && storeBeginTime.format('YYYY-MM-DD');
      values.storeEndTime = storeEndTime && storeEndTime.format('YYYY-MM-DD');
      values.startdate = startdate && startdate.format('YYYY-MM-DD');
      const hasEdit=pathname.includes('edit');
      const nextPage = `/channel/channel/list/${hasEdit? 'edit' : 'add'}/confirm`;
      delete values['geographic'];
      if (!err) {
        const {
          location:{
            query:{id},
            pathname
          }
        } = this.props
        if(hasEdit){
          values.id=id;
        }
        const newId=id
        dispatch({
          type: `${hasEdit||id ? 'channelUpdate/submit' : 'channelAdd/baseInfo'}`,
          payload: {
            data:{
              ...values,
              regionIdProvince,
              regionIdCity,
              regionIdCounty,
              optionUser: '',
              id:id
            }
          },
          callBack(msg,id) {
            if (msg === 'OK') {
              router.push({
                pathname: nextPage,
                query: { id: `${newId||id}` },
              });
            } else {
              message.error(msg);
            }
          },
        });
      }
    });
  };
  render() {
    const { parentAreaList } = this.state
    const {
      form: { getFieldDecorator, validateFields, getFieldValue },
      dispatch,
      submitting,
      data,
      location:{
        query:{id},
        pathname
      },
      typeDataTotal:{
        ch_billingPeriod
      },
      channelQueryStep1:{
        regionIdProvince,
        regionIdCity,
        regionIdCounty,
        name,
        social,
        type,
        amount,
        billingperiod,
        startdate,
        enddate,
        tbChannelZoneId,
        opendate,
        address,
        code,
        cityShowName
      }
    } = this.props;
    return (
      <>
        <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
          <Row gutter={50}>
          {pathname.includes('edit') ? (
            <Col lg={12}>
              <Form.Item label={'渠道编号'}>
                {getFieldDecorator('code', {
                  rules: [
                    {
                      // required: true,
                      message: '请输入渠道编号',
                    },
                  ],
                })(<Input placeholder="请输入渠道编号" disabled />)}
              </Form.Item>
            </Col>
          ):null}
            <Col lg={12}>
              <Form.Item label={'渠道名称'}>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入渠道名称',
                    },
                  ],
                })(<Input placeholder="请输入渠道名称" />)}
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={'统一社会信用代码'}>
                {getFieldDecorator('social', {
                  rules: [
                    {
                      pattern: /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/,
                      required: true,
                      message: '请输入统一社会信用代码',
                    },
                  ],
                })(<Input placeholder="请输入统一社会信用代码" />)}
              </Form.Item>
            </Col>
            <Col lg={12}>
              <FormItem label={'选择省市区'}>
                {getFieldDecorator('geographic', {
                  rules: [
                    {
                      required: true,
                      message: '请输入您的所在省市',
                    },
                  ],

                })(<GeographicView />)} 
              </FormItem>
            </Col>
            <Col lg={12}>
              <Form.Item label={'详细地址'}>
                {getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: '详细地址',
                    },
                  ],
                })(<Input placeholder="详细地址" />)}
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={'选择大区'}>
                {getFieldDecorator('tbChannelZoneId', {
                  rules: [
                    {
                      required: true,
                      message: '选择大区',
                    },
                  ],
                })(
                  <Select placeholder="请选择大区">
                    {parentAreaList &&parentAreaList.map(({name,id}) => (
                        <Option value={id} key={id}>
                          {name}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item label={'开业时间'}>
                {getFieldDecorator('opendate', {
                  rules: [
                    {
                      required: true,
                      message: '请选择开业时间',
                    },
                  ],
                })(
                  <DatePicker
                    showTime
                    style={{ width: '100%' }}
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="请选择开业时间"
                  />
                )}
              </Form.Item>
            </Col>
            <Col lg={24}>
              <FormItem {...formItemLayout} label="建立方式">
                <div>
                  {getFieldDecorator('type', {
                    initialValue: '0',
                  })(
                    <Radio.Group>
                      <Radio value="0">购买</Radio>
                      <Radio value="1">租赁</Radio>
                    </Radio.Group>
                  )}
                  {getFieldValue('type') == '0' ? (
                    <Row gutter={50} style={{ marginTop: 20 }}>
                      <Col lg={12} md={12} sm={24}>
                        <Form.Item label={'购买金额'}>
                          {getFieldDecorator('amount', {
                            rules: [
                              { required: true, message: '请输入购买金额' },
                              {
                                pattern: /^(\d+)((?:\.\d+)?)$/,
                                required: true,
                                message: '请输入合法金额数字',
                              },
                            ],
                          })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                        </Form.Item>
                      </Col>
                    </Row>
                  ) : null}
                  {getFieldValue('type') == '1' ? (
                    <Row gutter={50} style={{ marginTop: 20 }}>
                      <Col lg={12}>
                        <Form.Item label={'付款周期'}>
                          {getFieldDecorator('billingperiod')(
                            <Select placeholder="请选择付款周期">
                              {ch_billingPeriod&&Object.entries(ch_billingPeriod).map(item => {
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
                        <Form.Item label={'租赁金额'}>
                          {getFieldDecorator('amount', {
                            rules: [
                              { required: true, message: '请输入租赁金额' },
                              {
                                pattern: /^(\d+)((?:\.\d+)?)$/,
                                message: '请输入合法金额数字',
                              },
                            ],
                          })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'使用开始时间'}>
                          {getFieldDecorator('startdate', {
                            rules: [
                              {
                                required: true,
                                message: '请选择使用开始时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择使用开始时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                      <Col lg={12}>
                        <Form.Item label={'使用结束时间'}>
                          {getFieldDecorator('enddate', {
                            rules: [
                              {
                                required: true,
                                message: '请选择使用结束时间',
                              },
                            ],
                          })(
                            <DatePicker
                              showTime
                              style={{ width: '100%' }}
                              format="YYYY-MM-DD HH:mm:ss"
                              placeholder="请选择使用结束时间"
                            />
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                  ) : null}
                </div>
              </FormItem>
            </Col>
          </Row>
          <footer
            style={{
              textAlign: 'center',
              paddingBottom: 30,
            }}
          >
            <Button type="primary" onClick={this.onValidateForm} loading={submitting}>
              下一步
            </Button>
          </footer>
        </Form>
      </>
    );
  }
}

export default Step1;
