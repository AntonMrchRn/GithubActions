import React from 'react';
import {Artifact} from '../store/api/actions/types';
import {View, Text} from 'react-native';

type ArtifactItemProps = {artifact: Artifact};

export const ArtifactItem = ({artifact}: ArtifactItemProps) => {
  return (
    <View>
      {Object.entries(artifact).map(([key, value]) => {
        if (typeof value === 'object') {
          Object.entries(key).map(([key, value]) => {
            return (
              <Text key={key}>
                {key}: {value}
              </Text>
            );
          });
        } else {
          return (
            <Text key={key}>
              {key}: {value}
            </Text>
          );
        }
      })}
    </View>
  );
};
