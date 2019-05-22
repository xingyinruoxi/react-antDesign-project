import React from 'react';
import DescriptionList from '@/components/DescriptionList';
const { Description } = DescriptionList;
import { formatTime } from '@/utils/utils';
export default props => {
  const {
    typeDataTotal: {
      cm_assurance,
      cm_emissionStandard,
      cm_emissionNum,
      cm_powerType,
      cm_interior,
      cm_configuration,
      cm_transmission,
      cm_type,
      cm_paragraph,
    },
    carTypeDetail: {
      type,
      paragraph,
      priceGuided,
      configuration,
      interior,
      color,
      selling,
      transmission,
      powerType,
      emissionStandard,
      emissionNum,
      deliveryDate,
      assurance,
    },
  } = props;

  return (
    <DescriptionList>
      <Description term="车辆类型">{cm_type[type]}</Description>
      <Description term="年款">{cm_paragraph[paragraph]}</Description>
      <Description term="车辆指导价">{priceGuided}元</Description>
      <Description term="配置">{cm_configuration[configuration]}</Description>
      <Description term="内饰">{cm_interior[interior]}</Description>
      <Description term="变速器">{cm_transmission[transmission]}</Description>
      <Description term="颜色">{color}</Description>
      <Description term="车型卖点">{selling}</Description>
      <Description term="动力类型">{cm_powerType[powerType]}</Description>
      <Description term="排放标准">{cm_emissionStandard[emissionStandard]}</Description>
      <Description term="排量">{cm_emissionNum[emissionNum]}</Description>
      <Description term="出厂时间">{deliveryDate?formatTime(deliveryDate):'--'}</Description>
      <Description term="整车质保">{cm_assurance[assurance]}</Description>
    </DescriptionList>
  );
};
