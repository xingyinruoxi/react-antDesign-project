import React from 'react';
import { connect } from 'dva';
import { Button, Row, Col } from 'antd';
import router from 'umi/router';
import DescriptionList from '@/components/DescriptionList';
import Result from '@/components/Result';
import styles from './style.less';
import {openBankJson} from '../status'
const { Description } = DescriptionList;

@connect(({ companyDetail }) => ({
  companyDetail
}))
class Step4 extends React.PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    dispatch({
      type:'companyDetail/fetch',
      payload: { data: id },
    })

  }
  render() {
    const { 
      companyDetail:{
        name,
        code,
        social,
        personName,
        personIdcradno,
        openbank,
        card,
        associated,
        phonenum,
        regionIdProvince,
        regionIdCity,
        regionIdCounty,
        regionIdProvinceName,
        regionIdCityName,
        regionIdCountyName,
        address,
        cityShowName
      }
     } = this.props;
    const onFinish = () => {
      router.push('/channel/company/list/add/info');
    };
    const onList = () => {
      router.push('/channel/company/list');
    };
    const information = (
      <>
        <DescriptionList size="middle" col="2">
          <Description term="集团编号"><span className={styles.money}>{code}</span></Description>
          <Description term="集团名称">{name}</Description>
          <Description term="统一社会信用代码">{social}</Description>
          <Description term="法人姓名">{personName}</Description>
          <Description term="法人身份证号">{personIdcradno}</Description>
          <Description term="开户银行">{openBankJson[openbank] || '--'}</Description>
          <Description term="开户账号">{card}</Description>
          <Description term="联行号">{associated}</Description>
          <Description term="联系电话">{phonenum}</Description>
          <Description term="选择省市区">{cityShowName || '--'}</Description>
          <Description term="详细地址">{address}</Description>
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
