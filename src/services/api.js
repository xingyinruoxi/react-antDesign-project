import { stringify } from 'qs';
import request, { postData } from '@/utils/request';
// 字典表
export async function getTypeData(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
//修改密码
export async function queryUpdatePassword(params) {
  return request('/oraflapi/auth/changePcSysUser', {
    method: 'POST',
    body: params,
  });
}
// 转派
export async function tranferSub(params) {
  return request('/oraflapi/bsw/trade/manual/tranfer', {
    method: 'POST',
    body: params,
  });
}
// 订单列表
export async function queryTradeList(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
// 交车待办列表
export async function queryPayCarList(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
//重签待办列表
export async function queryResignList(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
//进单待办列表
export async function queryEnterOrderList(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
//进单查询
export async function queryEnterOrderOver(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
//交车查询
export async function queryPayCarListOver(params) {
  return request('/oraflapi/bsw/trade/getHistoryTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
//重签查询
export async function queryResignListOver(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
export async function queryFinishEnterorder(params) {
  return request('/oraflapi/bsw/trade/getHistoryTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}

// 获取历史交易记录
export async function queryTradeHistory(params) {
  return request('/oraflapi/bsw/trade/getHistoryTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
//进单管理列表
export async function queryTradeManageList(params) {
  return request('/oraflapi/bsw/trade/selectTradeInfos4Pc', {
    method: 'POST',
    body: params,
  });
}
//进单管理详情
export async function queryEnterOrderDetail(params) {
  return request('/oraflapi/bsw/trade/getTradeInfoDTO', {
    method: 'POST',
    body: params,
  });
}
//合同tab切换相关信息
export async function queryPayCarTabInfo(params) {
  return request('/oraflapi/bs/supply/query/commodity', {
    method: 'POST',
    body: params,
  });
}
// 页面权限
export async function getMenuNamesByRole(params) {
  return request('/oraflapi/auth/getMenuNamesByRole', {
    method: 'POST',
    body: params,
  });
}
//定单详情
export async function queryOrderDetail(params) {
  return request('/oraflapi/bsw/trade/getTradeInfoDTO', {
    method: 'POST',
    body: params,
  });
}
// 补充资料反馈信息
export async function bkinfo(params) {
  return request('/oraflapi/odquery/get/bkinfo', {
    method: 'POST',
    body: params,
  });
}
//获取提车审批结论
export async function queryPayCarResult(params) {
  return request('/oraflapi/bs/supply/query/audit', {
    method: 'POST',
    body: params,
  });
}
//获取提车审批记录
export async function queryPayCarHistory(params) {
  return request('/oraflapi/bs/supply/query/auditLogList', {
    method: 'POST',
    body: params,
  });
}
//获取提车-》全同信息、gps等
export async function payCarTab(params) {
  return request('/oraflapi/bs/supply/query/commodityMessage', {
    method: 'POST',
    body: params,
  });
}
//获取提车审批提交
export async function queryPayCarSubmit(params) {
  return request('/oraflapi/bsw/supply/saveAuditAndUpdateCommodity', {
    method: 'POST',
    body: params,
  });
}
//获取信审所有信息
export async function queryOrderResultInfo(params) {
  return request('/oraflapi/bsw/trade/manual', {
    method: 'POST',
    body: params,
  });
}
//客户基本详情
export async function queryCustomerInfo(params) {
  return request('/oraflapi/odquery/get/customer/detail', {
    method: 'POST',
    body: params,
  });
}
// 选择资料清单
export async function querygetSelectionList(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}

//选择资料清单和选择资料联动
export async function queryListAndInformationLinkage(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 新增修改紧急联系人
export async function queryContactUserSub(params) {
  return request('/oraflapi/od/add/contact', {
    method: 'POST',
    body: params,
  });
}
// 查询紧急联系人
export async function queryContactUserList(params) {
  return request('/oraflapi/odquery/get/contactAll', {
    method: 'POST',
    body: params,
  });
}
// 资料清单
export async function queryFileList(params) {
  return request('/oraflapi/listquery/list/batch', {
    method: 'POST',
    body: params,
  });
}
// 编辑客户基本信息
export async function changeCustomer(params) {
  return request('/oraflapi/od/chang/credit/customer', {
    method: 'POST',
    body: params,
  });
}
// 还款计划列表
export async function queryPlanlist(params) {
  return request('/oraflapi/pt/getpsplans', {
    method: 'POST',
    body: params,
  });
}
// 人工初审附条件查询
export async function queryUnfinishTermlist(params) {
  return request('/oraflapi/ptquery/queryPsinfoByPsinfoId', {
    method: 'POST',
    body: params,
  });
}
// 交车详情
/* export async function commodityList(params) {
  return request('/oraflapi/bs/supply/query/commodityList', {
    method: 'POST',
    body: params,
  });
} */
// 交车详情->审批记录
export async function payCarHistory(params) {
  return request('/oraflapi/bs/supply/query/auditLogList', {
    method: 'POST',
    body: params,
  });
}
// 添加不规则下计划
export async function addpsplans(params) {
  return request('/oraflapi/pt/addpsplans', {
    method: 'POST',
    body: params,
  });
}

export async function updatepsbenefit(params) {
  return request('/oraflapi/pt/updatepsbenefit', {
    method: 'POST',
    body: params,
  });
}

export async function addpsbenefits(params) {
  return request('/oraflapi/pt/addpsbenefits', {
    method: 'POST',
    body: params,
  });
}
//初审监控
export async function queryFirstList(params) {
  return request('/oraflapi/bsw/trade/selectTradeInfos4Pc', {
    method: 'POST',
    body: params,
  });
}
//初审监控
export async function queryFirstTradeSubmit(params) {
  return request('/oraflapi/bsw/trade/submitTrade', {
    method: 'POST',
    body: params,
  });
}
//复审提交
export async function queryReTradeSubmit(params) {
  return request('/oraflapi/bsw/trade/submitReTrade', {
    method: 'POST',
    body: params,
  });
}
// 添加暂存
export async function addCache(params) {
  return request('/oraflapi/bsw/trade/manual/pause', {
    method: 'POST',
    body: params,
  });
}
// 查询暂存列表
export async function cacheList(params) {
  return request('/oraflapi/bsw/trade/query/pause', {
    method: 'POST',
    body: params,
  });
}
//复审监控
export async function queryReviewList(params) {
  return request('/oraflapi/bsw/trade/selectTradeInfos4Pc', {
    method: 'POST',
    body: params,
  });
}
//合同管理列表
export async function queryContractList(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
}
// 交车管理列表
export async function queryTakeCarList(params) {
  return request('/oraflapi/bsw/trade/selectTradeInfos4Pc', {
    method: 'POST',
    body: params,
  });
}
//区域维护列表
export async function queryAreaList(params) {
  return request('/oraflapi/bs/channel/query/zone/lists', {
    method: 'POST',
    body: params,
  });
}
//区域维护新增
export async function queryAreaInfoAdd(params) {
  return request('/oraflapi/bsw/channel/add/zone/pc', {
    method: 'POST',
    body: params,
  });
}
//区域维护修改
export async function queryAreaUpdate(params) {
  return request('/oraflapi/bsw/channel/add/zone/pc', {
    method: 'POST',
    body: params,
  });
}
//区域维护修改查询
export async function queryAreaDetail(params) {
  return request('/oraflapi/bs/channel/query/zone/Detail', {
    method: 'POST',
    body: params,
  });
}
//区域新增上级区域
export async function queryParentList(params) {
  return request('/oraflapi/bs/channel/query/zone/allkey', {
    method: 'POST',
    body: params,
  });
}
// 类型关联查询
export async function getptlists(params) {
  return request('/oraflapi/pt/getptlists', {
    method: 'POST',
    body: params,
  });
}
//集团维护列表
export async function queryCompanyList(params) {
  return request('/oraflapi/bs/channel/query/group/param', {
    method: 'POST',
    body: params,
  });
}
//集团维护详情
export async function queryCompanyDetail(params) {
  return request('/oraflapi/bs/channel/query/groupid', {
    method: 'POST',
    body: params,
  });
}
//集团新增step1
export async function queryCompanyInfo(params) {
  return request('/oraflapi/bsw/channel/group/one', {
    method: 'POST',
    body: params,
  });
}
//查询汽车行业主营
export async function queryGoupMainBusiness(params) {
  return request('/oraflapi/bs/channel/query/business/list', {
    method: 'POST',
    body: params,
  });
}
//查询股权机构
export async function queryShareholder(params) {
  return request('/oraflapi/bs/channel/query/shareholder/list', {
    method: 'POST',
    body: params,
  });
}
//新增汽车行业主营
export async function queryAddMainBusiness(params) {
  return request('/oraflapi/bsw/channel/group/mainbusiness', {
    method: 'POST',
    body: params,
  });
}
//删除汽车行业主营
export async function queryDelMainBusiness(params) {
  return request('/oraflapi/bsw/channel/group/del/mainbusiness', {
    method: 'POST',
    body: params,
  });
}
//删除股权机构
export async function queryDelShareholder(params) {
  return request('/oraflapi/bsw/channel/group/del/shareholder', {
    method: 'POST',
    body: params,
  });
}
//新增股权机构
export async function queryAddShareholder(params) {
  return request('/oraflapi/bsw/channel/group/shareholder', {
    method: 'POST',
    body: params,
  });
}
//新增股权机构
export async function queryGroupShareholder(params) {
  return request('/oraflapi/bsw/channel/group/shareholder', {
    method: 'POST',
    body: params,
  });
}
//集团新增step2
export async function queryCompanyIntr(params) {
  return request('/oraflapi/bsw/channel/group/tow', {
    method: 'POST',
    body: params,
  });
}
//查询集团
export async function queryFindCompany(params) {
  return request('/oraflapi/bs/channel/query/group/stepone/info	', {
    method: 'POST',
    body: params,
  });
}
//集团编辑step1
export async function queryCompanyUpdate(params) {
  return request('/oraflapi/bsw/channel/group/one', {
    method: 'POST',
    body: params,
  });
}
//集团编辑step2
export async function queryCompanyUpdate2(params) {
  return request('/oraflapi/bsw/channel/group/tow', {
    method: 'POST',
    body: params,
  });
}
//渠道维护列表
export async function queryChannelList(params) {
  return request('/oraflapi/bs/channel/query/list/param', {
    method: 'POST',
    body: params,
  });
}
//关联保存
export async function queryAssociatedPreservation(params) {
  return request('/oraflapi/pt/addptlist', {
    method: 'POST',
    body: params,
  });
}
//关联合同模板与ID
export async function queryRelatedContractTemplate(params) {
  return request('/oraflapi/pt/updateptinfo', {
    method: 'POST',
    body: params,
  });
}
//渠道维护详情
export async function queryChannelDetail(params) {
  return request('/oraflapi/bs/channel/query/info', {
    method: 'POST',
    body: params,
  });
}
//渠道属性要素
export async function queryChannelImportInfo(params) {
  return request('/oraflapi/bs/channel/query/important/info', {
    method: 'POST',
    body: params,
  });
}
//渠道维护详情资料上传
export async function querySearchFile(params) {
  return request('/oraflapi/listquery/list', {
    method: 'POST',
    body: params,
  });
}
export async function queryUploadDetail(params) {
  return request('/oraflapi/list/batch/cover/file', {
    method: 'POST',
    body: params,
  });
}
//渠道新增step3上传
export async function queryShopImgUpload(params) {
  return request('/oraflapi/bsw/channel/set/img', {
    method: 'POST',
    body: params,
  });
}
//渠道维护设置关键岗位
export async function querySettingsPositionList(params) {
  return request('/oraflapi/auth/selectRoleAllByWhere', {
    method: 'POST',
    body: params,
  });
}

//渠道维护详情管理员及关键岗位信息
export async function queryManageInfo(params) {
  return request('/oraflapi/auth/getShopUserByChannelId', {
    method: 'POST',
    body: params,
  });
}
//渠道维护详情关联岗位列表
export async function queryPositionList(params) {
  return request('/oraflapi/auth/selectShopUserByPage', {
    method: 'POST',
    body: params,
  });
}
export async function queryKeyPositionInfo(params) {
  return request('/oraflapi/auth/selectShopUserIsVipByPage', {
    method: 'POST',
    body: params,
  });
}
//渠道维护详情关联金融产品列表
export async function querySettingProjectView(params) {
  return request('/oraflapi/pt/getchannelRelas', {
    method: 'POST',
    body: params,
  });
}
// 
//删除类型关联设置
export async function deleteptlist(params) {
  return request('/oraflapi/pt/deleteptlist', {
    method: 'POST',
    body: params,
  });
}
//设置渠道金融产品方案
export async function queryChannelProduct(params) {
  return request('/oraflapi/bsw/channel/product/setting', {
    method: 'POST',
    body: params,
  });
}
export async function querySettingsChannelProduct(params) {
  return request('/oraflapi/bsw/channel/product/setting', {
    method: 'POST',
    body: params,
  });
}
export async function queryFindProduceList(params) {
  return request('/oraflapi/pt/getchannelRelas', {
    method: 'POST',
    body: params,
  });
}

//弹出框管理员登录

export async function queryModalManage(params) {
  return request('/oraflapi/bsw/channel/admin', {
    method: 'POST',
    body: params,
  });
}

// 渠道列表批量设置关键岗位 选择岗位字典表

export async function queryPositionDate(params) {
  return request('/oraflapi/auth/selectRoleAllByWhere', {
    method: 'POST',
    body: params,
  });
}
export async function querySettingPosition(params) {
  return request('/oraflapi/auth/updateVip', {
    method: 'POST',
    body: params,
  });
}
//渠道新增step1
export async function queryChannelInfo(params) {
  return request('/oraflapi/bsw/channel/add/one', {
    method: 'POST',
    body: params,
  });
}
//查询渠道step1
export async function queryFindChannel(params) {
  return request('/oraflapi/bs/channel/query/stepone/info', {
    method: 'POST',
    body: params,
  });
}
//渠道修改step1
export async function queryChannelUpdate(params) {
  return request('/oraflapi/bsw/channel/add/one', {
    method: 'POST',
    body: params,
  });
}
//渠道新增step2
export async function queryChannelImportant(params) {
  return request('/oraflapi/bsw/channel/add/tow', {
    method: 'POST',
    body: params,
  });
}
//渠道新增step3
export async function querySaveUpload(params) {
  return request('/oraflapi/list/batch/cover/file', {
    method: 'POST',
    body: params,
  });
}
//查询渠道step1
export async function queryFindChannel2(params) {
  return request('/oraflapi/bs/channel/query/steptow/info', {
    method: 'POST',
    body: params,
  });
}
//渠道修改step2
export async function queryChannelUpdatetwo(params) {
  return request('/oraflapi/bsw/channel/add/tow', {
    method: 'POST',
    body: params,
  });
}
//渠道新增step2选择所属集团字典表
export async function queryChannelGroupList(params) {
  return request('/oraflapi/bs/channel/query/group/allkey', {
    method: 'POST',
    body: params,
  });
}

//店端账号维护列表
export async function queryShopList(params) {
  return request('/oraflapi/auth/selectShopUserByPage', {
    method: 'POST',
    body: params,
  });
}

export async function queryAllChannel(params) {
  return request('/oraflapi/bs/channel/query/allChannel', {
    method: 'POST',
    body: params,
  });
}
//店端账号维护详情
export async function queryShopDetail(params) {
  return request('/oraflapi/auth/getShopUser', {
    method: 'POST',
    body: params,
  });
}
//启用店端账号维护详情
export async function queryShopListOpen(params) {
  return request('/oraflapi/auth/updateStatusByUsers', {
    method: 'POST',
    body: params,
  });
}
// 停用店端维护
export async function queryShopListStop(params) {
  return request('/oraflapi/auth/stopStatusByUsers', {
    method: 'POST',
    body: params,
  });
}
// 上传图片
export async function postUploadImg(params) {
  return request('/oraflapi/dc/query/data', {
    method: 'POST',
    body: params,
  });
}

// 删除车型图片
export async function deleteCarTypeImg(params) {
  return request('/oraflapi/cmw/img/delete', {
    method: 'POST',
    body: params,
  });
}
// 字典表总列表
export async function getTypeDataTotal(params) {
  return request('/oraflapi/dc/query/data', {
    method: 'POST',
    body: params,
  });
}
// 商品类别列表
export async function queryProductClassList(params) {
  return request('/oraflapi/cm/categories/query/page', {
    method: 'POST',
    body: params,
  });
}
// 查询商品类别上级目录
export async function queryProClassParent(params) {
  return request('/oraflapi/cm/categories/query/parent', {
    method: 'POST',
    body: params,
  });
}
// 查询商品末级类别
export async function queryProClassEnd(params) {
  return request('/oraflapi/cm/categories/query/end', {
    method: 'POST',
    body: params,
  });
}
// 商品类别详情
export async function queryProClassDetail(params) {
  return request('/oraflapi/cm/categories/query/info', {
    method: 'POST',
    body: params,
  });
}
// 添加商品类别
export async function queryProClassAdd(params) {
  return request('/oraflapi/cmw/categories/add', {
    method: 'POST',
    body: params,
  });
}
// 更新商品类别
export async function queryProClassUpdate(params) {
  return request('/oraflapi/cmw/categories/update', {
    method: 'POST',
    body: params,
  });
}

// 商品型号列表
export async function queryProductTypeList(params) {
  return request('/oraflapi/cm/product/query/page', {
    method: 'POST',
    body: params,
  });
}
//所属品牌
export async function queryAllBrandList(params) {
  return request('/oraflapi/cm/brand/query/end', {
    method: 'POST',
    body: params,
  });
}
// 商品型号添加
export async function queryProTypeAdd(params) {
  return request('/oraflapi/cmw/product/add', {
    method: 'POST',
    body: params,
  });
}
// 商品型号更新
export async function queryProTypeUpdate(params) {
  return request('/oraflapi/cmw/product/update', {
    method: 'POST',
    body: params,
  });
}
// 查询型号详情
export async function queryProTypeDetail(params) {
  return request('/oraflapi/cm/product/query/info', {
    method: 'POST',
    body: params,
  });
}
// 转派人列表
export async function transferList(params) {
  return request('/oraflapi/auth/getFlowAuditUsers', {
    method: 'POST',
    body: params,
  });
}
// 查询品牌大类
export async function queryProTypeEnd(params) {
  return request('/oraflapi/cm/product/query/end', {
    method: 'POST',
    body: params,
  });
}

// 查询商品品牌末级品牌
export async function queryBrandList(params) {
  return request('/oraflapi/cm/brand/query/page', {
    method: 'POST',
    body: params,
  });
}
// 商品品牌列表
export async function queryBrandEnd2(params) {
  return request('/oraflapi/cm/brand/query/end', {
    method: 'POST',
    body: params,
  });
}
// 查询上级品牌
export async function queryBrandParent(params) {
  return request('/oraflapi/cm/brand/query/parent', {
    method: 'POST',
    body: params,
  });
}
// 查询商品类别末级品牌
export async function queryBrandEnd(params) {
  return request('/oraflapi/cm/categories/query/end', {
    method: 'POST',
    body: params,
  });
}
// 商品品牌详情
export async function queryBrandDetail(params) {
  return request('/oraflapi/cm/brand/query/info', {
    method: 'POST',
    body: params,
  });
}
// 添加商品品牌
export async function queryBrandAdd(params) {
  return request('/oraflapi/cmw/brand/add', {
    method: 'POST',
    body: params,
  });
}

// 更新商品品牌
export async function queryBrandUpdate(params) {
  return request('/oraflapi/cmw/brand/update', {
    method: 'POST',
    body: params,
  });
}

// 车型列表
export async function queryCarTypeList(params) {
  return request('/oraflapi/cm/info/query/page', {
    method: 'POST',
    body: params,
  });
}

// 车型图片查询
export async function getCarTypeImg(params) {
  return request('/oraflapi/cm/info/query/img', {
    method: 'POST',
    body: params,
  });
}
// 车型详情
export async function queryCarTypeDetail(params) {
  return request('/oraflapi/cm/info/query/personal', {
    method: 'POST',
    body: params,
  });
}
//  查询车型配置信息
export async function queryCarTypeConfig(params) {
  return request('/oraflapi/cm/info/query/spec', {
    method: 'POST',
    body: params,
  });
}
// 更新车型信息
export async function queryCarTypeUpdate(params) {
  return request('/oraflapi/cmw/info/update', {
    method: 'POST',
    body: params,
  });
}
// 添加车型基本信息
export async function queryCarTypeBaseInfoAdd(params) {
  return request('/oraflapi/cmw/basicInfo/add', {
    method: 'POST',
    body: params,
  });
}
// 添加车型专属信息
export async function queryCarTypePersonInfoAdd(params) {
  return request('/oraflapi/cmw/personInfo/add', {
    method: 'POST',
    body: params,
  });
}
// 添加车型规格参
export async function queryCarTypeConfigInfoAdd(params) {
  return request('/oraflapi/cmw/specInfo/add', {
    method: 'POST',
    body: params,
  });
}
// 添加车型维护图片
export async function queryCarTypeImgAdd(params) {
  return request('/oraflapi/cmw/img/add', {
    method: 'POST',
    body: params,
  });
}
// 仓库管理列表
export async function queryStoreHouseList(params) {
  return request('/oraflapi/bs/store/query/page', {
    method: 'POST',
    body: params,
  });
}

// 查询仓库详情
export async function queryStoreHouseDetail(params) {
  return request('/oraflapi/bsw/store/query/info', {
    method: 'POST',
    body: params,
  });
}
// 新增仓库
export async function queryStoreHouseAdd(params) {
  return request('/oraflapi/bsw/store/add', {
    method: 'POST',
    body: params,
  });
}
// 编辑仓库
export async function queryStoreHouseUpdate(params) {
  return request('/oraflapi/bsw/store/update', {
    method: 'POST',
    body: params,
  });
}
//
// 上级仓库
export async function queryStoreHouseParent(params) {
  return request('/oraflapi/bsw/store/query/parent', {
    method: 'POST',
    body: params,
  });
}
// 库存信息列表
export async function queryStoreInfoList(params) {
  return request('/oraflapi/bs/store/query/product/page', {
    method: 'POST',
    body: params,
  });
}
// 库存信息详情
export async function queryStoreInfoDetail(params) {
  return request('/oraflapi/bsw/store/product/query/info', {
    method: 'POST',
    body: params,
  });
}
// 方案维护----产品方案查看
export async function queryProductSchemeDetail(params) {
  return request('/oraflapi/pt/getpsinfo', {
    method: 'POST',
    body: params,
  });
}
//方案维护----产品方案第二步
export async function planTypeStep2Sub(params) {
  return request('/oraflapi/pt/updatePsinfoAndaddPsitem', {
    method: 'POST',
    body: params,
  });
}
// 产品定价信息 ==>打包/保险年限
export async function queryProductPricingInformationDetail(params) {
  return request('/oraflapi/pt/getptprojects', {
    method: 'POST',
    body: params,
  });
}
// /pt/updateptinfo
// 更新产品类型
export async function updateGoodType(params) {
  return request('/oraflapi/pt/updateptinfo', {
    method: 'POST',
    body: params,
  });
}
// 产品定价信息 ==>税收
export async function queryTaxRevenueDetail(params) {
  return request('/oraflapi/pt/getpackagepsitems', {
    method: 'POST',
    body: params,
  });
}
// 方案要素属性 查看
export async function querySchemeElementsDetail(params) {
  return request('/oraflapi/pt/getpsplans', {
    method: 'POST',
    body: params,
  });
}

// 查看 第三个 要素属性
export async function queryFactorAttributeDetail(params) {
  return request('/oraflapi/pt/getptpayments', {
    method: 'POST',
    body: params,
  });
}
// 查看 产品方案的要素属性 ==>还款周期
export async function queryRepaymentPeriodDetail(params) {
  return request('/oraflapi/pt/getptinfo', {
    method: 'POST',
    body: params,
  });
}
// 期限，利率，融资总额
export async function queryTotalFinancingDetail(params) {
  return request('/oraflapi/pt/getpsinfo', {
    method: 'POST',
    body: params,
  });
}
// 还款模板
export async function queryAssociationTemplate(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 选择业务流程
export async function querySelectingBusinessProcesses(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 起租及还款日的规则
export async function queryRulesPaymentDetail(params) {
  return request('/oraflapi/pt/getptplan', {
    method: 'POST',
    body: params,
  });
}
//  起租及还款日的规则===>根据起租日设置还款日
export async function queryStartingdateSetrepaymentDetail(params) {
  return request('/oraflapi/pt/getptplanperiods', {
    method: 'POST',
    body: params,
  });
}
// 类型维护列表
export async function queryGoodTypeList(params) {
  return request('/oraflapi/ptquery/querypagept', {
    method: 'POST',
    body: params,
  });
}
// 类型维护关联设置查询
export async function querySettingSearch(params) {
  return request('/oraflapi/pt/getptinfo', {
    method: 'POST',
    body: params,
  });
}
// 关联合同模板 列表
export async function querylistOfAssociatedContractTemplates(params) {
  return request('/oraflapi/pt/addptlist', {
    method: 'POST',
    body: params,
  });
}
export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}
// 类型维护列表
export async function goodTypeMaintenance(params) {
  return request('/oraflapi/ptquery/querypagept', {
    method: 'POST',
    body: params,
  });
}
// 产品类型编号查看
export async function queryGoodTypeDetail(params) {
  return request('/oraflapi/pt/getptinfo', {
    method: 'POST',
    body: params,
  });
}
// 渠道固定分润规则 第一个
export async function queryfixedChannelRulesFirstDetail(params) {
  return request('/oraflapi/pt/getpsbenefits', {
    method: 'POST',
    body: params,
  });
}
// 渠道固定分润规则 第二个
export async function queryfixedChannelRulesSecDetail(params) {
  return request('/oraflapi/pt/getptbenefits', {
    method: 'POST',
    body: params,
  });
}
// 有没有设置融租规则
export async function querysupplementaryRulesDetail(params) {
  return request('/oraflapi/pt/getptpayments', {
    method: 'POST',
    body: params,
  });
}
// 类型维护上一步 赋值
export async function queryGetPreviousStepTypeDataTotal(params) {
  return request('/oraflapi/pt/getptinfo', {
    method: 'POST',
    body: params,
  });
}
// 类型维护第二步获取
export async function queryGoodTypeStep2(params) {
  return request('/oraflapi/pt/getptpayments', {
    method: 'POST',
    body: params,
  });
}

// 大数据评估报告
export async function findReportResult(params) {
  return request('/bsw/findReportResult', {
    method: 'POST',
    body: params,
  });
}
export async function packageDelete(params) {
  return request('/oraflapi/pt/deleteProject', {
    method: 'POST',
    body: params,
  });
}
// 类型维护第三步获取
export async function queryGoodTypeStep3(params) {
  return request('/oraflapi/pt/getptplan', {
    method: 'POST',
    body: params,
  });
}
// 类型维护第三步还款日列表获取
export async function goodTypeStep3List(params) {
  return request('/oraflapi/pt/getptplanperiods', {
    method: 'POST',
    body: params,
  });
}
// 类型维护第四步获取
export async function queryGoodTypeStep4(params) {
  return request('/oraflapi/pt/getptbenefits', {
    method: 'POST',
    body: params,
  });
}
// 类型维护第五步添加押金
export async function moneyListAdd(params) {
  return request('/oraflapi/pt/addptpayment', {
    method: 'POST',
    body: params,
  });
}
// 类型维护第五步删除押金
export async function moneyListDelete(params) {
  return request('/oraflapi/pt/deletePayment', {
    method: 'POST',
    body: params,
  });
}
// 类型维护第五步押金列表
export async function queryMoneyList(params) {
  return request('/oraflapi/pt/getptpayments', {
    method: 'POST',
    body: params,
  });
}
// 产品类型规则（首付） 查看
export async function queryPtFirstPayMentDetail(params) {
  return request('/oraflapi/pt/getptpayments', {
    method: 'POST',
    body: params,
  });
}
// 查看服务费列表
export async function queryViewserviceChargesDetail(params) {
  return request('/oraflapi/pt/getptpayments', {
    method: 'POST',
    body: params,
  });
}
// 单个关联  关联流程清单
export async function querySingleAssociationModal(params) {
  return request('/oraflapi/pt/getptlists', {
    method: 'POST',
    body: params,
  });
}
// 请求ID，返回相对应的状态玛
export async function queryStatusCode(params) {
  return request('/oraflapi/pt/getptinfo ', {
    method: 'POST',
    body: params,
  });
}
// 方案維護列表
export async function queryGoodPlanList(params) {
  return request('/oraflapi/ptquery/querypageps', {
    method: 'POST',
    body: params,
  });
}

// 选择业务类型列表
export async function queryGetSelectingBusinessTypes(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 设置融租规则 列表
export async function queryGetsettingRentRules(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 首付 收取方式
export async function queryGetdownPaymentMethod(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 计息方式 列表
export async function queryGetinterestKey(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 选择对比方
export async function queryGetLastPaymentRef(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}

// 是否关联
export async function queryGetassociateSettings(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 补充其他规则
export async function queryGetSupplementaryOtherRuless(params) {
  return request('/oraflapi/pt/addptBigpayment', {
    method: 'POST',
    body: params,
  });
}
// 新增产品方案 基本信息
export async function queryessentialInformation(params) {
  return request('/oraflapi/pt/addpsinfo', {
    method: 'POST',
    body: params,
  });
}
// 新增产品方案第一步查询
export async function queryPlanTypeStep1(params) {
  return request('/oraflapi/pt/getpsinfo', {
    method: 'POST',
    body: params,
  });
}
// 计入融资项目列表
export async function queryGetListOfFinancingProjects(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 下拉选择融资项目
export async function querySetListOfFinancingProjects(params) {
  return request('/oraflapi/pt/getptprojects', {
    method: 'POST',
    body: params,
  });
}

export async function getptprojects(params) {
  return request('/oraflapi/pt/getptprojects', {
    method: 'POST',
    body: params,
  });
}
// 商品定价信息 下一步
export async function querCommodityPricingInformation(params) {
  return request('/oraflapi/pt/updatepsinfo', {
    method: 'POST',
    body: params,
  });
}
// 批量关联渠道
export async function queryBatchManagemenAll(params) {
  return request('/oraflapi/bs/channel/query/forcinfo', {
    method: 'POST',
    body: params,
  });
}
export async function addpschannelrelas(params) {
  return request('/oraflapi/bsw/addpschannelrelas', {
    method: 'POST',
    body: params,
  });
}
// 方案关联列表查询
export async function getpschannelrelas(params) {
  return request('/oraflapi/pt/getpschannelrelas', {
    method: 'POST',
    body: params,
  });
}
// 复制产品方案
export async function copyPsInfo(params) {
  return request('/oraflapi/pt/copyPsInfo', {
    method: 'POST',
    body: params,
  });
}
export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    body: {
      ...params.body,
      method: 'update',
    },
  });
}

// 押金金额列表
export async function getmarginpsitems(params) {
  return request('/oraflapi/pt/getmarginpsitems ', {
    method: 'POST',
    body: params,
  });
}
// 服务费金额列表
export async function getservicepsitems(params) {
  return request('/oraflapi/pt/getservicepsitems ', {
    method: 'POST',
    body: params,
  });
}

// 获取商品列表
export async function queryCategories(params) {
  return request('/oraflapi/cm/brand/query/page', {
    method: 'POST',
    body: params,
  });
}
// 新增产品类型  基本信息
export async function addProductTypeInfo(params) {
  return request('/oraflapi/pt/addptinfo', {
    method: 'POST',
    body: params,
  });
}
// 新增产品类型  设置融租规则
export async function addProductTypeRule(params) {
  return request('/oraflapi/pt/addptRendRule', {
    method: 'POST',
    body: params,
  });
}
// 新增产品类型  还款日
export async function addRepaymentDateRule(params) {
  return request('/oraflapi/pt/addptplan', {
    method: 'POST',
    body: params,
  });
}
//  新增产品类型  根据起租日设置还款日

export async function rentalDayDatSetRepaymentDateRule(params) {
  return request('/oraflapi/pt/addptplanperiod', {
    method: 'POST',
    body: params,
  });
}
// 删除还款日
export async function dateRuleDelete(params) {
  return request('/oraflapi/pt/deleteptPlanperiod', {
    method: 'POST',
    body: params,
  });
}
// 删除金额
export async function moneyRuleDelete(params) {
  return request('/oraflapi/pt/deleteptbenefit', {
    method: 'POST',
    body: params,
  });
}
//  新增产品类型-设置分润规则-渠道固定分润规则-金额
export async function distributionRuleMoney(params) {
  return request('/oraflapi/pt/addptbenefit', {
    method: 'POST',
    body: params,
  });
}
// 处理方式
export async function queryGetprocessingMode(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
// 选择对比方式
export async function queryGetChooseTheContrastWay(params) {
  return request('/oraflapi/dc/query/type/data', {
    method: 'POST',
    body: params,
  });
}
export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}
export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}
