import React from 'react';
import DescriptionList from '@/components/DescriptionList';
import { formatTime } from '@/utils/utils';
const { Description } = DescriptionList;
import {
  attributeJson,
  cooperationJson,
  settlementJson,
  chStatusJson,
  chOperatingJson,
  openBankJson,
} from './../../status';
export default props => {
  let {
    channelImportInfo: {
      // name,
      attribute,
      cooperation,
      settlement,
      status,
      operating,
      amount,
      signedAmount,
      signedEndtime,
      signedStarttime,
      channelBankName,
      channelBank,
      channelBankNumber,
      channelBankAccount,
      groupName,
    },
  } = props;
  return (
    <DescriptionList col="2">
      <Description term="渠道属性">{attributeJson[attribute] || '--'}</Description>
      <Description term="所属集团">{groupName || '--'}</Description>
      <Description term="合作方式">{cooperationJson[cooperation] || '--'}</Description>
      {/* 加盟 */}
      {cooperation == 1 ? (
        <Description term="合同开始时间">
          {signedStarttime ? formatTime(signedStarttime) : '--'}
        </Description>
      ) : null}
      {cooperation == 1 ? (
        <Description term="合同结束时间">
          {signedEndtime ? formatTime(signedEndtime) : '--'}
        </Description>
      ) : null}
      {cooperation == 1 ? (
        <Description term="加盟保证金">{signedAmount || '--'}</Description>
      ) : null}
      {/* SP店 */}
      {cooperation == 2 ? (
        <Description term="合作开始时间">
          {signedStarttime ? formatTime(signedStarttime) : '--'}
        </Description>
      ) : null}
      {cooperation == 2 ? (
        <Description term="合作结束时间">
          {signedEndtime ? formatTime(signedEndtime) : '--'}
        </Description>
      ) : null}
      {cooperation == 2 ? <Description term="保证金">{signedAmount || '--'}</Description> : null}
      {/* 入驻 */}
      {cooperation == 3 ? (
        <Description term="合作开始时间">
          {signedStarttime ? formatTime(signedStarttime) : '--'}
        </Description>
      ) : null}
      {cooperation == 3 ? (
        <Description term="合作结束时间">
          {signedEndtime ? formatTime(signedEndtime) : '--'}
        </Description>
      ) : null}
      {cooperation == 3 ? <Description term="保证金">{signedAmount || '--'}</Description> : null}
      <Description term="结算方式">{settlementJson[settlement] || '--'}</Description>
      {/* 结算方式（单店） */}
      {settlement == 1 ? (
        <Description term="账户名称">{channelBankName || '--'}</Description>
      ) : null}
      {settlement == 1 ? (
        <Description term="开户银行">{openBankJson[channelBank] || '--'}</Description>
      ) : null}
      {settlement == 1 ? (
        <Description term="开户账号">{channelBankAccount || '--'}</Description>
      ) : null}
      {settlement == 1 ? (
        <Description term="联行号">{channelBankNumber || '--'}</Description>
      ) : null}
      <Description term="渠道状态">{chStatusJson[status] || '--'}</Description>
      <Description term="渠道营业状态">{chOperatingJson[operating] || '--'}</Description>
    </DescriptionList>
  );
};
