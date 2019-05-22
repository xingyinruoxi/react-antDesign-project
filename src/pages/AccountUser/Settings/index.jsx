import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Form, Input, Button, Card, message } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from '../assets/css/style.less';
import creatHistory from 'history/createBrowserHistory';
const FormItem = Form.Item;
const history = creatHistory();
@connect(({ loading, updatePassword, userInfo }) => ({
  submitting: loading.effects['form/submitRegularForm'],
  updatePassword,
  userInfo,
}))
@Form.create()
class BasicForms extends PureComponent {
  handleSubmit = e => {
    const {
      dispatch,
      form,
      userInfo: { username },
    } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (values.oldPassword == null || values.newPassword == null) {
        message.error('请输入密码');
        return;
      }
      if (values.oldPassword === values.newPassword) {
        message.error('新密码与原密码一致');
        return;
      }
      if (!err) {
        dispatch({
          type: 'updatePassword/fetch',
          payload: {
            data: {
              username,
              ...values,
            },
          },
          callBack(msg) {
            if (msg === 'OK') {
              message.success('修改成功');
            } else {
              message.success(msg);
            }
          },
        });
      }
    });
  };
  onPrev = () => {
    history.goBack();
  };
  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

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

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 10, offset: 7 },
      },
    };

    return (
      <PageHeaderWrapper title={'修改密码'}>
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <FormItem {...formItemLayout} label="原密码">
              {getFieldDecorator('oldPassword', {
                rules: [
                  {
                    required: true,
                    message: '请输入原密码',
                  },
                ],
              })(<Input.Password placeholder="请输入原密码" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="新密码">
              {getFieldDecorator('newPassword', {
                rules: [
                  {
                    required: true,
                    message: '姓请输入新密码名',
                  },
                ],
              })(<Input.Password placeholder="请输入新密码" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="确认密码">
              {getFieldDecorator('confirmPassword', {
                rules: [
                  {
                    required: true,
                    message: '请确认密码',
                  },
                ],
              })(<Input.Password placeholder="请确认密码" />)}
            </FormItem>

            <FormItem {...submitFormLayout} style={{ marginTop: 32 }}>
              <Button type="primary" htmlType="submit" loading={submitting}>
                确认修改
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.onPrev}>
                取消修改
              </Button>
            </FormItem>
          </Form>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BasicForms;
