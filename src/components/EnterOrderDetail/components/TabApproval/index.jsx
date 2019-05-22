import React, { PureComponent } from 'react';
import { Card, Table, Empty } from 'antd';
import { connect } from 'dva';
import DescriptionList from '@/components/DescriptionList';
import { render } from '@/app';
const { Description } = DescriptionList;
import { formatTime } from '@/utils/utils';
import orderStatus from '@/utils/orderStatus';
import reportStatus, { reportVal } from './status/reportStatus.js';
const columns = [
  {
    title: '审核时间',
    dataIndex: 'createTime',
    render: date => <>{formatTime(date)}</>,
  },
  {
    title: '处理人',
    dataIndex: 'createBy',
  },
  {
    title: '结论',
    width: 200,
    dataIndex: 'result',
    render: result => <>{orderStatus[result]}</>,
  },
  {
    title: '意见',
    width: 200,
    dataIndex: 'opinion',
    render: opinion => <>{opinion || '无'}</>,
  },
  {
    title: '备注',
    width: 200,
    dataIndex: 'remark',
    render: remark => <>{remark || '无'}</>,
  },
];
@connect(state => {
  return {
    orderResultInfo: state.orderResultInfo,
    loading: state.loading.models.orderResultInfo,
  };
})
export default class extends PureComponent {
  state = {
    operationkey: 'tab1',
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tradeCode },
      },
    } = this.props;
    if (!tradeCode) return;
    dispatch({
      type: 'orderResultInfo/fetch',
      payload: {
        data: {
          tradeCode,
        },
      },
    });
  }
  onOperationTabChange = key => {
    this.setState({ operationkey: key });
  };
  render() {
    const {
      loading,
      orderResultInfo: { result, record, report },
    } = this.props;

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

    const contentList = {
      tab1: (
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
                <DescriptionList size="large" style={{marginTop:20}} col="1" layout="horizontal">
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
      ),
      tab2: (
        <Table
          rowKey={'id'}
          size={'middle'}
          dataSource={record}
          bordered
          pagination={false}
          columns={columns}
        />
      ),
      tab3: (
        <div>
          {result ? (
            <DescriptionList size="large" col="1" layout="horizontal">
              <Description term="结论">{orderStatus[result.result] || '--'}</Description>
              <Description term="意见">{result.opinion || '--'}</Description>
              <Description term="备注">{result.remark || '--'}</Description>
            </DescriptionList>
          ) : (
            <Empty />
          )}
        </div>
      ),
    };
    const { operationkey } = this.state;

    return (
      <Card
        bordered={false}
        loading={loading}
        style={{ marginTop: 24 }}
        tabList={[
          {
            key: 'tab1',
            tab: '信审报告',
          },
          {
            key: 'tab2',
            tab: '审批记录',
          },
          {
            key: 'tab3',
            tab: '结论',
          },
        ]}
        onTabChange={this.onOperationTabChange}
      >
        {contentList[operationkey]}
      </Card>
    );
  }
}
