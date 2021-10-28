import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import NavigationService from 'app/navigation/NavigationService';
import images from 'app/config/images';
import styles from './styles';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';

import LoaderSkeleton from 'app/components/LoaderSkeleton';
import LoaderSkeletonAddress from 'app/components/LoaderSkeletonAddress';
import IconComponents from 'app/components/Icon';

import {GetUserDetails} from 'app/services/react-query/queries/user';
import {useStore} from 'app/store';

const {tailwind, getColor} = create(rnStyles);
const goToEditProfile = () =>
  NavigationService.navigate('Home', {screen: 'Edit Profile Screen'});

const onLogout = () => NavigationService.navigate('Auth');

const ProfileScreen: React.FC = () => {
  const user: {
    data?: any;
    isFetched: boolean;
  } = GetUserDetails();

  const {userAddress} = useStore((state) => {
    return {
      userAddress: state.userAddress,
    };
  });

  return (
    <ScrollView style={tailwind('flex-1 bg-white p-6 pb-32')}>
      {user.isFetched && user.data ? (
        <>
          <View
            style={tailwind('flex flex-col justify-center items-center pt-4')}>
            <Image
              source={images.images.dummyImg}
              style={tailwind('w-28 h-28 rounded-full')}
            />
          </View>
          <View
            style={tailwind('flex flex-col justify-center items-center py-2')}>
            <Text
              style={[tailwind('text-xl text-left text-black'), styles.bold]}>
              {user.data.name.firstname} {user.data.name.lastname}
            </Text>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <Text
              style={[
                tailwind('text-base text-left text-black'),
                styles.medium,
              ]}>
              Account Detail
            </Text>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'email-outline'}
              size={25}
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
                Email
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                {user.data.email}
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'account-circle'}
              size={25}
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
                Username
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                {user.data.username}
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'text-box-outline'}
              size={25}
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
                First Name
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                {user.data.name.firstname}
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'text-box-outline'}
              size={25}
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
                Last Name
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                {user.data.name.lastname}
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'phone'}
              size={25}
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
                Phone
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                {user.data.phone}
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <Text
              style={[
                tailwind('text-base text-left text-black'),
                styles.medium,
              ]}>
              List Address
            </Text>
          </View>
          <FlatList
            data={userAddress}
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
          <View style={tailwind('flex pt-8')}>
            <TouchableOpacity
              style={tailwind(
                'flex flex-row items-center justify-center px-3 py-4 rounded-full border-2 border-primary',
              )}
              onPress={goToEditProfile}>
              <Text
                style={[
                  tailwind('text-sm text-center text-current'),
                  styles.semiBold,
                ]}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tailwind('flex pb-16 pt-2')}>
            <TouchableOpacity
              style={tailwind(
                'flex flex-row items-center justify-center px-3 py-4 rounded-full bg-red-700',
              )}>
              <Text
                style={[
                  tailwind('text-sm text-center text-white'),
                  styles.semiBold,
                ]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View
            style={tailwind('flex flex-col justify-center items-center pt-4')}>
            <Image
              source={images.images.dummyImg}
              style={tailwind('w-28 h-28 rounded-full')}
            />
          </View>
          <View
            style={tailwind('flex flex-col justify-center items-center py-2')}>
            <LoaderSkeleton />
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <Text
              style={[
                tailwind('text-base text-left text-black'),
                styles.medium,
              ]}>
              Account Detail
            </Text>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'email-outline'}
              size={25}
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
                Email
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                <LoaderSkeleton />
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'account-circle'}
              size={25}
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
                Username
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                <LoaderSkeleton />
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'text-box-outline'}
              size={25}
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
                First Name
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                <LoaderSkeleton />
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'text-box-outline'}
              size={25}
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
                Last Name
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                <LoaderSkeleton />
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <IconComponents
              name={'phone'}
              size={25}
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
                Phone
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                <LoaderSkeleton />
              </Text>
            </View>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-2',
            )}>
            <Text
              style={[
                tailwind('text-base text-left text-black'),
                styles.medium,
              ]}>
              List Address
            </Text>
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-1',
            )}>
            <LoaderSkeletonAddress />
          </View>
          <View
            style={tailwind(
              'flex flex-row justify-start items-center bg-white py-1',
            )}>
            <LoaderSkeletonAddress />
          </View>
          <View style={tailwind('flex pt-8')}>
            <TouchableOpacity
              style={tailwind(
                'flex flex-row items-center justify-center px-3 py-4 rounded-full border-2 border-primary',
              )}
              onPress={goToEditProfile}>
              <Text
                style={[
                  tailwind('text-sm text-center text-current'),
                  styles.semiBold,
                ]}>
                Edit Profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tailwind('flex pb-16 pt-2')}>
            <TouchableOpacity
              style={tailwind(
                'flex flex-row items-center justify-center px-3 py-4 rounded-full bg-red-700',
              )}
              onPress={onLogout}>
              <Text
                style={[
                  tailwind('text-sm text-center text-white'),
                  styles.semiBold,
                ]}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default ProfileScreen;
