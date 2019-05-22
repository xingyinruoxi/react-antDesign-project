import React, { PureComponent } from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
import HistoryDetail from './components/historyDetail';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';

const dataSource = [
  {
    key: '1',
    name: '已实际放款的合同',
    code: 'OL-A000000001',
    user: '付小小',
    phone: '18800223112',
    address: '欧拉保定创业店',
    name2: '付小小',
    name3: '付小小',
    state: '9',
  },
  {
    key: '2',
    name: '已实际放款的合同',
    code: 'OL-A000000001',
    user: '付小小',
    phone: '18800223112',
    address: '欧拉保定创业店',
    name2: '付小小',
    name3: '付小小',
    state: '9',
  },
];
@connect(state => {
  return {
    orderDetail: state.orderDetail,
    loading: state.loading.models.tradeHistory,
    tradeHistory: state.tradeHistory,
  };
})
export default class extends PureComponent {
  state = { modalVisible: false };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tradeCode },
      },
    } = this.props;
    dispatch({
      type: 'tradeHistory/fetch',
      payload: {
        queryCondition: {
          bigStatus: '2',
          tradeCode,
          tradeStatus: '2003',
        },
      },
    });
  }
  handelModal = () => {
    this.setState({
      modalVisible: true,
    });
  };
  columns = [
    {
      title: '项目/合同状态',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '申请编号',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: '购车人',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '购车人电话',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '申请店面',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '申请人',
      dataIndex: 'name2',
      key: 'name2',
    },
    {
      title: '角色',
      dataIndex: 'name3',
      key: 'name3',
    },
    {
      title: '操作',
      dataIndex: 'state',
      key: 'state',
      render: (text, item) => {
        return (
          <>
           {/*  <a
              onClick={e => {
                e.preventDefault();
                this.handelModal();
              }}
            >
              历史信息
            </a>
            &emsp; */}
            <Link to={{ pathname: '/trade/list/detail' }}>申请详情</Link>
          </>
        );
      },
    },
  ];
  render() {
    const { modalVisible } = this.state;
    const {
      tradeHistory: { list },
    } = this.props;
    const newList = list&&list.map(item => {
      return {
        ...item,
        key: Math.random(),
      };
    });
    return (
      <>
        <Table
          dataSource={newList}
          size="middle"
          columns={this.columns}
          bordered
          rowKey={'key'}
          pagination={false}
        />
        {modalVisible ? (
          <>
            <div style={{ paddingTop: '15px' }}>&nbsp;</div>
            <HistoryDetail />
          </>
        ) : null}
      </>
    );
  }
}
