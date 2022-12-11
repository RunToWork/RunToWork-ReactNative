import * as React from 'react';
import {Header} from '../../components/Header/header';
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
  LoginJoinBox,
  LoginKakaoButton,
  LoginKakaoButtonText,
} from './styled';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faComment} from '@fortawesome/free-solid-svg-icons';
import {faApple} from '@fortawesome/free-brands-svg-icons';

export const Login = ({navigation}) => {
  return (
    <>
      <Container>
        <LoginInput placeholder="아이디" />
        <LoginInput placeholder="비밀번호" />
        <LoginButton onPress={() => navigation.navigate('Home')}>
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
