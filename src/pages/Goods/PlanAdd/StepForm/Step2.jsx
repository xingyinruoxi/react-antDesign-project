import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Row, Col, Select, Radio } from 'antd';
import router from 'umi/router';
import styles from './style.less';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 17,
  },
};
@connect(
  ({
    loading,
    listOfFinancingProjects,
    setlistOfFinancingProjects,
    commodityPricingInformation,
    typeDataTotal,
  }) => ({
    submitting: loading.effects['planAdd/planTypeStep2Sub'],
    listOfFinancingProjects,
    setlistOfFinancingProjects,
    commodityPricingInformation,
    typeDataTotal,
  })
)
@Form.create()
class Step2 extends React.PureComponent {
  state = {
    commodityPrice: 0,
    productList: [],
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

  componentWillMount() {
    const { dispatch } = this.props;
    const { setData } = this;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: { version: 1 },
      },
    });
    dispatch({
      type: 'productList/fetch',
      payload: {
        queryCondition: {
          status:1
        },
        limit: 70,
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('productList', data);
        }
      },
    });
  }
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tbProductTemplateInfoId, id },
      },
    } = this.props;
    const { setBaseInfo, setData } = this;

    dispatch({
      type: 'getpsinfo/fetch',
      payload: {
        data: { id },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const { commodityPrice } = data;
          delete data.commodityPrice;
          setData('commodityPrice', commodityPrice);
          setBaseInfo(data);
        }
      },
    });

    dispatch({
      type: 'setlistOfFinancingProjects/setListOfFinancingProjects',
      payload: {
        data: {
          id: tbProductTemplateInfoId,
        },
      },
      callback(msg, data) {
        if (msg === 'OK') {
          setBaseInfo(data);
        }
      },
    });
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
  }
  render() {
    const {
      form: { getFieldDecorator, validateFields },
      dispatch,
      submitting,
      typeDataTotal: { flcs_package, flcs_projectNum },
      setlistOfFinancingProjects: { projectKey: listRule },
      location: {
        query: { id, tbProductTemplateInfoId },
        pathname,
      },
    } = this.props;
    const { productList } = this.state;
    const hasEdit = pathname.includes('edit');
    const prevPage = `/goods/plan/list/${hasEdit ? 'edit' : 'add'}/info`;
    const nextPage = `/goods/plan/list/${hasEdit ? 'edit' : 'add'}/step2`;
    const onPrev = () => {
      router.push({ pathname: prevPage, query: { id } });
    };
    const onValidateForm = e => {
      e.preventDefault();
      validateFields((err, values) => {
        const { recordPrice, commodityPrice, tbCommodityInfoId, packageTotal, projectKey } = values;
        const newValues = {
          psInfoDTO: {
            id,
            recordPrice,
            commodityPrice,
            tbCommodityInfoId,
            packageTotal,
            tbProductTemplateInfoId,
          },
          psItemDTOList: [],
        };
        newValues.psItemDTOList = projectKey.map(key => {
          return {
            itemMode: 1,
            itemAmount: values[key],
            itemKey: key,
            tbProductTemplateInfoId,
            tbProductSchemaInfoId: id,
          };
        });
        if (!err) {
          dispatch({
            type: 'planAdd/planTypeStep2Sub',
            payload: {
              data: {
                ...newValues,
              },
            },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: nextPage,
                  query: {
                    tbProductTemplateInfoId,
                    id,
                  },
                });
              } else {
                message.err(msg);
              }
            },
          });
        }
      });
    };
    const { commodityPrice } = this.state;
    return (
      <Form layout="horizontal" hideRequiredMark className={styles.stepForm}>
        <div className={styles.title}>商品信息</div>
        <Row gutter={80}>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="车辆备案价格">
              {getFieldDecorator('recordPrice', {
                rules: [
                  {
                    required: true,
                    message: '请输入备案价格',
                  },
                  {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                  },
                ],
              })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
            </Form.Item>
            <Form.Item label="选择商品" {...formItemLayout}>
              {getFieldDecorator('tbCommodityInfoId', {
                rules: [
                  {
                    required: true,
                    message: '请选择商品',
                  },
                ],
              })(
                <Select
                  placeholder="请选择"
                  onSelect={val => {
                    const curItem = productList.filter(item => item.id === val);
                    this.setState({
                      commodityPrice: curItem[0].priceGuided,
                    });
                  }}
                >
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
              {getFieldDecorator('commodityPrice', {
                initialValue: commodityPrice,
              })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" disabled />)}
            </Form.Item>
          </Col>
          <Col lg={12} key={'iioi'}>
            <Form.Item {...formItemLayout} label={'打包价'}>
              {getFieldDecorator('packageTotal', {
                rules: [
                  {
                    required: true,
                    message: `请输入`,
                  },
                  {
                    pattern: /^(\d+)((?:\.\d+)?)$/,
                    message: '请输入合法金额数字',
                  },
                ],
              })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
            </Form.Item>
          </Col>
        </Row>
        <div className={styles.title}>打包信息</div>
        <Row gutter={80}>
          <Col lg={12}>
            <Form.Item {...formItemLayout} label="打包项目">
              {getFieldDecorator('projectKey', {
                rules: [
                  {
                    required: true,
                    message: '请选择打包项目',
                  },
                ],
              })(
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
                <Select placeholder="请选择" disabled>
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
                  {getFieldDecorator(val, {
                    rules: [
                      {
                        required: true,
                        message: `请输入${flcs_package && flcs_package[val]}`,
                      },
                      {
                        pattern: /^(\d+)((?:\.\d+)?)$/,
                        message: '请输入合法金额数字',
                      },
                    ],
                  })(<Input prefix="￥" placeholder="请输入金额" addonAfter="元" />)}
                </Form.Item>
              </Col>
            ))}
        </Row>

        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
          }}
        >
          <Button
            onClick={onPrev}
            style={{
              marginRight: 8,
            }}
          >
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
