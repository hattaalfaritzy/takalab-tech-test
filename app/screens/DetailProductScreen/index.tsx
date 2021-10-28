import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useForm} from 'react-hook-form';
import styles from './styles';
import NumericInput from 'react-native-numeric-input';
import {Rating} from 'react-native-ratings';
import ContentLoader, {Rect} from 'react-content-loader/native';
import NavigationService from 'app/navigation/NavigationService';
import Header from 'app/components/Header';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';
import {GetProductById} from 'app/services/react-query/queries/products';
import {useStore} from 'app/store';

const {tailwind, getColor} = create(rnStyles);

const DetailProductScreen: React.FC = ({navigation, route}) => {
  const [qtyProduct, setQtyProduct] = useState(1);
  const {cart, addToCart} = useStore((state) => {
    return {
      cart: state.cart,
      addToCart: state.addToCart,
    };
  });

  const product: {
    data?: any;
    isFetched: boolean;
    isLoading: boolean;
    isFetching: boolean;
  } = GetProductById(route.params.id);

  useEffect(() => {
    console.log(product, 'data product');
  });

  const onSubmit = (data) => console.log(data);
  return (
    <SafeAreaView style={tailwind('flex-1 bg-white flex flex-col')}>
      <Header
        label={false}
        title={'Detail Product'}
        withBack={true}
        cartIcon={true}
        navigation={navigation}
        badge={cart.length}
      />
      <ScrollView style={tailwind('flex-1 bg-white')}>
        {!product.isFetching && product.data ? (
          <>
            <View style={tailwind('flex flex-col')}>
              <Image
                source={{uri: product.data.image}}
                resizeMode={'contain'}
                style={tailwind('w-full h-64')}
              />
            </View>
            <View style={tailwind('flex flex-col p-6 border-b border-black')}>
              <Text
                style={[tailwind('text-xl text-left text-black'), styles.bold]}>
                {product.data.title}
              </Text>
              <Text
                style={[
                  tailwind('text-sm text-left text-current pt-1'),
                  styles.medium,
                ]}>
                {product.data.category}
              </Text>
              <Text
                style={[
                  tailwind('text-base text-left text-black'),
                  styles.semiBold,
                ]}>
                $ {product.data.price}
              </Text>
              <View style={tailwind('flex-row justify-start items-center')}>
                <Rating
                  readonly={true}
                  type="star"
                  imageSize={15}
                  startingValue={product.data.rating.rate}
                />
                <Text
                  style={[
                    tailwind('text-sm text-left text-black pl-2'),
                    styles.bold,
                  ]}>
                  ({product.data.rating.count})
                </Text>
              </View>
            </View>
            <View style={tailwind('flex flex-col p-6')}>
              <Text
                style={[
                  tailwind('text-base text-left text-black'),
                  styles.semiBold,
                ]}>
                Description
              </Text>
              <Text
                style={[
                  tailwind('text-sm text-left text-black'),
                  styles.semiBold,
                ]}>
                {product.data.description}
              </Text>
            </View>
          </>
        ) : (
          <View style={tailwind('flex justify-center items-center p-5')}>
            <ContentLoader
              speed={2}
              width={'375'}
              height={'500'}
              viewBox="0 0 375 500"
              backgroundColor="#ffffff"
              foregroundColor="#d3d3d3"
              style={tailwind('w-full')}>
              <Rect x="0" y="0" rx="10" ry="10" width="350" height="250" />
              <Rect x="0" y="265" rx="10" ry="10" width="200" height="15" />
              <Rect x="0" y="290" rx="10" ry="10" width="150" height="15" />
              <Rect x="0" y="315" rx="10" ry="10" width="100" height="15" />
            </ContentLoader>
          </View>
        )}
      </ScrollView>
      <View
        style={[
          tailwind(
            'flex flex-row justify-center items-center px-6 py-3 bg-white',
          ),
          styles.shadow,
        ]}>
        <View style={tailwind('flex-1 pr-3')}>
          <NumericInput
            value={qtyProduct}
            onChange={(value) => setQtyProduct(value)}
            totalWidth={100}
            totalHeight={40}
            iconSize={25}
            step={1}
            valueType="real"
            rounded
            separatorWidth={0}
            inputStyle={[tailwind('text-black text-base'), styles.medium]}
            textColor="#B0228C"
            iconStyle={tailwind('text-white')}
            rightButtonBackgroundColor={getColor('primary')}
            leftButtonBackgroundColor={getColor('primary')}
          />
        </View>
        <View style={tailwind('flex-1 pl-3')}>
          <TouchableOpacity
            onPress={() => {
              addToCart(product.data, qtyProduct);
            }}
            style={tailwind(
              'flex w-full flex-row items-center justify-center px-3 py-4 rounded-full bg-primary',
            )}>
            <Text
              style={[
                tailwind('text-sm text-center text-white'),
                styles.semiBold,
              ]}>
              Add to cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailProductScreen;
