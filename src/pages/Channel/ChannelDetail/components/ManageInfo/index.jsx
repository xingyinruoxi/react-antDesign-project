import React, { PureComponent } from 'react';
import { Card, Table } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import styles from '../../assets/css/BasicProfile.less';
const { Description } = DescriptionList;
export default props => {
  const columns = [
    {
      title: '选择岗位',
      dataIndex: 'roleName',
    },
    {
      title: '人员姓名',
      dataIndex: 'username',
    },
    {
      title: '联系电话',
      dataIndex: 'phoneNum',
    },
    {
      title: '身份证号',
      dataIndex: 'idcard',
      render: idcard => <>{idcard || '--'}</>,
    },
  ];
  const {
    keyPositionInfo: { list },
    manageInfo,
  } = props;
  return (
    <Card bordered={false}>
      {manageInfo.length > 0 ? (
        <>
          <div className={styles.title}>店端管理账号信息</div>
          <DescriptionList col="2">
            <Description term="登录账号">{manageInfo[0].username || '--'}</Description>
            <Description term="初始密码">******</Description>
            <Description term="紧急联系人">{manageInfo[0].realName || '--'}</Description>
            <Description term="联系电话">{manageInfo[0].phoneNum || '--'}</Description>
          </DescriptionList>
        </>
      ) : null}

      <div className={styles.title} style={{ marginTop: 20 }}>
        关键岗位列表
      </div>
      <Table columns={columns} bordered={true} size={'middle'} pagination={false} dataSource={list} rowKey={'id'} />
    </Card>
  );
};
