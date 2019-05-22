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
      dataIndex: 'carStatus',
      render: state => <>{orderStatus[state]}</>,
    },
    {
      title: '准备状态',
      dataIndex: 'status',
      render: state => <>{orderStatus[state]}</>,
    },
    {
      title: '申请编号',
      dataIndex: 'tradeCode',
      render: (val, { id }) => (
        <Link to={{ pathname: '/works/unfinish/paycar/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '购车人',
      dataIndex: 'customer',
    },
    {
      title: '申请选购车型',
      width:340,
      dataIndex: 'carShowName',
      render: carShowName => <>{carShowName || '--'}</>,
    },
    {
      title: '当前处理人',
      dataIndex: 'todoUser',
    },
    {
      title: '申请时间',
      dataIndex: 'createTime',
      render: createTime => <>{formatTime(createTime)}</>,
    },
  ];
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      takeCarList: { formValues },
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
      type: 'takeCarList/fetch',
      payload: params,
    });
  };

  render() {
    const {
      loading,
      takeCarList: { list, pageNum: current, total, pageSize },
    } = this.props;
    const newList =
      list &&
      list.map(item => {
        return { ...item, key: Math.random() };
      });
    return (
      <>
        <Table
          scroll={{ x: 1400 }}
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
