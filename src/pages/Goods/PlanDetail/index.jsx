import React, { PureComponent } from 'react';
import { Card } from 'antd';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import styles from './assets/css/index.less';
const { Description } = DescriptionList;
const tabList = [
  {
    key: 'tab2',
    tab: '定价信息',
  },
  {
    key: 'tab3',
    tab: '方案的要素属性',
  },
  {
    key: 'tab4',
    tab: '还款计划信息',
  },
];

@connect(({ getpsinfo, loading, typeDataTotal, maintenance }) => ({
  typeDataTotal,
  getpsinfo,
  loading: loading.models.getpsinfo,
  maintenance,
}))
export default class extends PureComponent {
  state = {
    operationkey: 'tab2',
    reqResult:false
  };
  setData=(key,data)=>{
    this.setState({
      [key]:data
    })
  }
  componentDidMount() {
    const {
      dispatch,
      location: { query: id },
    } = this.props;
    const {setData}=this;
    // 产品方案名称  基本信息
    dispatch({
      type: 'getpsinfo/fetch',
      payload: {
        data: id,
      },
      callBack(msg,data){
        if(msg==='OK'){
          setData('reqResult',true)
        }
      }
    });
    //字典表
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
  }
  onTabChange = key => {
    this.setState({ operationkey: key });
  };

  render() {
    const {
      typeDataTotal,
      location,
      getpsinfo: {
        tbProductTemplateInfoId,
        schemaCode,
        schemaName,
        schemaStatus,
        startDate,
        schemaDesc,
        createBy,
        createTime,
        updateBy,
        updateTime,
        endDate
      },
      maintenance: { list },

    } = this.props;
    const { operationkey ,reqResult} = this.state;
    const propsTab2 = {
      location,
      tbProductTemplateInfoId,
      typeDataTotal
    };
    const contentList = {
      tab2: <>{tbProductTemplateInfoId&&reqResult ? <Tab2 {...propsTab2} /> : null}</>,
      tab3: <>{tbProductTemplateInfoId&&reqResult ? <Tab3 {...propsTab2} /> : null}</>,
      tab4: <>{tbProductTemplateInfoId&&reqResult ? <Tab4 {...propsTab2} /> : null}</>,
    };

    const newList = list || [];
    const newJson = {};
    newList.length > 0 &&
      newList.forEach(({ id, templateName }) => {
        newJson[id] = templateName;
      });
    const description = (
      <DescriptionList className={styles.headerList} col="3">
        <Description term="产品方案编码">{schemaCode || '--'}</Description>
        <Description term="产品方案名称">{schemaName || '--'}</Description>
        <Description term="选择所属类型">{newJson[tbProductTemplateInfoId] || '--'}</Description>
        <Description term="产品方案状态">
          {schemaStatus && schemaStatus === '1' ? '上架' : '下架'}
        </Description>
        <Description term="产品上架时间">{formatTime(startDate) || '--'}</Description>
        <Description term="产品下架时间">{formatTime(endDate) || '--'}</Description>
        <Description term="产品方案说明">{schemaDesc || '--'}</Description>
        <Description term="创建人">{createBy || '--'}</Description>
        <Description term="创建人时间">{createTime?formatTime(createTime) : '--'}</Description>
        <Description term="变更人">{updateBy || '--'}</Description>
        <Description term="变更人时间">{updateTime?formatTime(updateTime):'--'}</Description>
      </DescriptionList>
    );
    return (
      <PageHeaderWrapper
        title="基本信息"
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
