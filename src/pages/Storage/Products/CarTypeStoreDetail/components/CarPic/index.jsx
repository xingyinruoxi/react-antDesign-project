import React from 'react';
import {local} from '@/utils/utils'

export default ({ data }) => {
  const { type1, type2, type3 } = data;
  const token=local.fetch('token');
  return (
    <>
      <strong>列表页标签图:</strong>
      {type3.length ? (
        <a target="_blank" href={`${type3[0].url}?Authorization=${token}`}>
          图片预览
        </a>
      ) : '--'}
      <div style={{ paddingTop: 20, }}>
        <strong>详情页轮播图:</strong>
      </div>
      {type1.length ? (
        <ul style={{overflow:'hidden'}}>
          {type1.map(({ url, sort }, index) => {
            return (
              <li key={index}  style={{display:'inline-block',margin:10,float:'left'}}>
                <a href={`${url}?Authorization=${token}`} key={index} target="_blank" >
                  <img src={`${url}?Authorization=${token}`} width={'120'} height={'120'} />
                </a>
                <div style={{textAlign:'center',paddingTop:4}}>排序:{sort}</div>
              </li>
            );
          })}
        </ul>
      ) : '--'}
      <div style={{ paddingTop: 20, paddingBottom: 10 ,width:'100%'}}>
        <strong>详情页内容图:</strong>
      </div>
      {type2.length ? (
        <ul style={{overflow:'hidden'}}>
          {type2.map(({ url, sort }, index) => {
            return (
              <li key={index}  style={{display:'inline-block',margin:10,float:'left'}}>
                <a href={`${url}?Authorization=${token}`} key={index} target="_blank" >
                  <img src={`${url}?Authorization=${token}`} width={'120'} height={'120'} />
                </a>
                <div style={{textAlign:'center',paddingTop:4}}>排序:{sort}</div>
              </li>
            );
          })}
        </ul>
      ) : '--'}
    </>
  );
};
