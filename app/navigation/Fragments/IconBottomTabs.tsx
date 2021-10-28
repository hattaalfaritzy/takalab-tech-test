import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';

const {tailwind} = create(rnStyles);

interface Props extends IconProps {
  name: string;
}

const IconBottomTabs: React.FC<Props> = (props) => {
  return <MaterialCommunityIcons style={tailwind('w-7')} {...props} />;
};

export default IconBottomTabs;
