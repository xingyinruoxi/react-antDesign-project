import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import ImgZoom from '@/components/ImgZoom';
import { connect } from 'dva';
import { formatTime, local } from '@/utils/utils';
const { Description } = DescriptionList;
const token = local.fetch('token');
@connect(({ loading, brandDetail, typeData }) => ({
  loading: loading.models.brandDetail,
  brandDetail,
  typeData,
}))
class Detail extends PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: { query: id },
    } = this.props;
    dispatch({
      type: 'brandDetail/fetch',
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
      brandDetail: {
        code,
        name,
        categories,
        level,
        parentName,
        createBy,
        updateBy,
        createTime,
        updateTime,
        imgUrl,
      },
    } = this.props;
    return (
      <PageHeaderWrapper title=" 查看厂家品牌">
        <Card title={'基本信息'} bordered={false} loading={loading}>
          <>
            {!loading ? (
              <DescriptionList col="2">
                <Description term="厂家品牌编号">{code}</Description>
                <Description term="厂家品牌名称">{name}</Description>
                <Description term="所属商品类别"> {categories || '--'}</Description>
                <Description term="厂家品牌级别">{typeData[level]}</Description>
                <Description term="上级厂家品牌">{parentName || '--'}</Description>
                <Description term="上传品牌标识">
                  <ImgZoom imgUrl={`${imgUrl}?Authorization=${token}`} />
                </Description>
                <Description term="录入人">{createBy}</Description>
                <Description term="录入时间">{formatTime(createTime)}</Description>
                <Description term="变更人">{updateBy}</Description>
                <Description term="变更时间">{formatTime(updateTime)}</Description>
              </DescriptionList>
            ) : null}
          </>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Detail;
