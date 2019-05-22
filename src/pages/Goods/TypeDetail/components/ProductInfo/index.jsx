import React from 'react';
import DescriptionList from '@/components/DescriptionList';
import { Card } from 'antd';
import { formatTime } from '@/utils/utils';
const { Description } = DescriptionList;
export default ({ data,flcs_productTypeKey }) => {
  const {
    templateCode,
    templateName,
    productTypeKey,
    templateDesc,
    createBy,
    createTime,
    updateBy,
    updateTime,
  } = data;
  return (
    <Card title="基本信息" style={{ marginBottom: 24 }} bordered={false}>
      <DescriptionList col="3" style={{ marginBottom: 32 }}>
        <Description term="产品类型编码">{templateCode}</Description>
        <Description term="产品类型名称">{templateName}</Description>
        <Description term="选择业务类型">{flcs_productTypeKey[productTypeKey]}</Description>
        <Description term="产品类型描述">{templateDesc}</Description>
      </DescriptionList>
      <DescriptionList col="2">
        <Description term="创建人">{createBy}</Description>
        <Description term="创建时间">{formatTime(createTime)}</Description>
        <Description term="变更人">{updateBy||'--'}</Description>
        <Description term="变更时间">{updateTime?formatTime(updateTime):'--'}</Description>
      </DescriptionList>
    </Card>
  );
};
