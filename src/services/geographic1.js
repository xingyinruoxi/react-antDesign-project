import request from '@/utils/request';

export async function queryProvince() {
  return request('/api/geographic/province');
}

export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}
export async function queryArea(city) {
  return request(`/api/geographic/area/${city}`);
}

/* 
export async function queryTradeList(params) {
  return request('/oraflapi/bsw/trade/getToDoTradeInfoDTOs', {
    method: 'POST',
    body: params,
  });
} */