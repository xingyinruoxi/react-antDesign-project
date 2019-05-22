import React from 'react';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import DescriptionList from '@/components/DescriptionList';
import { Card, Icon, Divider, Table } from 'antd';
const { Description } = DescriptionList;
import styles from './less/style.less';
import { type } from 'os';

export default props => {
  for (var key in props.carTypeConfig) {
    if (!props.carTypeConfig[key]) {
      props.carTypeConfig[key] = '--';
    }
  }
  const {
    typeDataTotal: {
      cm_engineType,
      cm_driverForm,
      cm_driverWay,
      cm_suspensionAfter,
      cm_assistanceType,
      cm_brakeBefore,
      cm_brakeAfter,
      cm_parkingBrakeType,
      cm_frontWheelMaterial,
      cm_rearWheelMaterial,
      cm_bodyStructure,
      cm_cylinderMaterial,
      cm_cylinderStyle,
    },
    carTypeConfig: {
      speed,
      urbanConsumption,
      consumption,
      bodyStructure,
      hundredAccelerate,
      listTime,
      doorNum,
      seatNum,
      cylinder,
      torqueSpeed,
      tireBefore,
      tireAfter,
      wheelBefore,
      wheelAfter,
      brakeBefore,
      brakeAfter,
      driverForm,
      driverWay,
      suspensionBefore,
      suspensionAfter,
      fuel,
      lwh,
      wheelbase,
      fullQuality,
      frontWheelPitch,
      rearWheelPitch,
      cargoVolume,
      tankVolume,
      maxLoadMass,
      engineType,
      valveTrain,
      cylinderMaterial,
      maxHorsepower,
      maxPower,
      cmpressionRatio,
      assistanceType,
      parkingBrakeType,
      frontWheelMaterial,
      rearWheelMaterial,
      securityConfig,
      manipulationConfig,
      baseConfig,
      mediaConfig,
      lightingConfig,
      appearanceConfig,
      engineModel,
      cylinderStyle,
      dischargeVolume,
    },
  } = props;
  return (
    <Card bordered={false}>
      <DescriptionList size="large" title="基本信息" style={{ marginBottom: 32 }}>
        <Description term="市区工况油耗">{urbanConsumption || '--'}L</Description>
        <Description term="市郊工况油耗">{consumption}L</Description>
        <Description term="车身结构">{cm_bodyStructure[bodyStructure]}</Description>
        <Description term="百公里加速">{hundredAccelerate}S</Description>
        <Description term="最高车速">{speed}kg/h</Description>
        <Description term="上市时间">{listTime}</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList size="large" title="车身参数" style={{ marginBottom: 32 }}>
        <Description term="长*宽*高">{lwh}</Description>
        <Description term="轴距">{wheelbase}mm</Description>
        <Description term="整备质量">{fullQuality}kg</Description>
        <Description term="前轮距">{frontWheelPitch}mm</Description>
        <Description term="后轮距">{rearWheelPitch}mm</Description>
        <Description term="车门数">{doorNum}门</Description>
        <Description term="座位数">{seatNum}个</Description>
        <Description term="行李箱容积">{cargoVolume}L</Description>
        <Description term="油箱容积">{tankVolume}L</Description>
        <Description term="最大载重质量">{maxLoadMass}kg</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList size="large" title="发动机参数" style={{ marginBottom: 32 }}>
        <Description term="发动机型号">{engineModel || '--'}</Description>
        <Description term="发动机类型">{cm_engineType[engineType]}</Description>
        <Description term="每缸气门数">{valveTrain}个</Description>
        <Description term="缸体材质">{cm_cylinderMaterial[cylinderMaterial]}</Description>
        <Description term="气缸排列">{cm_cylinderStyle[cylinderStyle]}</Description>
        <Description term="排气量">{dischargeVolume}mL</Description>
        <Description term="气缸数">{cylinder}个</Description>
        <Description term="最大马力">{maxHorsepower}Ps</Description>
        <Description term="最大扭矩转速">{torqueSpeed}N.m</Description>
        <Description term="最大功率">{maxPower}kW</Description>
        <Description term="驱动形式">{cm_driverForm[driverForm]}</Description>
        <Description term="驱动方式">{cm_driverWay[driverWay]}</Description>
        <Description term="压缩比">{cmpressionRatio}</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList size="large" title="底盘参数" style={{ marginBottom: 32 }}>
        <Description term="前悬挂类型">{cm_suspensionAfter[suspensionBefore]}</Description>
        <Description term="后悬挂类型">{cm_suspensionAfter[suspensionAfter]}</Description>
        <Description term="助力类型">{cm_assistanceType[assistanceType]}</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList size="large" title="制动参数" style={{ marginBottom: 32 }}>
        <Description term="前制动类型">{cm_brakeBefore[brakeBefore]}</Description>
        <Description term="后制动类型">{cm_brakeAfter[brakeAfter]}</Description>
        <Description term="驻车制动类型">{cm_parkingBrakeType[parkingBrakeType]}</Description>
        <Description term="前轮毂材质">{cm_frontWheelMaterial[frontWheelMaterial]}</Description>
        <Description term="后轮毂材质">{cm_rearWheelMaterial[rearWheelMaterial]}</Description>
        <Description term="前轮毂规格">{wheelBefore}</Description>
        <Description term="后轮毂规格">{wheelAfter}</Description>
        <Description term="前轮胎规格">{tireBefore}</Description>
        <Description term="后轮胎规格">{tireAfter}</Description>
      </DescriptionList>
      <Divider style={{ marginBottom: 32 }} />
      <DescriptionList size="large" title="配置参数" style={{ marginBottom: 32 }}>
        <Description term="安全配置">{securityConfig}</Description>
        <Description term="操控配置">{manipulationConfig}</Description>
        <Description term="方向盘/底座配置">{baseConfig}</Description>
        <Description term="多媒体配置">{mediaConfig}</Description>
        <Description term="灯光配置">{lightingConfig}</Description>
        <Description term="外观配置">{appearanceConfig}</Description>
      </DescriptionList>
    </Card>
  );
};
