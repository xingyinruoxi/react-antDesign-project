import React, { PureComponent } from 'react';
import {
  Form, Modal, message
} from 'antd';
import { connect } from 'dva';

import TableForm from './components/TableForm'
import { stat } from 'fs';

@connect(state => ({
  // positionDate: state.positionDate,
  settingPosition: state.settingPosition,
  // positionList: state.positionList,
  channelList: state.channelList
}))
@Form.create()
class ModalPosition extends PureComponent {
  state={
    positionList:[],
    positionDate:[]
  }
  setData = (key, data) => {
    this.setState({
      [key]: data 
    });
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    const { setData } = this;
    //设置关键岗位弹出框列表
    dispatch({
      type: 'positionList/fetch',
      payload: {
        data: {
          "vip": true
        }
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('positionList', data)
        }
      }
    })
    //设置关键岗位弹出框新增字典表
    dispatch({
      type: 'positionDate/fetch',
      payload: {
        data: {
          "vip": false
        }
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('positionDate', data)
        }
      }
    });
  }
  okHandle = e => {
    e.preventDefault();
    const { form, dispatch, handleModalPosition } = this.props;
    form.validateFields((err, values) => {
      let roleList = values.roleList
      if (err) return;
      let roleListArray = []
      const newValues = roleList.map(({ roleId }) => ({
        roleId
      }))
      for (var key in newValues) {
        roleListArray.push(
          newValues[key].roleId
        )
      }
      dispatch({
        type: 'settingPosition/fetch',
        payload: {
          data: {
            roleIds: roleListArray
          }
        },
        callBack(msg) {
          if (msg === 'OK') {
            message.success('设置成功');
            handleModalPosition();
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
    });
  };
  
  render() {
    const { positionList,positionDate } = this.state;
    const newPositionList=positionList&&positionList.map(({id:roleId,roleName})=>({roleId,roleName,id:Math.random()}))
    const {
      modalVisible,
      handleModalPosition,
      form: { getFieldDecorator },
    } = this.props;
    const propsTableForm = {
      positionDate
    }
    return (
      <Modal
        destroyOnClose
        title="设置关键岗位"
        visible={modalVisible}
        onOk={this.okHandle}
        onCancel={() => handleModalPosition()}
      >
        <Form layout="vertical" hideRequiredMark >
          {getFieldDecorator('roleList', {
            initialValue: newPositionList, 
          })(<TableForm {...propsTableForm} />)}
        </Form>
      </Modal>
    );
  }
}
export default ModalPosition;
