import styled from '@emotion/native';
import {Color} from '../../constants/colors';

export const Container = styled.View`
  background-color: ${Color.PALEGREYTWO};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const HomeBox = styled.View`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 10px;
  border-radius: 5px;
`;

export const HomeBoxShadow = {
  shadowColor: Color.BLACKTWO,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

export const HomeBoxGroup = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${Color.WHITE};
  padding: 15px;
  margin: 5px 0;
`;

export const BoxTitle = styled.Text`
  font-family: 'Pretendard-Bold';
  font-size: 20px;
  color: ${Color.BLACK};
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
  background-color: ${Color.BLUE};
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

export const SmallBox = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SmallBoxText = styled.Text`
  flex: 10;
`;

export const SmallBoxLeftIcon = styled.View`
  flex: 1;
`;

export const SmallBoxRightIcon = styled.Text`
  flex: 0.5;
`;
