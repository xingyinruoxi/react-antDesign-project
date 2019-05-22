import React, { PureComponent } from 'react';
import { Row, Col, Input, Button, Modal, Form, Select, message, Upload, Icon } from 'antd';
import Result from '@/components/Result';
const FormItem = Form.Item;
const SelectOption = Select.Option;
const propsHeader = {
  headers: {
    Authorization: `Bearer ${token}`,
  }
}
@Form.create()
export class ModalProduct extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: '',
      },
    ],
  };
  formLayout = {
    labelCol: { span: 9 },
    wrapperCol: { span: 15 },
  };

  handleCancel2 = () => this.setState({ previewVisible: false });
  handleChange = ({ fileList }) => this.setState({ fileList });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form, current, handleCancel } = this.props;
    const id = current ? current.id : '';
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      dispatch({
        type: 'list/submit',
        payload: { id, ...fieldsValue },
      });
      handleCancel();
      message.success('添加成功');
    });
  };
  render() {
    const {
      item,
      visible,
      form: { getFieldDecorator },
      handleCancel,
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
        title={`商品型号${Object.keys(item).length !== 0 ? '编辑' : '添加'}`}
        width={640}
        //bodyStyle={done ? { padding: '72px 0' } : { padding: '28px 0 0' }}
        destroyOnClose
        visible={visible}
        okText={'保存'}
        onOk={this.handleSubmit}
        onCancel={handleCancel}
      >
        <Form hideRequiredMark onSubmit={this.handleSubmit}>
          <Row gutter={0}>
            <Col md={12} sm={24}>
              <FormItem label="商品型号编码" key="code" {...this.formLayout}>
                {getFieldDecorator('code', {
                  rules: [{ required: true, message: '请输入类别编码' }],
                  initialValue: item.title,
                })(<Input placeholder="请输入" />)}
              </FormItem>
              <FormItem label="所属厂家品牌" key="class" {...this.formLayout}>
                {getFieldDecorator('class', {
                  rules: [{ required: true, message: '请选择商品类别级别' }],
                  initialValue: item.owner,
                })(
                  <Select placeholder="请选择">
                    <SelectOption value="付晓晓">付晓晓</SelectOption>
                    <SelectOption value="周毛毛">周毛毛</SelectOption>
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col md={12} sm={24}>
              <FormItem label="商品型号名称" {...this.formLayout}>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: '请输入类别名称' }],
                  initialValue: 'tyuio',
                })(<Input placeholder="请输入" />)}
              </FormItem>
              <FormItem label="上传型号图片" {...this.formLayout}>
                {getFieldDecorator('class', {
                  rules: [{ required: true, message: '请选择上级商品类别' }],
                  initialValue: '付晓晓',
                })(
                  <>
                    <Upload
                      action="//jsonplaceholder.typicode.com/posts/"
                      listType="picture-card"
                      {...propsHeader}
                      fileList={fileList}
                      onPreview={this.handlePreview}
                      onChange={this.handleChange}
                    >
                      {fileList.length >= 1 ? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel2}>
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
