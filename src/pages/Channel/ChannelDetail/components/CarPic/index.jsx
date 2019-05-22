import React, { PureComponent } from 'react';
import { Card, Table, Modal } from 'antd';
import { connect } from 'dva';
import { local } from '@/utils/utils';
const token = local.fetch('token');

@connect(state => {
  return {
    uploadDetail: state.uploadDetail,
    loading: state.loading.models.uploadDetail,
    // searchFile:state.searchFile,
  };
})
export default class extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    searchFile: [],
  };
  setData = (key, data) => {
    this.setState({
      [key]: data,
    });
  };
  columns = [
    {
      title: '资料名称',
      dataIndex: 'listTypeName',
      key: 'listTypeName',
    },
    {
      title: '查看上传资料',
      dataIndex: 'fileAddress',
      key: 'fileAddress',
      render: (text, item) => {
        return (
          <a
            onClick={() => {
              this.handlePreview({ url: text });
            }}
          >
            查看资料
          </a>
        );
      },
    },
  ];
  componentDidMount() {
    const {
      dispatch,
      channelDetail: { id },
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'searchFile/fetch',
      payload: {
        data: {
          type: 1,
          source: 30,
          referId: id, //渠道id2974318192374
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('searchFile', data);
        }
      },
    });
  }
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleCancel = () => this.setState({ previewVisible: false });
  render() {
    const { previewVisible, previewImage, searchFile } = this.state;
    const { loading, dispatch, uploadDetail } = this.props;
    return (
      <Card bordered={false}>
        <Table
          columns={this.columns}
          bordered={true}
          size={'middle'}
          dataSource={searchFile}
          rowKey={'listType'}
          pagination={false}
        />
        <Modal
          visible={previewVisible}
          footer={null}
          className={'customModal'}
          onCancel={this.handleCancel}
        >
          <img
            alt="example"
            style={{ width: '100%' }}
            src={`${previewImage}?Authorization=${token}`}
          />
        </Modal>
      </Card>
    );
  }
}
