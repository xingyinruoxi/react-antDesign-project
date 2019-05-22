import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ProductInfo from './components/ProductInfo';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import { connect } from 'dva';
import styles from './assets/css/index.less';
const tabList = [
  {
    key: 'tab1',
    tab: '融租规则',
  },
  {
    key: 'tab2',
    tab: '还款日',
  },
  {
    key: 'tab3',
    tab: '其他规则',
  },
];

@connect(({ goodTypeDetail, typeDataTotal, loading, payGoodTypeDetail }) => ({
  goodTypeDetail,
  payGoodTypeDetail,
  loading: loading.models.goodTypeDetail,
  typeDataTotal,
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      operationkey: 'tab1',
    };
  }

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
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: { version: 1 },
      },
    });
    //产品类型基本信息 查看
    dispatch({
      type: 'goodTypeDetail/detail',
      payload: { data: { id } },
    });
    //产品类型规则（首付） 查看
    dispatch({
      type: 'payGoodTypeDetail/pt_firstpaymentDetail',
      payload: { data: { ptInfoId: id, paymentGroup: 'pt_firstpayment' } },
    });
  }
  render() {
    let {
      goodTypeDetail,
      payGoodTypeDetail,
      typeDataTotal: { flcs_productTypeKey },
      typeDataTotal,
      location,
      dispatch,
    } = this.props;
    const propsTab1 = {
      dispatch,
      location,
      typeDataTotal,
    };
    const propsTab2 = {
      dispatch,
      location,
      typeDataTotal,
    };
    const contentList = {
      tab1: <Tab1 {...propsTab1} />,
      tab2: <Tab2 {...propsTab2}/>,
      tab3: <Tab3 {...propsTab2}/>,
    };
    const { operationkey } = this.state;
    return (
      <PageHeaderWrapper title="查看产品类型">
        <div tabList={tabList} onTabChange={this.onTabChange}>
          {goodTypeDetail.id ? (
            <ProductInfo data={goodTypeDetail} flcs_productTypeKey={flcs_productTypeKey} />
          ) : null}
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={tabList}
            onTabChange={this.onTabChange}
          >
            {contentList[operationkey]}
          </Card>
        </div>
      </PageHeaderWrapper>
    );
  }
}
