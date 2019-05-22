import React from 'react';
import { connect } from 'dva';
import { Button, Row, Col, Divider } from 'antd';
import router from 'umi/router';
import DescriptionList from '@/components/DescriptionList';
import Result from '@/components/Result';
import { formatTime } from '@/utils/utils';
import styles from './style.less';
const { Description } = DescriptionList;
@connect(({ maintenance, planTypeStep1 }) => ({ maintenance, planTypeStep1 }))
class Step4 extends React.PureComponent {
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    //类型维护列表
    dispatch({
      type: 'maintenance/fetch',
      payload: { queryCondition: {} },
    });
    if (!id) return;
    dispatch({
      type: 'planTypeStep1/fetch',
      payload: { data: { id } },
    });
  }
  render() {
    const {
      maintenance,
      maintenance: { list },
      planTypeStep1: { schemaCode, tbProductTemplateInfoId, startDate, schemaDesc },
    } = this.props;

    const newType = {};
    list &&
      list.forEach(({ id, templateName }) => {
        newType[id] = templateName;
      });
    const onFinish = () => {
      router.push('/goods/plan/list/add/info');
    };
    const onGoList = () => {
      router.push('/goods/plan/list');
    };
    const information = (
      <>
        <DescriptionList col="1" style={{ marginBottom: 16 }}>
          <Description term="产品方案编码">
            <span className={styles.money}>{schemaCode}</span>
          </Description>
        </DescriptionList>
        <DescriptionList size="middle" col="2">
          <Description term="选择所属类型">{newType[tbProductTemplateInfoId]}</Description>
          <Description term="产品上架时间">{formatTime(startDate)}</Description>
          <Description term="产品方案说明">{schemaDesc || '--'}</Description>
        </DescriptionList>
      </>
    );
    const actions = (
      <>
        <Button type="primary" onClick={onFinish}>
          继续新增
        </Button>
        <Button onClick={onGoList}>返回列表</Button>
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

export default Step4;
