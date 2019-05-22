import React, { PureComponent } from 'react';
import { Button, Icon, Divider, Table,message } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import styles from './../../assets/css/TableList.less';
let isJson={
  0:'未设置',
  1:'已设置',
}
let statusJson={
  0:'暂停',
  1:'在营',
  2:'退网'
}
let cooperationJson={
  0:'自营',
  1:'加盟',
  2:'入驻'
}
export class ListTable extends PureComponent {
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      channelList: { formValues },
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
      type: 'channelList/fetch',
      payload: params,
    });
  };
  render() {
    const {
      loading,
      channelList: { list, pageNum: current, total, pageSize },
      handleModalPosition,
      handleModalProject,
      handleModalCacheForm,
      typeDataTotal: { ch_status },
    } = this.props;
    const columns = [
      {
        title: '渠道状态',
        dataIndex: 'status',
        width:100,
        render: val => <>{statusJson[val] || '--'}</>,
      },
      {
        title: '管理员',
        dataIndex: 'isAdmin',
        width:80,
        render: val =><> {isJson[val]}</>
      },
      // {
      //   title: '关键岗位',
      //   dataIndex: 'isPost',
      //   render: val =><> {isJson[val]}</>
      // },
      {
        title: '关联产品',
        dataIndex: 'isProduct',
        width:100,
        render: val =><> {isJson[val] || '--'}</>
      },
      {
        title: '渠道名称',
        dataIndex: 'name',
        render: (val, { id }) => (
          <Link to={{ pathname: '/channel/channel/list/detail', query: { id } }}>{val}</Link>
        ),
      },
      {
        title: '渠道地域（省份、城市、区县）',
        dataIndex: 'cityShowName',

        render: cityShowName => <>{cityShowName || '--'}</>,
      },
      {
        title: '合作方式',
        dataIndex: 'cooperation',
        width:100,

        render: cooperation => <>{cooperationJson[cooperation] || '--'}</>,
      },
      {
        title: '创建人',
        dataIndex: 'createBy',
        width:100,

        render: createBy => <>{createBy || '--'}</>,
      },
      {
        title: '操作',
        dataIndex: 'id',
        fixed: 'right',
        width: 200,
        render: (id,item) => {
          return (
            <>
              <Link to={{ pathname: '/channel/channel/list/edit/info', query: { id } }}>编辑</Link>
              <Divider type="vertical" />
              <a onClick={(e) => {
                  e.preventDefault();
                  const { isAdmin } = item
                  if(isAdmin == 1){
                    message.error('已设置管理员')
                    return;
                  }else{
                    handleModalCacheForm(true,item);
                  }
                }}>
                管理员
              </a>
              <Divider type="vertical" />
              {/* <a onClick={(e) => {
                  e.preventDefault();
                  handleModalPosition(true,id,item);
                }}>
                关联设置
              </a> */}
              <a onClick={(e) => {
                  e.preventDefault();
                  handleModalProject(true,id,item);
                }}>
                关联产品
              </a>
            </>
          );
        },
      },
    ];
    return (
      <>
        <div className={styles.tableList}>
          <div className={styles.tableListOperator}>
            <Link to={{ pathname: '/channel/channel/list/add' }}>
              <Button type="primary">
                <Icon type="plus" />
                新增
              </Button>
            </Link>
            {/* <Button
              onClick={e => {
                handleModalPosition(true);
              }}>
              批量设置关键岗位
            </Button> */}
            {/* {selectedRows.length > 0 && (
              <>
                <Button
                  onClick={e => {
                    handleModalProject(true);
                  }}
                >
                  批量关联产品
                </Button>
              </>
            )} */}
          </div>
        </div>
        <Table
          scroll={{ x: 1200 }}
          rowKey={'id'}
          loading={loading}
          columns={columns}
          onChange={this.handleStandardTableChange}
          dataSource={list}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
        />
      </>
    );
  }
}
export default ListTable;
