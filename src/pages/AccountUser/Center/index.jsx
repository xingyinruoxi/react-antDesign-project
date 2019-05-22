import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {Card} from 'antd';
import DescriptionList from '@/components/DescriptionList';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from '../assets/css/style.less';
const { Description } = DescriptionList;
@connect(({ userInfo }) => ({
  userInfo
}))
class BasicForms extends PureComponent {
 
  render() {
    const { 
      userInfo:{
        headPhoto,
        username,
        realName,
        phone,
        leader,
        work
      }
     } = this.props;
    return (
      <PageHeaderWrapper title={'个人中心'}>
        <Card>
          <div className={styles.left}>
            <img
              alt="indicator"
              style={{ width: 56, height: 56 }}
              src={headPhoto}
            />
          </div>
          <DescriptionList size="middle" col="1">
            <Description term="登录账号">{username}</Description>
            <Description term="姓名">{realName || '--'}</Description>
            <Description term="岗位">{work || '--'}</Description>
            <Description term="电话">{phone || '--'}</Description>
            <Description term="身份证号">{'--'}</Description>
            <Description term="所属部门">{leader || '--'}</Description>
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicForms;
