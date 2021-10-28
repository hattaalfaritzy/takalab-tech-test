import React from 'react';
import {View, Text, ViewProps, TouchableOpacity} from 'react-native';
import styles from './styles';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';
import IconComponents from '../Icon';

const {tailwind, getColor} = create(rnStyles);

interface Props extends ViewProps {
  label: any;
  title: any;
  withBack: boolean;
  cartIcon: boolean;
  badge?: any;
  navigation: any;
}

const Header: React.FC<Props> = (props) => {
  const {title, label, withBack, cartIcon, badge, navigation} = props;
  const onBack = () => navigation.goBack();
  const goCart = () => navigation.navigate('Tab', {screen: 'Cart Screen'});

    return (
        <View
            style={[
                tailwind(
                    'flex flex-row justify-between items-center py-4 px-4 bg-white',
                ),
                styles.shadow,
            ]}>
            <View style={tailwind('flex flex-row justify-start items-center')}>
                {withBack && (
                    <TouchableOpacity onPress={onBack}>
                        <IconComponents
                            name={'arrow-left'}
                            size={25}
                            style={tailwind('pr-2')}
                            color={getColor('black')}
                        />
                    </TouchableOpacity>
                )}
                <View
                    style={[
                        tailwind('flex flex-col justify-center items-start'),
                        styles.shadow,
                    ]}>
                    <Text style={[tailwind('text-xl text-left text-black'), styles.bold]}>
                        {title}
                    </Text>
                    {label && (
                        <Text
                            style={[tailwind('text-sm text-left text-black'), styles.medium]}>
                            {label}
                        </Text>
                    )}
                </View>
            </View>
            <View style={[tailwind('flex flex-col justify-center items-center')]}>
                {cartIcon && (
                    <TouchableOpacity
                        style={tailwind('')}
                        onPress={goCart}>
                        <Text
                            style={[
                                tailwind(
                                    'absolute z-10 -mt-1.5 self-end text-center text-xs h-4 w-4 p-px rounded-full text-white bg-red-700',
                                ),
                                styles.semiBold,
                            ]}>
                            {badge}
                        </Text>
                        <IconComponents name={'cart'} size={25} color={getColor('black')}/>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

Header.defaultProps = {};

export default Header;
