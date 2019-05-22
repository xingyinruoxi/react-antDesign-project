import React from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Button } from 'antd';
import Link from 'umi/link';
import Result from '@/components/Result/index.js';
import styles from './RegisterResult.less';

const actions = (
  <div className={styles.actions}>
    <Link to="/user/login">
      <Button size="large" type="primary">
        重新登录
      </Button>
    </Link>
    {/* <Link to="/">
      <Button size="large">
        <FormattedMessage id="app.register-result.back-home" />
      </Button>
    </Link> */}
  </div>
);

const ForgetPwdResult = ({ location }) =>{
  return (
    <Result
    className={styles.registerResult}
    type="success"
    title={
      <div className={styles.title}>
       <FormattedMessage
          id="app.forgetPwd-result.msg"
          values={{ username: location.state ? location.state.account : 'AntDesign@example.com' }}
        />
      </div>
    }
    // description={'请及时登录'}
    actions={actions}
    // extra={'pppp'}
    style={{ marginTop: 56 }}
  />
  )
};

export default ForgetPwdResult;
