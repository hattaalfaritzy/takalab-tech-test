import AppStyles from 'app/config/styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bold: {
    fontFamily: AppStyles.fonts.GilroyBold,
  },
  semiBold: {
    fontFamily: AppStyles.fonts.GilroySemiBold,
  },
  medium: {
    fontFamily: AppStyles.fonts.GilroyMedium,
  },
  shadow: {
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    resizeMode: 'contain',
  },
});

export default styles;
