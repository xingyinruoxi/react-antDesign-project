import React, { PureComponent } from 'react';
import { Table, Modal } from 'antd';
import { local } from '@/utils/utils';
const token = local.fetch('token');

const dataSource = [
  {
    key: '1',
    name: '客户省份证头像面',
    age: '是',
    address: '客户头像面身份证.jpg',
  },
  {
    key: '2',
    name: '客户省份证国徽面',
    age: '是',
    address: '客户驾照.jpg',
  },
  {
    key: '3',
    name: '客户驾照',
    age: '是',
    address: '客户国徽面身份证.jpg',
  },
];

export default class extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
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
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  handleCancel = () => this.setState({ previewVisible: false });
  render() {
    const { previewVisible, previewImage } = this.state;
    const { fileList } = this.props;
    return (
      <>
        <Table
          dataSource={fileList}
          rowKey={'id'}
          size="middle"
          bordered
          pagination={false}
          columns={this.columns}
        />
        <Modal
          visible={previewVisible}
          footer={null}
          className={'customModal'}
          bodyStyle={{ padding: 2 }}
          onCancel={this.handleCancel}
        >
          <img
            alt="example"
            style={{ width: '100%' }}
            src={`${previewImage}?Authorization=${token}`}
          />
        </Modal>
      </>
    );
  }
}
