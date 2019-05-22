import React, { PureComponent, Component } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
import OrderDetail from '@/components/OrderDetail';
import TabApproval from './components/TabApproval';
import ContractInfo from '@/components/ContractInfo';
import ProductInfo from './components/ProductInfo';
import TaxInfo from './components/TaxInfo';
import CarBrandInfo from './components/CarBrandInfo';
import SafeInfo from './components/SafeInfo';
import Tab6 from './components/Tab6';
import FormList from './components/FormList';
const orderStatus = {
  1: '通过',
  2: '补充资料',
};

const columns = [
  {
    title: '审核时间',
    dataIndex: 'auditTime',
    key: 'auditTime',
    render: date => formatTime(date),
  },
  {
    title: '审核节点',
    dataIndex: 'point',
    key: 'point',
    render: () => <>提车审核</>,
  },
  {
    title: '处理人',
    dataIndex: 'auditBy',
    key: 'auditBy',
    render: auditBy => auditBy || '--',
  },
  {
    title: '结论',
    width:200,
    dataIndex: 'auditResult',
    key: 'auditResult',
    render: auditResult => orderStatus[auditResult] || '--',
  },
  {
    title: '意见',
    width:200,
    dataIndex: 'auditOpinion',
    key: 'auditOpinion',
    render: auditOpinion => auditOpinion || '--',
  },
];

const operationTabList = [
  {
    key: 'tab1',
    tab: '合同信息',
  },
  {
    key: 'tab2',
    tab: 'GPS',
  },
  {
    key: 'tab3',
    tab: '开票',
  },
  {
    key: 'tab4',
    tab: '车辆购置税',
  },
  {
    key: 'tab5',
    tab: '买保险',
  },
  {
    key: 'tab6',
    tab: '上牌',
  },
];

@connect(state => {
  return {
    typeDataTotal: state.typeDataTotal,
    orderDetail: state.orderDetail,
    tabLoading: state.loading.models.payCarTabInfo,
    typeDataTotal:state.typeDataTotal
  };
})
export default class extends Component {
  state = {
    operationkey: 'tab1',
    carHistoryList: [],
    carItemTypeGPSStatus:{},
    carItemTypeRegisterStatus:{},
    carItemTypeInsuranceStatus:{},
    carItemTypePurchaseTaxStatus:{},
    carItemTypeBillStatus:{},
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tradeCode: tbTradeInfoCode },
      },
      orderDetail,
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });

    if (!tbTradeInfoCode) return;
    
    // 审批记录
    dispatch({
      type: 'payCarHistory/fetch',
      payload: {
        data: {
          tbTradeInfoCode,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('carHistoryList', data);
        }
      },
    });
  }

  onOperationTabChange = key => {
    const {
      dispatch,
      location: {
        query: { tradeCode: tbTradeInfoCode },
      },
    } = this.props;
    const {setData}=this;
    this.setState({ operationkey: key });
    if (!tbTradeInfoCode) return;
    if (key === 'tab2') {
      dispatch({
        type: 'payCarTabInfo/fetch',
        payload: {
          data: {
            tbTradeInfoCode,
            itemType: 'carItemTypeGPSStatus',
          },
        },
        callBack(msg,data){
          if(msg==='OK'){
            setData('carItemTypeGPSStatus',data)
          }
        }
      });
    } else if (key === 'tab3') {
      dispatch({
        type: 'payCarTabInfo/fetch',
        payload: {
          data: {
            tbTradeInfoCode,
            itemType: 'carItemTypeBillStatus',
          },
        },
        callBack(msg,data){
          if(msg==='OK'){
            setData('carItemTypeBillStatus',data)
          }
        }
      });
    } else if (key === 'tab4') {
      dispatch({
        type: 'payCarTabInfo/fetch',
        payload: {
          data: {
            tbTradeInfoCode,
            itemType: 'carItemTypePurchaseTaxStatus',
          },
        },
        callBack(msg,data){
          if(msg==='OK'){
            setData('carItemTypePurchaseTaxStatus',data)
          }
        }
      });
    } else if (key === 'tab5') {
      dispatch({
        type: 'payCarTabInfo/fetch',
        payload: {
          data: {
            tbTradeInfoCode,
            itemType: 'carItemTypeInsuranceStatus',
          },
        },
        callBack(msg,data){
          if(msg==='OK'){
            setData('carItemTypeInsuranceStatus',data)
          }
        }
      });
    } else if (key === 'tab6') {
      dispatch({
        type: 'payCarTabInfo/fetch',
        payload: {
          data: {
            tbTradeInfoCode,
            itemType: 'carItemTypeRegisterStatus',
          },
        },
        callBack(msg,data){
          if(msg==='OK'){
            setData('carItemTypeRegisterStatus',data)
          }
        }
      });
    }
  };
  render() {
    const {
      dispatch,
      location,
      tabLoading,
      typeDataTotal,
      orderDetail,
      orderDetail: { tbContractInfoDTO },
    } = this.props;

    const { operationkey, carHistoryList ,carItemTypeGPSStatus,carItemTypeBillStatus,carItemTypePurchaseTaxStatus,carItemTypeInsuranceStatus,carItemTypeRegisterStatus} = this.state;
    const parentMetheds = {
      location,
      operationTabList,
      dispatch,
      onOperationTabChange: this.onOperationTabChange,
    };
    const propsTabApproval = {
      location,
      dispatch,
      carHistoryList,
      orderDetail,
    };
    const propsListForm = {
      location,
      dispatch,
      typeDataTotal,
    };
   
    const contentList = {
      tab1: (
        <>{tbContractInfoDTO ? <ContractInfo tbContractInfoDTO={tbContractInfoDTO} typeDataTotal={typeDataTotal} /> : null}</>
      ),
      tab2: <ProductInfo data={carItemTypeGPSStatus} />,
      tab3: <TaxInfo data={carItemTypeBillStatus}/>,
      tab4: <CarBrandInfo data={carItemTypePurchaseTaxStatus}/>,
      tab5: <SafeInfo data={carItemTypeInsuranceStatus} />,
      tab6: <Tab6 data={carItemTypeRegisterStatus}/>,
    };
    const hasFormList = location.pathname.includes('unfinish');
    return (
      <OrderDetail {...parentMetheds}>
        <Card bordered={false} loading={tabLoading}>
          {contentList[operationkey]}
        </Card>
        {hasFormList ? (
          <>
            <Card bordered={false} title="审批记录" style={{ marginTop: 24 }}>
              <Table
                dataSource={carHistoryList}
                size={'middle'}
                bordered
                pagination={false}
                columns={columns}
              />
            </Card>
            <FormList {...propsListForm} />
          </>
        ) : (
          <>{orderDetail.tradeInfo ? <TabApproval {...propsTabApproval} /> : null}</>
        )}
      </OrderDetail>
    );
  }
}
