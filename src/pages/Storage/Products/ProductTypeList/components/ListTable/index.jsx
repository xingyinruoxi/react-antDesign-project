import React from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
export default props => {
  const columns = [
    {
      title: '型号编号',
      dataIndex: 'code',
      render: (val, { id }) => (
        <Link to={{ pathname: '/store/products/producttype/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '型号名称',
      dataIndex: 'name',
    },
    {
      title: '所属厂家品牌',
      dataIndex: 'brandName',
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
      productTypeList: { formValues },
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
      type: 'productTypeList/fetch',
      payload: params,
    });
  };
  const {loading,productTypeList:{list, pageNum: current, total, pageSize}}=props;
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
