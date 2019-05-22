import React, { PureComponent } from 'react';
import { Select, Spin } from 'antd';
import styles from './css/style.less';
import province from '@/utils/geographic/province.json'
import city from '@/utils/geographic/city.json'
import area from '@/utils/geographic/area.json'
const { Option } = Select;
const nullSlectItem = [];

class GeographicView extends PureComponent {
 
  getProvinceOption() {
    return this.getOption(province);
  }
  getCityOption = () => {
    const {value} = this.props;
    let newCity=[]
    if(value&&value.province.length){
      const keys=value.province.map(({key})=>key)
      keys.forEach(key => {
        newCity.push(...city[key])
      });
    }
      return this.getOption(newCity,'省');
  };

  getAreaOption = () => {
    const {value} = this.props;
    let newArea=[]
    if(value&&value.city.length){
      const keys=value.city.map(({key})=>key)
      keys.forEach(key => {
        newArea.push(...area[key])
      });
    }
      return this.getOption(newArea,'市');
  };

  getOption = (list,val) => {
    if (!list || list.length < 1) {
      return (
        <Option key={0} value={0}>
            请选择{val}
        </Option>
      );
    }
    return list.map(item => (
      <Option key={item.id} value={item.id}>
        {item.name}
      </Option>
    ));
  };

  selectProvinceItem = item => {
    const {onChange,value}=this.props;
    let newProvince=[]
    if(value&&value.province){
      newProvince=[...value.province];
    }
    onChange({
      province:[...newProvince,item],
      city: nullSlectItem,
      area:nullSlectItem
    });
  };
  deleteProvinceItem=(item)=>{
    const {value:{province},onChange}=this.props;
    let newProvince=province.filter(({key})=>key!==item.key)
    onChange({
      province:newProvince,
      city: nullSlectItem,
      area:nullSlectItem
    });
  }
  deleteCityItem=(item)=>{
    const {value:{province,city},onChange}=this.props;
    let newCity=city.filter(({key})=>key!==item.key)
    onChange({
      province,
      city: newCity,
      area:nullSlectItem
    });
  }

  deleteAreaItem=(item)=>{
    const {value:{province,city,area},onChange}=this.props;
    let newArea=area.filter(({key})=>key!==item.key)
    onChange({
      province,
      city,
      area:newArea
    });
  }
  selectCityItem = item => {
    const {onChange,value,value:{province}}=this.props;
    let newCity=[]
    if(value&&value.city.length){
      newCity=[...value.city]
    }
    onChange({
      province,
      city: [...newCity,item],
      area:nullSlectItem
    });
  };

  selectAreaItem = item => {
    const {onChange,value,value:{province,city}}=this.props;
    let newArea=[]
    if(value&&value.area.length){
      newArea=[...value.area]
    }
    onChange({
      province,
      city,
      area:  [...newArea,item],
    });
  };

  conversionObject() {
    const { value } = this.props;
    if (!value) {
      return {
        province: nullSlectItem,
        city: nullSlectItem,
        area:nullSlectItem,
      };
    }
    const { province, city,area } = value;
    return {
      province: province || nullSlectItem,
      city: city || nullSlectItem,
      area: area || nullSlectItem,
    };
  }
  render() {
    const { province, city,area } = this.conversionObject();
    return (
      <Spin spinning={false}  wrapperClassName={styles.row}>
        <Select
          className={styles.item}
          value={province}
          labelInValue
          mode="multiple"
          showSearch
          onSelect={this.selectProvinceItem}
          onDeselect={this.deleteProvinceItem}
          placeholder={'省'}
        >
           {this.getProvinceOption()}
        </Select>
        <Select
          className={styles.item}
          value={city}
          labelInValue
          mode="multiple"
          showSearch
          onSelect={this.selectCityItem}
          onDeselect={this.deleteCityItem}
          placeholder={'市'}

        >
          {this.getCityOption()}
        </Select>
        <Select
          className={styles.item}
          value={area}
          labelInValue
          showSearch
          mode="multiple"
          onSelect={this.selectAreaItem}
          onDeselect={this.deleteAreaItem}
          placeholder={'区/县'}
        >
          {this.getAreaOption()}
        </Select>
      </Spin>
    );
  }
}

export default GeographicView;
