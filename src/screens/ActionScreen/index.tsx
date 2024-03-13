import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList, AppScreenName} from '../../navigation/AppNavigation';

import {ArtifactItem} from '../../components/ArtifactItem';

type ActionScreenProps = StackScreenProps<
  AppStackParamList,
  AppScreenName.Action
>;
export const ActionScreen = ({
  route: {
    params: {artifact},
  },
}: ActionScreenProps) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ArtifactItem artifact={artifact} />
    </SafeAreaView>
  );
};
