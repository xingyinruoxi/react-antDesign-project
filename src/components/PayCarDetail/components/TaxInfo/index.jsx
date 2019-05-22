import React from 'react';
import DescriptionList from '@/components/DescriptionList';
import ImgZoom from '@/components/ImgZoom';
const { Description } = DescriptionList;
export default props => {
  const {
    pt_list_delivery_carFrameStatus,
    pt_list_delivery_carInvoiceMoneyStatus,
    t_list_delivery_carInvoiceAmountStatus,
    pt_list_delivery_carCertificateUpFileStatus:fileStatus,
    pt_list_delivery_carInvoiceUpFileStatus:carFileStatus,
  } = props.data;
  return (
    <DescriptionList size="small" col="3">
      <Description term="车架号">{pt_list_delivery_carFrameStatus}</Description>
      <Description term="实际车辆发票金额">{pt_list_delivery_carInvoiceMoneyStatus}</Description>
      <Description term="实际车辆发票税额">{t_list_delivery_carInvoiceAmountStatus}</Description>
      <Description term="车辆合格证">
        {fileStatus&&fileStatus.includes('http') ? (
          <ImgZoom imgUrl={fileStatus} />
        ) : (
          '未上传'
        )}
      </Description>
      <Description term="车辆发票">
        {carFileStatus&&carFileStatus.includes('http')? (
          <ImgZoom imgUrl={carFileStatus} />
        ) : (
          '未上传'
        )}
      </Description>
    </DescriptionList>
  );
};
