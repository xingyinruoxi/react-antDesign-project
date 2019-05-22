import React from 'react';
import { connect } from 'dva';
import { Button, Row, Col } from 'antd';
import router from 'umi/router';
import DescriptionList from '@/components/DescriptionList';
import Result from '@/components/Result';
import styles from './style.less';
import { formatTime } from '@/utils/utils';
import {chTypeJson,billingperiodJson} from './status'
const { Description } = DescriptionList;

@connect(({channelDetail }) => ({
  channelDetail
}))
class Step4 extends React.PureComponent {
  componentDidMount() {
    const { 
      dispatch,
      location:{query:{id}}
     } = this.props;
    dispatch({
      type: 'channelDetail/fetch',
      payload:{
        userId:7,
        data: id,
      }
    })
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
  }
  render() {
    const { 
      channelDetail:{
        code,
        name,
        social,
        address,
        tbChannelZoneName,
        opendate,
        type,
        billingperiod,
        amount,
        startdate,
        enddate,
        cityShowName
      },
     } = this.props;
    const onFinish = () => {
      router.push('/channel/channel/list/add/info');
    };
    const onList = () => {
      router.push('/channel/channel/list');
    };
    const information = (
      <>
        <DescriptionList className={styles.headerList} size="middle" col="3" style={{marginBottom: 32}}>
          <Description term="渠道编号">{code || '--'}</Description>
          <Description term="渠道名称">{name} </Description>
          <Description term="统一社会信用代码">{social}</Description>
          <Description term="选择省市区">{cityShowName||'--'}</Description>
          <Description term="详细地址">{address}</Description>
          <Description term="选择大区">{tbChannelZoneName}</Description>
          <Description term="开业时间">{opendate || '--'}</Description>
          <Description term="建立方式">{chTypeJson[type]}</Description>
          <Description term={`${type == 1 ?'租赁':'购买'}金额`}>{amount}</Description>
          {type == 1 ? (
            <Description term="付款周期">{billingperiodJson[billingperiod] || '--'}</Description>
          ):null}
          {type == 1 ? (
            <Description term="使用开始时间">{startdate || '--'}</Description>
          ):null}
          {type == 1 ? (
            <Description term="使用结束时间">{enddate || '--'}</Description>
          ):null}
		    </DescriptionList>
      </>
    );
    const actions = (
      <>
      <Button type="primary" onClick={onFinish}>
        继续新增
      </Button>
      <Button onClick={onList}>返回列表</Button>
      </>
    );
    return (
      <Result
        type="success"
        title="操作成功"
        extra={information}
        actions={actions}
        className={styles.result}
      />
    );
  }
}

export default Step4;
