import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
const { Description } = DescriptionList;
import {productTypeJson,storeStatusJson} from './status'
@connect(({ loading, detailData }) => ({
  detailData,
  loading: loading.models.detailData,
}))
export default class extends PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    dispatch({
      type: 'detailData/fetch',
      payload: {
        data: { id },
      },
    });
  }
  render() {
    const {
      detailData: {
        tbStoreWarehouseId,
        categoriesName,
        brandName,
        productName,
        referred,
        productType,
        productInvoicePrice,
        productDecorationPrice,
        productPurchaseTime,
        productInvoiceTime,
        productAdvancePrice,
        productEndPrice,
        productPayTime,
        productEndPayTime,
        productFactoryTime,
        productContractNo,
        tbCommodityInfoId,
        inTime,
        storeStatus,
        storeName,
      },
    } = this.props;
    return (
      <PageHeaderWrapper title="查看库存详情">
        <Card title={'基本信息'} bordered={false} style={{ marginBottom: 24 }}>
          <DescriptionList col="3">
            <Description term="商品ID">{tbCommodityInfoId}</Description>
            <Description term="商品类别">{categoriesName}</Description>
            <Description term="商品品牌"> {brandName}</Description>
            <Description term="商品型号">{productName}</Description>
            <Description term="商品简称">{referred}</Description>
          </DescriptionList>
        </Card>
        <Card title={'商品采购信息'} bordered={false} style={{ marginBottom: 24 }}>
          <DescriptionList col="3">
            <Description term="车辆属性">{productTypeJson[productType]}</Description>
            <Description term="商品发票价">{productInvoicePrice}元</Description>
            <Description term="商品装饰票价"> {productDecorationPrice}元</Description>
            <Description term="采购时间">{formatTime(productPurchaseTime)}</Description>
            <Description term="开票时间">{formatTime(productInvoiceTime)}</Description>
            <Description term="定金金额">{productAdvancePrice}元</Description>
            <Description term="尾款金额">{productEndPrice}元</Description>
            <Description term="定金付款时间">{formatTime(productPayTime)}</Description>
            <Description term="尾款付款时间">{formatTime(productEndPayTime)}</Description>
            <Description term="出厂时间">{formatTime(productFactoryTime)}</Description>
            <Description term="采购合同号">{productContractNo}</Description>
          </DescriptionList>
        </Card>
        <Card title={'商品库存信息'} bordered={false} style={{ marginBottom: 24 }}>
          <DescriptionList col="3">
            <Description term="仓库ID">{tbStoreWarehouseId}</Description>
            <Description term="商品存放仓库">{storeName}</Description>
            <Description term="入库时间">{formatTime(inTime)}</Description>
            <Description term="商品库存状态">{storeStatusJson[storeStatus]}</Description>
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
