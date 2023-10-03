import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

interface GoogleButtonProps extends TouchableOpacityProps {
  title: string;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ title, onPress, ...rest }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      {...rest}
    >
        <Image  source={require('../../assets/Google.png')} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(2),
    borderRadius: 8,
    marginVertical:heightPercentageToDP(1),
    borderColor:THEME.COLORS.lightBackground,
    borderWidth:StyleSheet.hairlineWidth
  },
  buttonText: {
    color: THEME.COLORS.secondaryDarkTextColor,
    fontSize: fontSizeToDp(3.8),
    textAlign: 'center',
    fontFamily:'Mulish_500Medium',
    paddingLeft:widthPercentageToDP(3)
  },
});

export default GoogleButton;
