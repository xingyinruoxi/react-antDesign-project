import memoizeOne from 'memoize-one';
import isEqual from 'lodash/isEqual';
import {
  formatMessage
} from 'umi/locale';
import Authorized from '@/utils/Authorized';
import {
  menu
} from '../defaultSettings';

const {
  check
} = Authorized;

// Conversion router to menu.
function formatter(data, parentAuthority, parentName) {
  return data
    .map(item => {
      if (!item.name || !item.path) {
        return null;
      }

      let locale = 'menu';
      if (parentName) {
        locale = `${parentName}.${item.name}`;
      } else {
        locale = `menu.${item.name}`;
      }
      // if enableMenuLocale use item.name,
      // close menu international
      const name = menu.disableLocal ?
        item.name :
        formatMessage({
          id: locale,
          defaultMessage: item.name
        });
      const result = {
        ...item,
        name,
        locale,
        authority: item.authority || parentAuthority,
      };
      if (item.routes) {
        const children = formatter(item.routes, item.authority, locale);
        // Reduce memory usage
        result.children = children;
      }
      delete result.routes;
      return result;
    })
    .filter(item => item);
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

/**
 * get SubMenu or Item
 */
const getSubMenu = item => {
  // doc: add hideChildrenInMenu
  if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
    return {
      ...item,
      children: filterMenuData(item.children), // eslint-disable-line
    };
  }
  return item;
};

/**
 * filter menuData
 */
const filterMenuData = menuData => {
  if (!menuData) {
    return [];
  }
  return menuData
    .filter(item => item.name && !item.hideInMenu)
    .map(item => check(item.authority, getSubMenu(item)))
    .filter(item => item);
};
/**
 * 获取面包屑映射
 * @param {Object} menuData 菜单配置
 */
const getBreadcrumbNameMap = menuData => {
  const routerMap = {};

  const flattenMenuData = data => {
    data.forEach(menuItem => {
      if (menuItem.children) {
        flattenMenuData(menuItem.children);
      }
      // Reduce memory usage
      routerMap[menuItem.path] = menuItem;
    });
  };
  flattenMenuData(menuData);
  return routerMap;
};

const memoizeOneGetBreadcrumbNameMap = memoizeOne(getBreadcrumbNameMap, isEqual);

function traverseTree(node) {
  var arr = [];
  node.forEach(child => {
    if (child) {
      for (var i in child) {
        if (!child[i].children) {
          arr.push({
            "name": child[i].name
          });
        } else {
          traverseTree(child[i]);
        }
      }
    }
    return arr;
  })

}
export default {
  namespace: 'menu',

  state: {
    menuData: [],
    breadcrumbNameMap: {},
  },

  effects: {
    * getMenuData({
      payload
    }, {
      put
    }) {
      const {
        routes,
        authority,
        menuRole
      } = payload;
      const menuData = filterMenuData(memoizeOneFormatter(routes, authority));
      menuData.forEach((item, index) => {
        if (menuRole.includes(item.name)) {
          if (!item.children.length) return;
          item.children.forEach((item1, index) => {
            if (menuRole.includes(item1.name)) {
              if (!item1.children.length) return;
              item1.children.forEach((item2,index) => {
                if (menuRole.includes(item2.name)) {
                } else {
                  delete item1.children[index]
                }
              })
            } else {
              delete item.children[index]
            }
          })
        } else {
          delete menuData[index]
        }
      })
      const breadcrumbNameMap = memoizeOneGetBreadcrumbNameMap(menuData);
      yield put({
        type: 'save',
        payload: {
          menuData,
          breadcrumbNameMap
        },
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};
