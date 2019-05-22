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
@connect(({ brandEnd2 }) => ({
  brandEnd2,
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

  handleCancel2 = () => this.setState({ previewVisible: false });
  handleChange = ({ fileList }) =>
    this.setState({ fileList }, () => {
      this.setState({ fileList: [...this.state.fileList] });
    });

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
        type: `productTypeList/${id ? 'update' : 'add'}`,
        payload: { data: { id, ...fieldsValue } },
        callback(msg) {
          if (msg === 'OK') {
            dispatch({
              type: 'productTypeList/fetch',
              payload: { queryCondition: {}, limit: 10 },
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
      item: { imgUrl },
    } = this.props;
    if (imgUrl) {
      this.setState({ fileList: [{ uid: 0, url: `${imgUrl}?Authorization=${token}` }] });
    }
    dispatch({
      type: 'brandEnd2/fetch',
      payload: { data: {} },
    });
  }
  render() {
    const {
      item: { name, code, tbCommodityBrandId },
      visible,
      form: { getFieldDecorator, getFieldValue },
      handleCancel,
      brandEnd2,
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
        title={`商品型号${name ? '编辑' : '添加'}`}
        width={640}
        //bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
        destroyOnClose
        visible={visible}
        okText={'保存'}
        onOk={this.handleSubmit}
        onCancel={handleCancel}
      >
        <Form hideRequiredMark onSubmit={this.handleSubmit}>
          <Row gutter={10}>
            <Col md={12} sm={24}>
              {name ? (
                <FormItem label="型号编码" key="code" {...this.formLayout}>
                  {getFieldDecorator('code', {
                    rules: [{ required: true, message: '请输入型号编码' }],
                    initialValue: code,
                  })(<Input disabled />)}
                </FormItem>
              ) : null}
              <FormItem label="厂家品牌" key="tbCommodityBrandId" {...this.formLayout}>
                {getFieldDecorator('tbCommodityBrandId', {
                  rules: [{ required: true, message: '请选择厂家品牌' }],
                  initialValue: tbCommodityBrandId,
                })(
                  <Select placeholder="请选择">
                    {brandEnd2.map(({ id, name }) => (
                      <SelectOption value={id} key={id}>
                        {name}
                      </SelectOption>
                    ))}
                  </Select>
                )}
              </FormItem>
            </Col>

            <Col md={12} sm={24}>
              <FormItem label="型号名称" {...this.formLayout}>
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入型号名称' }],
                  initialValue: name,
                })(<Input placeholder="请输入" />)}
              </FormItem>
              <FormItem label="型号图片" {...this.formLayout}>
                {getFieldDecorator('imgUrl')(
                  <>
                    <Upload
                      action="/oraflfile/upload/"
                      listType="picture-card"
                      accept=".png,.jpg,.jpeg"
                      name="files"
                      {...propsHeader}
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal
                      visible={previewVisible}
                      className={'customModal'}
                      footer={null}
                      onCancel={this.handleCancel2}
                    >
                      <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                  </>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}
export default ModalProduct;
