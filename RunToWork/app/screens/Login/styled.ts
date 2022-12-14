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

export const LoginInputError = styled.Text`
  color: grey;
  font-family: 'Pretendard-Medium';
  font-size: 12px;
`;

export const LoginFindGroup = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px 20px;
  align-self: flex-end;
`;
export const LoginFindText = styled.Text`
  text-align: right;
  font-family: 'Pretendard-Light';
`;

export const LoginButton = styled.TouchableOpacity`
  background-color: black;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const KakaoIcon = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
  align-items: center;
  flex-direction: row;
  border: 1px;
`;

export const LoginButtonText = styled.Text`
  color: white;
  text-align: center;
  font-family: 'Pretendard-ExtraBold';
`;

export const LoginKakaoButtonText = styled.Text`
  text-align: center;
  font-family: 'Pretendard-ExtraBold';
  margin-left: 5px;
  color: black;
`;

export const LoginInfoGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;

export const LoginInfoText = styled.Text`
  text-align: center;
  font-family: 'Pretendard-Medium';
  color: #00aaff;
`;

export const LoginJoinBox = styled.TouchableOpacity`
  display: flex;
  border-radius: 4px;
  justify-content: center;
  border: 1px #00aaff;
  padding: 3px 10px;
  margin-left: 10px;
`;
