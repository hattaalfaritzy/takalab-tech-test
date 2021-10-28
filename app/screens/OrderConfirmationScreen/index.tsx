import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import NavigationService from 'app/navigation/NavigationService';
import LottieView from 'lottie-react-native';
import styles from './styles';
import images from 'app/config/images';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';

const {tailwind} = create(rnStyles);

const OrderConfirmationScreen: React.FC = () => {
  const [isLoading, isSetLoading] = useState(false);
  const onDone = () => {
    isSetLoading(false);
    NavigationService.navigate('Tab', {screen: 'Home Screen'});
  };

  useEffect(() => {
    setTimeout(() => {
      isSetLoading(true);
    }, 3000);
  });
  return (
    <SafeAreaView
      style={tailwind('flex-1 items-center justify-center bg-white')}>
      {isLoading === true ? (
        <>
          <View style={tailwind('w-3/4 h-2/5')}>
            <Image
              source={images.images.orderConfirmImg}
              style={[tailwind('w-full h-full'), styles.img]}
            />
          </View>
          <View style={tailwind('flex flex-col items-center justify-center')}>
            <Text style={[tailwind('text-black text-sm'), styles.semiBold]}>
              Your order has been confirmed.
            </Text>
          </View>
          <View style={tailwind('flex p-6 px-8')}>
            <TouchableOpacity
              style={tailwind(
                'flex w-full flex-row items-center justify-center px-3 py-4 bg-primary rounded-full',
              )}
              onPress={onDone}>
              <Text
                style={[
                  tailwind('w-full text-sm text-center text-white'),
                  styles.semiBold,
                ]}>
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View
            style={tailwind('flex items-center justify-center w-1/5 h-1/5')}>
            <LottieView
              style={tailwind('w-full h-full')}
              source={require('../../assets/lottie/loading.json')}
              autoPlay
              loop
            />
          </View>
          <View
            style={tailwind('flex flex-col items-center justify-center py-6')}>
            <Text style={[tailwind('text-black text-sm'), styles.semiBold]}>
              Your order is being processed
            </Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default OrderConfirmationScreen;
