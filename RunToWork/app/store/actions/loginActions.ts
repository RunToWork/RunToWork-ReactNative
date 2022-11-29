import {ReduxAction, StorageUserInfo} from '../../types';

export const SET_USER_INFO = 'SET_USER_INFO';
export const REMOVE_USER_INFO = 'REMOVE_USER_INFO';

export const setStorageUserInfo = (
  storageUserInfo: StorageUserInfo,
): ReduxAction => ({
  type: SET_USER_INFO,
  payload: {
    storageUserInfo,
  },
});

export const removeStorageUserInfo = (): ReduxAction => ({
  type: REMOVE_USER_INFO,
});
