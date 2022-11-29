import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {navigationRef} from './navigationService';
import {StatusBar} from 'react-native';

import Login from '../screens/login';

import {StorageUserInfo} from '../types';
import {useState} from 'react';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const LoggedInStack = createStackNavigator();

interface IState {
  loginReducer: StorageUserInfo;
}

const AuthNavigator = () => {
  const isLoggedIn = useSelector((state: IState) => state.loginReducer?.id);
  return (
    <AuthStack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          animationTypeForReplace: isLoggedIn > 0 ? 'push' : 'pop',
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => (
  <LoggedInStack.Navigator>''</LoggedInStack.Navigator>
);

const App: React.FC = () => {
  const isLoggedIn = useSelector((state: IState) => state.loginReducer?.id);
  let route: string = isLoggedIn > 0 ? 'Home' : 'Login';
  const [initialRoute, setInitialRoute] = useState(route);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={initialRoute}>
        {isLoggedIn > 0 ? (
          <Stack.Screen
            name="Home"
            component={LoggedInNavigator}
            options={{
              headerShown: false,
            }}
          />
        ) : (
          <Stack.Screen
            name="Login"
            component={AuthNavigator}
            options={{
              headerShown: false,
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn > 0 ? 'push' : 'pop',
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
