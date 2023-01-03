import * as React from 'react';
import {Text, View} from 'react-native';
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
  HomeBoxShadow,
  SmallBox,
  SmallBoxLeftIcon,
  SmallBoxRightIcon,
  SmallBoxText,
} from './styled';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChartLine,
  faAngleRight,
  faFolderClosed,
} from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <>
      <Container>
        <HomeBox>
          <HomeBoxGroup style={HomeBoxShadow}>
            <SmallBox>
              <SmallBoxLeftIcon>
                <FontAwesomeIcon icon={faChartLine} size={17} />
              </SmallBoxLeftIcon>
              <SmallBoxText>내 리포트</SmallBoxText>
              <SmallBoxRightIcon>
                <FontAwesomeIcon icon={faAngleRight} size={17} />
              </SmallBoxRightIcon>
            </SmallBox>
          </HomeBoxGroup>
          <HomeBoxGroup style={HomeBoxShadow}>
            <SmallBox>
              <SmallBoxLeftIcon>
                <FontAwesomeIcon icon={faFolderClosed} size={17} />
              </SmallBoxLeftIcon>
              <SmallBoxText>출근/퇴근 누락 기록</SmallBoxText>
              <SmallBoxRightIcon>
                <FontAwesomeIcon icon={faAngleRight} size={17} />
              </SmallBoxRightIcon>
            </SmallBox>
          </HomeBoxGroup>
          <HomeBoxGroup style={HomeBoxShadow}>
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
