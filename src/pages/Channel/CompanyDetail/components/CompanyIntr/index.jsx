import React from 'react';
import { Card, Table } from 'antd';
import DescriptionList from '@/components/DescriptionList';
const { Description } = DescriptionList;
const titleNameJson = {
  0: '董事长',
  1: '董事',
  2: '总裁',
  3: '总经理',
  4: '副总裁',
  5: '无职务',
}
const businessNameJson = {
  0: '汽车4s店',
  1: '汽车销售',
  2: '二手车',
  3: '汽车金融',
  4: '汽车制造',
  5: '汽车融租',
}
export default props => {
  const columns = [
    {
      title: '汽车行业选择',
      dataIndex: 'businessName',
      id: 'businessName',
      render: val => <>{businessNameJson[val]}</>
    },
    {
      title: '相关公司数量',
      dataIndex: 'companyCount',
      id: 'companyCount'
    },
    {
      title: '主要业绩',
      dataIndex: 'mianBusinessDesc',
      id: 'mianBusinessDesc'
    }
  ]
  const column = [
    {
      title: '集团职务',
      dataIndex: 'titleId',
      render: val => <>{titleNameJson[val]}</>
    },
    {
      title: '股东姓名',
      dataIndex: 'name',
    },
    {
      title: '所占股权（%）',
      dataIndex: 'proportion',
    },
    {
      title: '联系电话',
      dataIndex: 'mobile',
    }
  ]
  const {
    companyDetail: {
      goupShareholder,
      gourpMainBusiness,
      mainBusiness,
      otherDesc,
    }
  } = props;
  return (
    <Card bordered={false}>
      <DescriptionList col="1" style={{marginBottom:20}}>
        <Description term="主营业务">{mainBusiness}</Description>
      </DescriptionList>
      <Table
        rowKey={'id'}
        bordered={true}
        size={'middle'}
        columns={columns}
        dataSource={gourpMainBusiness}
        pagination={false}
      />
      <Table
      style={{marginBottom:20,marginTop:20}}
        rowKey={'id'}
        bordered={true}
        size={'middle'}
        pagination={false}
        columns={column}
        dataSource={goupShareholder}
      />
      <DescriptionList col="1">
        <Description term="其他说明">{otherDesc}</Description>
      </DescriptionList>
    </Card>
  );
}
