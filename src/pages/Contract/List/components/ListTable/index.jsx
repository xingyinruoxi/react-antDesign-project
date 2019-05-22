import React, { PureComponent } from 'react';
import { Button, Icon, Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import styles from './../../assets/css/TableList.less';
export default class extends PureComponent {
  columns = [
    {
      title: '合同状态',
      dataIndex: 'tbTradeInfoDTO.tbContractNo',
    },
    {
      title: '是否重签',
      dataIndex: 'tbTradeInfoDTO.status',
    },
    {
      title: '申请编号',
      dataIndex: 'tbTradeInfoDTO.tradeCode',
      render: (val, { id }) => (
        <Link to={{ pathname: '/contract/list/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '购车人',
      dataIndex: 'customerAllInfo.name',
    },
    {
      title: '申请选购车型',
      width: 280,
      dataIndex: 'tbTradeInfoDTO.carShowName',
      render: carShowName => <>{carShowName || '--'}</>,
    },
    {
      title: '重签状态',
      dataIndex: 'tbTradeInfoDTO.status',
    },
    {
      title: '当前处理人',
      dataIndex: 'tbChannelInfo.name',
    },
    {
      title: '申请时间',
      dataIndex: 'tbTradeInfoDTO.createTime',
      render: createTime => <>{formatTime(createTime)}</>,
    },
  ];

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      ContractList: { formValues },
    } = props;

    const params = {
      page: pagination.current,
      limit: pagination.pageSize,
      queryCondition: { ...formValues },
      // ...filters,
    };

    dispatch({
      type: 'ContractList/fetch',
      payload: params,
    });
  };

  render() {
    const {
      loading,
      ContractList: { list, pageNum: current, total, pageSize },
    } = this.props;
    return (
      <>
        <Table
          scroll={{ x: 1400 }}
          rowKey={'id'}
          loading={loading}
          dataSource={list}
          columns={this.columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
          onChange={this.handleStandardTableChange}
        />
      </>
    );
  }
}
