import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, ...rest }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: THEME.COLORS.primary,
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(2),
    borderRadius: 8,
    marginVertical:heightPercentageToDP(2)
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizeToDp(3.9),
    textAlign: 'center',
    fontFamily:'Mulish_700Bold'
  },
});

export default Button;
