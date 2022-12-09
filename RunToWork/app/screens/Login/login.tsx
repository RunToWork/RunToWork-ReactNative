import * as React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {Header} from '../../components/Header/header';
import {
  Container,
  LoginAppleButton,
  LoginButton,
  LoginButtonText,
  LoginInfoText,
  LoginInput,
  LoginKakaoButton,
  LoginKakaoButtonText,
} from './styled';

export const Login = ({navigation}) => {
  return (
    <>
      <Header title="로그인" />
      <Container>
        <LoginInput placeholder="아이디" />
        <LoginInput placeholder="비밀번호" />
        <LoginButton onPress={() => navigation.navigate('Home')}>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
        <LoginKakaoButton>
          <LoginKakaoButtonText>카카오 로그인</LoginKakaoButtonText>
        </LoginKakaoButton>
        <LoginAppleButton>
          <LoginKakaoButtonText>Apple 로그인</LoginKakaoButtonText>
        </LoginAppleButton>
        <LoginInfoText>가입만 해도 즉시 15% 할인</LoginInfoText>
      </Container>
    </>
  );
};
