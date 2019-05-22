import React, { PureComponent } from 'react';
import { Input, Button, Modal, Form, Select, message } from 'antd';
import Result from '@/components/Result';
const FormItem = Form.Item;
const SelectOption = Select.Option;
import { connect } from 'dva';

@connect(({ loading, productClassList }) => ({
  productClassList,
  submitting: loading.models.productClassList,
}))
@Form.create()
export class ModalProduct extends PureComponent {
  state = {
    proClassParent: [],
  };
  formLayout = {
    labelCol: { span: 7 },
    wrapperCol: { span: 15 },
  };
  handleSubmit = e => {
    e.preventDefault();
    const { dispatch, form, item, handleCancel } = this.props;
    const id = item ? item.id : '';
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      dispatch({
        type: `productClassList/${id ? 'update' : 'add'}`,
        payload: { data: { id, ...fieldsValue } },
        callback(msg) {
          if (msg === 'OK') {
            dispatch({
              type: 'productClassList/fetch',
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
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  handleChange = level => {
    const { dispatch,form} = this.props;
    const { setData } = this;
    form.setFieldsValue({parentId:''});
    if (level >= 2) {
      dispatch({
        type: 'proClassParent/fetch',
        payload: { data: { level } },
        callBack(msg, data) {
          if (msg === 'OK') {
            setData('proClassParent', data);
          }
        },
      });
    }
  };
  componentDidMount() {
    const {
      dispatch,
      item: { level },
    } = this.props;
    if (!level) return;
    dispatch({
      type: 'proClassParent/fetch',
      payload: { data: { level } },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('proClassParent', data);
        }
      },
    });
  }
  render() {
    const {
      item: { code, name, parentName, level, parentId, id },
      visible,
      form: { getFieldDecorator, getFieldValue },
      handleCancel,
      typeData,
      submitting,
    } = this.props;
    const { proClassParent } = this.state;
    return (
      <Modal
        title={`商品类别${name ? '编辑' : '添加'}`}
        width={500}
        bodyStyle={{ paddingBottom: 5 }}
        destroyOnClose
        visible={visible}
        okText={'保存'}
        confirmLoading={submitting}
        onOk={this.handleSubmit}
        onCancel={handleCancel}
      >
        <Form hideRequiredMark onSubmit={this.handleSubmit}>
          {name ? (
            <FormItem label="商品类别编码" {...this.formLayout}>
              {getFieldDecorator('code', {
                initialValue: code,
              })(<Input disabled />)}
            </FormItem>
          ) : null}
          <FormItem label="商品类别名称" {...this.formLayout}>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入类别名称' }],
              initialValue: name,
            })(<Input placeholder="请输入" />)}
          </FormItem>
          <FormItem label="商品类别级别" {...this.formLayout}>
            {getFieldDecorator('level', {
              rules: [{ required: true, message: '请选择商品类别级别' }],
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
            <FormItem label="上级商品类别" {...this.formLayout}>
              {getFieldDecorator('parentId', {
                rules: [{ required: true, message: '请选择上级商品类别' }],
                initialValue: getFieldValue('level') === level ? parentId : null,
              })(
                <Select placeholder="请选择">
                  {proClassParent.map(({ name, id }) => (
                    <SelectOption value={id} key={id}>
                      {name}
                    </SelectOption>
                  ))}
                </Select>
              )}
            </FormItem>
          ) : null}
        </Form>
      </Modal>
    );
  }
}
export default ModalProduct;
