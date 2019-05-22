import React, { PureComponent } from 'react';
import { Divider } from 'antd';
import DescriptionList from '@/components/DescriptionList/index.js';
const { Description } = DescriptionList;
const result = {
  Reject: '自动拒绝',
  Accept: '免电核',
  Review: '简易电核',
  Zc_Review: '正常电核',
};
export default class extends PureComponent {
  state = {
    findReportResult: [],
  };

  setData = (key, data) => {
    this.setState({ [key]: data });
  };

  componentDidMount() {
    const {
      dispatch,
      location: {
        query: { tradeCode },
      },
      orderDetail: {
        customerAllInfo: { cardId: idCard, phone: mobile, name },
      },
    } = this.props;
    const { setData } = this;
    const {
      findReportResult: { length },
    } = this.state;
    if (length) return;
    dispatch({
      type: 'findReportResult/fetch',
      payload: {
        name,
        idCard,
        mobile,
        systemNum: 'DFLS',
        tradeCode,
      },
      callBack(data) {
        const newData = data.map(item => ({ ...item, key: Math.random() }));
        setData('findReportResult', newData);
      },
    });
  }
  render() {
    const { findReportResult: data } = this.state;
    const arrQianHai = data.filter(({ memo }) => memo.includes('前海'));
    const arrPengYuan = data.filter(({ memo }) => memo.includes('鹏元'));
    const arrTongDui = data.filter(({ memo }) => memo.includes('同盾'));
    return (
      <>
        {!data.length ? (
          <>暂无风控报告</>
        ) : (
          <h1 style={{textAlign:'center'}}>风控平台建议结果：{data[0].listResult === 'Reject' ? '拒绝' : '人工审核'}</h1>
        )}
        {arrQianHai.length > 0 ? <h2>前海报告</h2> : null}
        {arrQianHai.length > 0 &&
          arrQianHai.map(item => {
            const { key, memo, finalResult, ruleName, finalScore } = item;
            return (
              <div key={key} style={{ paddingLeft: 20 }}>
                <DescriptionList col={3} title={memo.split('-')[1]} style={{ marginBottom: 10 }}>
                  <Description term="规则名称">{ruleName}</Description>
                  <Description term="审核结果">{result[finalResult]}</Description>
                  <Description term="得分">{finalScore || '--'}</Description>
                </DescriptionList>
                <Divider style={{ marginBottom: 32 }} />
              </div>
            );
          })}
        {arrPengYuan.length > 0 ? (
          <>
            <h2>鹏元报告</h2>
          </>
        ) : null}
        {arrPengYuan.length > 0 &&
          arrPengYuan.map((item, index) => {
            const { key, memo, finalResult, ruleName, finalScore } = item;
            const hasMemo = arrPengYuan[index - 1] && memo == arrPengYuan[index - 1].memo;
            return (
              <div key={key} style={{ paddingLeft: 20 }}>
                <DescriptionList
                  col={3}
                  title={!hasMemo ? memo.split('-')[1] : null}
                  style={{ marginBottom: 10 }}
                >
                  <Description term="规则名称">{ruleName}</Description>
                  <Description term="审核结果">{result[finalResult]}</Description>
                  <Description term="得分">{finalScore || '0'}</Description>
                </DescriptionList>
              </div>
            );
          })}
        {arrTongDui.length > 0 ? (
          <div>
            <Divider style={{ marginBottom: 32 }} />
            <h2>同盾报告</h2>
          </div>
        ) : null}
        {arrTongDui.length > 0 &&
          arrTongDui.map(item => {
            const { key, memo, finalResult, ruleName, description: des, finalScore } = item;
            return (
              <div key={key} style={{ paddingLeft: 20 }}>
                <DescriptionList col={3} title={memo.split('-')[1]} style={{ marginBottom: 10 }}>
                  <Description term="规则名称">{ruleName}</Description>
                  <Description term="审核结果">{result[finalResult]}</Description>
                  <Description term="得分">{finalScore || '0'}</Description>
                </DescriptionList>
                {des.length > 0 &&
                  des.map(({ description, grey_list_details }, index) => {
                    return (
                      <div key={index}>
                        <strong>{description}</strong>
                        {/* <ul>
                          <li>rtyuio</li>
                        </ul> */}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </>
    );
  }
}
