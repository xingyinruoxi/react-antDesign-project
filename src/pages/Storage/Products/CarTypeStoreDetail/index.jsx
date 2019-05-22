import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import ConfigDetail from './components/ConfigDetail';
import ProductInfo from './components/ProductInfo';
import CarPic from './components/CarPic';
import styles from './assets/css/index.less';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
const { Description } = DescriptionList;

const tabList = [
  {
    key: 'tab1',
    tab: '商品专属信息',
  },
  {
    key: 'tab2',
    tab: '车型图片',
  },
  {
    key: 'tab3',
    tab: '商品详情配置',
  },
];

@connect(({ typeDataTotal, carTypeConfig, loading, carTypeDetail }) => ({
  typeDataTotal,
  loading: loading.models.carTypeDetail && loading.models.typeDataTotal,
  carTypeDetail,
  carTypeConfig,
}))
class Detail extends PureComponent {
  state = {
    operationkey: 'tab1',
    imgList: {},
    reqResult: false,
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 0,
        },
      },
    });
  }

  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    const {setData}=this;
    dispatch({
      type: 'carTypeDetail/fetch',
      payload: { data: { id } },
      callBack(msg,data){
        if(msg==='OK'){
          setData('reqResult',true)
        }
      }
    });
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
  }
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  onTabChange = key => {
    const { setData } = this;
    const {
      dispatch,
      location: {
        query: { id },
      },
      carTypeDetail: { tbCommodityInfoDetailId: detailId },
    } = this.props;
    const { reqResult } = this.state;
    if (key === 'tab3') {
      if (!reqResult) return;
      dispatch({
        type: 'carTypeConfig/fetch',
        payload: { data: { detailId } },
      });
    } else if (key === 'tab2') {
      if (!reqResult) return;
      dispatch({
        type: 'getCarTypeImg/fetch',
        payload: { data: { commodityInfoId: id } },
        callBack(msg, data) {
          if (msg === 'OK') {
            setData('imgList', data);
          }
        },
      });
    }
    this.setState({ operationkey: key });
  };

  render() {
    const { operationkey, imgList, reqResult } = this.state;
    const {
      carTypeConfig,
      typeDataTotal,
      loading,
      carTypeDetail: {
        code,
        status,
        name,
        referred,
        rule,
        createBy,
        updateBy,
        updateTime,
        createTime,
        startDate,
        endDate,
        productName,
      },
      typeDataTotal: { cm_status },
    } = this.props;
    const description = (
      <DescriptionList className={styles.headerList} size="middle" col="2">
        <Description term="商品名称">{name}</Description>
        <Description term="商品简称">{referred}</Description>
        <Description term="商品简称规则">{rule}</Description>
        <Description term="选择所属商品型号">{productName}</Description>
        <Description term="商品状态">{cm_status[status]}</Description>
        <Description term={`商品上架时间`}>{formatTime(status ? startDate : endDate)}</Description>
        <Description term={`商品下架时间`}>{formatTime(endDate)}</Description>
        <Description term="创建人">{createBy}</Description>
        <Description term="创建人时间">{formatTime(createTime)}</Description>
        <Description term="变更人">{updateBy}</Description>
        <Description term="变更人时间">{formatTime(updateTime)}</Description>
      </DescriptionList>
    );
    const contentList = {
      tab1: (
        <>
          {typeDataTotal.cm_emissionStandard && reqResult ? (
            <ProductInfo carTypeDetail={this.props.carTypeDetail} typeDataTotal={typeDataTotal} />
          ) : null}
        </>
      ),
      tab2: <>{imgList.type1 && reqResult ? <CarPic data={imgList} /> : null}</>,
      tab3: (
        <>
          {reqResult ? (
            <ConfigDetail carTypeConfig={carTypeConfig} typeDataTotal={typeDataTotal} />
          ) : null}
        </>
      ),
    };
    return (
      <PageHeaderWrapper
        title={`商品编号:${code}`}
        /*  logo={
          <img alt="" src="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png" />
        } */
        content={description}
        tabList={tabList}
        onTabChange={this.onTabChange}
        loading={loading}
      >
        <Card className={styles.tabsCard} loading={loading} bordered={false}>
          {contentList[operationkey]}
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Detail;
