import React from 'react';
import { Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import ImgZoom from '@/components/ImgZoom';
const { Description } = DescriptionList;
export default ({ data }) => {
  const {
    pt_list_delivery_carInsuranceAmountStatus,
    pt_list_delivery_carInsuranceInvoice,
    pt_list_delivery_carInsuranceMoneyStatus,
    pt_list_delivery_carInsuranceTime,
    pt_list_delivery_carInsurancepolicyno,
    pt_list_delivery_carPolicyInvoiceUpFileStatus,
    pt_list_delivery_carPolicyNumberStatus,
    pt_list_delivery_carPolicyTimeStatus,
    pt_list_delivery_carPolicyUpFileStatus,
    pt_list_delivery_carTrafficAmountStatus,
    pt_list_delivery_carTrafficMoneyStatus,
    pt_list_delivery_carTrafficUpFileStatus,
  } = data;

  return (
    <>
      <DescriptionList col="3" title="交强险" style={{ marginBottom: 32 }}>
        <Description term="保单号">
          {pt_list_delivery_carPolicyNumberStatus}
        </Description>
        <Description term="实际金额">{pt_list_delivery_carTrafficMoneyStatus}</Description>
        <Description term="实际税额">{pt_list_delivery_carTrafficAmountStatus}</Description>
        <Description term="有效时间">{pt_list_delivery_carPolicyTimeStatus}</Description>
        <Description term="保单">
          {pt_list_delivery_carTrafficUpFileStatus&&pt_list_delivery_carTrafficUpFileStatus.includes('http') ? (
            <ImgZoom imgUrl={pt_list_delivery_carTrafficUpFileStatus} />
          ) : (
            '未上传'
          )}
        </Description>
        <Description term="发票">
          {pt_list_delivery_carPolicyInvoiceUpFileStatus&&pt_list_delivery_carPolicyInvoiceUpFileStatus.includes('http') ? (
            <ImgZoom imgUrl={pt_list_delivery_carPolicyInvoiceUpFileStatus} />
          ) : (
            '未上传'
          )}
        </Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList col="3" title="商业险" style={{ marginBottom: 32 }}>
        <Description term="保单号">{pt_list_delivery_carInsurancepolicyno}</Description>
        <Description term="实际金额">{pt_list_delivery_carInsuranceMoneyStatus}</Description>
        <Description term="实际税额">{pt_list_delivery_carInsuranceAmountStatus}</Description>
        <Description term="有效时间">{pt_list_delivery_carInsuranceTime}</Description>
        <Description term="保单">
          {pt_list_delivery_carPolicyUpFileStatus&&pt_list_delivery_carPolicyUpFileStatus.includes('http') ? (
            <ImgZoom imgUrl={pt_list_delivery_carPolicyUpFileStatus} />
          ) : (
            '未上传'
          )}
        </Description>
        <Description term="发票">
          {pt_list_delivery_carInsuranceInvoice&&pt_list_delivery_carInsuranceInvoice.includes('http') ? (
            <ImgZoom imgUrl={pt_list_delivery_carInsuranceInvoice} />
          ) : (
            '未上传'
          )}
        </Description>
      </DescriptionList>
    </>
  );
};
