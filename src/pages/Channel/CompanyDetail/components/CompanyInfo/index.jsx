import React from 'react';
import DescriptionList from '@/components/DescriptionList';
import ImgZoom from '@/components/ImgZoom';
import { formatTime,local } from '@/utils/utils';
const { Description } = DescriptionList;
import {openBankJson} from '../../status'
const token=local.fetch('token');
export default props => {
  const {
    companyDetail:{
      code,
      name,
      social,
      personName,
      personIdcradno,
      openbank,
      card,
      associated,
      phonenum,
      createBy,
      createtime,
      licenseAddr,
      regionIdProvinceName,
      regionIdCityName,
      regionIdCountyName,
      address,
      cityShowName
    }
  } = props
  return (
    <DescriptionList col="3">
        <Description term="集团编号">{code || '--'}</Description>
        <Description term="集团名称">{name || '--'}</Description>
        <Description term="统一社会信用代码">{social || '--'}</Description>
        <Description term="法人姓名">{personName || '--'}</Description>
        <Description term="法人身份证号">{personIdcradno || '--'}</Description>
        <Description term="开户银行">{openBankJson[openbank]}</Description>
        <Description term="开户账号">{card || '--'}</Description>
        <Description term="联行号">{associated || '--'}</Description>
        <Description term="联系电话">{phonenum || '--'}</Description>
        <Description term="选择省市区">{cityShowName || '--'}</Description>
        <Description term="详细地址">{address || '--'}</Description>
        <Description>&nbsp;</Description>
        <Description term="上传营业执照">
          <ImgZoom imgUrl={`${licenseAddr}?Authorization=${token}`} className={'customModal'} />
        </Description>
        <Description term="创建人">{createBy || '--'}</Description>
        <Description term="创建时间">{createtime?formatTime(createtime) : '--'}</Description>
    </DescriptionList>
  );
};
