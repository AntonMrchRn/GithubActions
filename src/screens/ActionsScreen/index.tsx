import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList, AppScreenName} from '../../navigation/AppNavigation';
import {useGetActionsQuery} from '../../store/api/actions';
import {FlatList, ListRenderItemInfo, TouchableOpacity} from 'react-native';
import {ArtifactItem} from '../../components/ArtifactItem';
import {Artifact} from '../../store/api/actions/types';
import {mockData} from './mock';

type ActionsScreenProps = StackScreenProps<
  AppStackParamList,
  AppScreenName.Actions
>;

export const ActionsScreen = ({navigation}: ActionsScreenProps) => {
  const {data, refetch, isLoading} = useGetActionsQuery();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const keyExtractor = (item: Artifact) => item.id.toString();

  const renderItem = ({item: artifact}: ListRenderItemInfo<Artifact>) => {
    const onPress = () => navigation.navigate(AppScreenName.Action, {artifact});
    return (
      <TouchableOpacity onPress={onPress}>
        <ArtifactItem artifact={artifact} />
      </TouchableOpacity>
    );
  };

  const list = [...(data?.artifacts || [])].reverse();

  const onRefresh = async () => {
    if (!isLoading) {
      setRefreshing(true);
      await refetch();
      setRefreshing(false);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={mockData}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};
