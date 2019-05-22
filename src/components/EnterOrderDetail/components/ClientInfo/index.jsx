import React, { PureComponent } from 'react';
import DescriptionList from '@/components/DescriptionList';
import { Button, Form, Table, Divider } from 'antd';
import { connect } from 'dva';
const { Description } = DescriptionList;
import ModalEdit from './components/ModalEdit';
import TableListTel from './components/TableListTel';
import { formatTime } from '@/utils/utils';
@Form.create()
@connect(state => {
  return {
    orderDetail: state.orderDetail,
    customerInfo: state.customerInfo,
    loading: state.loading.models.customerInfo,
  };
})
export default class extends PureComponent {
  state = {
    contactList: [],
    modalVisible: false,
  };
  setData = (key, values) => {
    this.setState({ [key]: values });
  };
  columns = [
    {
      title: '紧急联系人姓名',
      dataindex: '',
      key: '2',
    },
    {
      title: '与客户关系',
      dataindex: '',
      key: '22',
    },
    {
      title: '身份证号码',
      dataindex: '',
      key: '32',
    },
    {
      title: '联系电话',
      dataindex: '',
    },
    {
      title: '居住地址',
      dataindex: '',
    },
  ];
  handleModalVisible = flag => {
    this.setState({
      modalVisible: !!flag,
    });
  };
  handleCancel = () => {
    this.setState({
      modalVisible: false,
    });
  };
  componentDidMount() {
    const {
      orderDetail: {
        tradeInfo: { tbCustomerInfoId: id },
      },
      dispatch,
    } = this.props;
    const { setData } = this;
    dispatch({
      type: 'customerInfo/fetch',
      payload: {
        data: id,
      },
    });
    dispatch({
      type: 'contactList/fetch',
      payload: {
        data: {
          customerId: id,
        },
      },
      callBack(msg, data) {
        if (msg === 'OK') {
          setData('contactList', data);
        }
      },
    });
    dispatch({
      type: 'bkinfo/fetch',
      payload: { data: id },
    });
  }
  render() {
    let { modalVisible, contactList } = this.state;
    let {
      dispatch,
      form: { getFieldDecorator },
      formList,
      orderDetail: {
        tradeInfo: { tbCustomerInfoId: customerId },
      },
      typeDataTotal: {
        customer_industryType,
        customer_workType,
        customer_position,
        customer_married,
        customer_sex,
        customer_realation_type,
      },
      customerInfo,
    } = this.props;
    const { handleCancel } = this;
    const parentMethods = {
      handleModalVisible: this.handleModalVisible,
      customerInfo,
      customerId,
      dispatch,
      customer_workType,
      customer_position,
      customer_sex,
      customer_married,
      customer_industryType,
      modalVisible,
      handleCancel,
    };
    const propsTableForm = {
      dispatch,
      value: contactList,
      customerId,
      customer_realation_type,
      formList,
    };
    return (
      <>
        {customerInfo && customer_married ? (
          <>
            <DescriptionList col="4">
              <Description term="客户姓名"> {customerInfo.name || '--'}</Description>
              <Description term="民族">{customerInfo.nation || '--'}</Description>
              <Description term="性别">{customer_sex[customerInfo.sex] || '--'}</Description>
              <Description term="身份证号">{customerInfo.cardId || '--'}</Description>
              <Description term="出生日期">{customerInfo.birthday || '--'}</Description>
              <Description term="年龄">{customerInfo.age || '--'}岁</Description>
              <Description term="证件有效期">
                {formatTime(customerInfo.cardEffectDate, true) || '--'}
              </Description>
              <Description term="婚姻状况">
                {customer_married[customerInfo.marriedStatus] || '--'}
              </Description>
            </DescriptionList>
            <DescriptionList col="2" style={{ marginBottom: 15, marginTop: 15 }}>
              <Description term="户籍地址">{customerInfo.cardAddress || '--'}</Description>
              <Description term="常住地址">{customerInfo.address || '--'}</Description>
            </DescriptionList>
            <DescriptionList col="4" style={{ marginBottom: formList ? 30 : 0 }}>
              <Description term="有无驾照">{customerInfo.hasDriverCard || '--'}</Description>
              <Description term="单位名称">{customerInfo.workName || '--'}</Description>
              <Description term="单位电话">{customerInfo.workPhone || '--'}</Description>
              <Description term="单位地址">{customerInfo.workAddress || '--'}</Description>
              <Description term="所属行业">
                {customer_industryType[customerInfo.workIndustryType] || '--'}
              </Description>
              <Description term="职务">
                {customer_position[customerInfo.workPosition] || '--'}
              </Description>
              <Description term="入职时间">{customerInfo.workHireDate || '--'}</Description>
              {formList ? (
                <>
                  <Button type="primary" onClick={() => this.handleModalVisible(true)}>
                    编辑客户信息
                  </Button>
                  <ModalEdit {...parentMethods} />
                </>
              ) : null}
            </DescriptionList>
          </>
        ) : null}
        <TableListTel {...propsTableForm}/>
      </>
    );
  }
}
