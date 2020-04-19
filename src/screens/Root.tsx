import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as ReduxProvider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import {DashboardScreen} from '@app/screens';
import {auth} from '@app/store/reducers/auth';

const RootStack = createStackNavigator();

const store = configureStore({
  reducer: auth,
});

const RootScreen = () => {
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Dashboard" component={DashboardScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootScreen;
