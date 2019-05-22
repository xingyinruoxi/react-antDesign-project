import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Select, Row, Col, Upload, Icon, message, Modal } from 'antd';
import router from 'umi/router';
import styles from './style.less';
import GeographicView from '@/components/Geographic';
const { Option } = Select;
const token=localStorage.getItem('token').replace(/\"/g, "")
const propsHeader = {
  headers: {
    Authorization: `Bearer ${token}`,
  }
}
@connect(({ uploadImg, companyAdd, companyUpdate, companyDetail, loading, typeDataTotal, companyQueryStep1 }) => ({
  loading: loading.models.companyDetail,
  submitting: loading.effects['companyUpdate/submit'] || loading.effects['companyAdd/baseInfo'],
  uploadImg,
  companyAdd,
  companyUpdate,
  companyDetail,
  companyQueryStep1,
  typeDataTotal,
}))
@Form.create()
class Step1 extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: []
  }
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
        pathname,
      },
    } = this.props;
    const hasEdit = pathname.includes('edit')
    const { setBaseInfo } = this;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
    if (!id) return;
    dispatch({
      type: 'companyQueryStep1/fetch',
      payload: {
        data: id
      },
      callBack() {
        setBaseInfo();
      },
    });
    if (!hasEdit) return;
    dispatch({
      type: 'companyQueryStep1/fetch',
      payload: {
        data: id
      },
      callBack() {
        setBaseInfo();
      },
    });
  }
  setBaseInfo = () => {
    const { companyQueryStep1, companyQueryStep1: { licenseAddr, cityShowName, regionIdProvince, regionIdCity, regionIdCounty }, form } = this.props;
    if (licenseAddr) {
      this.setState({
        fileList: [
          {
            uid: 0,
            url: licenseAddr,
          },
        ],
      });
    }
    let [storeAddrCounty, storeAddrCity, storeAddrProvince] = cityShowName.split(',')
    let newGeographic = {
      province: { key: regionIdProvince, label: storeAddrProvince },
      city: { key: regionIdCity, label: storeAddrCity },
      area: { key: regionIdCounty, label: storeAddrCounty },
    };
    delete companyQueryStep1.geographic;

    companyQueryStep1.geographic = newGeographic;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = companyQueryStep1[key] || null;
      form.setFieldsValue(obj);
    });
  };
  handleCancelImg = () => this.setState({ previewVisible: false });
  handleChangeImg = ({ fileList }) => {
    this.setState({ fileList }, () => {
      this.setState({
        fileList: [...this.state.fileList]
      })
    })
  };
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    
    const {
      form,
      dispatch,
      companyQueryStep1: {
        regionIdProvince,
        storeAddrProvince,
        regionIdCity,
        storeAddrCity,
        regionIdCounty,
        storeAddrCounty,
        licenseAddr,
        name,
        social,
        personName,
        personIdcradno,
        openbank,
        openBankAddress,
        card,
        associated,
        phonenum,
        cityShowName,
        address,
      },
      companyUpdate,
      location: {
        query: { id },
        pathname,
      },
      typeDataTotal: {
        ch_bank
      },
      submitting
    } = this.props;

    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div>上传</div>
      </div>
    );
    const { getFieldDecorator, validateFields } = form;
    const hasEdit = pathname.includes('edit')
    const nextUrl = `/channel/company/list/${hasEdit ? 'edit' : 'add'}`;
    const onValidateForm = () => {
      validateFields((err, values) => {
        const { fileList } = this.state;
        if (fileList.length) {
          // values.licenseAddr = fileList[0].response.data[0]||licenseAddr;
          values.licenseAddr = fileList[0].response?fileList[0].response.data[0]:licenseAddr;
        }
        const {
          geographic: {
            province: { key: regionIdProvince, label: storeAddrProvince },
            city: { key: regionIdCity, label: storeAddrCity },
            area: { key: regionIdCounty, label: storeAddrCounty },
          },
          storeBeginTime,
          storeEndTime,
        } = values;
        delete values['geographic']
        if (!err) {
          if (hasEdit) {
            values.id = id;
          }
          const newId=id
          dispatch({
            type: `${hasEdit || id ? 'companyUpdate/submit' : 'companyAdd/baseInfo'}`,
            payload: {
              data: {
                ...values,
                regionIdProvince,
                regionIdCity,
                regionIdCounty,
                tbChannelZoneId: 1,
                optionUser: "",
                id:id
              }
            },
            callBack(msg, id) {
              if (msg === 'OK') {
                message.success(`${hasEdit ? '编辑' : '添加'}成功`);
                router.push({
                  pathname: `${nextUrl}/confirm`,
                  query: { id: `${newId||id}`},
                });
              } else {
                message.error(msg);
              }
            },
          });
        }
      });
    };
    let geographic = {
      province: { key: regionIdProvince + '', label: storeAddrProvince },
      city: { key: regionIdCity + '', label: storeAddrCity },
      area: { key: regionIdCounty + '', label: storeAddrCounty },
    };
    return (
      <>
        <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
          <Row gutter={50}>
            {pathname.includes('edit') ? (
              <Col lg={8}>
                <Form.Item label={'集团编号'}>
                  {getFieldDecorator('code', {
                    rules: [
                      {
                        required: true,
                        message: '请输入集团编号',
                      },
                    ],
                  })(<Input placeholder="请输入集团编号" disabled />)}
                </Form.Item>
              </Col>
            ) : null}
            <Col lg={{ span: 8, }}>
              <Form.Item label={'集团名称'}>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: '请输入集团名称',
                    },
                  ],
                })(<Input placeholder="请输入集团名称" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'统一社会信用代码'}>
                {getFieldDecorator('social', {
                  rules: [
                    {
                      pattern: /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/,
                      required: true,
                      message: '请输入统一社会信用代码',
                    },
                  ],
                })(<Input placeholder="请输入统一社会信用代码" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'法人姓名'}>
                {getFieldDecorator('personName', {
                  rules: [
                    {
                      required: true,
                      message: '请输入法人姓名',
                    },
                  ],
                })(<Input placeholder="法人姓名" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'法人身份账号'}>
                {getFieldDecorator('personIdcradno', {
                  rules: [
                    {
                      required: true,
                      pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
                      message: '请输入法人身份证号',
                    },
                  ],
                })(<Input placeholder="请输入法人身份证号" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'开户银行'}>
                {getFieldDecorator('openbank', {
                  rules: [
                    {
                      required: true,
                      message: '请选择开户银行',
                    },
                  ],
                })(
                  <Select placeholder="请选择">
                    {ch_bank && Object.entries(ch_bank).map(item => {
                      return (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'开户行地址'}>
                {getFieldDecorator('openBankAddress', {
                  rules: [
                    {
                      required: true,
                      message: '请选择开户行地址',
                    },
                  ],
                })(
                  <Input placeholder="请选择开户行地址" />
                )}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'开户账号'}>
                {getFieldDecorator('card', {
                  rules: [
                    {
                      required: true,
                      pattern: /^\d{10,25}$/,
                      message: '请输入开户账号',
                    },
                  ],
                })(<Input placeholder="请输入开户账号" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'联行号'}>
                {getFieldDecorator('associated', {
                  rules: [
                    {
                      required: true,
                      pattern: /^\d{12}$/,
                      message: '请输入正确的联行号',
                    },
                  ],
                })(<Input placeholder="请输入正确的联行号" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'联系电话'}>
                {getFieldDecorator('phonenum', {
                  rules: [
                    {
                      required: true,
                      pattern: /^\d{11}$/,
                      message: '请输入正确的电话号码',
                    },
                  ],
                })(<Input placeholder="请输入正确的电话号码" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'选择省市区'} >
                {getFieldDecorator('geographic', {
                  rules: [
                    {
                      required: true,
                      message: '请输入您的所在省市',
                    }
                  ],
                })(<GeographicView />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >
              <Form.Item label={'详细地址'}>
                {getFieldDecorator('address', {
                  rules: [
                    {
                      required: true,
                      message: '请输入详细地址',
                    },
                  ],
                })(<Input placeholder="请输入详细地址,150字以内" />)}
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 8,
              }}
            >

              <Form.Item label={'上传营业执照'}>
                {getFieldDecorator('licenseAddr')(
                  <>
                    <Upload
                      action="/oraflfile/upload/"
                      name="files"
                      {...propsHeader}
                      listType="picture-card"
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChangeImg}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} className={'customModal'} footer={null} onCancel={this.handleCancelImg}>
                      <img alt="example" style={{ width: '100%' }} src={previewImage} className={'customModal'} />
                    </Modal>
                  </>
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
