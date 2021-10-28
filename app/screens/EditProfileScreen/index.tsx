import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import images from 'app/config/images';
import styles from './styles';
import Header from 'app/components/Header';
import IconComponents from 'app/components/Icon';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';
import {GetUserDetails} from 'app/services/react-query/queries/user';
import {useStore} from 'app/store';

const {tailwind, getColor} = create(rnStyles);

const EditProfileScreen: React.FC<any> = (props) => {
  const user: {
    data?: any;
    isFetched: boolean;
  } = GetUserDetails();

  const {userAddress} = useStore((state) => {
    return {
      userAddress: state.userAddress,
    };
  });

  const onNext = () =>
    props.navigation.navigate('Home', {screen: 'Edit Address Screen'});

  const onSave = () =>
    props.navigation.navigate('Tab', {screen: 'Profile Screen'});

  const {control} = useForm({
    mode: 'onBlur',
    defaultValues: {
      ...user.data,
      firstname: user.data.name.firstname,
      lastname: user.data.name.lastname,
    },
  });

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white flex flex-col')}>
      <Header
        label={false}
        title={'Edit Profile'}
        navigation={props.navigation}
        withBack={true}
      />
      <ScrollView style={tailwind('flex-1 bg-white')}>
        <View
          style={tailwind(
            'flex flex-col justify-center items-center pt-6 px-6',
          )}>
          <Image
            source={images.images.dummyImg}
            style={tailwind('w-28 h-28 rounded-full')}
          />
        </View>
        <View
          style={tailwind(
            'flex flex-row justify-start items-center bg-white pt-6 pb-2 px-6',
          )}>
          <Text
            style={[tailwind('text-base text-left text-black'), styles.medium]}>
            Edit Profile
          </Text>
        </View>
        <View style={tailwind('flex flex-col px-6 px-6 pt-3')}>
          <Text
            style={[tailwind('text-sm text-left text-black'), styles.medium]}>
            Email
          </Text>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={[tailwind('border-b border-primary'), styles.medium]}
                placeholder="Input your email"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </View>
        <View style={tailwind('flex flex-col px-6 pt-3')}>
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
        <View style={tailwind('flex flex-col px-6 pt-3')}>
          <Text
            style={[tailwind('text-sm text-left text-black'), styles.medium]}>
            First Name
          </Text>
          <Controller
            control={control}
            name="firstname"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={[tailwind('border-b border-primary'), styles.medium]}
                placeholder="Input your first name"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </View>
        <View style={tailwind('flex flex-col px-6 pt-3')}>
          <Text
            style={[tailwind('text-sm text-left text-black'), styles.medium]}>
            Last Name
          </Text>
          <Controller
            control={control}
            name="lastname"
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
        <View style={tailwind('flex flex-col px-6 pt-3')}>
          <Text
            style={[tailwind('text-sm text-left text-black'), styles.medium]}>
            Phone
          </Text>
          <Controller
            control={control}
            name="phone"
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={[tailwind('border-b border-primary'), styles.medium]}
                placeholder="Input your phone"
                value={value}
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
        </View>
        <View style={tailwind('flex flex-col px-6 pt-6 pb-3')}>
          <Text
            style={[tailwind('text-base text-left text-black'), styles.medium]}>
            List Address
          </Text>
        </View>
        <FlatList
          data={userAddress}
          style={tailwind('px-6 pb-6')}
          renderItem={({item}) => (
            <View
              style={tailwind(
                'flex flex-row justify-start items-center bg-white py-1 ml-3',
              )}>
              <IconComponents
                name={'pin-outline'}
                size={20}
                color={getColor('primary')}
              />
              <View
                style={tailwind(
                  'flex flex-col justify-start items-start bg-white px-3',
                )}>
                <Text
                  style={[
                    tailwind('text-xs text-left text-black'),
                    styles.medium,
                  ]}>
                  {item.name}
                </Text>
                <Text
                  style={[
                    tailwind('text-sm text-left text-black'),
                    styles.bold,
                  ]}>
                  {item.detail}
                </Text>
              </View>
            </View>
          )}
        />
        <View style={tailwind('flex px-6 pb-8')}>
          <TouchableOpacity
            style={tailwind(
              'flex flex-row items-center justify-center px-3 py-4 rounded-full border-2 border-primary',
            )}
            onPress={onNext}>
            <Text
              style={[
                tailwind('text-sm text-center text-current'),
                styles.semiBold,
              ]}>
              Edit Address
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View
        style={[tailwind('flex flex-col px-6 py-3 bg-white'), styles.shadow]}>
        <TouchableOpacity
          style={tailwind(
            'flex flex-row items-center justify-center px-3 py-4 rounded-full bg-primary',
          )}
          onPress={onSave}>
          {/* onPress={handleSubmit(onSubmit)}> */}
          <Text
            style={[
              tailwind('text-sm text-center text-white'),
              styles.semiBold,
            ]}>
            Save
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;
