import React from 'react';
import { connect } from 'dva';
import { Form, Input, Button, Row, Col, Select, message } from 'antd';
import TableForm from './components/TableForm';
import GroupsTable from './components/TableForm.1';
import router from 'umi/router';
import styles from './style.less';
const { Option } = Select;
const { TextArea } = Input;
@connect(({ form, loading, companyAdd, typeDataTotal, companyDetail, companyUpdate2 }) => ({
  submitting: loading.effects['companyUpdate2/submit'] || loading.effects['companyAdd/step2'],
  data: form.step,
  typeDataTotal,
  companyAdd,
  companyDetail,
  companyUpdate2
}))
@Form.create()
class Step2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  state={
    goupMainBusiness:[],
    groupShareholder:[]
  }
  setData = (key, data) => {
    this.setState({
      [key]: data
    });
  };
  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { id },
        pathname
      },
    } = this.props;
    const hasEdit = pathname.includes('edit')
    const { setBaseInfo,setData} = this;
    dispatch({
      type: 'goupMainBusiness/step2',
      payload: {
        data: id
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('goupMainBusiness', data)
        }
      }
    })
    dispatch({
      type: 'groupShareholder/step2',
      payload: {
        data: id
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('groupShareholder', data)
        }
      }
    })
    if (!id) return;
    dispatch({
      type: 'companyDetail/fetch',
      payload: {
        data: id
      },
      callBack() {
        setBaseInfo();
      },
    });
    if (!hasEdit) return;
    dispatch({
      type: 'companyDetail/fetch',
      payload: {
        data: id
      },
      callBack() {
        setBaseInfo();
      },
    });
  }
  setBaseInfo = () => {
    const { companyDetail, form } = this.props;
    Object.keys(form.getFieldsValue()).forEach(key => {
      const obj = {};
      obj[key] = companyDetail[key] || null;
      form.setFieldsValue(obj);
    });
  };
  render() {
    const {
      form: { getFieldDecorator, validateFields },
      dispatch,
      submitting,
      companyAdd,
      companyDetail: {
        mainBusiness,
        otherDesc
      },
      location: { query: { id }, pathname },
    } = this.props;
    const { goupMainBusiness,groupShareholder } = this.state
    const hasEdit = pathname.includes('edit')
    const preUrl = `/channel/company/list/${hasEdit ? 'edit' : 'add'}`;
    const onValidateForm = e => {
      e.preventDefault();
      validateFields((err, values) => {
        const {
          mainBusiness,//主营业务
          otherDesc,//其他描述 
        } = values
        if (!err) {
          if (hasEdit) {
            values.id = id;
          }
          dispatch({
            type: `${hasEdit ? 'companyUpdate2/submit' : 'companyAdd/step2'}`,
            payload: {
              data: {
                id: id,
                mainBusiness,//主营业务
                otherDesc//其他描述
              }
            },
            callBack(msg) {
              if (msg === 'OK') {
                router.push({
                  pathname: `${preUrl}/result`,
                  query: { id }
                });
              } else {
                message.error(msg);
              }
            },
          })
        }

      })
    }
    const onPrev = () => {
      router.push({ pathname: `${preUrl}/info`, query: { id } });
    };
    const propsTableForm = {
      dispatch,
      groupId: id,
      value:goupMainBusiness
    }
    const groupsTableForm = {
      dispatch,
      groupId: id,
      value:groupShareholder
    }
    return (
      <Form layout="vertical" hideRequiredMark className={styles.stepForm}>
        <Row gutter={50}>
          <Col lg={24}>
            <Form.Item label={'主营业务'}>
              {getFieldDecorator('mainBusiness', {
                rules: [
                  {
                    required: true,
                    message: '请输入主营业务',
                  },
                ],
              })(<TextArea placeholder="请输入主营业务" autosize={{ minRows: 4, maxRows: 6 }} rows={4} />)}
            </Form.Item>
          </Col>
          <Col lg={24}>
            <div className={styles.title}>汽车行业主营</div>
            <Form.Item>
              <TableForm columns={this.columns} {...propsTableForm} style={{ marginTop: 15 }} />
            </Form.Item>

          </Col>
          <Col lg={24} style={{ marginTop: 15 }}>
            <div className={styles.title}>集团股东结构</div>
            <GroupsTable columns={this.columnlist} {...groupsTableForm} style={{ marginTop: 15 }} />
          </Col>
          <Col lg={24} style={{ marginTop: 15 }}>
            <Form.Item label={'其他说明'}>
              {getFieldDecorator('otherDesc', {
                rules: [
                  {
                    message: '其他说明',
                  },
                ],
              })(<TextArea placeholder="请输入其他说明" autosize={{ minRows: 4, maxRows: 6 }} />)}
            </Form.Item>
          </Col>
        </Row>
        <footer
          style={{
            textAlign: 'center',
            paddingBottom: 30,
          }}
        >
          <Button onClick={onPrev} style={{ marginRight: 8 }}>
            上一步
          </Button>
          <Button type="primary" onClick={onValidateForm} loading={submitting}>
            提交
          </Button>
        </footer>
      </Form>
    );
  }
}

export default Step2;
