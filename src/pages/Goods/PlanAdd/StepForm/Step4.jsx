import React from 'react';
import { connect } from 'dva';
import { Form, Button, Row, Col, Table, message } from 'antd';
import router from 'umi/router';
import styles from './style.less';
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
    width: '50%',
    key: 'planPeriod',
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
        query: { tbProductTemplateInfoId, id },
      },
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
        query: { tbProductTemplateInfoId, id },
      },
    } = this.props;
  }
  render() {
    const {
      form: { validateFields, getFieldDecorator },
      dispatch,
      location: {
        query,
        query: { id, tbProductTemplateInfoId },
        pathname,
      },
      getptinfo,
    } = this.props;
    const { list } = this.state;
    const hasEdit = pathname.includes('edit');
    const prevPage = `/goods/plan/list/${hasEdit ? 'edit' : 'add'}/step2`;
    const nextPage = `/goods/plan/list/${hasEdit ? 'edit' : 'add'}/result`;
    const onPrev = () => {
      router.push({
        pathname: prevPage,
        query,
      });
    };
    const onValidateForm = e => {
      e.preventDefault();
      const { interestKey } = getptinfo;
      if (interestKey !== 'bgz') {
        router.push({
          pathname: nextPage,
          query,
        });
      }
      if (interestKey !== 'bgz') return;
      validateFields((err, values) => {
        if (!err) {
          const { psPlanDTOList } = values;
          const newValues =
            psPlanDTOList &&
            psPlanDTOList.map(
              ({
                planPeriod,
                planBegin,
                planEnd,
                currentAmount,
                tbProductSchemaInfoId,
                tbProductTemplateInfoId,
              }) => {
                return {
                  planPeriod,
                  planBegin,
                  planEnd,
                  currentAmount,
                  tbProductSchemaInfoId,
                  tbProductTemplateInfoId,
                };
              }
            );
          dispatch({
            type: 'planAdd/addpsplans',
            payload: { data: { psInfoId: id, psPlanDTOList: newValues } },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: nextPage,
                  query,
                });
              } else {
                message.error(msg);
              }
            },
          });
        }
      });
    };

    const propsTableFormPlan = {
      tbProductSchemaInfoId: id,
      tbProductTemplateInfoId,
    };
    return (
      <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
        <div style={{ width: 600, margin: '0 auto' }}>
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

        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
            paddingTop: 30,
          }}
        >
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onValidateForm}>
            提交
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step4;
