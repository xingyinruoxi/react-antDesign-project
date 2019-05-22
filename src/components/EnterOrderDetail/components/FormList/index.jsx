import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Input,
  Popover,
  Icon,
  Table,
  Select,
  Row,
  Col,
  Radio,
  message,
  Empty,
} from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import FooterToolbar from '@/components/FooterToolbar';
import router from 'umi/router';
import DescriptionList from '@/components/DescriptionList';
const { Description } = DescriptionList;
import StandardTable from '@/components/StandardTable';
const { Option } = Select;
const { TextArea } = Input;
import styles from './css/styles.less';
import reportStatus, { reportVal } from './status/reportStatus.js';

const fieldLabels = {
  name: '仓库名',
  url: '仓库域名',
  owner: '仓库管理员',
  approver: '审批人',
  dateRange: '生效日期',
  type: '仓库类型',
  name2: '任务名',
  url2: '任务描述',
  owner2: '执行人',
  approver2: '责任人',
  dateRange2: '生效日期',
  type2: '任务类型',
};
@connect(({ loading, unfinishTermlist, orderDetail, userInfo }) => ({
  submitting: loading.effects['firstTradeSubmit/submit'],
  unfinishTermlist,
  orderDetail,
  userInfo,
}))
@Form.create()
export default class extends PureComponent {
  state = {
    width: '100%',
    tbProductSchemaId: null,
    selectedRows: [],
  };
  columns = [
    {
      title: '产品方案名称',
      dataIndex: 'schemaName',
    },
    {
      title: '首付',
      dataIndex: 'firstPayment',
    },
    {
      title: '首付比例',
      dataIndex: 'firstPaymentProperty',
      render: val => <>{val || '--'}</>,
    },
    {
      title: '还款次数',
      dataIndex: 'schemaLimit',
    },
    {
      title: '尾款',
      dataIndex: 'lastPayment',
    },
  ];
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
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
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar, { passive: true });
    const {
      location: {
        query: { tradeCode },
      },
      dispatch,
      hasFormList,
      typeDataTotal,
    } = this.props;
    const { setBaseInfo, handleResult, setData } = this;
    handleResult();
    if (!hasFormList) return;
    dispatch({
      type: 'orderResultInfo/fetch',
      payload: {
        data: {
          tradeCode,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const { report, result: dataResult } = data;
          if (report) {
            const obj = {};
            for (var key in report) {
              obj[key] = report[key] + '';
            }
            setBaseInfo(obj);
          }
          if (dataResult) {
            const { result, condition, tbProductSchemaId } = dataResult;
            if (result === '2006') {
              dataResult.result = '2106';
            } else if (result === '2107') {
              dataResult.result = '2007';
            } else if (result === '2108') {
              dataResult.result = '2008';
            } else {
              delete dataResult.result;
            }
            delete dataResult.opinion;
            delete dataResult.remark;
            setBaseInfo(dataResult);
            if (tbProductSchemaId) {
              setData('selectedRows', [dataResult.tbProductSchemaId]);
            }
            if (condition) {
              dataResult.condition = condition.split(',');
              setBaseInfo(dataResult);
            }
          }
        }
      },
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      unfinishTermlist: { formValues },
    } = this.props;
    const params = {
      page: pagination.current,
      limit: pagination.pageSize,
      queryCondition: { ...formValues },
    };
    dispatch({
      type: 'unfinishTermlist/fetch',
      payload: params,
    });
  };
  clearErr = () => {
    this.props.form.setFields({
      opinion: {
        errors: '',
      },
      remark: {
        errors:'',
      },
    });
  };
  handleResult = result => {
    if (result && result.endsWith('0')) {
      this.clearErr();
    }
    const {
      dispatch,
      orderDetail: { tradeInfo },
    } = this.props;
    if (!tradeInfo) return;
    const {
      tbChannelInfoId: channelId,
      tbCommodityInfoId: commodityId,
      tbProductSchemaId: psInfoId,
    } = tradeInfo;
    dispatch({
      type: 'unfinishTermlist/fetch',
      payload: {
        limit: 20,
        queryCondition: {
          channelId,
          commodityId,
          psInfoId,
        },
      },
    });
  };
  getErrorInfo = () => {
    const {
      form: { getFieldsError },
    } = this.props;
    const errors = getFieldsError();
    const errorCount = Object.keys(errors).filter(key => errors[key]).length;
    if (!errors || errorCount === 0) {
      return null;
    }
    const scrollToField = fieldKey => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };
    const errorList = Object.keys(errors).map(key => {
      if (!errors[key]) {
        return null;
      }
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <Icon type="cross-circle-o" className={styles.errorIcon} />
          <div className={styles.errorMessage}>{errors[key][0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="表单校验信息"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <Icon type="exclamation-circle" />
        </Popover>
        {errorCount}
      </span>
    );
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
  validate = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
      orderDetail: {
        tradeInfo: { processId },
      },
      userInfo: { sysRoleList },
      location: {
        query: { tradeCode },
      },
    } = this.props;

    validateFieldsAndScroll((error, values) => {
      const { selectedRows } = this.state;
      if (selectedRows.length > 0) {
        values.tbProductSchemaId = selectedRows[0];
      }
      if (!error) {
        const roleListArr = (sysRoleList && sysRoleList.map(({ roleCode }) => roleCode)) || [];
        const roleStatus = roleListArr.includes('first_audit');
        let type = roleStatus ? 1 : 2;
        const postUrl = `${roleStatus ? 'first' : 're'}TradeSubmit/submit`;
        const resultMsg = roleStatus ? '初' : '复';
        const data3 = {
          manualReportReq: {
            ...values,
            type,
          },
          tradeCode,
          processId,
        };
        if (Object.keys(values).includes('condition')) {
          let { condition } = values;
          values.condition = condition.toString();
        }

        dispatch({
          type: postUrl,
          payload: {
            data: {
              manualReportReq: {
                ...values,
                type,
              },
              tradeCode,
              processId,
            },
          },
          callBack(msg) {
            if (msg === 'OK') {
              message.success(`人工${resultMsg}审成功`);
              router.push({
                pathname: '/works/unfinish/enterorder/list',
              });
            } else {
              message.success(msg);
            }
          },
        });
      }
    });
  };
  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
      submitting,
      unfinishTermlist: { list, pageNum: current, total, pageSize },
      typeDataTotal: { pt_list_credit_all: pt_list_credit },
      userInfo: { sysRoleList },
      report,
    } = this.props;
    let firstStatus = {
      '2010': '初审通过',
      '2006': '初审附条件',
      '2007': '初审补充资料',
      '2008': '初审审批退回',
      '2001': '初审否决',
    };
    let twoStatus = {
      '2110': '复审通过',
      '2106': '复审附条件',
      '2107': '复审补充资料',
      '2108': '复审审批退回',
      '2101': '复审否决',
    };
    const newDataTable = {
      list,
      current,
      total,
      pageSize,
    };
    delete pt_list_credit.pt_list_credit_2014customePlaceInfoStatus;
    delete pt_list_credit.pt_list_credit_2013customerSalaryStatus;
    delete pt_list_credit.pt_list_credit_2002customerMarriageInfoStatus;
    delete pt_list_credit.pt_list_credit_1003customerFaceInfoStatus;
    delete pt_list_credit.pt_list_credit_1001customerCardInfoStatus;
    delete pt_list_credit.pt_list_credit_1005customerAutoCreditStatus;
    const roleListArr = (sysRoleList && sysRoleList.map(({ roleCode }) => roleCode)) || [];
    const roleStatus = roleListArr.includes('first_audit') ? firstStatus : twoStatus;
    const selectResult = getFieldValue('result');
    const { width, selectedRows } = this.state;
    const formItemLayout1 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 4 },
      },
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 14 },
      },
    };
    const formItemLayout3 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 12 },
      },
    };
    const formItemLayout4 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 },
        md: { span: 16 },
      },
    };
    const formItemLayout2 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 18 },
      },
    };
    const newReport = report
      ? Object.entries(report).filter(
          item =>
            item[0] !== 'id' &&
            item[0] !== 'createTime' &&
            item[0] !== 'createBy' &&
            item[0] !== 'updateTime' &&
            item[0] !== 'updateBy' &&
            item[0] !== 'isDel' &&
            item[0] !== 'tbManualCreditId'
        )
      : [];
    return (
      <>
        <Card title={'信审报告'} bordered={false} style={{ marginTop: 24 }}>
          {roleListArr.includes('first_audit') ? (
            <Form>
              <Row gutter={0}>
                <Col md={7} sm={24}>
                  <Form.Item label={'NC户籍'} {...formItemLayout}>
                    {getFieldDecorator('registration')(
                      <Radio.Group>
                        <Radio value="1">有</Radio>
                        <Radio value="2">无</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'是否本人接听'} {...formItemLayout}>
                    {getFieldDecorator('isSelfAnswer')(
                      <Radio.Group>
                        <Radio value="1">是</Radio>
                        <Radio value="2">否</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'手机号码实名'} {...formItemLayout}>
                    {getFieldDecorator('isMobileRealname')(
                      <Radio.Group>
                        <Radio value="1">实名</Radio>
                        <Radio value="2">非实名</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'是否提供虚假资料'} {...formItemLayout}>
                    {getFieldDecorator('isShamInfo')(
                      <Radio.Group>
                        <Radio value="1">是</Radio>
                        <Radio value="2">否</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Col>
                <Col md={8} sm={24} style={{ marginLeft: '-60px', marginRight: '20px' }}>
                  <Form.Item label={'NC户面签'} {...formItemLayout}>
                    {getFieldDecorator('preparedFace')(
                      <Radio.Group className={styles.radioGroup}>
                        <Radio value="1">一致</Radio>
                        <Radio value="2">不一致</Radio>
                        <Radio value="3">人工确认为一致</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'工作核实'} {...formItemLayout}>
                    {getFieldDecorator('workVerify')(
                      <Radio.Group>
                        <Radio value="1">良好</Radio>
                        <Radio value="2">一般</Radio>
                        <Radio value="3">较差</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'收入与车辆负债'} {...formItemLayout}>
                    {getFieldDecorator('incomeDebt')(
                      <Radio.Group className={styles.radioGroup}>
                        <Radio value="1">个人覆盖</Radio>
                        <Radio value="2">家庭覆盖</Radio>
                        <Radio value="3">均不能覆盖</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'紧急联系人核实'} {...formItemLayout}>
                    {getFieldDecorator('contractCheck')(
                      <Radio.Group>
                        <Radio value="1">正常</Radio>
                        <Radio value="2">异常</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Col>
                <Col md={9} sm={24}>
                  <Form.Item label={'购车目的'} {...formItemLayout}>
                    {getFieldDecorator('purpose')(
                      <Radio.Group>
                        <Radio value="1">合理</Radio>
                        <Radio value="2">异常</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'工作形式'} {...formItemLayout}>
                    {getFieldDecorator('workType')(
                      <Radio.Group className={styles.radioGroup}>
                        <Radio value="1">单位授薪</Radio>
                        <Radio value="2">自营证照</Radio>
                        <Radio value="3">无证自雇</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'家庭稳定性'} {...formItemLayout}>
                    {getFieldDecorator('stability')(
                      <Radio.Group className={styles.radioGroup}>
                        <Radio value="1">良好</Radio>
                        <Radio value="2">一般</Radio>
                        <Radio value="3">较差</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'本人驾照'} {...formItemLayout}>
                    {getFieldDecorator('selfDriverCard')(
                      <Radio.Group>
                        <Radio value="1">已提供</Radio>
                        <Radio value="2">未提供</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={14} sm={24}>
                  <Form.Item label={'同盾反对结果'} {...formItemLayout2}>
                    {getFieldDecorator('tongdunResult')(
                      <Radio.Group>
                        <Radio value="1">正常</Radio>
                        <Radio value="2">可接受</Radio>
                        <Radio value="3">拒绝</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'前海反对结果'} {...formItemLayout2}>
                    {getFieldDecorator('qianhaiResult')(
                      <Radio.Group>
                        <Radio value="1">正常</Radio>
                        <Radio value="2">可接受</Radio>
                        <Radio value="3">拒绝</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                  <Form.Item label={'鹏元反对结果'} {...formItemLayout2}>
                    {getFieldDecorator('pengyuanResult')(
                      <Radio.Group>
                        <Radio value="1">正常</Radio>
                        <Radio value="2">可接受</Radio>
                        <Radio value="3">拒绝</Radio>
                      </Radio.Group>
                    )}
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col md={14} sm={24}>
                  <Form.Item label={'财务分析'} {...formItemLayout2}>
                    {getFieldDecorator('financial')(
                      <TextArea
                        style={{ minHeight: 32, width: '100%' }}
                        placeholder={'请输入...'}
                        rows={4}
                        cols={8}
                        maxLength={300}
                      />
                    )}
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          ) : (
            <>
              {newReport.length > 0 ? (
                <>
                  <DescriptionList size="large" col="3" layout="horizontal">
                    {newReport.map(item => {
                      if (item[0] === 'financial') return;
                      return (
                        <Description term={reportStatus[item[0]]} key={item[0]}>
                          {reportVal[item[0]][item[1]]}
                        </Description>
                      );
                    })}
                  </DescriptionList>
                  {report.financial ? (
                    <DescriptionList
                      size="large"
                      style={{ marginTop: 20 }}
                      col="1"
                      layout="horizontal"
                    >
                      <Description term={'财务分析'} key={'财务分析'}>
                        {report.financial}
                      </Description>
                    </DescriptionList>
                  ) : null}
                </>
              ) : (
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </>
          )}
        </Card>
        <Card title={'结论'} bordered={false} style={{ marginTop: 24 }}>
          <Form>
            <Form.Item {...formItemLayout1} label={'结论'}>
              {getFieldDecorator('result', {
                rules: [
                  {
                    required: true,
                    message: '请选择结论',
                  },
                ],
              })(
                <Select placeholder="请选择" onChange={this.handleResult}>
                  {Object.entries(roleStatus).map(item => (
                    <Option value={item[0]} key={item[0]}>
                      {item[1]}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            {selectResult && selectResult.endsWith('6') ? (
              <Form.Item {...formItemLayout4} label={'提首付/改期限'}>
                {getFieldDecorator('tbProductSchemaId', {
                  rules: [
                    {
                      required: this.state.selectedRows.length > 0 ? false : true,
                      message: '请选择提首付/改期限',
                    },
                  ],
                })(
                  <>
                    <Table
                      rowKey={'id'}
                      dataSource={list}
                      columns={this.columns}
                      size={'middle'}
                      bordered
                      rowSelection={{
                        selectedRowKeys: selectedRows,
                        type: 'radio',
                        onChange: selectedRows => {
                          this.setState({
                            // tbProductSchemaId: key[0],
                            selectedRows,
                          });
                        },
                      }}
                      pagination={false}
                    />
                  </>
                )}
              </Form.Item>
            ) : null}
            {selectResult && selectResult.endsWith('7') ? (
              <Form.Item {...formItemLayout3} label={'需补充资料'}>
                {getFieldDecorator('condition', {
                  rules: [
                    {
                      required: true,
                      message: '请选择需补充资料',
                    },
                  ],
                })(
                  <Select placeholder="请选择" mode="multiple">
                    {pt_list_credit &&
                      Object.entries(pt_list_credit).map(item => (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            ) : null}
            {selectResult && selectResult.endsWith('8') ? (
              <Form.Item {...formItemLayout3} label={'需修改资料'}>
                {getFieldDecorator('condition', {
                  rules: [
                    {
                      required: true,
                      message: '请选择需修改资料',
                    },
                  ],
                })(
                  <Select placeholder="请选择" mode="multiple">
                    {pt_list_credit &&
                      Object.entries(pt_list_credit).map(item => (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            ) : null}
            
            <Form.Item {...formItemLayout3} label={'意见'}>
              {getFieldDecorator('opinion', {
                rules: [
                  {
                    required: selectResult && !selectResult.endsWith('0') ? true : false,
                    message: '请输入审核意见',
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  maxLength={100}
                  placeholder={'请输入'}
                  rows={4}
                />
              )}
            </Form.Item>
            <Form.Item {...formItemLayout3} label={'备注'}>
              {getFieldDecorator('remark', {
                rules: [
                  {
                    required: selectResult && !selectResult.endsWith('0') ? true : false,
                    message: '请输入备注',
                  },
                ],
              })(
                <TextArea
                  style={{ minHeight: 32 }}
                  maxLength={100}
                  placeholder={'请输入'}
                  rows={4}
                />
              )}
            </Form.Item>
          </Form>
        </Card>
        <FooterToolbar style={{ width }}>
          {this.getErrorInfo()}
          <Button type="primary" onClick={this.validate} loading={submitting}>
            提交
          </Button>
        </FooterToolbar>
      </>
    );
  }
}
