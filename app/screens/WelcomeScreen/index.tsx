import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import images from 'app/config/images';
import AppIntroSlider from 'react-native-app-intro-slider';
import IconComponents from 'app/components/Icon';
import rnStyles from '../../../styles.json';
import {create} from 'tailwind-rn';
import styles from './styles';

const {tailwind, getColor} = create(rnStyles);

const slides = [
  {
    key: 1,
    title: 'Assessment / Technical Test',
    text: 'This test or assessment is made to determine the extent of technical ability.',
    image: images.images.welcome1,
  },
  {
    key: 2,
    title: 'Simple E-Commerce Apps',
    text: 'Create a simple e-commerce application based on the requested criteria.',
    image: images.images.welcome2,
  },
];

const renderItem = ({item}) => {
  return (
    <View style={tailwind('flex-1 items-center justify-start bg-white p-6')}>
      <View style={tailwind('flex items-center justify-center w-full h-4/6')}>
        <Image
          source={item.image}
          style={[tailwind('h-full w-full'), styles.img]}
        />
      </View>
      <View style={tailwind('flex items-center justify-center w-full px-3')}>
        <Text style={[tailwind('text-xl text-center text-black'), styles.bold]}>
          {item.title}
        </Text>
        <Text
          style={[
            tailwind('text-sm text-center text-black py-3'),
            styles.medium,
          ]}>
          {item.text}
        </Text>
      </View>
    </View>
  );
};

const RenderDoneButton = (navigation: any) => {
  const onNext = () => navigation.navigate('Login Screen');
  return (
    <TouchableOpacity
      onPress={onNext}
      style={tailwind(
        'flex flex-row items-center justify-center w-28 px-3 p-4 -mt-3 mr-3 rounded-full bg-primary text-white',
      )}>
      <Text
        style={[
          tailwind('text-sm text-center text-white px-1.5'),
          styles.semiBold,
        ]}>
        Mulai
      </Text>
      <IconComponents name={'arrow-right'} size={12} color={'white'} />
    </TouchableOpacity>
  );
};

const RenderNextButton = () => {
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-center w-28 px-3 p-4 -mt-3 mr-3 rounded-full bg-primary text-white',
      )}>
      <Text
        style={[
          tailwind('text-sm text-center text-white px-1.5'),
          styles.semiBold,
        ]}>
        Next
      </Text>
      <IconComponents
        name={'arrow-right'}
        size={12}
        color={getColor('white')}
      />
    </View>
  );
};

const RenderPrevButton = () => {
  return (
    <View
      style={tailwind(
        'flex flex-row items-center justify-center w-28 px-3 p-4 -mt-3 ml-3 rounded-full bg-transparent',
      )}>
      <IconComponents name={'arrow-left'} size={12} color={getColor('black')} />
      <Text
        style={[
          tailwind('text-sm text-center text-black px-1.5'),
          styles.semiBold,
        ]}>
        Back
      </Text>
    </View>
  );
};

const WelcomeScreen: React.FC<any> = (props) => {
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      keyExtractor={(item) => item.key.toString()}
      showPrevButton={true}
      activeDotStyle={tailwind('-mt-36 w-12 h-1.5 bg-primary')}
      dotStyle={tailwind('-mt-36 w-12 h-1.5 bg-grey')}
      renderDoneButton={() => RenderDoneButton(props.navigation)}
      renderNextButton={RenderNextButton}
      renderPrevButton={RenderPrevButton}
    />
  );
};

export default WelcomeScreen;
