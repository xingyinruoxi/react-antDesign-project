import React from 'react';
import { connect } from 'dva';
import { Form, Button, Row, Col, Table, message } from 'antd';
import router from 'umi/router';
import styles from './../style.less';
import TableFormPlan from './components/TableFormPlan';
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
const columns = [
  {
    title: '还款期数',
    dataIndex: 'planPeriod',
    key: 'planPeriod',
    width: '50%',
  },
  {
    title: '还款金额（元）',
    dataIndex: 'currentAmount',
    key: 'currentAmount',
  },
];
@connect(({ getptinfo }) => ({
  getptinfo,
}))
@Form.create()
class Step4 extends React.PureComponent {
  state = {
    list: [],
  };
  setData = (key, values) => {
    this.setState({ [key]: values });
  };
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
      tbProductTemplateInfoId
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'getpsplans/fetch',
      payload: {
        data: { id },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('list', data);
        }
      },
    });
    dispatch({
      type: 'getptinfo/fetch',
      payload: {
        data: { id: tbProductTemplateInfoId },
      },
    });
  }
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
      tbProductTemplateInfoId
    } = this.props;
  }
  render() {
    const {
      form: { validateFields, getFieldDecorator },
      dispatch,
      location: {
        query,
        query: { id },
        pathname,
      },
      tbProductTemplateInfoId,
      getptinfo,
    } = this.props;
    const { list } = this.state;
    

    const propsTableFormPlan = {
      tbProductSchemaInfoId: id,
      tbProductTemplateInfoId,
    };
    return (
      <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
        <div style={{margin: '0 auto',marginTop:-30,width:600}}>
          {getptinfo && getptinfo.interestKey === 'bgz' ? (
            <Form.Item>
              {getFieldDecorator('psPlanDTOList', {
                initialValue: list,
                rules: [
                  {
                    required: true,
                    message: '请添加还款计划',
                  },
                ],
              })(<TableFormPlan {...propsTableFormPlan} />)}
            </Form.Item>
          ) : (
            <Table
              dataSource={list}
              size={'middle'}
              scroll={{ y: 300 }}
              rowKey={'id'}
              bordered
              pagination={false}
              columns={columns}
            />
          )}
        </div>
      </Form>
    );
  }
}

export default Step4;
