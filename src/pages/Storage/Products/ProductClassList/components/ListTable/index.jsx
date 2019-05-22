import React from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
export default props => {  
  const columns = [
    {
      title: '类别编号',
      dataIndex: 'code',
      render: (val, { id }) => (
        <Link to={{ pathname: '/store/products/productclass/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '类别名称',
      dataIndex: 'name',
    },
    {
      title: '商品类别等级',
      // sorter: true,
      dataIndex: 'level',
      render: val => <>{props.typeData[val]}</>,
    },
    {
      title: '上级商品类别',
      dataIndex: 'parentName',
      render: val => <>{val || '--'}</>,
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
    },
    {
      title: '录入时间',
      // sorter: true,
      // align: 'right',
      dataIndex: 'createTime',
      render: date => <>{formatTime(date)}</>,
    },
    {
      title: '操作',
      dataIndex: 'callNo',
      render: (text, item) => {
        return (
          <a
            onClick={e => {
              e.preventDefault();
              props.showEditModal(item);
            }}
          >
            编辑
          </a>
        );
      },
    },
  ];
  const handleStandardTableChange = (pagination, filtersArg, sorter) => {

    const {
      dispatch,
      productClassList: { formValues },
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
      type: 'productClassList/fetch',
      payload: params,
    });
  };
  const {loading,productClassList:{list, pageNum: current, total, pageSize}}=props;
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
