import React,{PureComponent} from 'react';
import { Card,Avatar } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import { formatTime } from '@/utils/utils';
import {statusJson} from './status';
const { Description } = DescriptionList;
@connect(state => {
  return {
    shopDetail: state.shopDetail,
    loading: state.loading.models.shopDetail,
  };
})
export class ShopDetail extends PureComponent {
  componentDidMount() {
    const { 
      dispatch,
      location:{query:{username}}
     } = this.props;
    dispatch({
      type: 'shopDetail/fetch',
      payload: {
        "data": {
          username
        }
      }
    });
  }
  render(){
    const {
      shopDetail:{
        roleCode,
        roleId,
        username,
        realName,
        roleName,
        phoneNum,
        idcard,
        status,
        channelId,
        channeName,
        createBy,
        createTime,
        updateBy,
        updateTime,
        startUser,
        startTime,
      },
    }= this.props
    return (
      <PageHeaderWrapper
        title="查看账号"
      >
        <Card title={'账号信息'} bordered={false} style={{marginBottom:24}}>
          <DescriptionList col="3">
            <Description term="登录账号">{username || '--'}</Description>
            <Description term="姓名">{realName}</Description>
            <Description term="岗位">{roleName}</Description>
            <Description term="联系电话">{phoneNum}</Description>
            <Description term="身份证号">{idcard}</Description>
            <Description term="账号状态">{statusJson[status] || '--'}</Description>
            <Description term="所属渠道ID">{channelId}</Description>
            <Description term="所属渠道店端名称">{channeName}</Description>
            <Description term="">&nbsp;</Description>
            <Description term="创建人">{createBy || '--'}</Description>
            <Description term="创建时间">{createTime?formatTime(createTime):'--'}</Description>
            <Description term="启用人">{startUser || '--'}</Description>
            <Description term="启用时间">{ startTime?formatTime( startTime):'--'}</Description>
            <Description term="变更人">{updateBy || '--'}</Description>
            <Description term="变更时间">{ updateTime?formatTime( updateTime):'--'}</Description>
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
};
export default ShopDetail;
