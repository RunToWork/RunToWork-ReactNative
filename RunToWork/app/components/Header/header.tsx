import * as React from 'react';
import {HeaderIcon, HeaderTitle, HeaderView} from './styled';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import {useNavigation} from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();
  return (
    <HeaderView>
      <HeaderIcon onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faAngleLeft} size={20} />
      </HeaderIcon>
    </HeaderView>
  );
};
