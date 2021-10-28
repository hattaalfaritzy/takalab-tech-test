import React from 'react';
import {StyleSheet} from 'react-native';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props extends IconProps {
  name: string;
  size: number;
  color: string;
}

const IconComponents: React.FC<Props> = (props) => {
  return <MaterialCommunityIcons {...props} />;
};

export const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});

export default IconComponents;
