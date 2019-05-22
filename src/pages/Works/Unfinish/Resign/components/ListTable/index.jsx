import React, { PureComponent } from 'react';
import { Button, Icon, Table } from 'antd';
import StandardTable from '@/components/StandardTable';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import styles from './../../assets/css/TableList.less';
export default class extends PureComponent {
  // state = {
  //   selectedRows: [],
  // };
  columns = [
    {
      title: '重签状态',
      dataIndex: 'tbTradeInfoDTO.status',
    },
    {
      title: '申请编号',
      dataIndex: 'tbTradeInfoDTO.tradeCode',
      render: (val, { id }) => (
        <Link to={{ pathname: '/works/unfinish/resign/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '购车人',
      dataIndex: 'tbTradeInfoDTO.name',
    },
    {
      title: '申请购车店端',
      dataIndex: 'tbTradeInfoDTO.tbChannelInfoId',
      render: carShowName => <>{carShowName || '--'}</>,
    },
    {
      title: '申请时间',
      dataIndex: 'tbTradeInfoDTO.createTime',
      render: createTime => <>{formatTime(createTime)}</>,
    },
  ];
  // handleSelectRows = rows => {
  //   this.setState({
  //     selectedRows: rows,
  //   });
  // };
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      ResignList: { formValues },
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
      type: 'ResignList/fetch',
      payload: params,
    });
  };

  render() {
    const {
      loading,
      ResignList: { list, pageNum: current, total, pageSize },
    } = this.props;
    // const {selectedRows}=this.state;
    return (
      <>
        <div className={styles.tableList}>
          <div className={styles.tableListOperator}>
            {/* <Link to="/goods/type/list/add">
              <Button type="primary">
                <Icon type="plus" />
                新增
              </Button>
            </Link> */}
            {/* {selectedRows.length > 0 && (
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
              )} */}
          </div>
        </div>
        <Table
          rowKey={'id'}
          loading={loading}
          dataSource={list}
          columns={this.columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
          onChange={this.handleStandardTableChange}
          // selectedRows={this.state.selectedRows}
          // onSelectRow={this.handleSelectRows}
        />
      </>
    );
  }
}
