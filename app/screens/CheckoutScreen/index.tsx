import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import styles from './styles';
import images from 'app/config/images';
import Header from 'app/components/Header';
import LoaderSkeleton from 'app/components/LoaderSkeleton';
import rnStyles from '../../../styles.json';
import {Dropdown} from 'react-native-element-dropdown';
import {create} from 'tailwind-rn';
import {useStore} from 'app/store';
import {GetUserDetails} from 'app/services/react-query/queries/user';

const {tailwind} = create(rnStyles);

const deliveryMethod = [
  {label: 'JNE', value: '1'},
  {label: 'SiCepat', value: '2'},
];

const paymentMethod = [
  {label: 'Bank Transfer', value: '1'},
  {label: 'E-Wallet', value: '2'},
];

const CheckoutScreen: React.FC<any> = (props) => {
  const user: {
    data?: any;
    isFetched: boolean;
  } = GetUserDetails();

  const onCheckout = () =>
    props.navigation.navigate('Home', {screen: 'Order Confirmation Screen'});

  const [selectPaymentMethod, setSelectPaymentMethod] = useState(null);
  const [selectDeliveryMethod, setSelectDeliveryMethod] = useState(null);
  const [selectAddress, setSelectAddress] = useState(null);
  const renderItem = (item: any) => {
    return (
      <View style={tailwind('flex-row justify-between items-center p-3')}>
        <Text
          style={[tailwind('text-sm text-left text-black'), styles.semiBold]}>
          {item.label}
        </Text>
      </View>
    );
  };

  const renderItemAddress = (item: any) => {
    return (
      <View style={tailwind('flex-col justify-start items-start p-3')}>
        <Text style={[tailwind('text-sm text-left text-black'), styles.bold]}>
          {item.name}
        </Text>
        <Text
          style={[tailwind('text-sm text-left text-black'), styles.semiBold]}>
          {item.detail}
        </Text>
      </View>
    );
  };

  const {cart, countTotal, userAddress, clearCart} = useStore((state) => {
    return {
      cart: state.cart,
      countTotal: state.countTotal,
      userAddress: state.userAddress,
      clearCart: state.clearCart,
    };
  });

  return (
    <SafeAreaView style={tailwind('flex-1 bg-white flex flex-col')}>
      <Header
        label={false}
        title={'Checkout'}
        navigation={props.navigation}
        withBack={true}
        cartIcon={false}
      />
      <ScrollView>
        <Text
          style={[
            tailwind('text-xl text-left text-black px-6 pt-3 -mb-3'),
            styles.bold,
          ]}>
          Products
        </Text>
        {cart.length ? (
          <FlatList
            data={cart}
            style={tailwind('px-6')}
            renderItem={({item}) => (
              <View
                style={tailwind(
                  'flex-1 flex-row justify-start items-start pt-6',
                )}>
                <View style={tailwind('w-1/5')}>
                  <Image
                    source={{uri: item.product.image}}
                    resizeMode={'contain'}
                    style={tailwind('w-full h-full')}
                  />
                </View>
                <View
                  style={tailwind(
                    'flex-1 h-full flex-col justify-center items-start px-3',
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
                  <Text
                    style={[
                      tailwind('text-sm text-left text-black'),
                      styles.semiBold,
                    ]}>
                    {item.qty} Qty
                  </Text>
                </View>
              </View>
            )}
          />
        ) : (
          <View
            style={tailwind('flex justify-center items-center p-5 bg-white')}>
            <ContentLoader
              speed={2}
              width={'375'}
              height={'400'}
              viewBox="0 0 375 400"
              backgroundColor="#ffffff"
              foregroundColor="#d3d3d3"
              style={tailwind('w-full')}>
              <Rect x="0" y="0" rx="10" ry="10" width="150" height="150" />
              <Rect x="160" y="0" rx="10" ry="10" width="200" height="15" />
              <Rect x="160" y="25" rx="10" ry="10" width="150" height="15" />
              <Rect x="160" y="50" rx="10" ry="10" width="100" height="15" />
            </ContentLoader>
          </View>
        )}
        {user.isFetched && user.data ? (
          <>
            <Text
              style={[
                tailwind('text-xl text-left text-black px-6 pt-4 pb-1'),
                styles.bold,
              ]}>
              Informations
            </Text>
            <View
              style={tailwind(
                'flex flex-col justify-start items-start bg-white px-6 pb-1',
              )}>
              <Text
                style={[
                  tailwind('text-xs text-left text-black'),
                  styles.medium,
                ]}>
                Name
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                {user.data.name.firstname} {user.data.name.lastname}
              </Text>
            </View>
            <View
              style={tailwind(
                'flex flex-col justify-start items-start bg-white px-6 pb-1',
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
            <View
              style={tailwind(
                'flex flex-col justify-start items-start bg-white px-6 pb-1',
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
          </>
        ) : (
          <>
            <Text
              style={[
                tailwind('text-xl text-left text-black px-6 pt-4 pb-1'),
                styles.bold,
              ]}>
              Informations
            </Text>
            <View
              style={tailwind(
                'flex flex-col justify-start items-start bg-white px-6 pb-1',
              )}>
              <Text
                style={[
                  tailwind('text-xs text-left text-black'),
                  styles.medium,
                ]}>
                Name
              </Text>
              <Text
                style={[tailwind('text-sm text-left text-black'), styles.bold]}>
                <LoaderSkeleton />
              </Text>
            </View>
            <View
              style={tailwind(
                'flex flex-col justify-start items-start bg-white px-6 pb-1',
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
            <View
              style={tailwind(
                'flex flex-col justify-start items-start bg-white px-6 pb-1',
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
          </>
        )}
        <Text
          style={[
            tailwind('text-xl text-left text-black px-6 pt-4 pb-1'),
            styles.bold,
          ]}>
          Delivery
        </Text>
        <View
          style={tailwind(
            'flex flex-col justify-start items-start bg-white px-6 pb-1',
          )}>
          <Text
            style={[tailwind('text-xs text-left text-black'), styles.medium]}>
            Select Address
          </Text>
          <Dropdown
            style={tailwind('bg-white border-b border-black w-full')}
            containerStyle={[tailwind('h-32'), styles.shadow]}
            data={userAddress}
            fontFamily="Gilroy-Medium"
            labelField={'name'}
            valueField={'name'}
            maxHeight={65 * userAddress.length}
            placeholder="Select your address"
            placeholderStyle={tailwind('text-black')}
            value={selectAddress}
            onChange={(item) => {
              setSelectAddress(item.name);
            }}
            renderItem={(item) => renderItemAddress(item)}
          />
        </View>
        <View
          style={tailwind(
            'flex flex-col justify-start items-start bg-white px-6 pt-3 pb-1',
          )}>
          <Text
            style={[tailwind('text-xs text-left text-black'), styles.medium]}>
            Select Shipping
          </Text>
          <Dropdown
            style={tailwind('bg-white border-b border-black w-full')}
            containerStyle={[tailwind('h-32'), styles.shadow]}
            data={deliveryMethod}
            fontFamily="Gilroy-Medium"
            labelField={'label'}
            valueField={'value'}
            maxHeight={45 * deliveryMethod.length}
            placeholder="Select your shipping"
            placeholderStyle={tailwind('text-black')}
            value={selectDeliveryMethod}
            onChange={(item) => {
              setSelectDeliveryMethod(item.value);
            }}
            renderItem={(item) => renderItem(item)}
          />
        </View>
        <Text
          style={[
            tailwind('text-xl text-left text-black px-6 pt-4 pb-1'),
            styles.bold,
          ]}>
          Payment
        </Text>
        <View
          style={tailwind(
            'flex flex-col justify-start items-start bg-white px-6 pb-6',
          )}>
          <Text
            style={[tailwind('text-xs text-left text-black'), styles.medium]}>
            Payment Method
          </Text>
          <Dropdown
            style={tailwind('bg-white border-b border-black w-full')}
            containerStyle={[tailwind('h-32'), styles.shadow]}
            data={paymentMethod}
            fontFamily="Gilroy-Medium"
            labelField={'label'}
            valueField={'value'}
            maxHeight={45 * deliveryMethod.length}
            placeholder="Select your shipping"
            placeholderStyle={tailwind('text-black')}
            value={selectPaymentMethod}
            onChange={(item) => {
              setSelectPaymentMethod(item.value);
            }}
            renderItem={(item) => renderItem(item)}
          />
        </View>
      </ScrollView>
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
          {selectAddress && deliveryMethod && paymentMethod ? (
            <TouchableOpacity
              style={tailwind(
                'flex w-full flex-row items-center justify-center px-3 py-4 rounded-full bg-primary',
              )}
              onPress={() => {
                clearCart();
                onCheckout();
              }}>
              <Text
                style={[
                  tailwind('text-sm text-center text-white'),
                  styles.semiBold,
                ]}>
                Process
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={tailwind(
                'flex w-full flex-row items-center justify-center px-3 py-4 rounded-full bg-dark',
              )}
              onPress={() => {
                clearCart();
                onCheckout();
              }}
              disabled={true}>
              <Text
                style={[
                  tailwind('text-sm text-center text-white'),
                  styles.semiBold,
                ]}>
                Process
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;
