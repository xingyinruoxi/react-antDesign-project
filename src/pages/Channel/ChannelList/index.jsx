import React, { PureComponent } from 'react';
import { Card, message } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
import ModalCacheForm from './components/ModalCacheForm';
import ModalPosition from './components/ModalPosition';
import ModalProjectOne from './components/ModalProjectOne';
@connect(state => {
  return {
    channelList: state.channelList,
    loading: state.loading.models.channelList,
    typeDataTotal: state.typeDataTotal,
    positionList: state.positionList
  };
})
export class List extends PureComponent {
  state = {
    modalVisible: false, 
    id:null
  };
  //管理员
  handleModalCacheForm = (flag,item) => {
    this.setState({
      modalVisible: !!flag,
      item,
    });
  };
  //批量设置关键岗位
  handleModalPosition = (flag) => {
    // const {getPositionList}=this;
    // this.setState({
    //   modalPosition: !!flag,
    //   id
    // },()=>getPositionList());
    this.setState({
      modalPosition: !!flag,
    });
  };
  //批量关联产品
  handleModalProject = (flag,id,item) => {
    this.setState({
      modalProjectOne: !!flag,
      id,
      item
    });
  };
 
  // getPositionList=()=>{
  //   const {dispatch}=this.props;
  //   const {id:channelId}=this.state;
  //   dispatch({
  //     type: 'positionList/fetch',
  //     payload:{
  //       data:{
  //         channelId:4
  //       }
  //     }
  //   })
  // }
  componentDidMount() {
    const { dispatch } = this.props;
    const {id}=this.state;
    dispatch({
      type: 'typeDataTotal/fetch',
      payload: {
        data: {
          version: 1,
        },
      },
    }); 
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
    
  }

  render() {
    let { loading, dispatch, channelList, typeDataTotal,positionList } = this.props;
    const { handleModalPosition, handleModalProject,handleModalCacheForm } = this;
    const listFormProps = {
      dispatch,
      channelList,
      typeDataTotal,
    };
    const listTableProps = {
      dispatch,
      channelList,
      typeDataTotal,
      handleModalPosition,
      handleModalProject,
      handleModalCacheForm
    };
    let { modalVisible, modalPosition, modalProjectOne,item = {},id } = this.state;
    const parentMethods = {
      handleModalPosition,
      handleModalProject,
      typeDataTotal,
      handleModalCacheForm,
      channelList,
      item,
      positionList,
      id,
      item
    };
   
    return (
      <PageHeaderWrapper title="渠道维护"> 
        <Card bordered={false}>
          <ListForm dispatch={dispatch} {...listFormProps} />
          {/* {channelList.list ? <ListTable {...listTableProps} /> : null} */}
          <ListTable {...listTableProps} />
          {modalVisible ? <ModalCacheForm modalVisible={modalVisible} {...parentMethods} /> : null}
          {modalPosition ? <ModalPosition modalVisible={modalPosition} {...parentMethods} /> : null}
          {modalProjectOne ? (
            <ModalProjectOne modalVisible={modalProjectOne} {...parentMethods} />
          ) : null}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
