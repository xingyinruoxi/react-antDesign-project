import React from 'react';
import { Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import ImgZoom from '@/components/ImgZoom';
const { Description } = DescriptionList;
export default ({ data }) => {
  const {
    pt_list_delivery_carLicensePlateStatus,
    pt_list_delivery_carRegistrationAmount,
    pt_list_delivery_carDrivingPermitStatus,
    pt_list_delivery_carRegistrationCard,
  } = data;
  return (
    <DescriptionList col="2" style={{ marginBottom: 32 }}>
      <Description term="实际上牌金额">{pt_list_delivery_carRegistrationAmount}</Description>
      <Description term="车牌号">{pt_list_delivery_carLicensePlateStatus}</Description>
      <Description term="车辆行驶证">
        {pt_list_delivery_carDrivingPermitStatus.includes('http') ? (
          <ImgZoom imgUrl={pt_list_delivery_carDrivingPermitStatus} />
        ) : (
          '未上传'
        )}
      </Description>
      <Description term="车辆登记证">
        {pt_list_delivery_carRegistrationCard.includes('http') ? (
          <ImgZoom imgUrl={pt_list_delivery_carRegistrationCard} />
        ) : (
          '未上传'
        )}
      </Description>
    </DescriptionList>
  );
};
