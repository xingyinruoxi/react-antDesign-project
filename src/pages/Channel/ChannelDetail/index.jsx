import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import ProductInfo from './components/ProductInfo';
import CarPic from './components/CarPic';
import styles from './assets/css/index.less';
import ManageInfo from './components/ManageInfo';
import RelaSettings from './components/RelaSettings';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
import { billingperiodJson } from './status';
import icoMenu from './assets/img/menu.jpg';
const { Description } = DescriptionList;
export const chtypeJson = {
  0: '购买',
  1: '租赁',
};
const tabList = [
  {
    key: 'tab1',
    tab: '渠道属性要素',
  },
  {
    key: 'tab2',
    tab: '资料上传',
  },
  {
    key: 'tab3',
    tab: '管理员及关键岗位信息',
  },
  {
    key: 'tab4',
    tab: '关联设置',
  },
];
@connect(state => {
  return {
    channelDetail: state.channelDetail,
    loading: state.loading.models.channelDetail,
    channelImportInfo: state.channelImportInfo,
    manageInfo: state.manageInfo,
    keyPositionInfo: state.keyPositionInfo,
    // settingProjectView: state.settingProjectView
  };
})
export default class extends PureComponent {
  state = {
    operationkey: 'tab1',
    settingProjectView: [],
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  onTabChange = key => {
    this.setState({ operationkey: key });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'channelDetail/fetch',
      payload: {
        data: id,
      },
    });
    dispatch({
      type: 'channelImportInfo/fetch',
      payload: {
        data: id,
      },
    });
    dispatch({
      type: 'manageInfo/fetch',
      payload: {
        data: {
          channelId: id,
          isAdmin: true,
        },
      },
    });
    //管理员及关键岗位信息
    dispatch({
      type: 'keyPositionInfo/fetch',
      payload: {
        queryCondition: {
          channelId: id,
          vip: true,
        },
      },
    });
    //关联设置
    dispatch({
      type: 'settingProjectView/fetch',
      payload: {
        data: {
          id,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('settingProjectView', data);
        }
      },
    });
  }
  render() {
    const {
      channelDetail,
      channelDetail: {
        code,
        name,
        address,
        social,
        tbChannelZoneName,
        opendate,
        startdate,
        enddate,
        createTime,
        regionIdProvince,
        regionIdCity,
        regionIdCounty,
        billingperiod,
        settlement,
        amount,
        createBy,
        updateBy,
        updateTime,
        cityShowName,
        type,
      },
      channelImportInfo,
      manageInfo,
      keyPositionInfo,
      location: {
        query: { id },
      },
    } = this.props;
    const { operationkey, settingProjectView } = this.state;
    const contentList = {
      tab1: <ProductInfo channelImportInfo={channelImportInfo} id={id} />,
      tab2: <CarPic channelDetail={channelDetail} />,
      tab3: <ManageInfo manageInfo={manageInfo} keyPositionInfo={keyPositionInfo} />,
      tab4: <RelaSettings settingProjectView={settingProjectView} />,
    };
    const description = (
      <DescriptionList className={styles.headerList} col="3">
        <Description term="渠道名称">{name}</Description>
        <Description term="统一社会信用代码">{social || '--'}</Description>
        <Description term="选择省市区">{cityShowName || '--'}</Description>
        <Description term="详细地址">{address || '--'}</Description>
        <Description term="选择大区">{tbChannelZoneName || '--'}</Description>
        <Description term="开业时间">{opendate || '--'}</Description>
        <Description term="建立方式">{chtypeJson[type] || '--'}</Description>
        {type == 1 ? (
          <Description term="付款周期">{billingperiodJson[billingperiod] || '--'}</Description>
        ) : null}
        <Description term={`${type == 1 ? '租赁' : '购买'}金额`}>{amount}元</Description>
        {type == 1 ? <Description term="使用时间">{startdate || '--'}</Description> : null}
        {type == 1 ? <Description term="结束时间">{enddate || '--'}</Description> : null}
        <Description term="">&nbsp;</Description>
        <Description term="创建人">{createBy || '--'}</Description>
        <Description term="创建时间">{createTime || '--'}</Description>
        <Description term="">&nbsp;</Description>
        <Description term="变更人">{updateBy || '--'}</Description>
        <Description term="变更人时间">{updateTime ? formatTime(updateTime) : '--'}</Description>
      </DescriptionList>
    );
    return (
      <PageHeaderWrapper
        title={`渠道编码:${code || '--'}`}
        logo={<img alt="" src={icoMenu} />}
        content={description}
        tabList={tabList}
        onTabChange={this.onTabChange}
      >
        <Card className={styles.tabsCard} bordered={false}>
          {contentList[operationkey]}
        </Card>
      </PageHeaderWrapper>
    );
  }
}
