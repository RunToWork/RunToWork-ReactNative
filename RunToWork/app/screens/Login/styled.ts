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
  height: 45px;
  margin-top: 10px;
  display: flex;
  border-radius: 4px;
  justify-content: center;
`;

export const LoginButtonText = styled.Text`
  color: white;
  text-align: center;
`;
