import React, { PureComponent } from 'react';
import { Card, Steps } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from '../style.less';

const { Step } = Steps;

export default class StepForm extends PureComponent {
  getCurrentStep() {
    const {
      location: { pathname },
    } = this.props;
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
    const {
      location: { pathname },
      children,
    } = this.props;
    return (
      <PageHeaderWrapper title={`${pathname.includes('add') ? '新增' : '编辑'}产品类型`}>
        <Card bordered={false}>
          <>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="基本信息" />
              <Step title="设置融租规则" />
              <Step title="设置还款日" />
              <Step title="补充其他规则" />
              <Step title="完成" />
            </Steps>
            {children}
          </>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
