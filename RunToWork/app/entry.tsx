import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './screens/Login/login';
import {Text} from 'react-native';
import HeaderStyles from './components/Header/styles.scss';
import {Home} from './screens/Home/home';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import {Header} from './components/Header/header';
import {SignUp} from './screens/SignUp/signUp';
import {store} from './store/store';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerLeft: () => <Header />,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
            headerTitleStyle: {fontFamily: 'Pretendard-Bold', fontSize: 15},
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: '로그인'}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '출근런',
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              title: '회원가입',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
