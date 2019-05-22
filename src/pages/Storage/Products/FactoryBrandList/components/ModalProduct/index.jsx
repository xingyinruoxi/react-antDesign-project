import React, { PureComponent } from 'react';
import { Row, Col, Input, Button, Modal, Form, Select, message, Upload, Icon } from 'antd';
import Result from '@/components/Result';
const FormItem = Form.Item;
const SelectOption = Select.Option;
import { connect } from 'dva';
const token = localStorage.getItem('token').replace(/\"/g, '');
const propsHeader = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
@connect(({ uploadImg, loading, brandParent, brandEnd }) => ({
  uploadImg,
  brandParent,
  brandEnd,
  submitting: loading.models.brandList,
}))
@Form.create()
export class ModalProduct extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };
  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 17 },
  };

  handleCancelImg = () => this.setState({ previewVisible: false });
  handleChangeImg = ({ fileList }) => {
    this.setState({ fileList }, () => {
      this.setState({
        fileList: [...this.state.fileList],
      });
    });
  };

  handleChange = level => {
    const { dispatch, brandParent } = this.props;
    if (level >= 2) {
      dispatch({
        type: 'brandParent/fetch',
        payload: { data: { level } },
      });
    }
  };
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form, item, handleCancel } = this.props;
    const id = item ? item.id : '';

    form.validateFields((err, fieldsValue) => {
      const { fileList } = this.state;
      if (fileList.length) {
        fieldsValue.imgUrl = fileList[0].response ? fileList[0].response.data[0] : item.imgUrl;
      }
      if (err) return;
      dispatch({
        type: `brandList/${id ? 'update' : 'add'}`,
        payload: { data: { id, ...fieldsValue } },
        callback(msg) {
          if (msg === 'OK') {
            dispatch({
              type: 'brandList/fetch',
              payload: { queryCondition: {} },
            });
            handleCancel();
            message.success(`${id ? '编辑' : '添加'}成功`);
          } else {
            message.error(msg);
          }
        },
      });
    });
  };
  componentDidMount() {
    const {
      dispatch,
      item: { level, imgUrl },
    } = this.props;

    if (imgUrl) {
      this.setState({
        fileList: [
          {
            uid: 0,
            url: `${imgUrl}?Authorization=${token}`,
          },
        ],
      });
    }
    dispatch({
      type: 'brandEnd/fetch',
      payload: { data: {} },
    });
    if (!level) return;
    dispatch({
      type: 'brandParent/fetch',
      payload: { data: { level } },
    });
  }
  render() {
    const {
      item: { code, commodityCategoriesId, parentId, name, level, imgUrl },
      visible,
      form: { getFieldDecorator, getFieldValue },
      handleCancel,
      typeData,
      brandEnd,
      brandParent,
      submitting,
    } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div>上传</div>
      </div>
    );
    return (
      <Modal
        title={`厂家品牌${name ? '编辑' : '添加'}`}
        width={640}
        //bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
        destroyOnClose
        visible={visible}
        okText={'保存'}
        confirmLoading={submitting}
        onOk={this.handleSubmit}
        onCancel={handleCancel}
      >
        <Form hideRequiredMark onSubmit={this.handleSubmit}>
          <Row gutter={0}>
            <Col md={12} sm={24}>
              {name ? (
                <FormItem label="品牌编号" key="code" {...this.formLayout}>
                  {getFieldDecorator('code', {
                    rules: [{ required: true, message: '请输入编号' }],
                    initialValue: code,
                  })(<Input disabled />)}
                </FormItem>
              ) : null}

              <FormItem label="所属类别" key="class" {...this.formLayout}>
                {getFieldDecorator('commodityCategoriesId', {
                  rules: [{ required: true, message: '请选择商品类别级别' }],
                  initialValue: commodityCategoriesId,
                })(
                  <Select placeholder="请选择">
                    {brandEnd.map(({ name, id }) => (
                      <SelectOption value={id} key={id}>
                        {name}
                      </SelectOption>
                    ))}
                  </Select>
                )}
              </FormItem>

              <FormItem label="品牌标识" {...this.formLayout}>
                {getFieldDecorator('imgUrl')(
                  <>
                    <Upload
                      action="/oraflfile/upload/"
                      name="files"
                      listType="picture-card"
                      {...propsHeader}
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChangeImg}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      className={'customModal'}
                      footer={null}
                      onCancel={this.handleCancelImg}
                    >
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                  </>
                )}
              </FormItem>
            </Col>
            <Col md={12} sm={24}>
              <FormItem label="品牌名称" {...this.formLayout}>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入名称' }],
                  initialValue: name,
                })(<Input placeholder="请输入" />)}
              </FormItem>
              <FormItem label="品牌级别" {...this.formLayout}>
                {getFieldDecorator('level', {
                  rules: [{ required: true, message: '请选择级别' }],
                  initialValue: level,
                })(
                  <Select placeholder="请选择" onChange={this.handleChange}>
                    {Object.entries(typeData).map(item => {
                      return (
                        <SelectOption value={Number(item[0])} key={item[0]}>
                          {item[1]}
                        </SelectOption>
                      );
                    })}
                  </Select>
                )}
              </FormItem>
              {getFieldValue('level') >= 2 ? (
                <FormItem label="上级品牌" {...this.formLayout}>
                  {getFieldDecorator('parentId', {
                    rules: [{ required: true, message: '请选择上级商品类别' }],
                    initialValue: parentId,
                  })(
                    <Select placeholder="请选择">
                      {brandParent.map(({ name, id }) => (
                        <SelectOption value={id} key={id}>
                          {name}
                        </SelectOption>
                      ))}
                    </Select>
                  )}
                </FormItem>
              ) : null}
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
export default ModalProduct;
