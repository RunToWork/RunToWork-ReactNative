import * as React from 'react';
import {Text} from 'react-native';
import {Header} from '../../components/Header/header';
import {
  BoxButtonGroup,
  BoxButtonText,
  BoxCommuteButton,
  BoxInfoDate,
  BoxInfoGroup,
  BoxInfoSchedule,
  BoxReqButton,
  BoxTitle,
  Container,
  HomeBox,
  HomeBoxGroup,
} from './styled';

export const Home = () => {
  return (
    <>
      <Container>
        <HomeBox>
          <HomeBoxGroup>
            <BoxTitle>오늘 근무</BoxTitle>
            <BoxInfoGroup>
              <BoxInfoDate>12/18 (일)</BoxInfoDate>
              <BoxInfoSchedule>일정 없음</BoxInfoSchedule>
            </BoxInfoGroup>
            <BoxButtonGroup>
              <BoxReqButton>
                <BoxInfoDate>요청</BoxInfoDate>
              </BoxReqButton>
              <BoxCommuteButton>
                <BoxButtonText>출근하기</BoxButtonText>
              </BoxCommuteButton>
            </BoxButtonGroup>
          </HomeBoxGroup>
        </HomeBox>
      </Container>
    </>
  );
};
