import styled from '@emotion/native';

export const HeaderView = styled.View`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

export const HeaderIcon = styled.TouchableOpacity`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  margin-left: -20px;
`;

export const HeaderTitle = styled.Text`
  font-family: Pretendard-Black;
  text-align: center;
  flex: 10;
`;
