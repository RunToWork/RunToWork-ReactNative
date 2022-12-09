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
import {faComment, faAppleAlt} from '@fortawesome/free-solid-svg-icons';

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
        <LoginFindGroup>
          <LoginFindText>아이디 찾기</LoginFindText>
          <LoginFindText> | </LoginFindText>
          <LoginFindText>비밀번호 찾기</LoginFindText>
        </LoginFindGroup>
        <LoginKakaoButton>
          <KakaoIcon>
            <FontAwesomeIcon icon={faComment} size={20} />
            <LoginKakaoButtonText>카카오 로그인</LoginKakaoButtonText>
          </KakaoIcon>
        </LoginKakaoButton>
        <LoginAppleButton>
          <FontAwesomeIcon icon={faAppleAlt} size={20} />
          <LoginKakaoButtonText>Apple 로그인</LoginKakaoButtonText>
        </LoginAppleButton>
        <LoginInfoGroup>
          <LoginInfoText>나만의 출퇴근 관리 시작하기</LoginInfoText>
          <LoginJoinBox>
            <LoginInfoText>회원가입</LoginInfoText>
          </LoginJoinBox>
        </LoginInfoGroup>
      </Container>
    </>
  );
};
