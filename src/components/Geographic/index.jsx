import React, { PureComponent } from 'react';
import { Select, Spin } from 'antd';
import styles from './css/style.less';
import province from '@/utils/geographic/province.json'
import city from '@/utils/geographic/city.json'
import area from '@/utils/geographic/area.json'
const { Option } = Select;
const nullSlectItem = {
  label: '',
  key: '',
};

class GeographicView extends PureComponent {

  getProvinceOption() {
    return this.getOption(province);
  }
  getCityOption = () => {
    const {value}=this.props;
    let newCity=[]
    if(value&&value.province){
      const {key}=value.province;
       newCity=city[key];
    }
    return this.getOption(newCity,'省');
  };

  getAreaOption = () => {
    const {value}=this.props;
    let newArea=[]
    if(value&&value.city){
      const {key}=value.city;
      newArea=area[key];
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
    onChange({
      province: item,
      city: nullSlectItem,
      area:nullSlectItem
    });
  };

  selectCityItem = item => {
    const {onChange,value:{province}}=this.props;
    onChange({
      province,
      city: item,
      area:nullSlectItem
    });
  };
 
  selectAreaItem = item => {
    const { value:{province,city}, onChange } = this.props;
    onChange({
      province,
      city,
      area: item,
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
          showSearch
          onSelect={this.selectProvinceItem}
          placeholder={'省'}
        >
           {this.getProvinceOption()}
        </Select>
        <Select
          className={styles.item}
          value={city}
          labelInValue
          showSearch
          onSelect={this.selectCityItem}
          placeholder={'市'}

        >
          {this.getCityOption()}
        </Select>
        <Select
          className={styles.item}
          value={area}
          labelInValue
          showSearch
          onSelect={this.selectAreaItem}
          placeholder={'区/县'}
        >
          {this.getAreaOption()}
        </Select>
      </Spin>
    );
  }
}

export default GeographicView;
