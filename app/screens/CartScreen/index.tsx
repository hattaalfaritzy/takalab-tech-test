import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import Header from 'app/components/Header';
import rnStyles from '../../../styles.json';
import {create, getColor} from 'tailwind-rn';
import IconComponents from 'app/components/Icon';
import {useStore} from 'app/store';

const {tailwind} = create(rnStyles);

const CartScreen: React.FC<any> = (props) => {
  const {cart, countTotal, removeFromCart, updateQty} = useStore((state) => {
    return {
      cart: state.cart,
      countTotal: state.countTotal,
      removeFromCart: state.removeFromCart,
      updateQty: state.updateQty,
    };
  });

  const onCheckout = () =>
    props.navigation.navigate('Home', {screen: 'Checkout Screen'});

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white flex flex-col')}>
      <Header
        label={false}
        title={'Cart'}
        withBack={false}
        navigation={props.navigation}
        cartIcon={false}
      />
      {cart.length ? (
        <FlatList
          data={cart}
          style={tailwind('px-6 pb-6')}
          renderItem={({item}) => (
            <View
              style={tailwind('flex flex-row justify-start items-start pt-6')}>
              <View style={tailwind('flex w-1/3 h-28')}>
                <Image
                  source={{uri: item.product.image}}
                  resizeMode={'contain'}
                  style={tailwind('w-full h-full')}
                />
              </View>
              <View
                style={tailwind(
                  'flex-1 pl-3 flex-col justify-between items-start',
                )}>
                <View
                  style={tailwind(
                    'w-full flex-1 flex-col justify-start items-start',
                  )}>
                  <Text
                    style={[
                      tailwind('text-lg text-left text-black'),
                      styles.bold,
                    ]}>
                    {item.product.title}
                  </Text>
                  <Text
                    style={[
                      tailwind('text-sm text-left text-black'),
                      styles.semiBold,
                    ]}>
                    $ {item.product.price}
                  </Text>
                </View>
                <View
                  style={tailwind(
                    'w-full flex-1 flex-row justify-between items-center pt-3',
                  )}>
                  <View
                    style={tailwind('flex-row justify-between items-center')}>
                    <TouchableOpacity
                      onPress={() => {
                        if (item.qty === 1) {
                          removeFromCart(item.key);
                        } else {
                          updateQty(item.key, item.qty - 1);
                        }
                      }}>
                      <IconComponents
                        name={'minus-circle-outline'}
                        size={30}
                        color={getColor('black')}
                      />
                    </TouchableOpacity>
                    <Text
                      style={[
                        tailwind('px-3 text-sm text-left text-black'),
                        styles.medium,
                      ]}>
                      {item.qty}
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        updateQty(item.key, item.qty + 1);
                      }}>
                      <IconComponents
                        name={'plus-circle-outline'}
                        size={30}
                        color={getColor('black')}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      removeFromCart(item.key);
                    }}>
                    <IconComponents
                      name={'delete-circle'}
                      size={30}
                      color={getColor('red-700')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      ) : (
        <View style={tailwind('flex-1 flex-col items-center justify-start')}>
          <View
            style={tailwind('flex items-center justify-center w-full h-3/5')}>
            <LottieView
              style={tailwind('w-full h-full')}
              source={require('../../assets/lottie/empty_cart.json')}
              autoPlay
              loop
            />
          </View>
          <Text style={[tailwind('text-black text-sm'), styles.semiBold]}>
            Your order is empty :(
          </Text>
        </View>
      )}
      <View
        style={[
          tailwind(
            'flex flex-row justify-center items-center px-6 py-3 bg-white',
          ),
          styles.shadow,
        ]}>
        <View style={tailwind('flex-1 pr-3')}>
          <View
            style={tailwind(
              'w-full flex-1 flex-col justify-center items-start',
            )}>
            <Text
              style={[
                tailwind('text-sm text-left text-black'),
                styles.semiBold,
              ]}>
              Total Price
            </Text>
            <Text
              style={[
                tailwind('text-base text-left text-current'),
                styles.bold,
              ]}>
              $ {countTotal()}
            </Text>
          </View>
        </View>
        <View style={tailwind('flex-1 pl-3')}>
          {cart.length ? (
            <TouchableOpacity
              style={tailwind(
                'flex w-full flex-row items-center justify-center px-3 py-4 rounded-full bg-primary',
              )}
              onPress={onCheckout}>
              <Text
                style={[
                  tailwind('text-sm text-center text-white'),
                  styles.semiBold,
                ]}>
                Checkout
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={tailwind(
                'flex w-full flex-row items-center justify-center px-3 py-4 rounded-full bg-dark',
              )}
              onPress={onCheckout}
              disabled={true}>
              <Text
                style={[
                  tailwind('text-sm text-center text-white'),
                  styles.semiBold,
                ]}>
                Checkout
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
