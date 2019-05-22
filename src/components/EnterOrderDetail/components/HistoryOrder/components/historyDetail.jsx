import React from 'react';
import { Card, Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList/index.js';
const { Description } = DescriptionList;
export default () => {
  return (
    <Card title="历史信息展示" bodyStyle={{ marginTop: '20' }}>
      <DescriptionList col={3} size="middle" title="申请信息" style={{ marginBottom: 32 }}>
        <Description term="申请编号">OL-A000000001</Description>
        <Description term="合同号">OWN-2123-18000101</Description>
        <Description term="申请人">付小小</Description>
        <Description term="角色">客户</Description>
        <Description term="购车人身份证号">购车人身份证号</Description>
        <Description term="申请店面">欧拉保定创业店</Description>
        <Description term="新增购车人电话" />
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList col={3} size="middle" title="购车信息" style={{ marginBottom: 32 }}>
        <Description term="商品简称" style={{ position: 'relative9', whiteSpace: 'nowrap' }}>
          哈弗H6运动版 2018款 1.5T 汽油 7DCT 两驱 精英型 红标
        </Description>
        <Description>&nbsp;</Description>
        <Description>&nbsp;</Description>
        <Description term="车辆指导价">100000</Description>
        <Description term="车辆售价">90000</Description>
        <Description term="贷款总额">60000元</Description>
        <Description term="车辆首付">30000元</Description>
        <Description term="还款期限">36</Description>
        <Description term="月供（首期)">2000元</Description>
        <Description term="年利率">13.38</Description>
        <Description term="起租日">2019-01-10</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList col={3} size="middle" title="资产信息" style={{ marginBottom: 32 }}>
        <Description term="剩余租金">75000元</Description>
        <Description term="剩余本金">60000元</Description>
        <Description term="剩余利息">15000元</Description>
        <Description term="剩余罚息">0元</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList col={3} size="middle" title="配偶信息" style={{ marginBottom: 32 }}>
        <Description term="配偶姓名">付小小</Description>
        <Description term="配偶手机号">18800114118</Description>
        <Description term="配偶身份证号">付小小</Description>
        <Description term="新增配偶电话">客户</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList col={3} size="middle" title="紧急联系人信息" style={{ marginBottom: 32 }}>
        <Description term="紧急联系人">王叶</Description>
        <Description term="联系人电话">137701114128</Description>
        <Description term="新增联系人电话">客户</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList col={3} size="middle" title="担保人信息" style={{ marginBottom: 32 }}>
        <Description term="自然人担保姓名">王叶</Description>
        <Description term="自然人担保证件号">137701114128</Description>
        <Description term="自然人担保电话">客户</Description>

        <Description term="新增担保电话">王叶</Description>
        <Description>&nbsp;</Description>
        <Description>&nbsp;</Description>

        <Description term="法人担保姓名">王叶</Description>
        <Description term="法人担保证件号">137701114128</Description>
        <Description term="法人担保电话">客户</Description>
      </DescriptionList>
    </Card>
  );
};
