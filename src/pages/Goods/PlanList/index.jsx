import React, { PureComponent } from 'react';
import { Card, Form, Button, Icon, Divider, message } from 'antd';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import StandardTable from '@/components/StandardTable';
import ListForm from './components/ListForm';
import ModalChannel from './components/ModalChannel';
import styles from './assets/css/TableList.less';
import ModalCopy from './components/ModalCopy';
import ListTable from './components/ListTable';
import ModelSetting from './components/SingleAssociationModal';
import {accMul} from '@/utils/utils'
const stateType = {
  '1': '上架',
  '2': '待上架',
  '3': '下架',
};
@connect(state => {
  return {
    goodPlanList: state.goodPlanList,
    loading: state.loading.models.goodPlanList,
    typeDataTotal: state.typeDataTotal,
    maintenance:state.maintenance,
    submitting: state.loading.effects['copyPsInfo/submit'],
    maintenance: state.maintenance,
  };
})

class List extends PureComponent {
  state = {
    selectedRows: [],
    // 关联设置
    settingVisible: false,
    id: null,
  };

  columns = [
    {
      title: '方案状态',
      dataIndex: 'schemaStatus',
      width: 120,
      render: schemaStatus => <>{stateType[schemaStatus]}</>,
    },
    {
      title: '关联渠道',
      dataIndex: 'channelAssociated',
      width: 120,
      render: val => {
        if (val == 1) {
          return '未设置';
        } else if (val == 2) {
          return '已设置';
        } else {
          return '已取消';
        }
      },
    },
    {
      title: '产品方案名称',
      dataIndex: 'schemaName',
      width: 180,
      render: (val, { id }) => (
        <Link to={{ pathname: '/goods/plan/list/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '产品利率',
      width: 100,
      dataIndex: 'schemaInterest',
      render: val => <>{val ? val + '%' : '--'}</>,
    },
    {
      title: '产品期数',
      width: 120,

      dataIndex: 'schemaLimit',
      render: val => val || '--',
    },
    {
      title: '首付（元）',
      width: 120,

      dataIndex: 'firstPayment',
      render: val => val || '--',
    },
    {
      title: '上架时间',
      dataIndex: 'startDate',
      width: 140,
      render: date => formatTime(date, true) || '--',
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
      width: 120,
      render: val => val || '--',
    },
    {
      title: '录入时间',
      dataIndex: 'createTime',
      width: 180,
      render: val => formatTime(val),
    },
    {
      title: '操作',
      dataIndex: 'id',
      width: 140,
      fixed: 'right',
      render: id => {
        return (
          <>
            <Link to={{ pathname: '/goods/plan/list/edit/info', query: { id } }}>编辑</Link>
            <Divider type="vertical" />
            <a
              onClick={e => {
                this.handleModelSetting(true, id);
              }}
            >
              关联设置
            </a>
          </>
        );
      },
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'goodPlanList/fetch',
      payload: { queryCondition: {},limit: 10, },
    });
    //类型维护列表
    dispatch({
      type: 'maintenance/fetch',
      payload: { queryCondition: {}, limit: 100 },
    });
  }

  handleStandardTableChange = (pagination, filtersArg, sorter) => {
    const {
      dispatch,
      goodPlanList: { formValues },
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
      type: 'goodPlanList/fetch',
      payload: params,
    });
  };
  handleSelectRows = rows => {
    this.setState({
      selectedRows: rows,
    });
  };

  // 复制方案
  handleModalCopy = () => {
    const { selectedRows, listId } = this.state;
    const { handleStandardTableChange } = this;
    const { dispatch } = this.props;
    const params = selectedRows.map(({ id }) => ({ id }));
    dispatch({
      type: 'copyPsInfo/submit',
      payload: {
        data: params,
      },
      callBack(msg) {
        if (msg === 'OK') {
          message.success('复制方案成功');
          handleStandardTableChange();
        } else {
          message.error(msg);
        }
      },
    });
  };

  //关联设置
  handleModelSetting = (flag, id) => {
    const { dispatch } = this;
    this.setState({
      settingVisible: !!flag,
      id,
    });
  };

  render() {
    let {
      loading,
      dispatch,
      goodPlanList: { list, pageNum:current, pageSize, pages, total },
      typeDataTotal,
      maintenance,
    } = this.props;
    const { selectedRows, settingVisible, id, submitting } = this.state;

    const listTableProps = {
      list,
      current,
      pageSize,
      pages,
      total,
    };
    const listFormProps = {
      dispatch,
      list,
      current,
      pageSize,
      pages,
      total,
      typeDataTotal,
      maintenance,
    };
    const propsModelSetting = {
      dispatch,
      handleModelSetting: this.handleModelSetting,
      settingVisible,
      id,
    };

    return (
      <PageHeaderWrapper title="方案维护">
        <Card bordered={false}>
          <ListForm {...listFormProps} />
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Link to="/goods/plan/list/add">
                <Button type="primary">
                  <Icon type="plus" />
                  新增
                </Button>
              </Link>
              {selectedRows.length > 0 && (
                <>
                  {/* <Button type="primary" loading={submitting} onClick={this.handleModalCopy}>
                    <Icon type="copy" />
                    复制方案
                  </Button> */}
                </>
              )}
            </div>
          </div>
          <StandardTable
            scroll={{ x: 1400 }}
            rowKey={'id'}
            loading={loading}
            columns={this.columns}
            onChange={this.handleStandardTableChange}
            pagination={{ showSizeChanger: true, showQuickJumper: true, current, total, pageSize }}
            data={listTableProps}
            selectedRows={selectedRows}
            onSelectRow={this.handleSelectRows}
          />
        </Card>
        {id ? <ModelSetting {...propsModelSetting} /> : null}
      </PageHeaderWrapper>
    );
  }
}

export default List;
