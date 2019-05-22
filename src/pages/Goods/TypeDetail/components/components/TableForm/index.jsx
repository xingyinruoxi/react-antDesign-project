import React, { PureComponent } from 'react';
import { Table, Input } from 'antd';
import isEqual from 'lodash/isEqual';
import styles from './less/style.less';
class TableForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: props.value,
      loading: false,
      /* eslint-disable-next-line react/no-unused-state */
      value: props.value,
    };
  }

  render() {
    const columns = [
      {
        title: '起租时间/周期（起始）',
        dataIndex: 'planBegin',
        id: 'planBegin',
        render: (text, record) => {
          return text;
        },
      },
      {
        title: '起租时间/周期（结束)',
        dataIndex: 'planEnd',
        id: 'planEnd',
        render: (text, record) => {
          return text;
        },
      },
      {
        title: '还款日/周期',
        dataIndex: 'planDay',
        id: 'planDay',
        render: (text, record) => {
          return text;
        },
      },
    ];

    const { loading, data } = this.state;

    return (
      <Table
        bordered
        rowKey={'id'}
        size={'middle'}
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName={record => (record.editable ? styles.editable : '')}
      />
    );
  }
}

export default TableForm;
