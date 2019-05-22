import React from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import {productTypeJson,storeStatusJson} from './../../../StockInfoDetail/status'

export default props => {
  const columns = [
    {
      title: '库存状态',
      dataIndex: 'storeStatus',
      render:status=><>{storeStatusJson[status]}</>
    },
    {
      title: '商品ID（车架号)',
      dataIndex: 'vin',
      render: (val, { id }) => (
        <Link to={{ pathname: '/store/stock/stockinfo/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '商品简称',
      width:280,
      dataIndex: 'referred',
    },
    {
      title: '商品存放仓库',
      dataIndex: 'storeName',
    },
    {
      title: '入库时间',
      dataIndex: 'inTime',
      render: date => <>{formatTime(date)}</>,
    },
    {
      title: '出库时间',
      dataIndex: 'outTime',
      render: date => <>{date?formatTime(date):'--'}</>,
    },
  ];
  const handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      listData: { formValues },
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
      type: 'listData/fetch',
      payload: params,
    });
  };
  const {loading,listData:{list, pageNum: current, total, pageSize}}=props;
  return (
    <Table
      rowKey={'id'}
      loading={loading}
      dataSource={list}
      columns={columns}
      pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
      onChange={handleStandardTableChange}
    />
  );
};
