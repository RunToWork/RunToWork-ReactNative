import styled from '@emotion/native';

export const Container = styled.View`
  background-color: lightgrey;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HomeBox = styled.View`
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: white;
  margin: 10px;
  border-radius: 5px;
`;

export const HomeBoxGroup = styled.View`
  display: flex;
  flex-direction: column;
  margin: 15px;
`;

export const BoxTitle = styled.Text`
  font-family: 'Pretendard-Bold';
  font-size: 20px;
  color: black;
  margin-bottom: 10px;
`;

export const BoxInfoGroup = styled.View`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const BoxInfoDate = styled.Text`
  font-family: 'Pretendard-Medium';
  margin-bottom: 3px;
`;

export const BoxInfoSchedule = styled.Text`
  font-family: 'Pretendard-Light';
`;

export const BoxButtonGroup = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BoxReqButton = styled.TouchableOpacity`
  border: 1px solid dimgrey;
  border-radius: 3px;
  padding: 10px;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxCommuteButton = styled.TouchableOpacity`
  border-radius: 3px;
  background-color: blue;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-left: 10px;
`;

export const BoxButtonText = styled.Text`
  font-family: 'Pretendard-Medium';
  color: white;
`;
