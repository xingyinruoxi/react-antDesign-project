import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import { connect } from 'dva';
import { formatTime } from '@/utils/utils';
const { Description } = DescriptionList;
@connect(({typeData,loading,proClassDetail}) =>({
  typeData,
  loading:loading.models.proClassDetail,
  proClassDetail
}))
class Detail extends PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: { query: id },
    } = this.props;
    dispatch({
      type: 'proClassDetail/fetch',
      payload: { data: id },
    });
    dispatch({
      type: 'typeData/fetch',
      payload: {
        data: {
          key: 'cm_level',
        },
      },
    });
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'typeData/clear',
      payload: {},
    });
  }
  render() {
    const {
      typeData,
      loading,
      proClassDetail: { code, name, createTime, level, createBy, updateBy, updateTime,parentName },
    } = this.props;
    return (
      <PageHeaderWrapper title="查看商品类别">
        <Card title={'基本信息'} bordered={false} loading={loading}>
          <DescriptionList col="3">
            <Description term="商品类别编码">{code}</Description>
            <Description term="商品类别名称">{name}</Description>
            <Description term="商品类别级别"> {typeData[level]}</Description>
            <Description term="上级商品类别">{parentName}</Description>
            <Description term="录入人">{createBy}</Description>
            <Description term="录入时间">{formatTime(createTime)}</Description>
            <Description term="变更人">{updateBy}</Description>
            <Description term="变更时间">{formatTime(updateTime)}</Description>
          </DescriptionList>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Detail;
