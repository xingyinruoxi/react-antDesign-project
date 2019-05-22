import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, InputNumber, Divider, message, Upload, Icon } from 'antd';
import router from 'umi/router';
import styles from './style.less';
const Dragger = Upload.Dragger;
const token = localStorage.getItem('token').replace(/\"/g, '');


@connect(({ loading, carTypeDetail }) => ({
  submitting: loading.models.carTypeDetail,
  carTypeDetail,
}))
@Form.create()
class Step3 extends React.PureComponent {
  state = {
    type3: [
      {
        imgUrl: '',
        sort: 2,
      },
    ],
    type1: [],
    type2: [],
  };
  setData = (type3, type1, type2) => {
    this.setState({
      type3,
      type1,
      type2,
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
        pathname,
        state: { tbCommodityProductId },
      },
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'getCarTypeImg/fetch',
      payload: { data: { commodityInfoId: id } },
      callBack(msg, data) {
        const { type3, type1, type2 } = data;
        const newType3=type3.map(({ tbCommodityInfoId, id, sort, url: imgUrl }) => ({
          tbCommodityInfoId,
          sort,
          imgUrl,
          id,
        }));
        const newType1=type1.map(({ tbCommodityInfoId, sort, url: imgUrl, id }) => ({
          tbCommodityInfoId,
          sort,
          imgUrl,
          id,
        }));
        const newType2=type2.map(({ tbCommodityInfoId, sort, url: imgUrl, id }) => ({
          tbCommodityInfoId,
          sort,
          imgUrl,
          id,
        }));
        if (msg === 'OK') {
          setData(newType3, newType1, newType2);
        }
      },
    });
  }
  deleteNoidType2 = (url, type) => {
    const { type2, type1 } = this.state;
    let newType = [];
    if (type === 'type2') {
      newType = type2.filter(item => item.imgUrl !== url);
    } else {
      newType = type1.filter(item => item.imgUrl !== url);
    }
    this.setState({
      [type]: newType,
    });
  };
  deleteNoidType3 = (id, type) => {
    this.setState({
      type3: [
        {
          imgUrl: '',
          sort: 2,
        },
      ],
    });
  };
  handleChangeImg = ({ file }) => {
    let imgUrl = file.response && file.response.data[0];
    const {clearErr}=this;
    const status = file.status;
    if (imgUrl) {
      this.setState({
        type3: [{ imgUrl }],
      },()=>clearErr('type3'));
    }
    if (status === 'done') {
      message.success(`${file.name}文件上传成功.`);
    } else if (status === 'error') {
      message.error(`${file.name}文件上传失败.`);
    }
  };
  handleImgType2 = ({ file }) => {
    let imgUrl = file.response && file.response.data[0];
    const status = file.status;
    const {clearErr}=this;
    if (imgUrl) {
      this.setState({
        type1: [...this.state.type1, { imgUrl, sort: 0 }],
      },()=>clearErr('type1'));
    }
    if (status === 'done') {
      message.success(`${file.name}文件上传成功.`);
    } else if (status === 'error') {
      message.error(`${file.name} 文件上传失败.`);
    }
  };
  handleImgType3 = ({ file }) => {
    let imgUrl = file.response && file.response.data[0];
    const status = file.status;
    const {clearErr}=this;
    if (imgUrl) {
      this.setState({
        type2: [...this.state.type2, { imgUrl, sort: 0 }],
      },()=>clearErr('type2'));
    }
    if (status === 'done') {
      message.success(`${file.name}文件上传成功.`);
    } else if (status === 'error') {
      message.error(`${file.name} 文件上传失败.`);
    }
  };
  setTypeImg = (id, type) => {
    const { type3, type1, type2 } = this.state;
    if (type === 'type2') {
      const newType2 = type2.filter(item => item.id !== id);
      this.setState({
        type1,
        type2: newType2,
        type3,
      });
    } else if (type === 'type1') {
      const newType1 = type1.filter(item => item.id !== id);
      this.setState({
        type1: newType1,
        type2,
        type3,
      });
    } else {
      const newType3 = type3.filter(item => item.id !== id);
      this.setState({
        type1,
        type2,
        type3:newType3,
      });
    }
  };
  deteImg = (id, type) => {
    const { dispatch } = this.props;
    const { setTypeImg } = this;

    dispatch({
      type: 'carTypeUpdate/deleteImg',
      payload: {
        data: { id },
      },
      callBack(msg) {
        if (msg === 'OK') {
          message.success(`删除成功`);
          setTypeImg(id, type);
        } else {
          message.error(msg);
        }
      },
    });
  };
  deleteType1 = (id, type) => {
    if (!id) return;
    const { deteImg } = this;
    deteImg(id, type);
  };
  clearErr=(type)=>{
    this.props.form.setFields({
      [type]:{
        errors:'',
      }
    })
  }
  render() {
    const {
      form: { getFieldDecorator, validateFields, getFieldValue },
      submitting,
      location: {
        query: { id },
        query,
        pathname,
        state: { rule, tbCommodityProductId },
      },
    } = this.props;
    const preUrl = `/store/products/cartypestore/${pathname.includes('edit') ? 'edit' : 'add'}`;

    const onPrev = () => {
      router.push({
        pathname: `${preUrl}/confirm`,
        query,
        state: { rule, tbCommodityProductId },
      });
    };
    const onValidateForm = e => {
      e.preventDefault();
      const { dispatch } = this.props;
      validateFields((err, values) => {
        console.log('err',err,'values',values)
        values.type3.forEach((item, index) => {
          item.tbCommodityInfoId = id;
          item.sort = 1;
        });
        values.type1.forEach((item, index) => {
          let curSort = `typeWWSort${index}`;
          item.sort = values[curSort];
          item.tbCommodityInfoId = id;
        });
        values.type2.forEach((item, index) => {
          let curSort = `typeJJSort${index}`;
          item.sort = values[curSort];
          item.tbCommodityInfoId = id;
        });
        const { type3, type1, type2 } = this.state;
        if (!err) {
          dispatch({
            type: 'carTypeAdd/step3',
            payload: { data: { type3, type1, type2 } },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: `${preUrl}/cofigdetail`,
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
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
        md: { span: 10 },
      },
    };

    const propsUploadType1 = {
      action: '/oraflfile/upload/',
      name: 'files',
      accept: '.png,jpg,.jpeg',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      showUploadList: false,
      disabled: this.state.type3.imgUrl ? true : false,
    };
    const propsUploadType2 = {
      action: '/oraflfile/upload/',
      name: 'files',
      accept: '.png,jpg,.jpeg',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      showUploadList: false,
      multiple: true,
    };

    
    const { type3, type1, type2 } = this.state;
    return (
      <Form hideRequiredMark className={styles.stepForm}>
        <Form.Item label={'列表页标签图'} {...formItemLayout}>
          {getFieldDecorator('type3', {
            initialValue: type3,
            rules: [
              {
                required: type3[0] && type3[0].imgUrl ? false : true,
                message: '请上传列表页标签图',
              },
            ],
          })(
            <>
              {type3[0] && type3[0].imgUrl ? (
                <>
                  <a target="_blank" href={`${type3[0].imgUrl}?Authorization=${token}`}>
                    图片预览
                  </a>
                  {type3[0].id ? (
                    <a
                      href="javascript:;"
                      className={styles.delete}
                      onClick={() => this.deleteType1(type3[0].id, 'type3')}
                    >
                      <Icon type="close" />
                    </a>
                  ) : (
                    <a
                      href="javascript:;"
                      className={styles.delete}
                      onClick={() => this.deleteNoidType3('noId', 'type3')}
                    >
                      <Icon type="close" />
                    </a>
                  )}
                </>
              ) : (
                <Upload {...propsUploadType1} onChange={this.handleChangeImg}>
                  <Button>
                    <Icon type="upload" /> 点击上传
                  </Button>
                </Upload>
              )}
            </>
          )}
        </Form.Item>
        <Form.Item label={'详情页轮播图'} {...formItemLayout}>
          {getFieldDecorator('type1', {
            initialValue: type1,
            rules: [{ required: true, message: '请上传详情页轮播图' }],
          })(
            <>
              <Dragger {...propsUploadType2} onChange={this.handleImgType2}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域进行上载</p>
                <p className="ant-upload-hint">
                  支持单个或批量上传，支持文件格式有png、jpg、jpeg。
                </p>
              </Dragger>
              <ul className={styles.listImg}>
                {type1.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={`${item.imgUrl}?Authorization=${token}`} key={index} target="_blank">
                        <img src={`${item.imgUrl}?Authorization=${token}`} />
                      </a>
                      <Form.Item label={'排序'}>
                        {getFieldDecorator('typeWWSort' + index, {
                          initialValue: item.sort,
                          rules: [{ required: true, message: '请输入排序' }],
                        })(
                          <InputNumber
                            min={0}
                            style={{ position: 'absolute', top: -35, left: 45 }}
                          />
                        )}
                      </Form.Item>
                      {item.id ? (
                        <a
                          href="javascript:;"
                          className={styles.delete}
                          style={{ border: 'none', position: 'absolute', top: 178, right: 0 }}
                          onClick={() => this.deleteType1(item.id, 'type1')}
                        >
                          删除
                        </a>
                      ) : (
                        <a
                          href="javascript:;"
                          className={styles.delete}
                          style={{ border: 'none', position: 'absolute', top: 178, right: 0 }}
                          onClick={() => this.deleteNoidType2(item.imgUrl, 'type1')}
                        >
                          删除
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </Form.Item>
        <Form.Item label={'详情页内容图'} {...formItemLayout}>
          {getFieldDecorator('type2', {
            initialValue: type2,
            rules: [{ required: true, message: '请上传详情页轮播图' }],
          })(
            <>
              <Dragger {...propsUploadType2} onChange={this.handleImgType3}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">单击或拖动文件到此区域进行上载</p>
                <p className="ant-upload-hint">
                  支持单个或批量上传，支持文件格式有png、jpg、jpeg。
                </p>
              </Dragger>
              <ul className={styles.listImg}>
                {type2.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={`${item.imgUrl}?Authorization=${token}`} key={index} target="_blank">
                        <img src={`${item.imgUrl}?Authorization=${token}`} />
                      </a>
                      <Form.Item label={'排序'}>
                        {getFieldDecorator('typeJJSort' + index, {
                          initialValue: item.sort,
                          rules: [{ required: true, message: '请输入排序' }],
                        })(
                          <InputNumber
                            min={0}
                            style={{ position: 'absolute', top: -35, left: 45 }}
                          />
                        )}
                      </Form.Item>
                      {item.id ? (
                        <a
                          href="javascript:;"
                          className={styles.delete}
                          style={{ border: 'none', position: 'absolute', top: 178, right: 0 }}
                          onClick={() => this.deleteType1(item.id, 'type2')}
                        >
                          删除
                        </a>
                      ) : (
                        <a
                          href="javascript:;"
                          className={styles.delete}
                          style={{ border: 'none', position: 'absolute', top: 178, right: 0 }}
                          onClick={() => this.deleteNoidType2(item.imgUrl, 'type2')}
                        >
                          删除
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </Form.Item>
        <footer className={styles.footer}>
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

export default Step3;
