import styled from '@emotion/native';

export const Container = styled.View`
  background-color: white;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LoginInput = styled.TextInput`
  border-color: lightgray;
  border-width: 1px;
  margin-top: 10px;
  width: 90%;
  font-family: 'Pretendard-Medium';
  border-radius: 4px;
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: black;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
`;

export const LoginKakaoButton = styled.TouchableOpacity`
  background-color: #fae100;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
`;

export const LoginAppleButton = styled.TouchableOpacity`
  background-color: transparent;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
  border: 1px;
`;

export const LoginButtonText = styled.Text`
  color: white;
  text-align: center;
  ont-family: 'Pretendard-Regular';
`;

export const LoginKakaoButtonText = styled.Text`
  text-align: center;
  font-family: 'Pretendard-ExtraBold';
  color: black;
`;

export const LoginInfoText = styled.Text`
  text-align: center;
  font-family: 'Pretendard-ExtraBold';
  color: blue;
`;
