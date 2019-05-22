import React from 'react';
import { connect } from 'dva';
import { Button, Form, Table, Upload, Icon, Modal, Input, message } from 'antd';
import router from 'umi/router';
import DescriptionList from '@/components/DescriptionList';
import styles from './style.less';
const { Description } = DescriptionList;
const token=localStorage.getItem('token').replace(/\"/g, "")
@connect(({ channelAdd,loading }) => ({
  channelAdd,
  submitting: loading.effects['channelAdd/step3'],
}))
@Form.create()
class Step4 extends React.PureComponent {
  state = {
    previewVisible: false,
    previewImage: '',
    searchFile: [],
    fileList: [],
    shopImgUpload:[],
    type1: [
      {
        imgUrl: '',
        sort: 2,
      },
    ],
  }
  setData = (key, data) => {
    this.setState({
      [key]: data
    });
  };
  goCurPage = () => {
    const { location: {
      query: { id },
      pathname,
    } } = this.props;
    const curPage = `/channel/channel/list/${pathname.includes('edit') ? 'edit' : 'add'}/upload`;
    router.push({ pathname: curPage, query: { id } });
  };
  handleCancelImg = () => this.setState({ previewVisible: false });
  handleChangeImg = ({file,fileList }) => {
    this.setState({ fileList },()=>{
      this.setState({
        fileList:[...this.state.fileList]
      }) 
    })
    if (file.status === 'done') {
      const { response: { data } } = file;
      const { 
        dispatch,
        location: {
          query: { id },
        }
      }= this.props
      dispatch({
        type:'shopImgUpload/fetch',
        payload:{
          data:{
            channelId: id,
            channelImg:data[0]
          }
        }
      })
      message.success(`${file.name}文件上传成功`);
    } else if (file.status === 'error') {
      message.error(`${file.name} 文件上传失败`);
    }
  };
  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: { query: { id } },
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'searchFile/fetch',
      payload: {
        "data": {
          "type": 1,
          "source": 30,
          "referId": id //渠道id
        }
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('searchFile', data)
        }
      }
    });
  }
  handleCancel = () => this.setState({ previewVisible: false });
  onTableChange = ({ file },listType) => {
    const {searchFile}=this.state;
    if (file.status === 'done') {
      const { response: { data } } = file;
      const curFile=searchFile.filter(item=>item.listType===listType);
      const curFile2=searchFile.filter(item=>item.listType!==listType);
      curFile[0].fileAddress=data[0];
      this.setState({
        searchFile:[
          ...curFile2,
          ...curFile
        ]
      })
      message.success(`${file.name}文件上传成功`);
    } else if (file.status === 'error') {
      message.error(`${file.name} 文件上传失败`);
    }
  }
  render() {
    const { previewVisible, previewImage, fileList, searchFile } = this.state
    const {
      form: { getFieldDecorator, validateFields },
      dispatch,
      submitting,
      location: { query: { id }, pathname },
    } = this.props;
    const hasEdit = pathname.includes('edit');
    const nextUrl = `/channel/channel/list/${hasEdit ? 'edit' : 'add'}`;
    const onPrev = () => {
      router.push({ pathname: `${nextUrl}/confirm`, query: { id } });
    };
    const onValidateForm = e => {
      e.preventDefault();
      validateFields((err, values) => {
        if (!err) {
          const {searchFile}=this.state;
          dispatch({
            type: 'channelAdd/step3',
            payload: {
              data: searchFile
            },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: `${nextUrl}/result`,
                  query: { id },
                });
              } else {
                message.error(msg);
              }
            },
          })
        }
      });
    };
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div>上传</div>
      </div>
    );
    const { type1 } = this.state;
    const props = {
      name: 'files',
      action:"/oraflfile/upload/",
      accept: '.png,.jpg,.pdf,.jpeg',
      showUploadList: false,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    };
    const shopProps={
      name:"files",
      action:"/oraflfile/upload/",
      listType:"picture-card",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }
    const columns = [
      {
        title: '资料名称',
        dataIndex: 'listTypeName',
      },
      {
        title: '上传文件资料',
        dataIndex: 'listType',
        render: (listType,record) => {
          return (
            <Upload {...props}
              onChange={(item) => this.onTableChange(item,listType)}
            >
              <a href={'javascript:;'}>
                上传资料
              </a>
            </Upload>
          )
        }
      },
      {
        title: '查看上传资料',
        dataIndex: 'fileAddress',
        key: 'fileAddress',
        render: (text, item) => {
          const urlImg = text ? <a href={text} target={'_blank'}>查看</a> : '--'
          return urlImg 
        },
      },
    ]
    return (
      <Form hideRequiredMark className={styles.stepForm}>
        <Form.Item label={'店端列表图片'}>
          {getFieldDecorator('type1', {
            initialValue: type1,
            rules: [{ required: type1[0] && type1[0].imgUrl ? false : true, message: '请上传店端列表图片' }],
          })(
            <>
              <Upload {...shopProps}
                onChange={this.handleChangeImg}
                fileList={fileList}
                onPreview={this.handlePreview}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
              <Modal visible={previewVisible} footer={null} onCancel={this.handleCancelImg}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} className={'customModal'} />
              </Modal>
            </>
          )}
        </Form.Item>
        {getFieldDecorator('list')(
          <Table rowKey={'listType'} columns={columns} bordered dataSource={searchFile} size={'middle'} />
        )}
        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
            marginTop: 30
          }}
        >
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
        </Button>
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            下一步
        </Button>
        </footer>
      </Form>
    );
  }
}

export default Step4;
