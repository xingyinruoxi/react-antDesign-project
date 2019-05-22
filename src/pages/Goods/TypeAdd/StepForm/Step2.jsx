import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Divider, Row, Col, Select, Radio } from 'antd';
import router from 'umi/router';
import TableForm from './components/TableForm';
import styles from './style.less';
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
  submitting: loading.effects['typeAdd/repaymentDateRule'],
  goodTypeStep3,
  typeDataTotal,
}))
@Form.create()
class Step2 extends React.PureComponent {
  state={
    goodTypeStep3List:[]
  }
  setBaseInfo = () => {
    let { goodTypeStep3, form } = this.props;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      if (goodTypeStep3[key]) {
        obj[key] = goodTypeStep3[key] || null;
      }
      form.setFieldsValue(obj);
    });
  };
  setData=(data)=>{
    this.setState({
      goodTypeStep3List:data
    })
  }
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: {  productTemplateInfoId },
      },
    } = this.props;
    const { setBaseInfo ,setData} = this;
    if (!productTemplateInfoId) return;
    dispatch({
      type: 'goodTypeStep3/fetch',
      payload: { data: { id: productTemplateInfoId } },
      callBack(msg) {
        if (msg === 'OK') {
          setBaseInfo();
        }
      },
    });
    dispatch({
      type: 'goodTypeStep3List/fetch',
      payload: { data: { id: productTemplateInfoId } },
      callBack(msg,data){
        if (msg === 'OK') {
          setData(data)
        }
      },
    });
  }
  render() {
    const {
      form: { getFieldDecorator, validateFields, getFieldValue },
      location: {
        query: { productTemplateInfoId },
        pathname
      },
      dispatch,
      submitting,
      typeDataTotal,
    } = this.props;
    const {goodTypeStep3List}=this.state;
    const propsTableForm = {
      productTemplateInfoId,
      dispatch,
      value: goodTypeStep3List
    };
    const hasEdit=pathname.includes('edit')?'edit':'add';
    const prevPage=`/goods/type/list/${hasEdit}/confirm`
    const nextPage=`/goods/type/list/${hasEdit}/step3`
    const onPrev = () => {
      router.push({ pathname: prevPage, query: { productTemplateInfoId } });
    };
    const onValidateForm = e => {
      e.preventDefault();
      validateFields((err, values) => {
        const {goodTypeStep3:{id}}=this.props;
        if (!err) {
          if (id) {
            values.id = id;
          }
          dispatch({
            type: 'typeAdd/repaymentDateRule',
            payload: {
              data: {
                ...values,
                ...values,
                productTemplateInfoId,
              },
            },
            callBack(msg, id) {
              if (msg === 'OK') {
                router.push({
                  pathname: nextPage,
                  query: { id, productTemplateInfoId },
                });
                message.success(msg);
              } else {
                message.error(msg);
              }
            },
          });
        }
      });
    };

    return (
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <FormItem {...formItemLayout} label="起租及还款日规则">
          {getFieldDecorator('planMode', {
            initialValue: '1',
          })(
            <Radio.Group>
              <Radio value="1">固定还款日</Radio>
              <Radio value="2">根据起租日设置还款日</Radio>
              <Radio value="3">起租日即还款日</Radio>
            </Radio.Group>
          )}
        </FormItem>
        {getFieldValue('planMode') === '1' ? (
          <FormItem {...formItemLayout} label="还款日">
            {getFieldDecorator('planDay', {
              rules: [
                {
                  required: true,
                  message: '请输入周期',
                },
              ],
            })(<Input placeholder="请输入周期" addonAfter="周期" style={{ width: 300 }} />)}
          </FormItem>
        ) : null}
        {getFieldValue('planMode') === '2' ? <TableForm {...propsTableForm} /> : null}
        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
          }}
        >
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            下一步
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step2;
