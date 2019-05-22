import React, { PureComponent } from 'react';
import { Button, Icon, Table } from 'antd';

import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import styles from './../../assets/css/TableList.less';
import orderStatus from '@/utils/orderStatus';
export default props => {
  const columns = [
    {
      title: '申请状态',
      dataIndex: 'tbTradeInfoDTO.status',
      render: state => <>{orderStatus[state]}</>,
    },
    {
      title: '申请编号',
      dataIndex: 'tbTradeInfoDTO.tradeCode',
      render: (val, { tbTradeInfoDTO: { tradeCode } }) => (
        <Link
          to={{
            pathname: '/works/finished/enterorder/detail',
            query: { tradeCode },
          }}
        >
          {val}
        </Link>
      ),
    },
    {
      title: '购车人',
      dataIndex: 'customerAllInfo.name',
    },
    {
      title: '申请选购车型',
      width:280,
      dataIndex: 'tbTradeInfoDTO.carShowName',
      render: carShowName => <>{carShowName || '--'}</>,
    },
    /*  {
      title: '当前节点',
      dataIndex: 'tbTradeInfoDTO.status',
    }, */
    {
      title: '申请时间',
      dataIndex: 'tbTradeInfoDTO.createTime',
      render: createTime => <>{formatTime(createTime)}</>,
    },
  ];
  // handleSelectRows = rows => {
  //   this.setState({
  //     selectedRows: rows,
  //   });
  // };
  const handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      finishEnterorder: { formValues },
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
      type: 'finishEnterorder/fetch',
      payload: params,
    });
  };
  const {loading,finishEnterorder:{list, pageNum: current, total, pageSize}}=props;
  const newList = list.map(item => {
    return { ...item, key: Math.random() };
  });
  return (
    <Table
      rowKey={'key'}
      loading={loading}
      dataSource={newList}
      columns={columns}
      pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
      onChange={handleStandardTableChange}
    />
  );
};
