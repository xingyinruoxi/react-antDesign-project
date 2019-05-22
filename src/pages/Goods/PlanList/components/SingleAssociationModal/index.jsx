import React, { PureComponent } from 'react';
import StandardTable from '@/components/StandardTable';
import { Form, Modal, Input, message, Button, Table } from 'antd';
import { connect } from 'dva';
import isEqual from 'lodash/isEqual';
import ListForm from './ListForm';
import styles from './style.less';
const cooperationJson={
  0:'自营',
  1:'加盟',
  2:'SP店',
  3:'入驻',
}
const FormItem = Form.Item;
@connect(state => {
  return {
    areaList2: state.areaList2,
    loading: state.loading.models.areaList2,
  };
})
@Form.create()
class ModelSetting extends React.Component {
  state = {
    selectList: [],
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  componentDidMount() {
    const { dispatch, id } = this.props;
    const { setData } = this;
    dispatch({
      type: 'getpschannelrelas/fetch',
      payload: {
        data: { id },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          const listId = data.map(({ tbChannelInfoId }) => tbChannelInfoId);
          setData('selectList', listId);
        }
      },
    });

    dispatch({
      type: 'areaList2/fetch',
      payload: {
        limit: 5,
        queryCondition: {
          provinceId: '', //省id
          cityId: '', // 市id
          countyId: '', //区id
          channelName: '', //渠道名称
        },
      },
    });
  }

  okHandle = e => {
    const { selectList } = this.state;
    const { dispatch, id, handleModelSetting } = this.props;
    if (selectList.length <= 0) {
      message.error('请选择渠道');
      return;
    }
    const psChannelRelaDTOList = selectList.map(tbChannelInfoId => {
      return {
        tbChannelInfoId,
        tbProductSchemaInfoId: id,
      };
    });
    dispatch({
      type: 'addpschannelrelas/submit',
      payload: {
        data: {
          psInfoId: id,
          psChannelRelaDTOList,
        },
      },
      callBack(msg) {
        if (msg === 'OK') {
          message.success('关联成功');
          dispatch({
            type: 'goodPlanList/fetch',
            payload: { queryCondition: {} },
          });
          handleModelSetting();
        } else {
          message.error(msg);
        }
      },
    });
  };

  columns = [
    {
      title: '大区',
      dataIndex: 'zoneName',
      render: zoneName => <>{zoneName || '--'}</>,
    },
    {
      title: '所在省市区',
      dataIndex: 'cityShowName',
      render: cityShowName => <>{cityShowName || '--'}</>,
    },
    {
      title: '渠道名称',
      dataIndex: 'name',
    },
    {
      title: '合作方式',
      dataIndex: 'cooperation',
      render: cooperation => <>{cooperationJson[cooperation] || '--'}</>,
    },
  ];

  render() {
    const {
      dispatch,
      settingVisible,
      handleModelSetting,
      loading,
      areaList2,
      areaList2: { list, pageNum: current, total, pageSize },
      id,
    } = this.props;
    const {selectList}=this.state;
    const newData = {
      list,
      current,
      total,
      pageSize,
    };
    const listFormProps = {
      dispatch,
      areaList2,
    };
    return (
      <Modal
        title="选择区域渠道列表"
        width={720}
        visible={settingVisible}
        onOk={this.okHandle}
        onCancel={() => handleModelSetting()}
        bodyStyle={{paddingBottom:0}}
      >
        <ListForm {...listFormProps} />
        <Table
          rowKey={'id'}
          dataSource={list}
          columns={this.columns}
          size={'middle'}
          bordered
          rowSelection={{
            selectedRowKeys: selectList,
            type: 'checkbox',
            onChange: selectList => {
              this.setState({
                selectList,
              });
            },
          }}
        />
      </Modal>
    );
  }
}
export default ModelSetting;
