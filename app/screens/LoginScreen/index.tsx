import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import images from 'app/config/images';
import {create} from 'tailwind-rn';
import styles from './styles';
import {useForm, Controller} from 'react-hook-form';
import rnStyles from '../../../styles.json';

const {tailwind} = create(rnStyles);

const Login: React.FC<any> = (props) => {
  const {control} = useForm({mode: 'onBlur'});

  const onLogin = () =>
    props.navigation.navigate('Tab', {screen: 'Home Screen'});

  return (
    <View style={tailwind('flex-1 p-6 bg-white')}>
      <View style={tailwind('flex flex-col -m-3')}>
        <Image source={images.icons.logo} style={tailwind('w-16 h-16')} />
      </View>
      <View style={tailwind('flex flex-col pt-3')}>
        <Text style={[tailwind('text-xl text-left text-black'), styles.bold]}>
          Sign In
        </Text>
        <Text style={[tailwind('text-sm text-left text-black'), styles.medium]}>
          Join us for the better experience
        </Text>
      </View>
      <SafeAreaView style={tailwind('flex flex-col')}>
        <View style={tailwind('flex flex-col pt-3')}>
          <Text
            style={[tailwind('text-sm text-left text-black'), styles.medium]}>
            Username
          </Text>
          <Controller
            control={control}
            name="username"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={[tailwind('border-b border-primary'), styles.medium]}
                placeholder="Input your username"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </View>
        <View style={tailwind('flex flex-col pt-3')}>
          <Text
            style={[tailwind('text-sm text-left text-black'), styles.medium]}>
            Password
          </Text>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={[tailwind('border-b border-primary'), styles.medium]}
                placeholder="Input your pasword"
                value={value}
                type={'password'}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </View>
        <View style={tailwind('flex flex-col py-6')}>
          <TouchableOpacity
            style={tailwind(
              'flex flex-row items-center justify-center px-3 py-4 rounded-full bg-primary',
            )}
            onPress={onLogin}>
            {/* onPress={handleSubmit(onSubmit)}> */}
            <Text
              style={[
                tailwind('text-sm text-center text-white'),
                styles.semiBold,
              ]}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
