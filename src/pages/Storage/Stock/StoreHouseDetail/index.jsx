import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
const { Description } = DescriptionList;
@connect(({ loading, storeHouseDetail, typeDataTotal }) => ({
  loading: loading.models.storeHouseDetail,
  storeHouseDetail,
  typeDataTotal,
}))
export default class extends PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: { query: id },
    } = this.props;
    dispatch({
      type: 'storeHouseDetail/fetch',
      payload: { data: id },
    });
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: { data: { version: 1 } },
    });
  }
  render() {
    const {
      loading,
      typeDataTotal: {
        st_storeType,
        st_storeLevel,
        st_houseStatus,
        st_storeStatus,
        st_storeSetupType,
        st_storePeriod
      },
      storeHouseDetail: {
        storeName,
        storeAddrDetail,
        storeAddrProvince,
        storeAddrCity,
        storeAddrCounty,
        storeDesc,
        storeType,
        storeLevel,
        storeParentName,
        storeTotal,
        storeStatus,
        storePay,
        storeSetupType,
        storeBeginTime,
        storeEndTime,
        storePeriod,
        storeRent
      },
    } = this.props;
    return (
      <PageHeaderWrapper title="查看仓库">
        <Card
          title={'仓库基本信息'}
          bordered={false}
          loading={loading}
          style={{ marginBottom: 24 }}   
        >
          <DescriptionList col="2">
            <Description term="仓库名称">{storeName}</Description>
            <Description term="仓库省市区">{`${storeAddrProvince}-${storeAddrCity}-${storeAddrCounty}`}</Description>
            <Description term="仓库详细地址">{storeAddrDetail}</Description>
            {storeDesc ? <Description term="仓库概况">{storeDesc}</Description> : null}
          </DescriptionList>
        </Card>
        <Card title={'仓库属性信息'} bordered={false} loading={loading}>
          <DescriptionList col="3">
            <Description term="仓库类别">{st_storeType && st_storeType[storeType]||'--'}</Description>
            <Description term="仓库级别">{st_storeLevel && st_storeLevel[storeLevel]||'--'}</Description>
            {storeLevel > 1 ? <Description term="上级仓库">{storeParentName||'--'}</Description> : null}
            <Description term="仓库总库位">{storeTotal||'--'}</Description>
            <Description term="仓库状态">
              {st_houseStatus && st_houseStatus[storeStatus]||'--'}
            </Description>
            <Description term="仓库建立方式">
              {st_storeSetupType && st_storeSetupType[storeSetupType]||'--'}
            </Description>
            {storeSetupType == '1' ? <Description term="购买金额">{storePay||'--'}元</Description> : null}
            {storeSetupType == '2' ? <Description term="租金">{storeRent||'--'}元</Description> : null}
            {storeSetupType == '2' ? <Description term="周期">{st_storePeriod[storePeriod]||'--'}</Description> : null}
            {storeSetupType == '2' ? <Description term="开始使用时间">{formatTime(storeBeginTime)||'--'}</Description> : null}
            {storeSetupType == '2' ? <Description term="结束使用时间">{formatTime(storeEndTime)||'--'}</Description> : null}
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
