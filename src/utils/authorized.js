import { LOGIN_STATE, USER_INFO } from "./constants";
import Bus from './Bus';

export const isLogined = function() {
  return localStorage.getItem(LOGIN_STATE) || 1;
};

export const setLogined = function(val) {
  return localStorage.setItem(LOGIN_STATE, val);
};

export const cacheUserInfo = function(val = null) {
  return localStorage.setItem(USER_INFO, JSON.stringify(val));
};

export const getUserInfo = function() {
  return JSON.parse(localStorage.getItem(USER_INFO) || null);
};

export const transformMenuData = function transformMenuData(arr, excludeButton, disabledButton) {
  let result = [];
  window._authoriedButtons = window._authoriedButtons || [];
  for (var i = 0; i < arr.length; i++) {
    let item = arr[i];
    let obj = {
      id: item.id,
      key: item.id.toString(),
      title: item.name,
      name: item.name,
      url: item.url,
      value: item.id.toString(),
      parentId: item.parentId
    };
    if (disabledButton && item.type == '2') {
      obj.disabled = true;
    }
    if (item.childEbResourceVos && item.childEbResourceVos.length > 0) {
      obj.children = transformMenuData(item.childEbResourceVos, excludeButton, disabledButton);
    }
    // 菜单栏初始化才选择
    if (excludeButton) {
      window._authoriedButtons.push(obj);
    }
    if (excludeButton && item.type === '2') {
      result = null;
    } else {
      result.push(obj);
    }
  }
  return result;
};

export const filterMenuButtons = function(url = null) {
  window._authoriedButtons = window._authoriedButtons || [];
  if (window._authoriedButtons.length < 1) {
    return;
  }
  let result = [];
  const matchMenu = window._authoriedButtons.find(val => {
    return val.url == url;
  });
  result = window._authoriedButtons.filter(val => {
    return val.parentId == matchMenu.id;
  });
  result = result.map(val => {
    return val.name;
  });
  console.log('filterMenuButtons -> ', url, result, matchMenu, window._authoriedButtons);
  return result.join(',');
};
const events = {
  EVENTS_FIND_AUTHORIZED_BUTTONS: 'findAuthorizedButtons'
};
export const findAuthorizedButtons = function() {
  Bus.$on(events.EVENTS_FIND_AUTHORIZED_BUTTONS, () => {
    const str = filterMenuButtons(this.$route.path);
    if (str) {
      this.authorizedButtonStr = str;
      console.log('findAuthorizedButtons -> ', str)
    }
  });
};

export const offFindAuthorizedButtons = function() {
  Bus.$off(events.EVENTS_FIND_AUTHORIZED_BUTTONS);
};
export const emitFindAuthorizedButtons = function() {
  Bus.$emit(events.EVENTS_FIND_AUTHORIZED_BUTTONS);
};
