import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import twStyles from '../../../styles.json';
import {create} from 'tailwind-rn';

import {Rating} from 'react-native-ratings';
import {FlatGrid} from 'react-native-super-grid';
import ContentLoader, {Rect} from 'react-content-loader/native';
import LoaderSkeleton from 'app/components/LoaderSkeleton';

import {GetUserDetails} from 'app/services/react-query/queries/user';
import {GetAllProducts} from 'app/services/react-query/queries/products';

const {tailwind} = create(twStyles);

const HomeScreen: React.FC<any> = (props) => {
  const user: {
    data?: any;
    isFetched: boolean;
  } = GetUserDetails();

  const products: {
    data?: any;
    isFetched: boolean;
  } = GetAllProducts();

  const goToDetailScreen = (id: string) =>
    props.navigation.navigate('Home', {
      screen: 'Detail Product Screen',
      params: {
        id,
      },
    });

  return (
    <View style={tailwind('flex-1 bg-white')}>
      <View
        style={[
          tailwind('flex p-6 flex-row justify-between items-center bg-primary'),
          styles.shadow,
        ]}>
        <View style={tailwind('flex flex-col justify-start items-start')}>
          <Text
            style={[tailwind('text-sm text-left text-white'), styles.medium]}>
            Welcome,
          </Text>
          {user.isFetched && user.data ? (
            <Text
              style={[tailwind('text-xl text-left text-white'), styles.bold]}>
              {user.data.name.firstname} {user.data.name.lastname}
            </Text>
          ) : (
            <LoaderSkeleton />
          )}
        </View>
      </View>
      <View
        style={[
          tailwind(
            'flex flex-row justify-start items-center px-6 py-3 bg-white',
          ),
          styles.shadow,
        ]}>
        <Text
          style={[
            tailwind('text-base text-left text-black pr-1'),
            styles.medium,
          ]}>
          All Product
        </Text>
        <Text style={[tailwind('text-base text-left text-black'), styles.bold]}>
          {typeof products.data === 'object'
            ? `(${products.data.length})`
            : '(0)'}
        </Text>
      </View>
      {products.isFetched && products.data ? (
        <FlatGrid
          data={products.data ? products.data : []}
          spacing={20}
          renderItem={({item}) => (
            <TouchableOpacity
              style={tailwind('flex-col justify-start items-start')}
              onPress={() => {
                goToDetailScreen(item.id);
              }}>
              <Image
                resizeMode={'contain'}
                source={{uri: item.image}}
                style={tailwind('w-full h-24')}
              />
              <View
                style={tailwind('flex-col justify-start items-start pt-1.5')}>
                <Text
                  style={[
                    tailwind('text-sm text-left text-black'),
                    styles.medium,
                  ]}>
                  {item.title}
                </Text>
                <Text
                  style={[
                    tailwind('text-sm text-left text-black'),
                    styles.bold,
                  ]}>
                  $ {item.price}
                </Text>
                <View style={tailwind('flex-row justify-start items-center')}>
                  <Rating
                    readonly={true}
                    type="star"
                    imageSize={12}
                    startingValue={item.rating.rate}
                  />
                  <Text
                    style={[
                      tailwind('text-sm text-left text-black pl-1'),
                      styles.bold,
                    ]}>
                    ({item.rating.count})
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View
          style={tailwind(
            'flex-1 flex justify-start items-center p-5 bg-white',
          )}>
          <ContentLoader
            speed={2}
            width={'375'}
            height={'400'}
            viewBox="0 0 375 400"
            backgroundColor="#ffffff"
            foregroundColor="#d3d3d3"
            style={tailwind('w-full')}>
            <Rect x="0" y="0" rx="10" ry="10" width="175" height="100" />
            <Rect x="0" y="110" rx="10" ry="10" width="175" height="15" />
            <Rect x="0" y="135" rx="10" ry="10" width="100" height="15" />

            <Rect x="0" y="170" rx="10" ry="10" width="175" height="100" />
            <Rect x="0" y="280" rx="10" ry="10" width="175" height="15" />
            <Rect x="0" y="305" rx="10" ry="10" width="100" height="15" />

            <Rect x="195" y="0" rx="10" ry="10" width="175" height="100" />
            <Rect x="195" y="110" rx="10" ry="10" width="175" height="15" />
            <Rect x="195" y="135" rx="10" ry="10" width="100" height="15" />
          </ContentLoader>
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
