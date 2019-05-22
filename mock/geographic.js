import city from './geographic/city.json';
import province from './geographic/province.json';
import area from './geographic/area.json';

function getProvince(req, res) {
  return res.json(province);
}

function getCity(req, res) {
  return res.json(city[req.params.province]);
}
function getArea(req, res) {
  return res.json(area[req.params.city]);
}

export default {
  'GET /api/geographic/province': getProvince,
  'GET /api/geographic/city/:province': getCity,
  'GET /api/geographic/area/:city': getArea,
};
