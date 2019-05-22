import React from 'react';
import { connect } from 'dva';
import { Form, Input, Row, Col, Select } from 'antd';
import styles from './../style.less';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
@connect(({ getpsinfo }) => ({
  getpsinfo,
}))
@Form.create()
class Step2 extends React.PureComponent {
  state = {
    productList: [],
    projectKey: [],
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

  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentWillMount() {
    const { dispatch } = this.props;
    const { setData } = this;
    dispatch({
      type: 'productList/fetch',
      payload: {
        queryCondition: {},
        limit: 70,
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('productList', data);
        }
      },
    });
  }

  //渲染规则值
  setRuleData = () => {
    const {
      dispatch,
      location: {
        query: { id },
      },
    } = this.props;
    const { setBaseInfo } = this;
    dispatch({
      type: 'getpackagepsitems/fetch',
      payload: {
        data: { id },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
  };
  componentDidMount() {
    const { dispatch, tbProductTemplateInfoId, getpsinfo } = this.props;
    const { setBaseInfo, setData, setRuleData } = this;
    const { projectKey } = this.state;
    setBaseInfo(getpsinfo);
    dispatch({
      type: 'getptprojects/fetch',
      payload: {
        data: {
          id: tbProductTemplateInfoId,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const { projectKey } = data;
          setBaseInfo(data);
          setData('projectKey', projectKey);
          setRuleData();
        }
      },
    });
  }
  render() {
    const {
      form: { getFieldDecorator },
      typeDataTotal: { flcs_package, flcs_projectNum },
    } = this.props;
    const { productList, projectKey: listRule } = this.state;
    return (
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <div className={styles.title}>商品信息</div>
        <Row gutter={80}>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="车辆备案价格">
              {getFieldDecorator('recordPrice')(<Input prefix="￥" addonAfter="元" disabled />)}
            </Form.Item>
            <Form.Item label="选择商品" {...formItemLayout}>
              {getFieldDecorator('tbCommodityInfoId')(
                <Select disabled>
                  {productList.map(({ id, referred }) => (
                    <Option value={id} key={id}>
                      {referred}
                    </Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="车辆指导价">
              {getFieldDecorator('commodityPrice', {})(
                <Input prefix="￥" addonAfter="元" disabled />
              )}
            </Form.Item>
          </Col>
          <Col lg={12} key={'iioi'}>
            <Form.Item {...formItemLayout} label={'打包价'}>
              {getFieldDecorator('packageTotal')(<Input prefix="￥" addonAfter="元" disabled />)}
            </Form.Item>
          </Col>
        </Row>
        <div className={styles.title}>打包信息</div>
        <Row gutter={80}>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="打包项目">
              {getFieldDecorator('projectKey')(
                <Select mode="multiple" disabled>
                  {flcs_package &&
                    Object.entries(flcs_package).map(item => (
                      <Option value={item[0]} key={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="保险年限">
              {getFieldDecorator('projectNum')(
                <Select disabled>
                  {flcs_projectNum &&
                    Object.entries(flcs_projectNum).map(item => (
                      <Option value={Number(item[0])} key={item[0]}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <div className={styles.title}>规则信息</div>
        <Row gutter={80}>
          {flcs_package &&
            listRule &&
            listRule.map(val => (
              <Col lg={12} key={val}>
                <Form.Item {...formItemLayout} label={flcs_package && flcs_package[val]}>
                  {getFieldDecorator(val)(<Input prefix="￥" addonAfter="元" disabled />)}
                </Form.Item>
              </Col>
            ))}
        </Row>
      </Form>
    );
  }
}

export default Step2;
