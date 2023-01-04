import React from 'react';
import {CommuteHour, CommuteText, CommuteHourGroup} from '../styled';

export const BoxTextGroup = (props: {title: string; hours: string}) => {
  return (
    <CommuteHourGroup>
      <CommuteText>{props.title}</CommuteText>
      <CommuteHour>{props.hours}</CommuteHour>
    </CommuteHourGroup>
  );
};
