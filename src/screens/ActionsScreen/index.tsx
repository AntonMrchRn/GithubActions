import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './styles';
import {StackScreenProps} from '@react-navigation/stack';
import {AppStackParamList, AppScreenName} from '../../navigation/AppNavigation';
import {useGetActionsQuery} from '../../store/api/actions';
import {FlatList, ListRenderItemInfo, TouchableOpacity} from 'react-native';
import {ArtifactItem} from '../../components/ArtifactItem';
import {Artifact} from '../../store/api/actions/types';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        data={[
          {
            id: 11,
            node_id: 'MDg6QXJ0aWZhY3QxMQ==',
            name: 'Rails',
            size_in_bytes: 556,
            url: 'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
            archive_download_url:
              'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
            expired: false,
            created_at: '2020-01-10T14:59:22Z',
            expires_at: '2020-01-21T14:59:22Z',
            updated_at: '2020-01-21T14:59:22Z',
            workflow_run: {
              id: 2332938,
              repository_id: 1296269,
              head_repository_id: 1296269,
              head_branch: 'main',
              head_sha: '328faa0536e6fef19753d9d91dc96a9931694ce3',
            },
          },
          {
            id: 1,
            node_id: 'MDg6QXJ0aWZhY3QxMQ==',
            name: 'Rails',
            size_in_bytes: 556,
            url: 'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
            archive_download_url:
              'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
            expired: false,
            created_at: '2020-01-10T14:59:22Z',
            expires_at: '2020-01-21T14:59:22Z',
            updated_at: '2020-01-21T14:59:22Z',
            workflow_run: {
              id: 2332938,
              repository_id: 1296269,
              head_repository_id: 1296269,
              head_branch: 'main',
              head_sha: '328faa0536e6fef19753d9d91dc96a9931694ce3',
            },
          },
          {
            id: 2,
            node_id: 'MDg6QXJ0aWZhY3QxMQ==',
            name: 'Rails',
            size_in_bytes: 556,
            url: 'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
            archive_download_url:
              'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
            expired: false,
            created_at: '2020-01-10T14:59:22Z',
            expires_at: '2020-01-21T14:59:22Z',
            updated_at: '2020-01-21T14:59:22Z',
            workflow_run: {
              id: 2332938,
              repository_id: 1296269,
              head_repository_id: 1296269,
              head_branch: 'main',
              head_sha: '328faa0536e6fef19753d9d91dc96a9931694ce3',
            },
          },
          {
            id: 5,
            node_id: 'MDg6QXJ0aWZhY3QxMQ==',
            name: 'Rails',
            size_in_bytes: 556,
            url: 'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
            archive_download_url:
              'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
            expired: false,
            created_at: '2020-01-10T14:59:22Z',
            expires_at: '2020-01-21T14:59:22Z',
            updated_at: '2020-01-21T14:59:22Z',
            workflow_run: {
              id: 2332938,
              repository_id: 1296269,
              head_repository_id: 1296269,
              head_branch: 'main',
              head_sha: '328faa0536e6fef19753d9d91dc96a9931694ce3',
            },
          },
          {
            id: 9,
            node_id: 'MDg6QXJ0aWZhY3QxMQ==',
            name: 'Rails',
            size_in_bytes: 556,
            url: 'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11',
            archive_download_url:
              'https://api.github.com/repos/octo-org/octo-docs/actions/artifacts/11/zip',
            expired: false,
            created_at: '2020-01-10T14:59:22Z',
            expires_at: '2020-01-21T14:59:22Z',
            updated_at: '2020-01-21T14:59:22Z',
            workflow_run: {
              id: 2332938,
              repository_id: 1296269,
              head_repository_id: 1296269,
              head_branch: 'main',
              head_sha: '328faa0536e6fef19753d9d91dc96a9931694ce3',
            },
          },
        ]}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </SafeAreaView>
  );
};
