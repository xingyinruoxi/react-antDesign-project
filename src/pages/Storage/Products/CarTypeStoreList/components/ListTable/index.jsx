import React from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
export default props => {
  const columns = [
    {
      title: '商品状态',
      dataIndex: 'status',
      render: status => <>{props.cm_status[status]}</>,
    },
    {
      title: '商品编号',
      dataIndex: 'code',
      render: (code, { id }) => (
        <Link to={{ pathname: '/store/products/cartypestore/detail', query: { id } }}>{code}</Link>
      ),
    },
    {
      title: '商品简称',
      width:280,
      dataIndex: 'referred',
      render:referred=><>{referred||'--'}</>
    },
    {
      title: '所属商品型号',
      dataIndex: 'productName',
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
    },
    {
      title: '录入时间',
      dataIndex: 'createTime',
      render: date => <>{formatTime(date)}</>,
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (id) => <Link to={{pathname:'/store/products/cartypestore/edit/info',query:{id}}}>编辑</Link>,
    },
  ];
  const handleStandardTableChange = (pagination) => {
    const {
      dispatch,
      carTypeList: { formValues },
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
      type: 'carTypeList/fetch',
      payload: params,
    });
  };
  const {
    loading,
    carTypeList: { list, pageNum: current, total, pageSize },
  } = props;
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
