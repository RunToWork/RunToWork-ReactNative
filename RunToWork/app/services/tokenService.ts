import AsyncStorage from '@react-native-community/async-storage';
import {
  STRG_ID_KEY,
  STRG_NAME_KEY,
  STRG_COMNO_KEY,
  STRG_ACCESS_KEY,
  STRG_AGREEMENT_KEY,
  STRG_REFRESH_KEY,
} from '../constants/storage';

class TokenService {
  constructor() {}

  getId = (): Promise<string | null> => AsyncStorage.getItem(STRG_ID_KEY);

  setId = (id: string): Promise<void> => AsyncStorage.setItem(STRG_ID_KEY, id);

  removeID = (): Promise<void> => AsyncStorage.removeItem(STRG_ID_KEY);

  getName = (): Promise<string | null> => AsyncStorage.getItem(STRG_NAME_KEY);

  setName = (name: string): Promise<void> =>
    AsyncStorage.setItem(STRG_NAME_KEY, name);

  removeName = (): Promise<void> => AsyncStorage.removeItem(STRG_NAME_KEY);

  getComNo = (): Promise<string | null> => AsyncStorage.getItem(STRG_COMNO_KEY);

  setComNo = (comno: string): Promise<void> =>
    AsyncStorage.setItem(STRG_COMNO_KEY, comno);

  removeComNo = (): Promise<void> => AsyncStorage.removeItem(STRG_COMNO_KEY);

  getAccessToken = (): Promise<string | null> =>
    AsyncStorage.getItem(STRG_ACCESS_KEY);

  setAccessToken = (access: string): Promise<void> =>
    AsyncStorage.setItem(STRG_ACCESS_KEY, access);

  removeAccessToken = (): Promise<void> =>
    AsyncStorage.removeItem(STRG_ACCESS_KEY);

  getAgreementState = (): Promise<string | null> =>
    AsyncStorage.getItem(STRG_AGREEMENT_KEY);

  setAgreementState = (agree: string): Promise<void> =>
    AsyncStorage.setItem(STRG_AGREEMENT_KEY, agree);

  removeAgreementState = (): Promise<void> =>
    AsyncStorage.removeItem(STRG_AGREEMENT_KEY);

  getRefreshToken = (): Promise<string | null> =>
    AsyncStorage.getItem(STRG_REFRESH_KEY);

  setRefreshToken = (refresh: string): Promise<void> =>
    AsyncStorage.setItem(STRG_REFRESH_KEY, refresh);
  removeRefreshToken = (): Promise<void> =>
    AsyncStorage.removeItem(STRG_REFRESH_KEY);
}

export default new TokenService();
