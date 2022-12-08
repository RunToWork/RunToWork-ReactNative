import * as React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {Header} from '../../components/Header/header';
import {Container, LoginButton, LoginButtonText, LoginInput} from './styled';

export const Login = () => {
  return (
    <>
      <Header title="로그인" />
      <Container>
        <LoginInput placeholder="아이디" />
        <LoginInput placeholder="비밀번호" />
        <LoginButton>
          <LoginButtonText>로그인</LoginButtonText>
        </LoginButton>
      </Container>
    </>
  );
};
