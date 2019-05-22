import React from 'react';
import DescriptionList from '@/components/DescriptionList';
const { Description } = DescriptionList;
export default (props) => {
  const {pt_list_delivery_carGPSStatus,pt_list_delivery_carGPSMoneyStatus,pt_list_delivery_carInstallation}=props.data;
  return (
    <DescriptionList size="small" col="3">
      <Description term="GPS号码">{pt_list_delivery_carGPSStatus||'--'}</Description>
      <Description term="实际GPS金额">{pt_list_delivery_carGPSMoneyStatus}</Description>
      <Description term="GPS安装状态">{pt_list_delivery_carInstallation}</Description>
    </DescriptionList>
  );
};
