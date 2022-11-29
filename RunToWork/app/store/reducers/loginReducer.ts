import {SET_USER_INFO, REMOVE_USER_INFO} from '../actions/loginActions';
import {ReduxAction, StorageUserInfo} from '../../types';

const initialState: StorageUserInfo = {
  id: 0,
  name: '',
  com_no: '',
  accesstoken: '',
  refreshtoken: '',
  agreement: 'N',
};

const loginReducer = (
  prevState: StorageUserInfo = initialState,
  action: ReduxAction,
): StorageUserInfo => {
  const {type, payload} = action;

  switch (type) {
    case SET_USER_INFO:
      return payload.storageUserInfo;

    case REMOVE_USER_INFO:
      return initialState;
    default:
      return prevState;
  }
};

export default loginReducer;
