import React, { PureComponent, Fragment } from 'react';
import { Card, Steps } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from '../style.less';

const { Step } = Steps;

export default class StepForm extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'step2':
        return 2;
      case 'step3':
        return 3;
      case 'result':
        return 4;
      default:
        return 0;
    }
  }

  render() {
    const { location:{pathname}, children } = this.props;
    const hasEdit=pathname.includes('edit')
    return (
      <PageHeaderWrapper
        title={`${hasEdit?'编辑':'新增'}产品方案`}
      >
        <Card bordered={false}>
          <>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="基本信息" />
              <Step title="商品定价信息" />
              <Step title="方案要素属性" /> 
              <Step title="还款计划信息" /> 
              <Step title="完成" />
            </Steps>
            {children}
          </>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
