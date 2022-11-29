export interface Login {
  id: number;
  userName: string;
  com_no: string;
  accesstoken: string;
  refreshtoken: string;
  agreement: string;
}

export interface ReduxAction {
  type: string;
  payload?: any;
}

export interface StorageUserInfo {
  id: number;
  name: string;
  com_no: string;
  accesstoken: string;
  refreshtoken: string;
  agreement: string;
}
