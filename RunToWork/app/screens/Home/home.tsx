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
  CommuteHour,
  CommuteHourGroup,
  CommuteInfoArea,
  CommuteText,
  Container,
  HomeBox,
  HomeBoxGroup,
  HomeBoxShadow,
  HorizontalLine,
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
  faAngleDown,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons';
import {BoxGroup} from './components/BoxGroup';
import {BoxTextGroup} from './components/BoxTextGroup';

export const Home = () => {
  return (
    <Container>
      <HomeBox>
        <BoxGroup title="내 리포트" iconImage={faChartLine} />
        <BoxGroup title="출근/퇴근 누락 기록" iconImage={faFolderClosed} />
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
          <CommuteInfoArea>
            <View style={HorizontalLine}></View>
            <BoxTextGroup title="출근" hours="8:32" />
            <BoxTextGroup title="퇴근" hours="17:32" />
            <BoxTextGroup title="총 근무시간" hours="8" />
          </CommuteInfoArea>
        </HomeBoxGroup>
        <HomeBoxGroup style={HomeBoxShadow}>
          <SmallBox>
            <SmallBoxText>이번주 근무</SmallBoxText>
            <SmallBoxRightIcon>
              <FontAwesomeIcon icon={faCalendarAlt} size={12} />
              <BoxInfoSchedule> 12.18 - 12. 25 </BoxInfoSchedule>
              <FontAwesomeIcon icon={faAngleDown} size={12} />
            </SmallBoxRightIcon>
          </SmallBox>
        </HomeBoxGroup>
      </HomeBox>
    </Container>
  );
};
