import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import { render } from '@/app';
const { Description } = DescriptionList;
const columns = [
  {
    title: '审核时间',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '审核节点',
    dataIndex: 'point',
    key: 'point',
  },
  {
    title: '处理人',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: '结论',
    width:200,
    dataIndex: 'result',
    key: 'result',
  },
  {
    title: '意见',
    width:200,
    dataIndex: 'commit',
    key: 'commit',
  },
];
const dataSource = [
  {
    key: '1',
    time: '2019-01-15 10:34',
    point: '提车审核',
    user: '胡彦斌',
    result: '通过',
    commit: '',
  },
  {
    key: '2',
    time: '2019-02-15 13:34',
    point: '提车审核',
    user: 'Jake',
    result: '退回补充资料',
    commit: '缺失车辆行驶证',
  },
];

export default class extends PureComponent {
  state = {
    operationkey: 'tab1',
  };
  onOperationTabChange = key => {
    this.setState({ operationkey: key });
  };
  render() {
    const contentList = {
      tab1: (
        <DescriptionList size="large" col="1" layout="horizontal">
          <Description term="结论">同意</Description>
          <Description term="意见">长城汽车长城汽车长城汽车</Description>
        </DescriptionList>
      ),
      tab2: <Table dataSource={dataSource} bordered pagination={false} columns={columns} />,
    };
    const { operationkey } = this.state;
    return (
      <Card
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
