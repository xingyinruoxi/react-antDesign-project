import React, { Component } from 'react';
import { connect } from 'dva';
import { formatMessage, FormattedMessage } from 'umi/locale';
import Link from 'umi/link';
import { Checkbox, Alert, Icon } from 'antd';
import Login from '@/components/Login/index.js';
import styles from './Login.less';
import ModalResetPwd from './components/ModalResetPwd'

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

@connect(state => {
  return {
    login: state.login,
    submitting: state.loading.effects['login/login'],
  };
})
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
    visible:false
  };

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch({
            type: 'login/getCaptcha',
            payload: values.mobile,
          })
            .then(resolve)
            .catch(reject);
        }
      });
    });
    handleModal=(flag)=>{
      this.setState({
        visible:!!flag
      })
    }
  setTypeTotal=()=>{
    const {dispatch}=this.props;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    });
  }
  handleSubmit = (err, values) => {
    const { type } = this.state;
    const {setTypeTotal}=this;
    if (!err) {
      const { dispatch } = this.props;

      dispatch({
        type: 'login/login',
        payload: {
          data:{
            ...values,
          }
        },
        callBack(msg){
          if(msg==='OK'){
            setTypeTotal()
          }
        }
      });
    }
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );
  
  render() {
    const { login:{data,msg}, submitting } = this.props;
    const { type, autoLogin,visible } = this.state;
  // handleModal
    const propsModal={
      handleModal:this.handleModal,
      visible
    }
    return (
      <div className={styles.main}>
        <Login
          defaultActiveKey={type}
          onTabChange={this.onTabChange}
          onSubmit={this.handleSubmit}
          ref={form => {
            this.loginForm = form;
          }}
        >
        {msg !== 'OK' &&
              // login.type === 'account' &&
              !submitting &&
              this.renderMessage(msg)}
            <UserName
              name="username"
              placeholder={'请输入用户名'}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.userName.required' }),
                },
              ]}
            />
            <Password
              name="password"
              placeholder={'请输入密码'}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.password.required' }),
                },
              ]}
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            />
         {/*  <Tab key="account" tab={'账户密码登录'}>
            {msg !== 'OK' &&
              // login.type === 'account' &&
              !submitting &&
              this.renderMessage(msg)}
            <UserName
              name="username"
              placeholder={'请输入用户名'}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.userName.required' }),
                },
              ]}
            />
            <Password
              name="password"
              placeholder={'请输入密码'}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.password.required' }),
                },
              ]}
              onPressEnter={() => this.loginForm.validateFields(this.handleSubmit)}
            />
          </Tab> */}
          {/* <Tab key="mobile" tab={'手机号登录'}>
            {login.status === 'error' &&
              login.type === 'mobile' &&
              !submitting &&
              this.renderMessage(
                formatMessage({ id: 'app.login.message-invalid-verification-code' })
              )}
            <Mobile
              name="mobile"
              placeholder={formatMessage({ id: 'form.phone-number.placeholder' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.phone-number.required' }),
                },
                {
                  pattern: /^1\d{10}$/,
                  message: formatMessage({ id: 'validation.phone-number.wrong-format' }),
                },
              ]}
            />
            <Captcha
              name="captcha"
              placeholder={formatMessage({ id: 'form.verification-code.placeholder' })}
              countDown={120}
              onGetCaptcha={this.onGetCaptcha}
              getCaptchaButtonText={formatMessage({ id: 'form.get-captcha' })}
              getCaptchaSecondText={formatMessage({ id: 'form.captcha.second' })}
              rules={[
                {
                  required: true,
                  message: formatMessage({ id: 'validation.verification-code.required' }),
                },
              ]}
            />
          </Tab> */}
          <div>
            <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              自动登录
            </Checkbox>
          </div>
          <Submit loading={submitting}>
            登录
          </Submit>
          <div className={styles.other}>
            <Link className={styles.register} to="/user/forgetpwd">
                忘记密码
            </Link>
          </div>
        </Login>
        {
          visible?<ModalResetPwd {...propsModal}/>:null
        }
        
      </div>
    );
  }
}

export default LoginPage;
