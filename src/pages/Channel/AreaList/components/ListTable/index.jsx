import React,{ PureComponent } from 'react';
import { Table, Button } from 'antd';
import { formatTime } from '@/utils/utils';
import Link from 'umi/link';
import { leveltypeJson } from '../../status';
export class ListTable extends PureComponent {
  state = {
    selectedRows: [],
  };
  columns = [
    {
      title: '区域名称',
      dataIndex: 'name',
    },
    {
      title: '区域级别',
      dataIndex: 'leveltype',
      width:'100px',
      render: leveltype => <>{leveltypeJson[leveltype] || '--'}</>
    },
    {
      title: '关联地域（省份、城市、区县）',
      dataIndex: 'showName',
      render: showName => <>{showName || '--'}</>,
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
      render: createBy => <>{createBy || '--'}</>,
    },
    {
      title: '录入时间',
      dataIndex: 'createTime',
      render: createTime => <>{formatTime(createTime) || '--'}</>,
    },
    {
      title: '操作',
      dataIndex: 'id',
      width:'100px',
      render: id => {
        return (
            <Link to={{ pathname: '/channel/area/list/areaedit', query: { id } }}>编辑</Link>
        );
      },
    },
  ];
  render(){
    const {loading,areaList:{data}}=this.props;
    return (
      <Table columns={this.columns} dataSource={data} rowKey={'id'} />
    );
  }
};
export default ListTable;
