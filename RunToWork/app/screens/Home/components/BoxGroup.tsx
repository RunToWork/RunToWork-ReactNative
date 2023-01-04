import React from 'react';
import {
  HomeBoxGroup,
  HomeBoxShadow,
  SmallBox,
  SmallBoxLeftIcon,
  SmallBoxRightIcon,
  SmallBoxText,
} from '../styled';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

export const BoxGroup = (props: {
  iconImage: typeof faAngleRight;
  title: string;
}) => {
  return (
    <HomeBoxGroup style={HomeBoxShadow}>
      <SmallBox>
        <SmallBoxLeftIcon>
          <FontAwesomeIcon icon={props.iconImage} size={17} />
        </SmallBoxLeftIcon>
        <SmallBoxText>{props.title}</SmallBoxText>
        <SmallBoxRightIcon>
          <FontAwesomeIcon icon={faAngleRight} size={17} />
        </SmallBoxRightIcon>
      </SmallBox>
    </HomeBoxGroup>
  );
};
