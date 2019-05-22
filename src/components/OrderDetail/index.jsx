import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Table, Modal, Row, Col, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import styles from './assets/css/index.less';
const { Description } = DescriptionList;
import orderStatus from '@/utils/orderStatus';
import icoMenu from './assets/img/menu.jpg';
const columns = [
  {
    title: '还款期数',
    dataIndex: 'planPeriod',
    width: 90,
  },
  {
    title: '租金（元）',
    dataIndex: 'currentAmount',
    width: 136,
  },
  {
    title: '还款本金',
    dataIndex: 'currentPrinciple',
    width: 117,
  },
  {
    title: '还款利息',
    dataIndex: 'currentInterest',
  },
];

@connect(state => {
  return {
    planList: state.planList,
    orderDetail: state.orderDetail,
    loading: state.loading.models.orderDetail,
    modalLoading: state.loading.models.planList,
  };
})
export default class extends PureComponent {
  state = {
    modalVisible: false,
  };
  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tradeCode },
      },
    } = this.props;
    if (!tradeCode) return;
    dispatch({
      type: 'orderDetail/fetch',
      payload: {
        data: {
          tradeCode,
        },
      },
      /* callBack(id) {
        dispatch({
          type: 'customerInfo/fetch',
          payload: {
            data: id,
          },
        });
      }, */
    });
  }
  render() {
    const {
      operationTabList,
      dispatch,
      onOperationTabChange,
      planList,
      loading,
      modalLoading,
      orderDetail: { tradeInfo, customerAllInfo, psInfo, shopUser, commodity },
    } = this.props;
    const {
      handleModalVisible,
      state: { modalVisible },
    } = this;
    const action = (
      <Button
        type="primary"
        onClick={() => {
          if (tradeInfo && tradeInfo.tbProductSchemaId) {
            dispatch({
              type: 'planList/fetch',
              payload: {
                data: {
                  id: tradeInfo.tbProductSchemaId,
                },
              },
            });
          }
          handleModalVisible(true);
        }}
      >
        查看还款计划
      </Button>
    );
    const description = (
      <DescriptionList className={styles.headerList} size="small" col="3">
        <Description term="购车人电话">
          {(customerAllInfo && customerAllInfo.phone) || '--'}
        </Description>
        <Description term="车辆厂商">{commodity && commodity.factory||'--'}</Description>
        <Description term="车辆品牌">{tradeInfo && tradeInfo.carShowName||'--'}</Description>
        <Description term="购车目的">{tradeInfo && tradeInfo.useType=='1'?'自用':'商用'}</Description>
        <Description term="车辆类型">{commodity && commodity.product||'--'}</Description>
        <Description term="还款次数">{psInfo && psInfo.schemaLimit||'--'}</Description>
        <Description term="融资总额">{psInfo && psInfo.packageTotal||'--'}元</Description>
        <Description term="首付">{psInfo && psInfo.firstPayment||'--'} 元</Description>
        <Description term="尾款">{psInfo && psInfo.lastPayment||'--'}元</Description>
        <Description term="月供">{psInfo && psInfo.planAmount||'--'} 元</Description>
        <Description term="店面销售">{shopUser && shopUser.realName||'--'}</Description>
        <Description term="销售人员电话">{shopUser && shopUser.phoneNum||'--'}</Description>
      </DescriptionList>
    );
    const extra = (
      <Row>
        <Col xs={24} sm={12}>
          <div className={styles.textSecondary}>状态</div>
          <div className={styles.heading}>{tradeInfo && orderStatus[tradeInfo.status]}</div>
        </Col>
      </Row>
    );
    return (
      <PageHeaderWrapper
        title={`申请编号:${tradeInfo && tradeInfo.tradeCode}`}
        logo={<img alt="" src={icoMenu} />}
        action={action}
        extraContent={extra}
        content={description}
        tabList={operationTabList}
        onTabChange={onOperationTabChange}
        loading={loading}
      >
        {this.props.children}
        <Modal
          title={'还款计划参考'}
          width={640}
          destroyOnClose
           visible={modalVisible}
          footer={null}
          onCancel={() => handleModalVisible()}
        >
          <Table
            key={'id'}
            loading={modalLoading}
            rowKey={'id'}
            columns={columns}
            bordered
            scroll={{ y: 300 }}
            size={'small'}
            dataSource={planList}
            pagination={false}
          />
        </Modal>
      </PageHeaderWrapper>
    );
  }
}
