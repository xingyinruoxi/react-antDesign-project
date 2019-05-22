import React, { PureComponent } from 'react';
import { Card, Button, Form, Input, Popover, message, Icon, Select, Row, Col } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import FooterToolbar from '@/components/FooterToolbar';
const { Option } = Select;
const { TextArea } = Input;
import styles from './css/styles.less';
const fieldLabels = {
  auditResult: '结论',
  tbSupplyCommodityInfoDTOList: '补充资料',
  auditOpinion: '审核意见',
};
@connect(({ loading, orderDetail }) => ({
  submitting: loading.effects['payCarSubmit/submit'],
  orderDetail,
}))
@Form.create()
export default class extends PureComponent {
  state = {
    width: '100%',
  };
  componentDidMount() {
    window.addEventListener('resize', this.resizeFooterToolbar, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }
  clearErr = () => {
    this.props.form.setFields({
      auditOpinion: {
        errors: '',
      }
    });
  };
  handleResult = result => {
    if (result &&result!='2') {
      this.clearErr();
    }
  };
  getErrorInfo = () => {
    const {
      form: { getFieldsError },
    } = this.props;
    const errors = getFieldsError();
    const errorCount = Object.keys(errors).filter(key => errors[key]).length;
    if (!errors || errorCount === 0) {
      return null;
    }
    const scrollToField = fieldKey => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };
    const errorList = Object.keys(errors).map(key => {
      if (!errors[key]) {
        return null;
      }
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <Icon type="cross-circle-o" className={styles.errorIcon} />
          <div className={styles.errorMessage}>{errors[key][0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="表单校验信息"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <Icon type="exclamation-circle" />
        </Popover>
        {errorCount}
      </span>
    );
  };
  resizeFooterToolbar = () => {
    requestAnimationFrame(() => {
      const sider = document.querySelectorAll('.ant-layout-sider')[0];
      if (sider) {
        const width = `calc(100% - ${sider.style.width})`;
        const { width: stateWidth } = this.state;
        if (stateWidth !== width) {
          this.setState({ width });
        }
      }
    });
  };
  validate = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
      orderDetail: {
        tradeInfo: { processId, id: tbTradeInfoId },
      },
      location: {
        query: { tradeCode: tbTradeInfoCode },
      },
    } = this.props;
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        const { auditOpinion, auditResult, tbSupplyCommodityInfoDTOList: list } = values;
        const newList =
          list &&
          list.map(itemKey => {
            return {
              itemKey,
              tbTradeInfoCode,
              tbTradeInfoId,
            };
          });
        dispatch({
          type: 'payCarSubmit/submit',
          payload: {
            data: {
              tbSupplyAuditDTO: {
                processId,
                tbTradeInfoId,
                tbTradeInfoCode,
                auditOpinion,
                auditResult,
              },
              tbSupplyCommodityInfoDTOList: newList,
            },
          },
          callBack(msg) {
            if (msg === 'OK') {
              message.success('提车资料审核成功');
              router.push({ pathname: '/works/unfinish/paycar/list' });
            } else {
              message.error(msg);
            }
          },
        });
      }
    });
  };
  render() {
    const {
      form: { getFieldDecorator, getFieldValue },
      submitting,
      typeDataTotal: { pt_list_delivery_default:pt_list_delivery },
    } = this.props;
    const { width } = this.state;
    const formItemLayout1 = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 4 },
      },
    };

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 2 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 4 },
        md: { span: 12 },
      },
    };

    return (
      <>
        <Card title={'审批报告'} bordered={false} style={{ marginTop: 24 }}>
          <Form>
            <Form.Item {...formItemLayout1} label={fieldLabels.auditResult}>
              {getFieldDecorator('auditResult', {
                rules: [
                  {
                    required: true,
                    message: '请选择结论',
                  },
                ],
              })(
                <Select placeholder="请选择"  onChange={this.handleResult}>
                  <Option value="1" key='1'>通过</Option>
                  <Option value="2" key='2'>退回补充资料</Option>
                </Select>
              )}
            </Form.Item>
            {getFieldValue('auditResult') === '2' ? (
              <Form.Item {...formItemLayout} label={fieldLabels.tbSupplyCommodityInfoDTOList}>
                {getFieldDecorator('tbSupplyCommodityInfoDTOList', {
                  rules: [
                    {
                      required: true,
                      message: '请选择需补充附件',
                    },
                  ],
                })(
                  <Select placeholder="请选择" mode="multiple">
                    {pt_list_delivery &&
                      Object.entries(pt_list_delivery).map(item => (
                        <Option value={item[0]} key={item[0]}>
                          {item[1]}
                        </Option>
                      ))}
                  </Select>
                )}
              </Form.Item>
            ) : null}
            <Form.Item {...formItemLayout} label={fieldLabels.auditOpinion}>
              {getFieldDecorator('auditOpinion', {
                rules: [
                  {
                    required: getFieldValue('auditResult') == '2' ? true : false,
                    message: '请输入审核意见',
                  },
                ],
              })(<TextArea  maxLength={100} style={{ minHeight: 32 }} placeholder={'请输入'} rows={4} />)}
            </Form.Item>
          </Form>
        </Card>
        <FooterToolbar style={{ width }}>
          {this.getErrorInfo()}
          <Button type="primary" onClick={this.validate} loading={submitting}>
            提交
          </Button>
        </FooterToolbar>
      </>
    );
  }
}
