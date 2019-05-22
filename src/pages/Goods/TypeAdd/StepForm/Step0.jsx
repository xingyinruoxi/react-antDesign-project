import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Row, Col, message } from 'antd';
import router from 'umi/router';
import styles from './style.less';

const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};

@connect(({ loading, typeDataTotal }) => ({
  typeDataTotal,
  submitting: loading.effects['typeAdd/addProductTypeInfo'],
}))
@Form.create()
class Step1 extends PureComponent {
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
  componentWillMount() {
    const {
      dispatch,
      location: {
        query: { productTemplateInfoId, id },
        pathname,
      },
    } = this.props;
    const { setBaseInfo } = this;
    if (!productTemplateInfoId) return;
    // 上一步值
    dispatch({
      type: 'getptinfo/fetch',
      payload: { data: { id: productTemplateInfoId } },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
  }

  render() {
    const {
      form: { getFieldDecorator, validateFields },
      dispatch,
      submitting,
      location: {
        pathname,
        query: { productTemplateInfoId: id },
      },
      typeDataTotal: { flcs_productTypeKey },
    } = this.props;
    const hasEdit = pathname.includes('edit') ? 'edit' : 'add';
    const prevPage = `/goods/type/list/${hasEdit}/confirm`;
    const onValidateForm = () => {
      const { dispatch } = this.props;
      validateFields((err, values) => {
        if (!err) {
          if (pathname.includes('edit') || id) {
            values.id = id;
          }
          const postUrl = `typeAdd/${
            pathname.includes('edit') || id ? 'updateGoodType' : 'addProductTypeInfo'
          }`;
          dispatch({
            type: postUrl,
            payload: {
              data: { ...values },
            },
            callBack(msg, data) {
              if (msg === 'OK') {
                const productTemplateInfoId =data.id;
                router.push({
                  pathname: prevPage,
                  query: {
                    productTemplateInfoId,
                  },
                });
              } else {
                message.error(msg);
              }
            },
          });
        }
      });
    };
    return (
      <>
        <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
          <Row gutter={30}>
            <Col lg={12}>
              <Form.Item {...formItemLayout} label="产品类型编码">
                {getFieldDecorator('templateCode', {
                  rules: [
                    {
                      required: true,
                      message: '请输入产品类型编码',
                    },
                  ],
                })(
                  <Input
                    placeholder="请输入产品类型编码"
                    disabled={pathname.includes('edit') ? true : false}
                  />
                )}
              </Form.Item>
              <Form.Item {...formItemLayout} label="选择业务类型">
                {getFieldDecorator('productTypeKey', {
                  rules: [
                    {
                      required: true,
                      message: '选择选择业务类型',
                    },
                  ],
                })(
                  <Select placeholder="选择所属类型">
                    {flcs_productTypeKey &&
                      Object.entries(flcs_productTypeKey).map(item => (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col lg={12}>
              <Form.Item {...formItemLayout} label="产品类型名称">
                {getFieldDecorator('templateName', {
                  rules: [
                    {
                      required: true,
                      message: '请输入产品类型名称',
                    },
                  ],
                })(<Input placeholder="请输入产品类型名称" />)}
              </Form.Item>
              <Form.Item {...formItemLayout} label="产品类型说明">
                {getFieldDecorator('templateDesc')(
                  <TextArea
                    style={{
                      minHeight: 32,
                    }}
                    placeholder=""
                    rows={4}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <footer
            style={{
              textAlign: 'center',
              paddingBottom: 30,
            }}
          >
            <Button type="primary" onClick={onValidateForm} loading={submitting}>
              下一步
            </Button>
          </footer>
        </Form>
      </>
    );
  }
}

export default Step1;
