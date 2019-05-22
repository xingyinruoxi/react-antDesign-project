import React, { PureComponent } from 'react';
import { Modal } from 'antd';
import DescriptionList from '@/components/DescriptionList';
const { Description } = DescriptionList;
export default class extends PureComponent {
  state = {
    previewVisible: false,
  };
  handleModalCancel = flag => this.setState({ previewVisible: !!flag });
  render() {
    let { previewVisible } = this.state;
    const {
      tbContractInfoDTO: {
        contractCode,
        signCustomerName,
        signCustomerCardno,
        refundType,
        receiveType,
        contractTemplateAddress,
      },
      typeDataTotal:{

      }
    } = this.props;
   const cn_refundType={
     '1':'银行卡扣',
     '2':'自行还款'
   }
    return (
      <DescriptionList size="small" col="3">
        <Description term="合同编号">{contractCode || '--'}</Description>
        <Description term="购车人姓名">{signCustomerName || '--'}</Description>
        <Description term="身份证号">{signCustomerCardno || '--'}</Description>
        <Description term="还款方式">{cn_refundType[refundType]|| '--'}</Description>
        <Description term="接收方式">{receiveType || '--'}</Description>
        <Description term="查看电子合同">
          <a
            onClick={e => {
              e.preventDefault();
              this.handleModalCancel(true);
            }}
          >
            查看
          </a>
          <Modal
            visible={previewVisible}
            footer={null}
            className={'customModal'}
            onCancel={() => this.handleModalCancel(false)}
          >
            <img alt="example" style={{ width: '100%' }} src={contractTemplateAddress} />
          </Modal>
        </Description>
      </DescriptionList>
    );
  }
}
