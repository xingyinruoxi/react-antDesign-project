import React, { PureComponent } from 'react';
import { Button ,Icon} from 'antd';
import StandardTable from '@/components/StandardTable';

import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import styles from './../../assets/css/TableList.less';
export default class extends PureComponent {
  state = {
    selectedRows: [],
  };
  columns = [
    {
      title: '关联设置',
      dataIndex: 'name',
    },
    {
      title: '产品类型编号',
      dataIndex: 'templateCode',
      render: (val, { id }) => (
        <Link to={{ pathname: '/goods/type/list/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '产品类型名称',
      dataIndex: 'templateName',
      render: val => <Link to="/goods/type/list/detail">{val}</Link>,
    },
    {
      title: '产品类型描述',
      dataIndex: 'templateDesc',
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
      render: createBy => <>{createBy || '--'}</>,
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
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      goodTypeList: { formValues },
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

  render() {
    const {
      loading,
      goodTypeList: { list, pageNum: current, total, pageSize },
    } = this.props;
    const {selectedRows}=this.state;
    return (
      <>
        <div  className={styles.tableList}>
          <div className={styles.tableListOperator}>
            <Link to="/goods/type/list/add">
              <Button type="primary">
                <Icon type="plus" />
                新增
              </Button>
            </Link>
             {selectedRows.length > 0 && (
                <>
                  <Button
                    onClick={e => {
                      // e.preventDefault();
                      this.handleModalPosition(true);
                    }}
                  >
                    批量设置关键岗位
                  </Button>
                </>
              )}
          </div>
        </div>
        <StandardTable
          rowKey={'id'}
          loading={loading}
          dataSource={list}
          columns={this.columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
          onChange={this.handleStandardTableChange}
          selectedRows={this.state.selectedRows}
          onSelectRow={this.handleSelectRows}
        />
      </>
    );
  }
}
