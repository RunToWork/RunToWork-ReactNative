import * as React from 'react';
import {Text, TextInput, View} from 'react-native';
import {
  Container,
  LoginButton,
  LoginButtonText,
  LoginInput,
  LoginInputError,
} from '../Login/styled';
import {
  InputGroup,
  InputLable,
  MandatoryInput,
  SignUpInfo,
  SignUpInput,
} from './styled';

export const SignUp = () => {
  return (
    <Container>
      <InputLable>
        아이디<MandatoryInput>*</MandatoryInput>
      </InputLable>
      <SignUpInput placeholder="영문, 숫자 5-11자" />
      <InputLable>
        비밀번호<MandatoryInput>*</MandatoryInput>
      </InputLable>
      <SignUpInput placeholder="숫자, 영문, 특수조합 최소 8자" />
      <SignUpInput placeholder="비밀번호 재입력" />
      <InputLable>
        이메일<MandatoryInput>*</MandatoryInput>
      </InputLable>
      <SignUpInput />
      <SignUpInfo>계정 분실 시 본인인증 정보로 활용됩니다.</SignUpInfo>
      <LoginButton>
        <LoginButtonText>가입하기</LoginButtonText>
      </LoginButton>
    </Container>
  );
};
