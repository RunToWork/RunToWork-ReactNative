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
  flex: 1;
`;

export const HeaderTitle = styled.Text`
  font-family: Pretendard-Black;
  text-align: center;
  flex: 10;
`;
