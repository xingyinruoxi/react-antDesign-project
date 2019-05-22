import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
import OrderDetail from '@/components/OrderDetail';
import FormList from './components/FormList';
import ClientInfo from './components/ClientInfo';
import FileList from './components/FileList';
import RiskControlList from './components/RiskControlList';
import HistoryOrder from './components/HistoryOrder';
import Tab4 from './components/Tab4';
import TabApproval from './components/TabApproval';
import UpdateFile from './components/UpdateFile';
import { formatTime } from '@/utils/utils';
import orderStatus from '@/utils/orderStatus';

const columns = [
  {
    title: '审核时间',
    dataIndex: 'createTime',
    key: 'createTime',
    render: date => <>{formatTime(date)}</>,
  },
  {
    title: '审核节点',
    dataIndex: 'type',
    key: 'type',
    render: type => <>{type == '1' ? '初审' : '复审'}</>,
  },
  {
    title: '处理人',
    dataIndex: 'createBy',
    key: 'createBy',
  },
  {
    title: '结论',
    dataIndex: 'result',
    width: '140px',
    key: 'result',
    render: result => <>{orderStatus[result]}</>,
  },
  {
    title: '意见',
    dataIndex: 'opinion',
    width:200,
    key: 'opinion',
    render: opinion => <>{opinion || '--'}</>,
  },
  {
    title: '备注',
    width:200,
    dataIndex: 'remark',
    key: 'remark',
    render: remark => <>{remark || '--'}</>,
  },
];

const operationTabList = [
  {
    key: 'tab1',
    tab: '客户基本信息',
  },
  {
    key: 'tab2',
    tab: '资料清单',
  },
  {
    key: 'tab3',
    tab: '风控报告',
  },

  // {
  //   key: 'tab5',
  //   tab: '历史交易记录',
  // },
];
@connect(state => {
  return {
    typeDataTotal: state.typeDataTotal,
    orderDetail: state.orderDetail,
    loading: state.loading.models.orderDetail,
    userInfo: state.userInfo,
    orderResultInfo: state.orderResultInfo,
    bkinfo: state.bkinfo,
  };
})
export default class extends PureComponent {
  state = {
    operationkey: 'tab1',
    fileList: [],
  };

  setData = (key, values) => {
    this.setState({ [key]: values });
  };
  onOperationTabChange = key => {
    const {
      orderDetail: {
        tradeInfo: { tbCustomerInfoId },
      },
      dispatch,
    } = this.props;
    const { setData } = this;
    this.setState({ operationkey: key });
    if (key === 'tab2') {
      dispatch({
        type: 'fileList/fetch',
        payload: {
          data: {
            type: 1,
            source: [
              'pt_list_credit_1001customerCardInfoStatus',
              'pt_list_credit_1002customerDriverInfoStatus',
              'pt_list_credit_2008customerInComeInfoStatus',
              'pt_list_credit_2009customerHouseMoreInfoStatus',
              'pt_list_credit_2010customerOtherAssetStatus',
              'pt_list_credit_2011customerRelationInfoStatus',
              'pt_list_credit_2012customerOtherFileStatus',
            ],
            referId: tbCustomerInfoId,
          },
        },
        callBack(msg, data) {
          if (msg === 'OK') {
            setData('fileList', data);
          }
        },
      });
    }
  };

 
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tradeCode },
      },
      orderDetail,
      bkinfo
    } = this.props;
    dispatch({
      type: 'orderResultInfo/fetch',
      payload: {
        data: {
          tradeCode,
        },
      },
    });
  }
  render() {
    const {
      orderDetail,
      loading,
      dispatch,
      location,
      typeDataTotal,
      orderResultInfo: { record, report },
      bkinfo,
    } = this.props;
    const { setData } = this;
    const { operationkey, fileList } = this.state;
    const hasFormList = location.pathname.includes('unfinish');
    const propsHistoryOrder = {
      dispatch,
      location,
    };
    const propsRisk = {
      dispatch,
      location,
      orderDetail,
    };
    const propsTab4={
      bkinfo,
      typeDataTotal
    }
    const { findReportResult } = this.state;

    const hasInfo=bkinfo.guarantorInfo||bkinfo.education||bkinfo.houseType;

    const contentList = {
      tab1: (
        <>
          {orderDetail && orderDetail.tradeInfo ? (
            <ClientInfo formList={hasFormList} typeDataTotal={typeDataTotal} />
          ) : null}
        </>
      ),
      tab2: <>{orderDetail && orderDetail.tradeInfo ? <FileList fileList={fileList} /> : null}</>,
      tab3: <>{orderDetail.customerAllInfo ? <RiskControlList {...propsRisk} /> : null}</>,
      tab4: <>{hasInfo ? <Tab4 {...propsTab4} /> : null}</>,
    };

   
    if (hasInfo && operationTabList.length <= 3) {
      operationTabList.push({
        key: 'tab4',
        tab: '补充资料反馈信息',
      });
    }
    if(!hasInfo&&operationTabList.length===4){
      operationTabList.pop();
    }
    const parentMetheds = {
      location,
      operationTabList,
      dispatch,
      onOperationTabChange: this.onOperationTabChange,
    };
    const propsFormList = {
      location,
      dispatch,
      typeDataTotal,
      report,
      hasFormList,
    };
    const propsTabApproval = {
      dispatch,
      location,
    };
    return (
      <OrderDetail {...parentMetheds}>
        <Card bordered={false} loading={loading}>
          {contentList[operationkey]}
        </Card>
        {hasFormList ? (
          <>
            <Card bordered={false} title="审批记录" style={{ marginTop: 24 }}>
              <Table
                dataSource={record}
                size={'middle'}
                rowKey={'id'}
                bordered
                pagination={false}
                columns={columns}
              />
            </Card>
            {orderDetail && orderDetail.tradeInfo ? <FormList {...propsFormList} /> : null}
          </>
        ) : (
          <TabApproval {...propsTabApproval} />
        )}
      </OrderDetail>
    );
  }
}
