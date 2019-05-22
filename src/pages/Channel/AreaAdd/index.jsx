import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Card, Form, Input, Button, Col, Row, Select, message } from 'antd';
import router from 'umi/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import FooterToolbar from '@/components/FooterToolbar';
import GeographicView from '@/components/GeographicMul';
import { element } from 'prop-types';
import { leveltypeJson } from './status';
const FormItem = Form.Item;
const { Option } = Select;
@connect(({ areaInfoAdd, areaUpdate,  loading }) => ({
  areaInfoAdd,
  areaUpdate,
  submitting: loading.effects['areaInfoAdd/fetch']||loading.effects['areaUpdate/submit'],
}))
@Form.create()
export class AreaAdd extends PureComponent {
  state = {
    width: '100%',
    parentAreaList: [],
    areaLevel: null,
    parentidedit: null,
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };

  setBaseInfo = data => {
    let { form } = this.props;
    const { parentName } = data
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      if (data[key]) {
        obj[key] = data[key] || null;
      }
      // delete data.parentid;
      // data.parentid = parentName
      form.setFieldsValue(obj);
    });
  };

  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
        pathname,
      },
    } = this.props;
    const { parentAreaList } = this.state
    const hasEdit = pathname.includes('areaedit');
    const { setBaseInfo, setData } = this;
    dispatch({
      type: 'parentAreaList/fetch',
      payload: {
        data: {
          name: '',
          id: id || '0',
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const newData = [{ level: '0', name: '无上级区域', id: '0' }, ...data];
          setData('parentAreaList', newData);
          if (newData.length <= 0) return;
          if (!hasEdit) return;
          dispatch({
            type: 'areaDetail/fetch',
            payload: {
              data: id,
            },
            callBack(msg, data) {
              if (msg === 'OK') {
                const { leveltype } = data;
                setData('areaLevel', Number(leveltype))
                delete data.leveltype;
                setBaseInfo(data)
              }
            },
          });
        }
      },
    });
  }

  onSelect = (key, level) => {
    const { props } = level;
    const { parentAreaList } = this.state;
    let curlevel = props.level;
    this.setState({
      areaLevel: curlevel * 1 + 1,
    });
  };
  render() {
    const { parentAreaList, width, areaLevel } = this.state;
    const {
      form: { getFieldDecorator, validateFields },
      dispatch,
      areaUpdate,
      location: {
        query: { id },
        pathname,
      },

      submitting
    } = this.props;
    const hasEdit = pathname.includes('areaedit');
    const nextUrl = `/channel/area/list/${hasEdit ? 'areaedit' : 'areaadd'}`;
    const onSaveClick = () => {
      validateFields((err, values) => {
        const { citys: { province, city, area: county } } = values;
          const newProvince = province.map(({ key, label,value }) => ({
            key,
            value:label||value,
          }));
          const newCity = city.map(({ key, label,value }) => ({
            key,
            value:label||value,
          }));
          const newCounty = county.map(({ key, label, value }) => ({
            key,
            value:label||value,
          }));
          values.province = newProvince;
          values.city = newCity;
          values.county = newCounty;
          delete values.citys;
        
        if (!err) {
          if (hasEdit) {
            values.id = id;
          }
          dispatch({
            type: `${hasEdit ? 'areaUpdate/submit' : 'areaInfoAdd/fetch'}`,
            payload: {
              data: {
                ...values,
                optionUser: '',
              },
            },
            callBack(msg) {
              if (msg === 'OK') {
                message.success(`${hasEdit?'编辑':'添加'}成功`)
                router.push({
                  pathname: '/channel/area/list',
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
      <PageHeaderWrapper title={`${pathname.includes('areaedit') ? '编辑' : '新增'}区域`}>
        <Card title="区域信息" style={{ marginBottom: 24 }} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={8}>
                <Form.Item label={'区域编码'}>
                  {getFieldDecorator('zonecode', {
                    rules: [
                      {
                        message: '请输入区域编码',
                      },
                    ],
                  })(<Input placeholder="请输入区域编码" />)}
                </Form.Item>
              </Col>

              <Col lg={8}>
                <Form.Item label={'区域名称'}>
                  {getFieldDecorator('name', {
                    rules: [
                      {
                        required: true,
                        message: '请输入区域名称',
                      },
                    ],
                  })(<Input placeholder="请输入区域名称" />)}
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label={'上级区域'}>
                  {getFieldDecorator('parentid', {
                    rules: [
                      {
                        required: true,
                        message: '上级区域',
                      },
                    ],
                  })(
                    <Select placeholder="请选择上级区域" onSelect={this.onSelect}>
                      {parentAreaList &&
                        parentAreaList.map(({ name, id, level }) => (
                          <Option value={id} key={Math.random()*12} level={level}>
                            {name}
                          </Option>
                        ))}
                    </Select>
                  )}
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item label={'区域级别'}>
                  {getFieldDecorator('leveltype', {
                    initialValue: areaLevel
                  })(<Select placeholder="根据选择的上级自动带出；不可修改" disabled>
                    {leveltypeJson &&
                      Object.entries(leveltypeJson).map((item) => (
                        <Option value={Number(item[0])} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={'选择省份城市'}>
                  {getFieldDecorator('citys', {
                    rules: [
                      {
                        required: true,
                        message: '请选择省份城市',
                      },
                    ],
                  })(<GeographicView />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <FooterToolbar style={{ width }} onClick={onSaveClick}>
          <Button type="primary" loading={submitting}>保存</Button>
        </FooterToolbar>
      </PageHeaderWrapper>
    );
  }
}
export default AreaAdd;
