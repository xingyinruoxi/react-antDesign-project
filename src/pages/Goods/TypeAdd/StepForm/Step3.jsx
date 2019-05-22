import React from 'react';
import { connect } from 'dva';
import { Form, Button, Col, Radio, message } from 'antd';
import router from 'umi/router';
import TableForm from './components/TableForm.1';

import styles from './style.less';
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
@connect(({ typeDataTotal }) => ({
  typeDataTotal,
}))
@Form.create()
class Step3 extends React.PureComponent {
  state = {
    tableFormData: [],
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { id, productTemplateInfoId },
      },
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: { version: 1 },
      },
    });
    if (!productTemplateInfoId) return;
    dispatch({
      type: 'goodTypeStep4/fetch',
      payload: { data: { id: productTemplateInfoId } },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('tableFormData', data);
        } else {
          message.error(msg);
        }
      },
    });
  }
  render() {
    const {
      location: {
        query: { productTemplateInfoId, id },
        pathname,
        query,
      },
      dispatch,
      typeDataTotal,
    } = this.props;
    const { tableFormData } = this.state;

    const propsTableForm = {
      dispatch,
      productTemplateInfoId,
      value: tableFormData,
      typeDataTotal,
    };
    const hasEdit = pathname.includes('edit') ? 'edit' : 'add';
    const prevPage = `/goods/type/list/${hasEdit}/step2`;
    const nextPage = `/goods/type/list/${hasEdit}/step4`;
    const onPrev = () => {
      router.push({ pathname: prevPage, query });
    };
    const onNext = () => {
      router.push({
        pathname: nextPage,
        query: { id, productTemplateInfoId },
      });
    };
    return (
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        {typeDataTotal ? <TableForm {...propsTableForm} /> : null}
        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
          }}
        >
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onNext}>
            下一步
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step3;
