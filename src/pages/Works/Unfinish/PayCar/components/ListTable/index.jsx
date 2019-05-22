import React, { PureComponent } from 'react';
import { Button, Icon, Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import styles from './../../assets/css/TableList.less';
import orderStatus from '@/utils/orderStatus';
export default class extends PureComponent {
  columns = [
    {
      title: '提车状态',
      dataIndex: 'tbTradeInfoDTO.status',
      render: status => <>{orderStatus[status]}</>,
    },
    {
      title: '申请编号',
      dataIndex: 'tbTradeInfoDTO.tradeCode',
      render: (val, { tbTradeInfoDTO: { tradeCode } }) => (
        <Link
          to={{
            pathname: '/works/unfinish/paycar/detail',
            query: { tradeCode },
          }}
        >
          {val}
        </Link>
      ),
    },
    {
      title: '合同编号',
      dataIndex: 'tbTradeInfoDTO.tbContractNo',
      render: (val, { tbTradeInfoDTO: { tradeCode } }) => (
        <Link to={{ pathname: '/works/unfinish/paycar/detail', query: { tradeCode } }}>{val}</Link>
      ),
    },
    {
      title: '购车人',
      dataIndex: 'tbTradeInfoDTO.name',
    },
    {
      title: '申请选购车型',
      width:280,
      dataIndex: 'tbTradeInfoDTO.carShowName',
      render: carShowName => <>{carShowName || '--'}</>,
    },
    {
      title: '提交时间',
      dataIndex: 'tbTradeInfoDTO.createTime',
      render: date => <>{formatTime(date)}</>,
    },
  ];
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      payCarList: { formValues },
    } = props;
    /* const filters = Object.keys(filtersArg).reduce((obj, key) => {
          const newObj = { ...obj };
          newObj[key] = getValue(filtersArg[key]);
          return newObj;
        }, {}); */
    const params = {
      page: pagination.current,
      limit: pagination.pageSize,
      queryCondition: { ...formValues },
      // ...filters,
    };
    /* if (sorter.field) {
          params.sorter = `${sorter.field}_${sorter.order}`;
        } */

    dispatch({
      type: 'payCarList/fetch',
      payload: params,
    });
  };

  render() {
    const {
      loading,
      payCarList: { list, pageNum: current, total, pageSize },
    } = this.props;
    const newList =
      list &&
      list.map(item => {
        return { ...item, key: Math.random() };
      });
    return (
      <>
        <Table
          rowKey={'key'}
          loading={loading}
          dataSource={newList}
          columns={this.columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
          onChange={this.handleStandardTableChange}
        />
      </>
    );
  }
}
