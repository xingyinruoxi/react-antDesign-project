import React,{PureComponent} from 'react';
import { Card,Table } from 'antd';
import styles from '../../assets/css/BasicProfile.less';
const productStatusJson={
  1:'上架',
  2:'待上架',
  3:'下架'
}
export default class extends PureComponent {
  columns=[
    {
      title: '方案状态',
      dataIndex: 'schemaStatus',
      id:'schemaStatus',
      render: schemaStatus => <>{productStatusJson[schemaStatus]}</>,
    },
    {
      title: '产品方案名称',
      dataIndex: 'schemaName',
      id:'schemaName',
      render: schemaName => <>{schemaName || '--'}</>,
    },
    {
      title: '产品利率',
      dataIndex: 'schemaInterest',
      id:'schemaInterest',
      render: schemaInterest => <>{schemaInterest?schemaInterest*100+'%' : '--'}</>,
    },
    {
      title: '产品期数',
      dataIndex: 'schemaLimit',
      id:'schemaLimit',
      render: schemaLimit => <>{schemaLimit || '--'}</>,
    },
    {
      title: '首付(元)',
      dataIndex: 'firstPayment',
      id:'firstPayment',
      render: firstPayment => <>{firstPayment || '--'}</>,
    },
  ]
  
  render(){
    const {loading,settingProjectView}=this.props;
    return (
      <Card bordered={false}>
        <div className={styles.title} style={{marginTop:20}}>关联金融产品</div>
        <Table columns={this.columns} bordered={true} size={'middle'} dataSource={settingProjectView} rowKey={'id'} pagination={false} />
      </Card>
    )
  }
}
