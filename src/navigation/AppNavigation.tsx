import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ActionScreen} from '../screens/ActionScreen';
import {ActionsScreen} from '../screens/ActionsScreen';
import {Artifact} from '../store/api/actions/types';

export enum AppScreenName {
  Actions = 'Actions',
  Action = 'Action',
}
export type AppStackParamList = {
  [AppScreenName.Actions]: undefined;
  [AppScreenName.Action]: {artifact: Artifact};
};

const Stack = createStackNavigator<AppStackParamList>();
export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreenName.Actions} component={ActionsScreen} />
      <Stack.Screen name={AppScreenName.Action} component={ActionScreen} />
    </Stack.Navigator>
  );
};
