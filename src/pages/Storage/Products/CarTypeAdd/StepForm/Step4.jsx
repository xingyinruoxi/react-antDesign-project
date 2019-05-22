import React from 'react';
import { connect } from 'dva';
import {
  Form,
  Input,
  InputNumber,
  Button,
  Divider,
  Row,
  Col,
  Select,
  DatePicker,
  message,
} from 'antd';
import DescriptionList from '@/components/DescriptionList';
import router from 'umi/router';
import styles from './style.less';
const { Description } = DescriptionList;
import moment from 'moment';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};

@connect(({ loading, carTypeConfig, typeDataTotal, carTypeAdd, carTypeUpdate }) => ({
  submitting: loading.models.carTypeConfig,
  carTypeConfig,
  typeDataTotal,
  carTypeAdd,
  carTypeUpdate,
}))
@Form.create()
class Step4 extends React.PureComponent {
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id, detailId },
        pathname,
      },
    } = this.props;
    const { setBaseInfo } = this;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });

    if (!detailId) return;
    dispatch({
      type: 'carTypeConfig/fetch',
      payload: { data: { detailId } },
      callBack() {
        if (pathname.includes('add')) return;
        setBaseInfo();
      },
    });
  }

  setBaseInfo = () => {
    let { carTypeConfig, form } = this.props;
    const { listTime } = carTypeConfig;
    if (listTime) {
      carTypeConfig.listTime = moment(listTime);
    }
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = carTypeConfig[key] || null;
      form.setFieldsValue(obj);
    });
  };

  render() {
    const {
      form,
      data,
      typeDataTotal: {
        cm_engineType,
        cm_cylinderStyle,
        cm_driverForm,
        cm_driverWay,
        cm_suspensionAfter,
        cm_assistanceType,
        cm_brakeBefore,
        cm_brakeAfter,
        cm_parkingBrakeType,
        cm_frontWheelMaterial,
        cm_rearWheelMaterial,
        cm_cylinderMaterial,
        cm_bodyStructure,
      },
      dispatch,
      typeDataTotal,
      submitting,
      location: {
        query: { id, detailId },
        query,
        pathname,
        state: { rule, tbCommodityProductId },
      },
    } = this.props;
    const { getFieldDecorator, validateFields } = form;
    const preUrl = `/store/products/cartypestore/${pathname.includes('edit') ? 'edit' : 'add'}`;
    const onPrev = () => {
      router.push({
        pathname: `${preUrl}/img`,
        state: { rule, tbCommodityProductId },
        query,
      });
    };

    // result
    const onValidateForm = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          values.listTime = moment(values.listTime).format('YYYY-MM-DD HH:mm:ss');
          if (pathname.includes('add')) {
            values.id = id;
          } else {
            values.tbCommodityInfoDetailId = detailId;
            values.id = id;
          }
          dispatch({
            type: `${pathname.includes('edit') ? 'carTypeUpdate/submit' : 'carTypeAdd/step4'}`,
            payload: { data: { ...values } },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: `${preUrl}/result`,
                  state: { rule, tbCommodityProductId },
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
    return (
      <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
        <Divider style={{ margin: '24px 0' }} />
        <div className={styles.title}>基本信息</div>
        <Row gutter={50}>
          <Col lg={8}>
            <Form.Item label={'市区工况油耗'}>
              {getFieldDecorator('urbanConsumption', {
                rules: [
                  {
                    required: false,
                    message: '请输入市区工况油耗',
                  },
                ],
              })(
                <InputNumber placeholder="请输入市区工况油耗" min={0} className={styles.inputNum} />
              )}
              <span className="ant-form-text">L</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'市郊工况油耗'}>
              {getFieldDecorator('consumption', {
                // initialValue: data.amount,
                rules: [
                  {
                    required: false,

                    message: '请输入市郊工况油耗',
                  },
                ],
              })(
                <InputNumber placeholder="请输入市郊工况油耗" min={0} className={styles.inputNum} />
              )}
              <span className="ant-form-text">L</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'车身结构'}>
              {getFieldDecorator('bodyStructure', {
                rules: [
                  {
                    required: false,

                    message: '请选择车身结构',
                  },
                ],
              })(
                <Select placeholder="请选择车身结构">
                  {cm_bodyStructure &&
                    Object.entries(cm_bodyStructure).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'百公里加速'}>
              {getFieldDecorator('hundredAccelerate', {
                rules: [
                  {
                    required: false,

                    message: '请输入',
                  },
                ],
              })(<InputNumber placeholder="请输入" className={styles.inputNum} />)}
              <span className="ant-form-text">S</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'最高车速'}>
              {getFieldDecorator('speed', {
                rules: [
                  {
                    required: false,

                    message: '请输入市区工况油耗',
                  },
                ],
              })(<InputNumber placeholder="请输入" className={styles.inputNum} />)}
              <span className="ant-form-text">kg/h</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'上市时间'}>
              {getFieldDecorator('listTime', {
                rules: [
                  {
                    required: false,

                    message: '请选择上市时间',
                  },
                ],
              })(
                <DatePicker
                  style={{ width: '100%' }}
                  format="YYYY-MM-DD"
                  placeholder="请选择上市时间"
                />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ marginTop: 4 }} />
        <div className={styles.title}>车身参数</div>
        <Row gutter={50}>
          <Col lg={8}>
            <Form.Item label={'长宽高'}>
              {getFieldDecorator('lwh', {
                rules: [
                  {
                    required: false,

                    message: '请输入长宽高',
                  },
                ],
              })(<Input placeholder="请输入" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'轴距'}>
              {getFieldDecorator('wheelbase', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入轴距' }],
              })(<InputNumber placeholder="请输入" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">mm</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'整备质量'}>
              {getFieldDecorator('fullQuality', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入整备质量' }],
              })(<InputNumber placeholder="请输入整备质量" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">kg</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'前轮距'}>
              {getFieldDecorator('frontWheelPitch', {
                // initialValue: data.amount,

                rules: [{ required: false, message: '请输入前轮距' }],
              })(<InputNumber placeholder="请输入前轮距" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">mm</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'后轮距'}>
              {getFieldDecorator('rearWheelPitch', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入后轮距' }],
              })(<InputNumber placeholder="请输入后轮距" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">mm</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'车门数'}>
              {getFieldDecorator('doorNum', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入车门数' }],
              })(<InputNumber placeholder="请输入车门数" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">门</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'座位数'}>
              {getFieldDecorator('seatNum', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入座位数' }],
              })(<InputNumber placeholder="请输入座位数" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">个</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'行李箱容积'}>
              {getFieldDecorator('cargoVolume', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入行李箱容积' }],
              })(
                <InputNumber placeholder="请输入行李箱容积" min={0} className={styles.inputNum} />
              )}
              <span className="ant-form-text">L</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'油箱容积'}>
              {getFieldDecorator('tankVolume', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入油箱容积' }],
              })(<InputNumber placeholder="请输入油箱容积" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">L</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'最大载重质量'}>
              {getFieldDecorator('maxLoadMass', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入最大载重质量' }],
              })(<InputNumber placeholder="请输入" min={10} className={styles.inputNum} />)}
              <span className="ant-form-text">kg</span>
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ marginTop: 4 }} />
        <div className={styles.title}>发动机参数</div>
        <Row gutter={50}>
          <Col lg={8}>
            <Form.Item label={'发动机型号'}>
              {getFieldDecorator('engineModel', {
                rules: [
                  {
                    required: false,
                    message: '请输入发动机型号',
                  },
                ],
              })(<Input placeholder="请输入发动机型号" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'发动机类型'}>
              {getFieldDecorator('engineType', {
                rules: [
                  {
                    required: false,
                    message: '请选择发动机类型',
                  },
                ],
              })(
                <Select placeholder="请选择发动机类型">
                  {cm_engineType &&
                    Object.entries(cm_engineType).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'气缸排列'}>
              {getFieldDecorator('cylinderStyle', {
                rules: [
                  {
                    required: false,
                    message: '请选择气缸排列',
                  },
                ],
              })(
                <Select placeholder="请选择气缸排列">
                  {cm_cylinderStyle &&
                    Object.entries(cm_cylinderStyle).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'排气量'}>
              {getFieldDecorator('dischargeVolume', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入排气量' }],
              })(<InputNumber placeholder="请输入排气量" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">mL</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'气缸数'}>
              {getFieldDecorator('cylinder', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入气缸数' }],
              })(<InputNumber placeholder="请输入气缸数" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">个</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'每缸气门数'}>
              {getFieldDecorator('valveTrain', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入每缸气门数' }],
              })(
                <InputNumber placeholder="请输入每缸气门数" min={0} className={styles.inputNum} />
              )}
              <span className="ant-form-text">个</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'缸体材质'}>
              {getFieldDecorator('cylinderMaterial', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择缸体材质' }],
              })(
                <Select placeholder="请选择缸体材质">
                  {cm_cylinderMaterial &&
                    Object.entries(cm_cylinderMaterial).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'最大马力'}>
              {getFieldDecorator('maxHorsepower', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入最大马力' }],
              })(<InputNumber placeholder="请输入最大马力" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">Ps</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'最大扭矩转速'}>
              {getFieldDecorator('torqueSpeed', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入最大扭矩转速' }],
              })(
                <InputNumber placeholder="请输入最大扭矩转速" min={0} className={styles.inputNum} />
              )}
              <span className="ant-form-text">N·m</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'最大功率'}>
              {getFieldDecorator('maxPower', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入最大功率' }],
              })(<InputNumber placeholder="请输入最大功率" min={0} className={styles.inputNum} />)}
              <span className="ant-form-text">kW</span>
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'驱动形式'}>
              {getFieldDecorator('driverForm', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择驱动形式' }],
              })(
                <Select placeholder="请选择驱动形式">
                  {cm_driverForm &&
                    Object.entries(cm_driverForm).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'驱动方式'}>
              {getFieldDecorator('driverWay', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择驱动方式' }],
              })(
                <Select placeholder="请选择驱动方式">
                  {cm_driverWay &&
                    Object.entries(cm_driverWay).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'压缩比'}>
              {getFieldDecorator('cmpressionRatio', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请输入压缩比' }],
              })(<Input placeholder="请输入压缩比" />)}
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ marginTop: 4 }} />
        <div className={styles.title}>底盘参数</div>
        <Row gutter={50}>
          <Col lg={8}>
            <Form.Item label={'前悬挂类型'}>
              {getFieldDecorator('suspensionBefore', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择前悬挂类型' }],
              })(
                <Select placeholder="请选择前悬挂类型">
                  {cm_suspensionAfter &&
                    Object.entries(cm_suspensionAfter).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'后悬挂类型'}>
              {getFieldDecorator('suspensionAfter', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择后悬挂类型' }],
              })(
                <Select placeholder="请选择后悬挂类型">
                  {cm_suspensionAfter &&
                    Object.entries(cm_suspensionAfter).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'助力类型'}>
              {getFieldDecorator('assistanceType', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择助力类型' }],
              })(
                <Select placeholder="请选择助力类型">
                  {cm_assistanceType &&
                    Object.entries(cm_assistanceType).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Divider style={{ marginTop: 4 }} />
        <div className={styles.title}>制动参数</div>
        <Row gutter={50}>
          <Col lg={8}>
            <Form.Item label={'前制动类型'}>
              {getFieldDecorator('brakeBefore', {
                rules: [{ required: false, message: '请选择前制动类型' }],
              })(
                <Select placeholder="请选择前制动类型">
                  {cm_brakeBefore &&
                    Object.entries(cm_brakeBefore).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'后制动类型'}>
              {getFieldDecorator('brakeAfter', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择后制动类型' }],
              })(
                <Select placeholder="请选择后制动类型">
                  {cm_brakeAfter &&
                    Object.entries(cm_brakeAfter).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'驻车制动类型'}>
              {getFieldDecorator('parkingBrakeType', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择驻车制动类型' }],
              })(
                <Select placeholder="请选择驻车制动类型">
                  {cm_parkingBrakeType &&
                    Object.entries(cm_parkingBrakeType).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'前轮毂材质'}>
              {getFieldDecorator('frontWheelMaterial', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择前轮毂材质' }],
              })(
                <Select placeholder="请选择前轮毂材质">
                  {cm_frontWheelMaterial &&
                    Object.entries(cm_frontWheelMaterial).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'后轮毂材质'}>
              {getFieldDecorator('rearWheelMaterial', {
                // initialValue: data.amount,
                rules: [{ required: false, message: '请选择后轮毂材质' }],
              })(
                <Select placeholder="请选择后轮毂材质">
                  {cm_rearWheelMaterial &&
                    Object.entries(cm_rearWheelMaterial).map(item => (
                      <Option key={item[0]} value={Number(item[0])}>
                        {item[1]}
                      </Option>
                    ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'前轮毂规格'}>
              {getFieldDecorator('wheelBefore', {
                rules: [
                  {
                    required: false,
                    message: '请输入前轮毂规格',
                  },
                ],
              })(<Input placeholder="请输入前轮毂规格" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'后轮毂规格'}>
              {getFieldDecorator('wheelAfter', {
                rules: [
                  {
                    required: false,
                    message: '请输入后轮毂规格',
                  },
                ],
              })(<Input placeholder="请输入后轮毂规格" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'前轮胎规格'}>
              {getFieldDecorator('tireBefore', {
                rules: [
                  {
                    required: false,
                    message: '请输入前轮胎规格',
                  },
                ],
              })(<Input placeholder="请输入前轮胎规格" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'后轮胎规格'}>
              {getFieldDecorator('tireAfter', {
                rules: [
                  {
                    required: false,
                    message: '请输入后轮胎规格',
                  },
                ],
              })(<Input placeholder="请输入后轮胎规格" />)}
            </Form.Item>
          </Col>
        </Row>

        <Divider style={{ marginTop: 4 }} />
        <div className={styles.title}>配置参数</div>
        <Row gutter={50}>
          <Col lg={8}>
            <Form.Item label={'安全配置'}>
              {getFieldDecorator('securityConfig', {
                rules: [
                  {
                    required: false,
                    message: '请输入安全配置',
                  },
                ],
              })(<Input placeholder="请输入安全配置" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'操控配置'}>
              {getFieldDecorator('manipulationConfig', {
                rules: [
                  {
                    required: false,
                    message: '请输入操控配置',
                  },
                ],
              })(<Input placeholder="请输入操控配置" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'方向盘/底座配置'}>
              {getFieldDecorator('baseConfig', {
                rules: [
                  {
                    required: false,

                    message: '请输入方向盘/底座配置',
                  },
                ],
              })(<Input placeholder="请输入方向盘/底座配置" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'多媒体配置'}>
              {getFieldDecorator('mediaConfig', {
                rules: [
                  {
                    required: false,
                    message: '请输入多媒体配置',
                  },
                ],
              })(<Input placeholder="请输入多媒体配置" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'灯光配置'}>
              {getFieldDecorator('lightingConfig', {
                rules: [
                  {
                    required: false,
                    message: '请输入灯光配置',
                  },
                ],
              })(<Input placeholder="请输入灯光配置" />)}
            </Form.Item>
          </Col>
          <Col lg={8}>
            <Form.Item label={'外观配置'}>
              {getFieldDecorator('appearanceConfig', {
                rules: [
                  {
                    required: false,
                    message: '请输入外观配置',
                  },
                ],
              })(<Input placeholder="请输入外观配置" />)}
            </Form.Item>
          </Col>
        </Row>
        <footer className={styles.footer}>
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            提交
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step4;
