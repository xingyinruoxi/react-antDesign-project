import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import { render } from '@/app';
import { connect } from 'dva';
const { Description } = DescriptionList;
const orderStatus = {
  1: '通过',
  2: '补充资料',
};

const columns = [
  {
    title: '审核时间',
    dataIndex: 'auditTime',
    key: 'auditTime',
    render: date => formatTime(date),
  },
  {
    title: '审核节点',
    dataIndex: 'point',
    key: 'point',
    render: point => <>提车审核</>,
  },
  {
    title: '处理人',
    dataIndex: 'auditBy',
    key: 'auditBy',
    render: auditBy => auditBy || '--',
  },
  {
    title: '结论',
    width:200,
    dataIndex: 'auditResult',
    key: 'auditResult',
    render: auditResult => orderStatus[auditResult] || '--',
  },
  {
    title: '意见',
    width:200,
    dataIndex: 'auditOpinion',
    key: 'auditOpinion',
    render: auditOpinion => auditOpinion || '--',
  },
];
@connect(state => {
  return {
    payCarHistory: state.payCarHistory,
    payCarResult: state.payCarResult,
    loading: state.loading.models.payCarHistory,
  };
})
export default class extends PureComponent {
  state = {
    operationkey: 'tab1',
  };
  onOperationTabChange = key => {
    this.setState({ operationkey: key });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tradeCode: tbTradeInfoCode },
      },
      orderDetail,
    } = this.props;
    if (!orderDetail.tradeInfo) return;
    const { id: tbTradeInfoId } = orderDetail.tradeInfo;
    dispatch({
      type: 'payCarResult/fetch',
      payload: {
        data: {
          tbTradeInfoCode,
          tbTradeInfoId,
        },
      },
    });
  }

  render() {
    const { loading, payCarResult:{auditResult,auditOpinion}, carHistoryList } = this.props;
    const contentList = {
      tab1: (
        <DescriptionList size="large" col="1" layout="horizontal">
          <Description term="结论">{auditResult?'通过':'退回补充资料'}</Description>
          <Description term="意见">{auditOpinion||'--'}</Description>
        </DescriptionList>
      ),
      tab2: <Table dataSource={carHistoryList} bordered pagination={false} columns={columns} />,
    };
    const { operationkey } = this.state;
    return (
      <Card
        loading={loading}
        bordered={false}
        style={{ marginTop: 24 }}
        tabList={[
          {
            key: 'tab1',
            tab: '审批结论',
          },
          {
            key: 'tab2',
            tab: '审批记录',
          },
        ]}
        onTabChange={this.onOperationTabChange}
      >
        {contentList[operationkey]}
      </Card>
    );
  }
}
