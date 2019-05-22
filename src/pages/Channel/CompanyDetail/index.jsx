import React,{PureComponent} from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import CompanyInfo from './components/CompanyInfo';
import CompanyIntr from './components/CompanyIntr';
import ImgZoom from '@/components/ImgZoom';
import { connect } from 'dva';

const operationTabList = [
  {
    key: 'tab1',
    tab: '基本信息',
  },
  {
    key: 'tab2',
    tab: '集团简介',
  },
];

@connect(state => {
  return {
    companyDetail:state.companyDetail,
    loading: state.loading.models.companyDetail,
  };
})
export class CompanyDetail extends PureComponent {
  state = {
    operationkey: 'tab1',
  }
  componentDidMount() {
    const { 
      dispatch,
      location:{query:{id}}
     } = this.props;
    dispatch({
      type: 'companyDetail/fetch',
      payload:{
        data: id
      }
    })
  }
  onTabChange = key => {
    const {
      dispatch,
      location: { query: id },
      companyDetail,
    } = this.props;
    this.setState({ operationkey: key });
  };
  render(){
    const {
      companyDetail,
    }=this.props
    const { operationkey } = this.state;
    const parentMetheds = {
      operationTabList,
      companyDetail
    };
    const contentList = {
      tab1: <>{companyDetail.id?<CompanyInfo {...parentMetheds}/>:null}</>,
      tab2: <>{companyDetail.id?<CompanyIntr {...parentMetheds}/>:null}</>,
    };
    return (
        <PageHeaderWrapper
          title="查看集团">
          <Card
            bordered={false}
            style={{ marginTop: 24 }}
            tabList={operationTabList}
            onTabChange={this.onTabChange}>
            {contentList[operationkey]}
            <footer
              style={{
                textAlign: 'center',
                paddingBottom: 30,
              }}>
            </footer>
          </Card>
        </PageHeaderWrapper>
      );
  }
};
export default CompanyDetail;