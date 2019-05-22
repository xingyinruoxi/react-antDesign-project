import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
import OrderDetail from '@/components/OrderDetail';
import ContractInfo from '@/components/ContractInfo';
import TabApproval from '@/components/TabApproval';

import FormList from './components/FormList';

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

@connect(state => {
  return {
    typeDataTotal:state.typeDataTotal
  };
})
export default class extends PureComponent {
  render() {
 
    const hasFormList=this.props.location.pathname.includes('unfinish');

    return (
      <OrderDetail>
        <Card bordered={false} title={'合同信息'}>
          <ContractInfo typeDataTotal={typeDataTotal} />
        </Card>
        {hasFormList ? (
          <>
            <Card bordered={false} title="审批记录" style={{ marginTop: 24 }}>
              <Table dataSource={dataSource} bordered pagination={false} columns={columns} />
            </Card>
            <FormList />
          </>
        ) : (
          <TabApproval />
        )}
      </OrderDetail>
    );
  }
}
