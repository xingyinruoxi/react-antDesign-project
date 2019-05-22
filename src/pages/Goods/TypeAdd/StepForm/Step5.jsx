import React from 'react';
import { connect } from 'dva';
import { Button, Row, Col, Divider, Card } from 'antd';
import router from 'umi/router';
import DescriptionList from '@/components/DescriptionList';
import Result from '@/components/Result';
import styles from './style.less';
const { Description } = DescriptionList;

@connect(({ previousStepTypeDataTotal, typeDataTotal }) => ({
  previousStepTypeDataTotal,
  typeDataTotal,
}))
class Step4 extends React.PureComponent {
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { productTemplateInfoId, id },
      },
    } = this.props;
    dispatch({
      type: 'previousStepTypeDataTotal/getPreviousStepTypeDataTotal',
      payload: { data: { id: productTemplateInfoId } },
    });
  }
  render() {
    const {
      previousStepTypeDataTotal: { templateCode, templateName, productTypeKey, templateDesc },
      location: {
        query: { productTemplateInfoId, id },
        pathname,
      },
      typeDataTotal: { flcs_productTypeKey },
    } = this.props;

    const onGoList = () => {
      router.push({ pathname: '/goods/type/list' });
    };
    const onFinish = () => {
      router.push('/goods/type/list/add/info');
    };
    const actions = (
      <>
        <Button type="primary" onClick={onFinish}>
          继续新增
        </Button>
        <Button onClick={onGoList} style={{ marginRight: 8 }}>
          返回列表
        </Button>
      </>
    );
    const information = (
      <>
        <DescriptionList
          className={styles.headerList}
          size="middle"
          col="2"
          style={{ marginBottom: 32 }}
        >
          <Description term="产品类型编码">{templateCode}</Description>
          <Description term="产品类型名称">{templateName}</Description>
          <Description term="选择业务类型">
            {(flcs_productTypeKey && flcs_productTypeKey[productTypeKey]) || '--'}
          </Description>
          <Description term="产品类型描述">{templateDesc || '--'}</Description>
        </DescriptionList>
      </>
    );
    return (
      <Card bordered={false}>
        <Result
          type="success"
          title="操作成功"
          // description="预计两小时内到账"
          extra={information}
          actions={actions}
          className={styles.result}
        />
        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
            paddingTop: 40,
          }}
        />
      </Card>
    );
  }
}

export default Step4;
