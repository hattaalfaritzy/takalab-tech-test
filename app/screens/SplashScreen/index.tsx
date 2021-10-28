import React, {useEffect} from 'react';
import {SafeAreaView, Image} from 'react-native';
import images from 'app/config/images';
import tailwind from 'tailwind-rn';
import styles from './styles';
import NavigationService from 'app/navigation/NavigationService';

const SplashScreen: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.navigate('Welcome Screen');
    }, 2000);
  });

  return (
    <SafeAreaView
      style={tailwind('flex-1 items-center justify-center bg-white')}>
      <Image
        source={images.icons.logo}
        style={[tailwind('w-full h-full'), styles.img]}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
