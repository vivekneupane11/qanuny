import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { THEME } from '../../../constants/Theme';
import { heightPercentageToDP } from '../../../utils/Responsive';

const TransparentTextInput = ({ placeholder }:{placeholder:string}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={THEME.COLORS.secondaryLightTextColor} 
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical:heightPercentageToDP(2),
    marginVertical: heightPercentageToDP(1),
    borderWidth:StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.borderColor
  },
  input: {
    color: THEME.COLORS.primary, 
    fontFamily:'Mulish_500Medium'
  },
});

export default TransparentTextInput;
