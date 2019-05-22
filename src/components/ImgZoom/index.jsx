import React, { PureComponent } from 'react';
import { Modal, Icon } from 'antd';
import styles from './assets/css/style.less';

export default class extends PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
  };
  handleModal = flag => this.setState({ previewVisible: !!flag });
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  render() {
    let { previewVisible, previewImage } = this.state;
    const imgUrl = this.props.imgUrl || '';
    return (
      <>
        <a
          onClick={e => {
            e.preventDefault();
            this.handlePreview({ url: imgUrl });
          }}
          className={styles.imgWrap}
        >
          <img alt="example" width="100" height="90" src={imgUrl} />
          <div style={{ paddingTop: 4 }}>
            示例图&nbsp;
            <Icon type="zoom-in" />
          </div>
        </a>
        <Modal
          visible={previewVisible}
          footer={null}
          className={'customModal'}
          onCancel={() => this.handleModal(false)}
        >
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </>
    );
  }
}
