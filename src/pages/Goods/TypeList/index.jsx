import React, { PureComponent } from 'react';
import { Card, Button, Icon, Divider, Table } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import { formatTime } from '@/utils/utils';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListTable from './components/ListTable';
import ListForm from './components/ListForm';
import styles from './assets/css/TableList.less';

import ModalPosition from './components/ModalPosition/index';
import SingleAssociationModal from './components/SingleAssociationModal/index';

@connect(state => {
  return {
    typeDataTotal: state.typeDataTotal,
    associateSettings: state.associateSettings,
    maintenance: state.maintenance,
    loading: state.loading.models.maintenance,
    listOfAssociatedContractTemplates: state.loading.models.listOfAssociatedContractTemplates,
    searchSettingsList: state.searchSettingsList
  };
})
export default class typeList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedRows: [],
      // 多个关联
      modalOpenAndClose: '',
      //关联设置
      singleAssociationModalvisible: false,
      singleAssociationModalOpenAndClose: '',
      singleAssociationId: '',
      singleModelColumns: [],
    };
  }

  columns = [
    {
      title: '关联设置',
      dataIndex: 'templateAssociated',
      render: (val, { id }) => {
        if (val == 1) {
          return '未设置';
        } else if (val == 2) {
          return '已设置';
        } else {
          return '--';
        }
      },
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
      render: (val, { id }) => (
        <Link to={{ pathname: '/goods/type/list/detail', query: { id } }}>{val}</Link>
      ),
    },
    {
      title: '产品类型描述',
      dataIndex: 'templateDesc',
      render: templateDesc => templateDesc || '--',
    },
    {
      title: '录入人',
      dataIndex: 'createBy',
      render: createBy => createBy || '--',
    },
    {
      title: '录入时间',
      dataIndex: 'createTime',
      width: 180,
      render: date => formatTime(date),
    },
    {
      title: '操作',
      dataIndex: 'id',
      render: id => (
        <>
          <Link
            to={{ pathname: '/goods/type/list/edit/info', query: { productTemplateInfoId: id } }}
          >
            编辑
          </Link>
          <Divider type="vertical" />
          <a
            href={'javascript:;'}
            onClick={e => {
              this.handleSingleAssociationModalPosition(true, id, templateAssociated);
            }}
          >
            关联设置
          </a>
        </>
      ),
    },
  ];
  handleStandardTableChange = pagination => {
    const {
      dispatch,
      maintenance: {},
    } = this.props;
    const { formValues } = this.state;
    const params = {
      page: pagination.current,
      limit: pagination.pageSize,
      ...formValues,
    };
    dispatch({
      type: 'maintenance/fetch',
      payload: { ...params, queryCondition: {} },
    });
  };
  componentDidMount() {
    const { dispatch,singleAssociationId } = this.props;
    //类型维护列表
    dispatch({
      type: 'maintenance/fetch',
      payload: { queryCondition: {} },
    });
    //是否关联设置
    dispatch({
      type: 'associateSettings/getassociateSettings',
      payload: {
        data: {
          key: 'flcs_templateAssociated',
        },
      },
    });
  }
  getptlists = id => {
    const { dispatch } = this.props;
    if (!id) return;
    const { setData } = this;
    dispatch({
      type: 'getptlists/fetch',
      payload: {
        data: {
          ptInfoId: id,
          listKey: 'pt_list_credit',
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          if(!data){
            data=[]
          }
          setData('singleModelColumns', data);
        }
      },
    });
    dispatch({
      type: 'searchSettingsList/fetch',
      payload: { 
        data:{
          id:id
        }
      },
    });
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  handleSingleAssociationModalPosition = (flag, id) => {
    this.setState({
      singleAssociationModalOpenAndClose: !!flag,
      singleAssociationId: id,
    });
    this.getptlists(id);
  };
  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };
  render() {
    let {
      loading,
      dispatch,
      maintenance: { list, pageNum, pageSize, pages, total },
      associateSettings,
      typeDataTotal,
      searchSettingsList
    } = this.props;
    const { singleModelColumns } = this.state;
    const {
      modalOpenAndClose,
      singleAssociationModalOpenAndClose,
      visible,
      singleAssociationId,
    } = this.state;
    const maintenanceData = {
      dispatch,
      loading,
      list,
      pageNum,
      pageSize,
      pages,
      total,
      associateSettings,
    };

    //单个设置
    const propsModel = {
      typeDataTotal,
      singleAssociationId,
      dispatch,
      value:singleModelColumns,
      handleModalVisible: this.handleModalVisible,
      handleSingleAssociationModalPosition: this.handleSingleAssociationModalPosition,
      associatedContractKey:searchSettingsList.associatedContractKey
    };
    return (
      <PageHeaderWrapper title="类型维护">
        <Card bordered={false}>
          <ListForm {...maintenanceData} />
          <div className={styles.tableList}>
            <div className={styles.tableListOperator}>
              <Link to="/goods/type/list/add">
                <Button type="primary">
                  <Icon type="plus" />
                  新增
                </Button>
              </Link>
            </div>
          </div>
          <Table
            rowKey={'id'}
            loading={loading}
            columns={this.columns}
            onChange={this.handleStandardTableChange}
            dataSource={list}
            pagination={{
              showSizeChanger: true,
              showQuickJumper: true,
              pageNum,
              defaultPageSize: 10,
              pages,
              total,
            }}
          />
        </Card>
        <SingleAssociationModal modalVisible={singleAssociationModalOpenAndClose} {...propsModel} />
      </PageHeaderWrapper>
    );
  }
}
