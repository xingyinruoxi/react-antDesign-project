import React from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
export default props => {
  const {st_storeLevel,st_houseStatus}=props;
  const columns = [
    {
      title: '仓库状态',
      dataIndex: 'storeStatus',
      render:(storeStatus)=><>{st_houseStatus&&st_houseStatus[storeStatus]}</>
    },
    {
      title: '仓库名称',
      dataIndex: 'storeName',
      render: (val,{id}) => <Link to={{pathname:'/store/stock/storehouse/detail',query:{id}}}>{val}</Link>,
    },
    {
      title: '仓库地域（省份、城市、区县）',
      dataIndex: 'storeAddrDetail',
      render:(val,{storeAddrProvince,storeAddrCity,storeAddrCounty})=><>{storeAddrProvince+storeAddrCity+storeAddrCounty  ||'--'}</>
    },
    {
      title: '仓库级别',
      dataIndex: 'storeLevel',
      render:(level)=><>{st_storeLevel&&st_storeLevel[level]||'--'}</>
    },
    {
      title: '上级仓库',
      dataIndex: 'storeParentName',
      render:(storeParentName)=><>{storeParentName||'--'}</>

    },
    {
      title: '录入人',
      dataIndex: 'createBy',
      render:(createBy)=><>{createBy||'--'}</>

    },
    {
      title: '录入时间',
      dataIndex: 'createTime',
      render:date=><>{formatTime(date)}</>
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (id) => <Link to={{pathname:'/store/stock/storehouse/edit',query:{id}}}>编辑</Link>
    },
  ];
  const handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      storeHouse: { formValues },
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
      type: 'storeHouse/fetch',
      payload: params,
    });
  };
  const {loading,storeHouse:{list, pageNum: current, total, pageSize}}=props;
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
