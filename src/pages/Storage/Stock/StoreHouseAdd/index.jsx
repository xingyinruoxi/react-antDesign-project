import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  message,
  Col,
  DatePicker,
  Row,
  Input,
  Select,
  InputNumber,
} from 'antd';
import router from 'umi/router';
import { connect } from 'dva';
import FooterToolbar from '@/components/FooterToolbar';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Geographic from '@/components/Geographic';
import DescriptionList from '@/components/DescriptionList';
const { Description } = DescriptionList;
const { Option } = Select;
const { TextArea } = Input;
import moment from 'moment';

@connect(({ loading, typeDataTotal, storeHouseAdd, detailData }) => ({
  submitting: loading.models.storeHouseAdd,
  typeDataTotal,
  storeHouseAdd,
  detailData,
}))
@Form.create()
export default class extends PureComponent {
  state = {
    width: '100%',
    storeHouseParent:[]
  };

  resizeFooterToolbar = () => {
    requestAnimationFrame(() => {
      const sider = document.querySelectorAll('.ant-layout-sider')[0];
      if (sider) {
        const width = `calc(100% - ${sider.style.width})`;
        const { width: stateWidth } = this.state;
        if (stateWidth !== width) {
          this.setState({ width });
        }
      }
    });
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
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar, { passive: true });
    const {
      dispatch,
      location: {
        pathname,
        query: { id },
      },
    } = this.props;
    const {onChangeLevel}=this;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });

    if (pathname.includes('add')) return;
    const { setBaseInfo } = this;
    dispatch({
      type: 'detailData/fetch',
      payload: {
        data: {
          id,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const {storeBeginTime,storeEndTime,storeLevel}=data;
          if(storeBeginTime){
            data.storeBeginTime=moment(storeBeginTime);
            data.storeEndTime=moment(storeEndTime);
          }
          onChangeLevel(storeLevel)
          setBaseInfo(data);
          const { storeSetupType } = data;
          if (storeSetupType) {
            setBaseInfo(data);
          }
        }
      },
    });
  }

  setData=(key,data)=>{
    this.setState({
      [key]:data
    })
  }
  onChangeLevel = level => {
    const {setData}=this;
    const { dispatch } = this.props;
    if (level <= 1) return;
    dispatch({
      type: 'storeHouseParent/fetch',
      payload: {
        data: {
          level,
        },
      },
      callBack(msg,data){
        if(msg==='OK'){
          setData('storeHouseParent',data)
        }
      }
    });
  };
  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
    const {
      dispatch,
      location: { pathname },
    } = this.props;
    if (pathname.includes('add')) return;
    dispatch({
      type: 'detailData/remove',
      payload: {},
    });
  }
  validate = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
      location: {
        pathname,
        query: { id },
      },
    } = this.props;
    validateFieldsAndScroll((error, values) => {
      const {
        geographic: {
          province: { key: regionIdProvince, label: storeAddrProvince },
          city: { key: regionIdCity, label: storeAddrCity },
          area: { key: regionIdCounty, label: storeAddrCounty },
        },
        storeBeginTime,
        storeEndTime,
      } = values;
      if (storeBeginTime) {
        values.storeBeginTime = storeBeginTime.format('YYYY-MM-DD');
        values.storeEndTime = storeEndTime.format('YYYY-MM-DD');
      }
      delete values.geographic;
      if (!error) {
        const hasEdit = pathname.includes('edit');
        if (hasEdit) {
          values.id = id;
        }
        dispatch({
          type: `${hasEdit ? 'storeHouseUpdate' : 'storeHouseAdd'}/submit`,
          payload: {
            data: {
              ...values,
              regionIdProvince,
              storeAddrProvince,
              regionIdCity,
              storeAddrCity,
              regionIdCounty,
              storeAddrCounty,
            },
          },
          callback(msg) {
            if (msg === 'OK') {
              message.success(`${hasEdit ? '编辑' : '添加'}成功`);
              router.push({ pathname: '/store/stock/storehouse/list' });
            } else {
              message.error(msg);
            }
          },
        });
      }
    });
  };
  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
      location: { pathname },
      submitting,
      detailData: {
        storeName,
        storeType,
        storeLevel,
        storeParentId,
        storeSetupType,
        storeTotal,
        storeAddrDetail,
        storePay,
        storePeriod,
        storeRent,
        storeBeginTime,
        storeEndTime,
        storeDesc,
        regionIdProvince,
        storeAddrProvince,
        regionIdCity,
        storeAddrCity,
        regionIdCounty,
        storeAddrCounty,
        storeStatus,
      },
      typeDataTotal: {
        st_storeType,
        st_storeLevel,
        st_houseStatus,
        st_storeSetupType,
        st_storePeriod,
      },
    } = this.props;
    const { width ,storeHouseParent} = this.state;
    let geographic = {
      province: { key: regionIdProvince + '', label: storeAddrProvince },
      city: { key: regionIdCity + '', label: storeAddrCity },
      area: { key: regionIdCounty + '', label: storeAddrCounty },
    };
    geographic = storeName ? geographic : null;
    return (
      <PageHeaderWrapper title={`${pathname.includes('add') ? '新增' : '编辑'}仓库`}>
        <Card title={'仓库基本信息'} bordered={false} style={{ marginBottom: 24 }}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={0}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={'仓库名称'}>
                  {getFieldDecorator('storeName', {
                    rules: [{ required: true, message: '请输入仓库名称' }],
                  })(<Input placeholder="请输入仓库名称" />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 9, offset: 1 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={'仓库省市区'}>
                  {getFieldDecorator('geographic', {
                    rules: [
                      {
                        required: true,
                        message: '请选择省市区',
                      },
                    ],
                    initialValue: geographic,
                  })(<Geographic />)}
                </Form.Item>
              </Col>
              <Col xl={{ span: 7, offset: 1 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label={'仓库详细地址'}>
                  {getFieldDecorator('storeAddrDetail', {
                    rules: [{ required: true, message: '请输入仓库详细地址' }],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
              </Col>
            </Row>
            {storeDesc ? (
              <Row gutter={16}>
                <Col lg={6} md={12} sm={24}>
                  <Form.Item label={'仓库概况'}>
                    {getFieldDecorator('storeDesc', {})(
                      <TextArea style={{ minHeight: 32 }} placeholder={'请输入仓库概况'} rows={4} />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            ) : null}
          </Form>
        </Card>
        <Card title={'仓库属性信息'} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={'仓库类别'}>
                  {getFieldDecorator('storeType', {
                    rules: [{ required: true, message: '请选择仓库类别' }],
                  })(
                    <Select placeholder="请选择仓库类别">
                      {st_storeType &&
                        Object.entries(st_storeType).map(item => (
                          <Option value={Number(item[0])} key={item[0]}>
                            {item[1]}
                          </Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={'仓库级别'}>
                  {getFieldDecorator('storeLevel', {
                    rules: [{ required: true, message: '请选择仓库级别' }],
                  })(
                    <Select placeholder="请选择仓库级别" disabled={getFieldValue('storeLevel')=='5'?true:false}  onChange={this.onChangeLevel}>
                      {st_storeLevel &&
                        Object.entries(st_storeLevel).map(item => (
                          <Option value={Number(item[0])} disabled={item[0]==='5'?true:false} key={item[0]}>
                            {item[1]}
                          </Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              {getFieldValue('storeLevel') > 1 ? (
                <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                  <Form.Item label={'上级仓库'}>
                    {getFieldDecorator('storeParentId', {
                      rules: [{ required: true, message: '请选择上级仓库' }],
                    })(
                      <Select placeholder="请选择上级仓库">
                        {storeHouseParent.map(({ id, storeName }) => (
                          <Option key={id} value={id}>
                            {storeName}
                          </Option>
                        ))}
                      </Select>
                    )}
                  </Form.Item>
                </Col>
              ) : null}
            </Row>
            <Row gutter={0}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={'仓库总库位'}>
                  {getFieldDecorator('storeTotal', {
                    rules: [{ required: true, message: '请输入仓库总库位' }],
                  })(
                    <InputNumber min={0} placeholder="请输入仓库总库位" style={{ width: '100%' }} />
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                <Form.Item label={'仓库状态'}>
                  {getFieldDecorator('storeStatus', {
                    initialValue: storeStatus,
                    rules: [{ required: true, message: '请选择仓库状态' }],
                  })(
                    <Select placeholder="请选择仓库状态">
                      {st_houseStatus &&
                        Object.entries(st_houseStatus).map(item => (
                          <Option value={Number(item[0])} key={item[0]}>
                            {item[1]}
                          </Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                <Form.Item label={'仓库建立方式'}>
                  {getFieldDecorator('storeSetupType', {
                    rules: [{ required: true, message: '请选择仓库类型' }],
                  })(
                    <Select placeholder="请选择仓库类型">
                      {st_storeSetupType &&
                        Object.entries(st_storeSetupType).map(item => (
                          <Option value={Number(item[0])} key={item[0]}>
                            {item[1]}
                          </Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
            </Row>
            {getFieldValue('storeSetupType') == '1' ? (
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={'购买金额'}>
                  {getFieldDecorator('storePay', {
                    rules: [
                      { required: true, message: '请输入购买金额' },
                      {
                        pattern: /^(\d+)((?:\.\d+)?)$/,
                        message: '请输入合法金额数字',
                      },
                    ],
                  })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                </Form.Item>
              </Col>
            ) : null}
            {getFieldValue('storeSetupType') == '2' ? (
              <>
                <Col lg={6} md={12} sm={24}>
                  <Form.Item label={'租金'}>
                    {getFieldDecorator('storeRent', {
                      rules: [
                        { required: true, message: '请输入租金' },
                        {
                          pattern: /^(\d+)((?:\.\d+)?)$/,
                          message: '请输入合法金额数字',
                        },
                      ],
                    })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                  </Form.Item>
                </Col>
                <Col xl={{ span: 6, offset: 2 }} lg={{ span: 8 }} md={{ span: 12 }} sm={24}>
                  <Form.Item label={'周期'}>
                    {getFieldDecorator('storePeriod', {
                      rules: [{ required: true, message: '请选择周期' }],
                    })(
                      <Select placeholder="请选择周期">
                        {st_storePeriod &&
                          Object.entries(st_storePeriod).map(item => (
                            <Option value={Number(item[0])} key={item[0]}>
                              {item[1]}
                            </Option>
                          ))}
                      </Select>
                    )}
                  </Form.Item>
                </Col>
                <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                  <Form.Item label={'开始使用时间'}>
                    {getFieldDecorator('storeBeginTime', {
                      rules: [{ required: true, message: '请选择开始使用时间' }],
                    })(<DatePicker style={{ width: '100%' }} />)}
                  </Form.Item>
                </Col>
                <Col xl={{ span: 6 }} lg={{ span: 10 }} md={{ span: 24 }} sm={24}>
                  <Form.Item label={'结束使用时间'}>
                    {getFieldDecorator('storeEndTime', {
                      rules: [{ required: true, message: '请选择开始使用时间' }],
                    })(<DatePicker style={{ width: '100%' }} />)}
                  </Form.Item>
                </Col>
              </>
            ) : null}
          </Form>
        </Card>
        <FooterToolbar style={{ width }}>
          <Button type="primary" onClick={this.validate} loading={submitting}>
            保存
          </Button>
        </FooterToolbar>
      </PageHeaderWrapper>
    );
  }
}
