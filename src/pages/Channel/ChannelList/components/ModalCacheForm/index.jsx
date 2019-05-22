import React, { PureComponent } from 'react';
import { Form, Modal, Input,message  } from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item;
@connect(({ modalManage,channelList }) => ({
  modalManage,
  channelList,
}))
@Form.create()
class ModalCacheForm extends PureComponent {
  componentDidMount(){
    const {form} = this.props
    form.setFieldsValue({username:'',password:''});
  }
  handleSure(){
    const {  form,dispatch,item } = this.props;
    const id = item.id
    form.validateFields((err, fieldsValue) => {
      if (!err){ 
        dispatch({
          type:'modalManage/submit',
          payload:{
            data: {
              ...fieldsValue,
              roleId: 1,
              isAdmin:true,
              channelId: id
            }
          },
          callBack(msg) {
            if (msg === 'OK') {
              message.success('设置成功');
              handleModalProject()
              dispatch({
                type: 'channelList/fetch',
                payload: {
                  limit: 10,
                  queryCondition: { 
                    cooperation: '', //参考字典 ch_cooperation
                    isAdmin: '', //0 否 1 是
                    isPost: '', //0 否 1 是
                    isProduct: '', //0 否 1 是
                    name: '', //渠道名称
                    operating: '', //参考字典 ch_operating
                    status: '', //参考字典 ch_status
                  },
                },
              });
            } else {
              message.error(msg);
            }
          },
        })
        this.props.handleModalCacheForm();
      };
    });
  }
  render() {
    const formItemLayout = {
      labelCol: {
        sm: { span: 7 },
      },
      wrapperCol: {
        sm: { span: 15 },
      },
    };
    const {
      modalVisible,
      form,
      dispatch,
      handleModalCacheForm, 
      form: { getFieldDecorator },
    } = this.props;
    return (
      <Modal
        destroyOnClose
        title="设置管理员"
        width={480}
        visible={modalVisible}
        bodyStyle={{paddingBottom:0}}
        onOk={()=> this.handleSure()}
        onCancel={() => handleModalCacheForm()}
      >
        <Form  onSubmit={this.handleSure}>
          <FormItem {...formItemLayout} label={'登录账号'}>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  pattern: /^[A-Za-z0-9]+$/,
                  message:'请输入登录账号',
                },
              ],
            })(<Input  placeholder='请输入登录账号' />)}
          </FormItem>
          <FormItem {...formItemLayout} label={'初始密码'}>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  pattern: /^[A-Za-z0-9]+$/,
                  message:'请输入初始密码',
                },
              ],
            })(<Input  placeholder='请输入初始密码' />)}
          </FormItem>
          <FormItem {...formItemLayout} label={'紧急联系人'}>
            {getFieldDecorator('realName', {
              rules: [
                {
                  required: true,
                  message:'请输入紧急联系人',
                },
              ],
            })(<Input  placeholder='请输入紧急联系人' />)}
          </FormItem>
          <FormItem {...formItemLayout} label={'联系电话'}>
            {getFieldDecorator('phoneNum', {
              rules: [
                {
                  required: true,
                  pattern: /^\d{11}$/,
                  message:'请输入联系电话',
                },
              ],
            })(<Input  placeholder='请输入联系电话' />)}
          </FormItem>
        </Form>
      </Modal>
    );
  }
}
export default ModalCacheForm;
