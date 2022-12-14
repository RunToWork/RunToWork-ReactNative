import * as React from 'react';
import {
  Container,
  KakaoIcon,
  LoginAppleButton,
  LoginButton,
  LoginButtonText,
  LoginFindGroup,
  LoginFindText,
  LoginInfoGroup,
  LoginInfoText,
  LoginInput,
  LoginInputError,
  LoginJoinBox,
  LoginKakaoButton,
  LoginKakaoButtonText,
} from './styled';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faApple} from '@fortawesome/free-brands-svg-icons';
import {useAppSelector, useAppDispatch} from '../../store/hooks';
import {
  setAccessToken,
  setEmail,
  selectUserInfo,
} from '../../store/reducers/userSlice';
import {useForm, Controller} from 'react-hook-form';
import {LoginInputs} from '../../types';

export const Login = ({navigation}) => {
  const userInfo = useAppSelector(selectUserInfo);
  console.log(userInfo);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginInputs) => {};

  const dispatch = useAppDispatch();
  return (
    <>
      <Container>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <LoginInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="아이디"
            />
          )}
          name="id"
        />
        {errors.id && <LoginInputError>아이디를 입력해주세요</LoginInputError>}
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <LoginInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="비밀번호"
            />
          )}
          name="password"
        />
        {errors.password && (
          <LoginInputError>비밀번호를 입력해주세요</LoginInputError>
        )}
        <LoginButton onPress={handleSubmit(onSubmit)}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
        <LoginFindGroup>
          <LoginFindText>아이디 찾기</LoginFindText>
          <LoginFindText> | </LoginFindText>
          <LoginFindText>비밀번호 찾기</LoginFindText>
        </LoginFindGroup>
        <LoginKakaoButton>
          <KakaoIcon>
            <FontAwesomeIcon icon={faComment} size={17} />
            <LoginKakaoButtonText>카카오 로그인</LoginKakaoButtonText>
          </KakaoIcon>
        </LoginKakaoButton>
        <LoginAppleButton>
          <FontAwesomeIcon icon={faApple} size={20} />
          <LoginKakaoButtonText>Apple 로그인</LoginKakaoButtonText>
        </LoginAppleButton>
        <LoginInfoGroup>
          <LoginInfoText>나만의 출퇴근 관리 시작하기</LoginInfoText>
          <LoginJoinBox onPress={() => navigation.navigate('SignUp')}>
            <LoginInfoText>회원가입</LoginInfoText>
          </LoginJoinBox>
        </LoginInfoGroup>
      </Container>
    </>
  );
};
