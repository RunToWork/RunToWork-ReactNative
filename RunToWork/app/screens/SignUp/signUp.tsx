import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Container, LoginInput} from '../Login/styled';
import {InputLable} from './styled';

export const SignUp = () => {
  return (
    <Container>
      <InputLable>아이디</InputLable>
      <LoginInput placeholder="영문, 숫자 5-11자" />

      <InputLable>비밀번호</InputLable>
      <LoginInput placeholder="숫자, 영문, 특수조합 최소 8자" />
      <LoginInput placeholder="비밀번호 재입력" />
      <InputLable>이메일</InputLable>
      <LoginInput />
    </Container>
  );
};
