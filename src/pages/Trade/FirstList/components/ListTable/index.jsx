import React, { PureComponent } from 'react';
import { Button ,Icon, Table} from 'antd';
import StandardTable from '@/components/StandardTable';
import ModalCacheForm from './../ModalCacheForm';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import styles from './../../assets/css/TableList.less';
import orderStatus from '@/utils/orderStatus'

export default class extends PureComponent { 
  state = {
    selectedRows: [],
    visible: false
  };

  columns = [
    {
      title: '申请状态',
      dataIndex: 'status',
      render:state=><>{orderStatus[state]}</>
    },
    {
      title: '申请编号',
      dataIndex: 'tradeCode',
        render: (tradeCode) => (
        <Link to={{ pathname: '/trade/firstlist/detail', query: { tradeCode } }}>{tradeCode}</Link>
      ),
    },
    {
      title: '购车人',
      dataIndex: 'customer',
    },
    {
      title: '申请选购车型',
      width:280,
      dataIndex: 'carShowName',
      render: carShowName => <>{carShowName || '--'}</>,
    },
    {
      title: '当前处理人',
      dataIndex: 'todoUser',
      render: todoUser => <>{todoUser || '--'}</>,

    },
    {
      title: '申请时间',
      dataIndex: 'createTime',
      render: createTime => <>{formatTime(createTime)}</>,
    }
  ];
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  hideModel=()=>{
    this.setState({
      visible: false,
    });
  }
  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      firstList: { formValues },
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
      type: 'firstList/fetch',
      payload: params,
    });
  };
  
  render() {
    const {
      loading,
      firstList: { list, pageNum: current, total, pageSize },
      dispatch,
      transferList
    } = this.props;
    const { selectedRows,visible } = this.state;
    const parentMethods = {
      dispatch,
      visible, 
      hideModel:this.hideModel,
      selectedRows:this.state.selectedRows,
      transferList
    };
    const newList=list&&list.map(item=>{
      return {...item,key:Math.random()};
    })
    return (
      <>
        <div  className={styles.tableList}>
          <div className={styles.tableListOperator}>
          
             {selectedRows.length > 0 && (
                <>
                   <Button type="primary"
                    onClick={e => {
                      e.preventDefault();
                      this.showModal()
                    }}>
                      <Icon type="arrow-up" />
                      转派
                   </Button>
                </>
              )}
          </div>
        </div>
        <StandardTable
          // scroll={{ x: 1400 }}
          rowKey={'id'}
          loading={loading}
          dataSource={newList}
          columns={this.columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
          onChange={this.handleStandardTableChange}
          selectedRows={this.state.selectedRows}
          onSelectRow={this.handleSelectRows}
        />
         {visible ? <ModalCacheForm {...parentMethods} /> : null}
      </>
    );
  }
}
