import * as React from 'react';
import {HeaderTitle, HeaderView} from './styled';

export const Header = (props: {title: string}) => {
  return (
    <HeaderView>
      <HeaderTitle>{props.title}</HeaderTitle>
    </HeaderView>
  );
};
