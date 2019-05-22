import React from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
const columns = [
  {
    title: '申请状态',
    dataIndex: 'name',
    render: val => (
      <Link to={{ pathname: '/works/finished/enterorder/detail' }}>
        {val}
      </Link>
    ),
  },
  {
    title: '申请编号',
    dataIndex: 'desc',
  },
  {
    title: '购车人',
    dataIndex: 'status',
  },

  {
    title: '申请选购车型',
    width:280,
    dataIndex: 'title',
  },
  {
    title: '当前节点',
    dataIndex: 'owner',
  },

  {
    title: '申请时间',
    dataIndex: 'updatedAt',
  },
];
export default props => {
  const { pagination, list } = props;
  const handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const { dispatch } = props;
    // const { formValues } = this.state;
    const filters = Object.keys(filtersArg).reduce((obj, key) => {
      const newObj = { ...obj };
      newObj[key] = getValue(filtersArg[key]);
      return newObj;
    }, {});

    const params = {
      currentPage: pagination.current,
      pageSize: pagination.pageSize,
      // ...formValues,
      ...filters,
    };
    if (sorter.field) {
      params.sorter = `${sorter.field}_${sorter.order}`;
    }

    dispatch({
      type: 'rule/fetch',
      payload: params,
    });
  };
  return (
    <Table
      rowKey={'key'}
      loading={false}
      dataSource={list}
      columns={columns}
      pagination={{ showSizeChanger: true, showQuickJumper: true, ...pagination }}
      onChange={handleStandardTableChange}
    />
  );
};
