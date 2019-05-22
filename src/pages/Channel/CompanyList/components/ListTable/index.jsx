import React,{PureComponent } from 'react';
import { Table } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
class ListTable extends PureComponent {
  columns = [
    {
      title: '集团编号',
      dataIndex: 'code',
      render: (val, { id }) => (
        <Link to={{ pathname: '/channel/company/list/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '集团名称',
      dataIndex: 'name',
    },
    {
      title: '集团地域（省份、城市、区县）',
      dataIndex: 'cityShowName',
      render: cityShowName => <>{cityShowName || '--'}</>,
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
      render: createBy => <>{createBy || '--'}</>,
    },
    {
      title: '录入时间',
      dataIndex: 'createtime',
      // render: date => <>{formatTime(date)}</>, 
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: (id) => <Link to={{pathname:'/channel/company/list/edit/info',query:{id}}}>编辑</Link>, 
    }, 
  ];
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      companyList: { formValues },
    } = this.props;
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
      type: 'companyList/fetch',
      payload: params,
    });
  };
    render(){
      const {loading,companyList:{list, pageNum: current, total, pageSize}}=this.props;
      return (
        <Table
          rowKey={'id'}
          loading={loading}
          dataSource={list}
          columns={this.columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
          onChange={this.handleStandardTableChange}
        />
      );
    }
};
export default ListTable;