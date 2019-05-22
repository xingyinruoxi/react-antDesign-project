import React from 'react';
import { Table,Icon } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
export default props => {  
  const columns = [
    {
      title: '方案状态',
      dataIndex: 'schemaStatus',
      render: val => <Link to="/goods/plan/list/detail">{val}</Link>,
    },
    {
      title: '关联渠道',
      dataIndex: 'channelAssociated',
    },
    {
      title: '产品方案名称',
      dataIndex: 'schemaName',
    },
    {
      title: '产品利率',
      dataIndex: 'schemaInterest',
    },
    {
      title: '产品期数',
      dataIndex: 'schemaLimit',
    },
    {
      title: '首付（元）',
      dataIndex: 'firstPayment',
    },
    {
      title: '上架时间',
      dataIndex: 'startDate',
      render: date => <>{formatTime(date)}</>,
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
      fixed: 'right',
      width: 80,
      render: (text, item) => {
        return (
          <a
            onClick={e => {
              e.preventDefault();
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
    goodPlanList: { formValues },
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
      type: 'goodPlanList/fetch',
      payload: params,
    });
  };
  const {loading,goodPlanList:{list, pageNum: current, total, pageSize}}=props;
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
