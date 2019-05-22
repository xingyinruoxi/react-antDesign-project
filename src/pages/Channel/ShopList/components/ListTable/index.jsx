import React, { PureComponent } from 'react';
import { Button, Popconfirm, Icon, message } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import StandardTable from '@/components/StandardTable';
import styles from './../../assets/css/TableList.less';
import { connect } from 'dva';
let statusJson={
  1:'启用',
  2:'待启用',
  3:'修改待启用',
  4:'停用',
  5:'转岗'
}
@connect(state => {
  return {
    shopListStop: state.shopListStop,
    loading: state.loading.models.shopListStop,
  };
})
export class ListTable extends PureComponent {
  state = {
    selectedRows: [],
  };
  
  columns = [
    {
      title: '账号状态',
      dataIndex: 'status', 
      render: val =><>{statusJson[val]}</>
    },
    {
      title: '登录账号',
      dataIndex: 'username',
      render: username => (
        <Link to={{ pathname: '/channel/shop/list/detail', query: { username } }}>{username || '--'}</Link>
      ),
    },
    {
      title: '姓名',
      dataIndex: 'realName',
    },
    {
      title: '所属店端名称',
      dataIndex: 'channeName',
      render: channeName => <>{channeName||'--'}</>,
    },
    {
      title: '岗位',
      dataIndex: 'roleName',
    },
    {
      title: '联系电话',
      dataIndex: 'phoneNum',
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
      render:createBy=><>{createBy||'--'}</>
    },
    {
      title: '录入时间',
      dataIndex: 'createTime',
      render: date => <>{formatTime(date) || '--'}</>,
    },
    {
      title: '启用人',
      dataIndex: 'startUser',
      render:updateBy=><>{updateBy||'--'}</>
    },
    {
      title: '启用时间',
      dataIndex: 'startTime',
      render: startTime => <>{startTime?formatTime( startTime):'--'}</>,
    },
    {
      title: '变更人',
      dataIndex: 'updateBy',
      render:updateBy=><>{updateBy||'--'}</>
    },
    {
      title: '变更时间',
      dataIndex: 'updateTime',
      render: updateTime => <>{updateTime?formatTime( updateTime):'--'}</>,
    },
  ];
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      shopList: { formValues },
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
      type: 'shopList/fetch',
      payload: params,
    });
  };
  onHandleStop = () => {
    const { dispatch } = this.props;

    const { selectedRows } = this.state;
    const listId = selectedRows.map(({ id }) => {
      return id;
    });
    dispatch({
      type: 'shopListStop/submit',
      payload: {
        data: {
          users: listId,
        },
      },
      callBack(msg) {
        if (msg === 'OK') {
          message.success('停用成功');
          dispatch({
            type: 'shopList/fetch',
            payload: {
              limit: 10,
              queryCondition: {},
            },
          });
        } else {
          message.success(msg);
        }
      },
    });
  };
  
  onSure = () => {
    const { selectedRows } = this.state;
    const { dispatch } = this.props;
    const listId = selectedRows.map(({ id }) => {
      return id;
    });
    dispatch({
      type: 'shopListOpen/submit',
      payload: {
        data: {
          users: listId,
        },
      },
      callBack(msg) {
        if (msg === 'OK') {
          message.success('启用成功');
          dispatch({
            type: 'shopList/fetch',
            payload: {
              limit: 10,
              queryCondition: {},
            },
          });
        } else {
          message.success(msg);
        }
      },
    });
  };
  render() {
    const {
      loading,
      shopList: { list, pageNum: current, total, pageSize },
    } = this.props;
    const { selectedRows } = this.state;
    return (
      <>
        <div className={styles.tableList}>
          <div className={styles.tableListOperator}>
            {selectedRows.length > 0 && (
              <>
                <Button type="primary" onClick={this.onSure}>
                  <Icon type="play-circle" />
                  启用
                </Button>
                <Popconfirm
                  title="您确定要停用这些账号吗？"
                  icon={<Icon type="question-circle-o" />}
                  onConfirm={this.onHandleStop}
                >
                  <Button>停用</Button>
                </Popconfirm>
              </>
            )}
          </div>
        </div>
        <StandardTable
          scroll={{ x: 1700 }}
          loading={loading}
          rowKey={'id'}
          columns={this.columns}
          onChange={this.handleStandardTableChange}
          dataSource={list}
          selectedRows={selectedRows}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
          onSelectRow={this.handleSelectRows}
        />
      </>
    );
  }
}
export default ListTable;
