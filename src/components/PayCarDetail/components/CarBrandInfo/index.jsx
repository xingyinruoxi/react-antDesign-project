import React from 'react';
import DescriptionList from '@/components/DescriptionList';
import ImgZoom from '@/components/ImgZoom';
const { Description } = DescriptionList;
export default ({ data }) => {
  const {
    pt_list_delivery_carVehicleTaxStatus,
    pt_list_delivery_carPurchaseTaxStatus,
    pt_list_delivery_carPurchaseTaxUpFileStatus:carFileStatus,
  } = data;
  return (
    <DescriptionList size="small" col="2">
      <Description term="实际车船税">{pt_list_delivery_carVehicleTaxStatus}</Description>
      <Description term="实际购置税">{pt_list_delivery_carPurchaseTaxStatus}</Description>
      <Description term="购置税完税证明">
        {carFileStatus&&carFileStatus.includes('http') ? (
          <ImgZoom imgUrl={carFileStatus} />
        ) : (
          '未上传'
        )}
      </Description>
    </DescriptionList>
  );
};
