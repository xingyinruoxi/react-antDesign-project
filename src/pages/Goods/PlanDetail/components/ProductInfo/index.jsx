import React from 'react';
import { Card, Form, Row, Col } from 'antd';
import moment from 'moment';
import styles from './style.less';
export default props => {
  const formItemLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };
  return (
    <Card bordered={false}>
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <Row gutter={30}>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="产品方案编码">
              {props && props.schemaCode ? props.schemaCode : '--'}
            </Form.Item>
            <Form.Item {...formItemLayout} label="选择所属类型">
              {props && props.tbProductTemplateInfoId ? props.tbProductTemplateInfoId : '--'}
            </Form.Item>
            <Form.Item {...formItemLayout} label="产品上架时间">
              {props && moment(props.startDate).format('YYYY-MM-DD')
                ? moment(props.startDate).format('YYYY-MM-DD')
                : '--'}
            </Form.Item>
            <Form.Item {...formItemLayout} label="产品方案说明">
              {props && props.schemaDesc ? props.schemaDesc : '--'}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="产品方案名称">
              {props && props.schemaName ? props.schemaName : '--'}
            </Form.Item>
            <Form.Item {...formItemLayout} label="产品方案状态">
              {props.schemaStatus == 1 ? '上架' : null}
              {props.schemaStatus == 2 ? '待上架' : null}
              {props.schemaStatus == 3 ? '下架' : null}
            </Form.Item>
            <Form.Item {...formItemLayout} label="产品下架时间">
              {props && moment(props.endDate).format('YYYY-MM-DD')
                ? moment(props.endDate).format('YYYY-MM-DD')
                : '--'}
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};
