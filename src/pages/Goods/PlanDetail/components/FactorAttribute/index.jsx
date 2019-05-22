import React, { PureComponent } from 'react';
import { Form, Input, Card, Row, Col, Radio, Select, Table, Popconfirm } from 'antd';
import moment from 'moment';
import styles from './style.less';
export default props => {
  const {
    factorAttributeValues,
    repaymentPeriodValues,
    totalFinancingValues,
    rulesPaymentValues,
    startingdateSetrepaymentValues,
    fixedChannelRulesFirstValues,
    fixedChannelRulesSecValues,
    supplementaryRulesValues,
  } = props;
  const newPaymentMode = factorAttributeValues&&Object.values(factorAttributeValues).map(item => item.paymentMode);
  const arr1 = Object.values(fixedChannelRulesFirstValues);
  const arr2 = Object.values(fixedChannelRulesSecValues);
  const arrTotal = [...arr1, ...arr2];
  const formItemLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const { Option } = Select;
  const TableColumns = [
    {
      title: '起租时间/周期（起始）',
      dataIndex: 'planBegin',
      key: 'planBegin',
      width: '10%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '还款日/周期',
      dataIndex: 'planDay',
      key: 'planDay',
      width: '10%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '起租时间/周期（结束）',
      dataIndex: 'planEnd',
      key: 'planEnd',
      width: '10%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
  ];
  const TableRuleColumns = [
    {
      title: '选择渠道属性',
      dataIndex: 'benefitKey',
      key: 'benefitKey',
      width: '21%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '规则',
      dataIndex: 'benefitMode',
      key: 'benefitMode',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '最低金额',
      dataIndex: 'mixAmount',
      key: 'mixAmount',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '最高金额',
      dataIndex: 'maxAmount',
      key: 'maxAmount',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '对比方',
      dataIndex: 'benefitRef',
      key: 'benefitRef',
      width: '15%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '方案额度',
      dataIndex: 'benefitAmount',
      key: 'benefitAmount',
      width: '15%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
  ];
  const TableSupplementaryRulesColumns = [
    {
      title: '选择押金项',
      dataIndex: 'benefitKey',
      key: 'benefitKey',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '金融/比例',
      dataIndex: 'benefitMode',
      key: 'benefitMode',
      width: '12%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '最低限额',
      dataIndex: 'mixAmount',
      key: 'mixAmount',
      width: '12%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '最高限额',
      dataIndex: 'maxAmount',
      key: 'maxAmount',
      width: '12%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '对比方',
      dataIndex: 'benefitRef',
      key: 'benefitRef',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '收取方式',
      dataIndex: 'paymentType',
      key: 'paymentType',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '退还方式',
      dataIndex: 'planMode',
      key: 'planMode',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
  ];
  const TableRuleListOfServiceChargesColumns = [
    {
      title: '选择服务项',
      dataIndex: 'paymentKey',
      key: 'paymentKey',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '金额/比例',
      dataIndex: 'paymentMode',
      key: 'paymentMode',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '最低限额',
      dataIndex: 'mixAmount',
      key: 'mixAmount',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '最高限额',
      dataIndex: 'maxAmount',
      key: 'maxAmount',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '对比方',
      dataIndex: 'paymentRef',
      key: 'paymentRef',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
    {
      title: '收取方式',
      dataIndex: 'paymentType',
      key: 'paymentType',
      width: '16%',
      align: 'center',
      render: val => {
        if (val) {
          return val;
          // eslint-disable-next-line no-else-return
        } else {
          return '--';
        }
      },
    },
  ];
  return (
    <Card bordered={false}>
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <Row gutter={50}>
          <Col lg={24}>
            <Form.Item {...formItemLayout} label="首付">
              <Radio.Group defaultValue={newPaymentMode[0]} disabled>
                <Radio value="1">金额</Radio>
                <Radio value="2">比例</Radio>
              </Radio.Group>
            </Form.Item>
            {newPaymentMode[0] == '1' ? (
              <>
                <Form.Item {...formItemLayout} label="最低金额">
                  {props && factorAttributeValues
                    ? Object.values(factorAttributeValues).map(item => `${item.mixAmount}元`)
                    : '-----'}
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高金额">
                  {props && factorAttributeValues
                    ? Object.values(factorAttributeValues).map(item => `${item.maxAmount}元`)
                    : '-----'}
                </Form.Item>
                <Form.Item {...formItemLayout} label="收取方式">
                  {props && factorAttributeValues
                    ? Object.values(factorAttributeValues).map(item => item.paymentType)
                    : '--'}
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item {...formItemLayout} label="选择对比方式">
                  {props && factorAttributeValues
                    ? Object.values(factorAttributeValues).map(item => item.paymentRef)
                    : '--'}
                </Form.Item>
                <Form.Item {...formItemLayout} label="最低比例">
                  {props && factorAttributeValues
                    ? Object.values(factorAttributeValues).map(item => item.minProportion)
                    : '--'}
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高比例">
                  {props && factorAttributeValues
                    ? Object.values(factorAttributeValues).map(item => item.maxProportion)
                    : '--'}
                </Form.Item>
                <Form.Item {...formItemLayout} label="收取方式">
                  {props && factorAttributeValues
                    ? Object.values(factorAttributeValues).map(item => item.paymentType)
                    : '--'}
                </Form.Item>
              </>
            )}
          </Col>
          <Col lg={24}>
            <Form.Item label="还款周期" {...formItemLayout}>
              {props && repaymentPeriodValues ? repaymentPeriodValues.templatePeriod : '--'}
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item label="期限" {...formItemLayout}>
              <Input
                addonAfter="次"
                style={{ width: 300 }}
                disabled
                defaultValue={
                  props && totalFinancingValues ? totalFinancingValues.schemaLimit : '--'
                }
              />
              <span style={{ color: 'red' }}>
                {repaymentPeriodValues.minLimit || '_'}次~
                {repaymentPeriodValues.maxLimit || '_'}次
              </span>
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item label="利率" {...formItemLayout}>
              <Input
                addonAfter="%"
                style={{ width: 300 }}
                disabled
                defaultValue={
                  props && totalFinancingValues ? totalFinancingValues.schemaInterest : '--'
                }
              />
              <span style={{ color: 'red' }}>
                {repaymentPeriodValues.minInterest
                  ? parseFloat(repaymentPeriodValues.minInterest).toFixed(6)
                  : '--'}
                %~
                {repaymentPeriodValues.maxInterest
                  ? parseFloat(repaymentPeriodValues.maxInterest).toFixed(6)
                  : '--'}
                %
              </span>
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item {...formItemLayout} label="起租及还款日规则">
              <Radio.Group defaultValue={rulesPaymentValues.planMode} disabled>
                <Radio value="1">固定还款日</Radio>
                <Radio value="2">根据起租日设置还款日</Radio>
                <Radio value="3">起租日即还款日</Radio>
              </Radio.Group>
            </Form.Item>
            {props && rulesPaymentValues.planMode === '1' ? (
              <>
                <Form.Item {...formItemLayout} label="还款日:" disabled>
                  <Input
                    placeholder="请输入期限"
                    addonAfter="/周期"
                    style={{ width: 400 }}
                    disabled
                    defaultValue={props && rulesPaymentValues ? rulesPaymentValues.planDay : '--'}
                  />
                </Form.Item>
              </>
            ) : null}

            {rulesPaymentValues.planMode === '2' ? (
              <Row type="flex" justify="center">
                <Col span={18}>
                  <Table
                    rowKey="id"
                    dataSource={Object.values(startingdateSetrepaymentValues)}
                    columns={TableColumns}
                    bordered
                    pagination={false}
                  />
                </Col>
              </Row>
            ) : (
              '--'
            )}

            {props && rulesPaymentValues.planMode === '3' ? (
              <>
                <Form.Item {...formItemLayout} label="起租日即还款日">
                  <>3333333333</>
                </Form.Item>
              </>
            ) : null}
          </Col>
          <Col lg={24}>
            <Form.Item {...formItemLayout} label="融资总额" disabled>
              <Input
                addonAfter="元"
                style={{ width: 300 }}
                disabled
                defaultValue={
                  props && totalFinancingValues ? totalFinancingValues.packageTotal : '--'
                }
              />
              <span style={{ color: 'red' }}>
                {repaymentPeriodValues.loanAmountMin ? repaymentPeriodValues.loanAmountMin : '--'}
                元~
                {repaymentPeriodValues.loadAmountMax ? repaymentPeriodValues.loadAmountMax : '--'}元
              </span>
            </Form.Item>
          </Col>
          <Col lg={24}>
            <Form.Item {...formItemLayout} label="计息方式" disabled>
              {repaymentPeriodValues ? repaymentPeriodValues.interestKey : '--'}
            </Form.Item>
          </Col>
          <Form.Item label="渠道固定分润规则">
            <Row type="flex" justify="center">
              <Col span={24}>
                <Table
                  rowKey="id"
                  dataSource={arrTotal}
                  columns={TableRuleColumns}
                  bordered
                  pagination={false}
                />
              </Col>
            </Row>
          </Form.Item>
          {supplementaryRulesValues ? (
            <Row gutter={50}>
              <div className={styles.title}>尾款</div>
              <Col lg={24}>
                <Form.Item {...formItemLayout} label="尾款">
                  <Radio.Group>
                    <Radio value="1">金额</Radio>
                    <Radio value="2">比例</Radio>
                  </Radio.Group>
                </Form.Item>
                {true ? (
                  <>
                    <Form.Item {...formItemLayout} label="最低金额">
                      <Input placeholder="请输入最低金额" addonAfter="元" />
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="最高金额">
                      <Input placeholder="请输入最高金额" addonAfter="元" />
                    </Form.Item>
                  </>
                ) : null}
                {true ? (
                  <>
                    <Form.Item {...formItemLayout} label="选择对比方式">
                      <Select placeholder="不限" style={{ width: '100%' }}>
                        {/* {flcs_firstPaymentRef &&
                                Object.entries(flcs_firstPaymentRef).map(item => (
                                  <Option value={item[0]} key={item[1]}>
                                    {item[1]}
                                  </Option>
                                ))} */}
                      </Select>
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="最低比例">
                      <Input placeholder="请输入最低比例" addonAfter="%" />
                    </Form.Item>
                    <Form.Item {...formItemLayout} label="最高比例">
                      <Input placeholder="请输入最高比例" addonAfter="%" />
                    </Form.Item>
                  </>
                ) : null}
                <Form.Item {...formItemLayout} label="收取方式">
                  <Select placeholder="请选择" style={{ width: '100%' }}>
                    {/* {flcs_firstPaymentType &&
                            Object.entries(flcs_firstPaymentType).map(item => (
                              <Option value={item[0]} key={item[0]}>
                                {item[1]}
                              </Option>
                            ))} */}
                  </Select>
                </Form.Item>
                <Form.Item {...formItemLayout} label="处理方式">
                  <Select placeholder="请选择" style={{ width: '100%' }}>
                    {/* {flcs_lastRefundType &&
                            Object.entries(flcs_lastRefundType).map(item => (
                              <Option value={item[0]} key={item[0]}>
                                {item[1]}
                              </Option>
                            ))} */}
                  </Select>
                </Form.Item>
                <div className={styles.title}>定金</div>
                <Form.Item {...formItemLayout} label="最低金额">
                  <Input placeholder="请输入最低金额" addonAfter="元" />
                </Form.Item>
                <Form.Item {...formItemLayout} label="最高金额">
                  <Input placeholder="请输入最高金额" addonAfter="元" />
                </Form.Item>
                <div className={styles.title}>押金列表</div>
                <Table
                  rowKey="id"
                  dataSource={arrTotal}
                  columns={TableSupplementaryRulesColumns}
                  bordered
                  pagination={false}
                  style={{ width: '100%' }}
                />
                <div className={styles.title}>服务费列表</div>
                <Row type="flex" justify="center">
                  <Col span={24}>
                    <Table
                      rowKey="id"
                      dataSource={arrTotal}
                      columns={TableRuleListOfServiceChargesColumns}
                      bordered
                      pagination={false}
                      style={{ width: '100%' }}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          ) : null}
        </Row>
      </Form>
    </Card>
  );
};
