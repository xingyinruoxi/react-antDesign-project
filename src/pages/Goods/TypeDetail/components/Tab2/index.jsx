import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Divider, Row, Col, Select, Radio } from 'antd';
import router from 'umi/router';
import TableForm from './../components/TableForm';
import styles from './../css/style.less';
const FormItem = Form.Item;

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

@connect(({ goodTypeStep3, loading, typeDataTotal }) => ({
  goodTypeStep3,
  typeDataTotal,
}))
@Form.create()
class Tab2 extends React.PureComponent {
  state = {
    goodTypeStep3List: [],
  };
  setBaseInfo = data => {
    let { form } = this.props;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      if (data[key]) {
        obj[key] = data[key] || null;
      }
      form.setFieldsValue(obj);
    });
  };
  setData = data => {
    this.setState({
      goodTypeStep3List: data,
    });
  };
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    const { setBaseInfo, setData } = this;
    if (!id) return;
    dispatch({
      type: 'getptplan/fetch',
      payload: { data: { id: id } },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
    dispatch({
      type: 'getptplanperiods/fetch',
      payload: { data: { id: id } },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData(data);
        }
      },
    });
  }
  render() {
    const {
      form: { getFieldDecorator, validateFields, getFieldValue },
      location: {
        query: { id },
        pathname,
      },
      dispatch,
      submitting,
      typeDataTotal,
    } = this.props;
    const { goodTypeStep3List } = this.state;
    const propsTableForm = {
      id,
      dispatch,
      value: goodTypeStep3List,
    };

    return (
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <FormItem {...formItemLayout} label="起租及还款日规则">
          {getFieldDecorator('planMode', {
            initialValue: '1',
          })(
            <Radio.Group disabled>
              <Radio value="1">固定还款日</Radio>
              <Radio value="2">根据起租日设置还款日</Radio>
              <Radio value="3">起租日即还款日</Radio>
            </Radio.Group>
          )}
        </FormItem>
        {getFieldValue('planMode') === '1' ? (
          <FormItem {...formItemLayout} label="还款日">
            {getFieldDecorator('planDay')(
              <Input addonAfter="周期" disabled style={{ width: 300 }} />
            )}
          </FormItem>
        ) : null}
        {getFieldValue('planMode') === '2' ? <TableForm {...propsTableForm} /> : null}
      </Form>
    );
  }
}

export default Tab2;
