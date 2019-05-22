import React, { PureComponent } from 'react';
import { Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList/index.js';
const { Description } = DescriptionList;
import { formatTime } from '@/utils/utils';
export default props => {
  const {
    bkinfo: { education, guarantorInfo, houseType },
    typeDataTotal: {
      customer_professor,
      customer_house_type,
      customer_position,
      customer_realation_type,
      customer_sex,
      customer_married,
      customer_registrationType,
    },
  } = props;
  return (
    <>
      <DescriptionList size="large" title="补充资料信息" style={{ marginBottom: 32 }}>
        {!education && !houseType ? (
          <div style={{ paddingLeft: 20 }}>无补充资料信息</div>
        ) : (
          <Description term="最高学历">{customer_professor[education] || '--'}</Description>
        )}
        {!education && !houseType ? null : (
          <Description term="客户房产信息">{customer_house_type[houseType] || '--'}</Description>
        )}
      </DescriptionList>
      {guarantorInfo ? (
        <>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="担保人基本信息" style={{ marginBottom: 32 }}>
            <Description term="姓名">{guarantorInfo.name || '--'}</Description>
            <Description term="身份证号码">{guarantorInfo.cardId || '--'}</Description>
            <Description term="证件有效期">
              {formatTime(guarantorInfo.cardEffectDate, true) || '--'}
            </Description>
            <Description term="性别">{customer_sex[guarantorInfo.sex] || '--'}</Description>
            <Description term="年龄">{guarantorInfo.age || '--'}</Description>
            <Description term="手机号码">{guarantorInfo.phone || '--'}</Description>
            <Description term="与申请人关系">
              {customer_realation_type[guarantorInfo.relationType] || '--'}
            </Description>
            <Description term="家庭住址">{guarantorInfo.address || '--'}</Description>
            <Description term="婚姻状况">
              {customer_married[guarantorInfo.marriedStatus] || '--'}
            </Description>
            <Description term="房产类型">
              {customer_house_type[guarantorInfo.houseType] || '--'}
            </Description>
            <Description term="户籍类型">
              {customer_registrationType[guarantorInfo.registrationType] || '--'}
            </Description>
          </DescriptionList>
          <Divider style={{ marginBottom: 32 }} />
          <DescriptionList size="large" title="担保人职业信息" style={{ marginBottom: 32 }}>
            <Description term="单位名称">{guarantorInfo.workName || '--'}</Description>
            <Description term="单位地址">{guarantorInfo.workAddress || '--'}</Description>
            <Description term="职务">
              {customer_position[guarantorInfo.position] || '--'}
            </Description>
            <Description term="个人月收入">{guarantorInfo.monthly}元</Description>
            <Description term="单位电话">{guarantorInfo.workPhone || '--'}</Description>
            <Description term="工作年限">{guarantorInfo.workYear}年</Description>
          </DescriptionList>
        </>
      ) : null}
    </>
  );
};
