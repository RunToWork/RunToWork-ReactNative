import * as React from 'react';
import TokenService from '../services/tokenService';
import {setStorageUserInfo} from '../store/actions/loginActions';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

const AppInitializer = (): JSX.Element => {
  const dispatch = useDispatch();

  const checkAuthenticated = async () => {
    const id = await TokenService.getId();
    const name = await TokenService.getName();
    const com_no = await TokenService.getComNo();
    const accesstoken = await TokenService.getAccessToken();
    const agreement = await TokenService.getAgreementState();
    const refreshtoken = await TokenService.getRefreshToken();

    dispatch(
      setStorageUserInfo({
        id: id !== null ? Number.parseInt(id, 10) : 0,
        name: name !== null ? name : '',
        com_no: com_no !== null ? com_no : '',
        accesstoken: accesstoken !== null ? accesstoken : '',
        refreshtoken: refreshtoken !== null ? refreshtoken : '',
        agreement: agreement !== null ? agreement : 'N',
      }),
    );
  };

  const init = async () => {
    return Promise.all([checkAuthenticated()]);
  };

  useEffect(() => {
    init();
  });

  return <></>;
};

export default AppInitializer;
