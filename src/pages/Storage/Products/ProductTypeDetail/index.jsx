import React, { PureComponent } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import ImgZoom from '@/components/ImgZoom';
import { connect } from 'dva';
import { formatTime ,local} from '@/utils/utils';
const { Description } = DescriptionList;
const token = local.fetch('token');
@connect(({ loading, proTypeDetail }) => ({
  loading: loading.models.proTypeDetail,
  proTypeDetail,
}))
export default class extends PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: { query: id },
    } = this.props;
    dispatch({
      type: 'proTypeDetail/fetch',
      payload: { data: id },
    });
  }
  render() {
    const {
      typeData,
      loading,
      proTypeDetail: { code, name, brandName, createBy, createTime, updateBy, updateTime, imgUrl },
    } = this.props;

    return (
      <PageHeaderWrapper title="查看商品型号">
        <Card title={'基本信息'} bordered={false} loading={loading}>
          <DescriptionList col="2">
            <Description term="商品型号编码">{code}</Description>
            <Description term="商品型号名称">{name}</Description>
            <Description term="所属厂家品牌">{brandName}</Description>
            <Description term="上传型号图片">
              <ImgZoom imgUrl={`${imgUrl}?Authorization=${token}`} />
            </Description>
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
