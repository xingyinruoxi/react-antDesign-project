import React, { PureComponent,Fragment } from 'react';
import { Card, Table, Button, Icon } from 'antd';
import Link from 'umi/link';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import StandardTable from '@/components/StandardTable';
import ListForm from './components/ListForm';
import ListTable from './components/ListTable';
import styles from './assets/css/TableList.less';
@connect(state => {
  return {
		areaList: state.areaList,
    loading: state.loading.models.areaList,
  };
})
export class List extends PureComponent {
	componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'areaList/fetch',
      payload:{
        data:{}
      }
    })
  }
	render() {
	  let {
			loading,
			dispatch,
			areaList
		} = this.props;
		const listFormProps = {
			dispatch,
			areaList
    };
    const listTableProps = {
			dispatch,
			areaList
		};
	  return (
		<PageHeaderWrapper title="区域维护">
		  <Card bordered={false}>
				<ListForm dispatch={dispatch} {...listFormProps} />
				<div className={styles.tableList}>
					<div className={styles.tableListOperator}>
					<Link to="/channel/area/list/areaadd">
						<Button type="primary">
						<Icon type="plus" />
						新增
						</Button>
					</Link>
					</div>
				</div>
				<ListTable {...listTableProps} />
		  </Card>
		</PageHeaderWrapper>
	  );
	}
  }

export default List;
