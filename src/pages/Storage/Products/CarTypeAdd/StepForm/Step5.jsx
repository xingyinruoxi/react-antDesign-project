import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import router from 'umi/router';
import DescriptionList from '@/components/DescriptionList';
import Result from '@/components/Result';
import { formatTime } from '@/utils/utils';
import styles from './style.less';
const { Description } = DescriptionList;
const statusJson={
  1:'上架',
  3:'下架'
}

@connect(({ carTypeDetail,proTypeEnd }) => ({
  carTypeDetail,
  proTypeEnd
}))
export default class Step5 extends React.PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    dispatch({
      type: 'carTypeDetail/fetch',
      payload: { data: { id } },
      callBack() {
        setBaseInfo();
      },
    });
    dispatch({
      type: 'proTypeEnd/fetch',
      payload: { data: {} },
    });
  }
  render() {
    const {
      carTypeDetail: { code, name,tbCommodityProductId, rule, updateBy, startDate, status },
      proTypeEnd
    } = this.props;
    const newProTypeEnd={}
    proTypeEnd&&proTypeEnd.forEach(({id:tbCommodityProductId,name}) => {
      newProTypeEnd[tbCommodityProductId]=name
    })
    const onFinish = () => {
      router.push(
        `/store/products/cartypestore/add/info`
      );
    };
    const onList = () => {
      router.push('/store/products/cartypestore/list');
    };
    const information = (
      <>
        <DescriptionList col="1" style={{ marginBottom: 16 }}>
          <Description term="商品编号">
            <span className={styles.money}>{code}</span>
          </Description>
        </DescriptionList>
        <DescriptionList col="1" style={{ marginBottom: 16 }}>
          <Description term="商品名称">{name}</Description>
        </DescriptionList>
        <DescriptionList col="1" style={{ marginBottom: 16 }}>
          <Description term="商品简称规则">{rule}</Description>
        </DescriptionList>
        <DescriptionList size="middle" col="2">
          <Description term="所属品牌型号">{newProTypeEnd[tbCommodityProductId]}</Description>
          <Description term="商品状态">{statusJson[status]}</Description>
          <Description term="商品上架时间">{formatTime(startDate)}</Description>
          <Description term="创建人">{updateBy}</Description>
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
        // description="预计两小时内到账"
        extra={information}
        actions={actions}
        className={styles.result}
      />
    );
  }
}
