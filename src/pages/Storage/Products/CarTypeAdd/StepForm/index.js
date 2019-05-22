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
      case 'img':
        return 2;
      case 'cofigdetail':
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
      <PageHeaderWrapper title={`${pathname.includes('edit') ? '编辑' : '新增'}商品车型`}>
        <Card bordered={false}>
          <>
            <Steps current={this.getCurrentStep()} className={styles.steps}>
              <Step title="基本信息" />
              <Step title="专属信息" />
              <Step title="车型图片" />
              <Step title="详细配置" />
              <Step title="完成" />
            </Steps>
            {children}
          </>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
