import React from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';

import Navigator from './navigation';
import store from './store';
import AppInitializer from './components/appInitializer';

const RootNavigation: React.FC = () => {
  return (
    <PaperProvider>
      <Navigator />
    </PaperProvider>
  );
};

const EntryPoint: React.FC = () => {
  return (
    <Provider store={store}>
      <AppInitializer />
      <RootNavigation />
    </Provider>
  );
};

export default EntryPoint;
