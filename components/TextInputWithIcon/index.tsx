import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

const TextInputWithIcon = ({ label, placeholder, iconName,secureEntry }:{label:string,placeholder:string,iconName:string,secureEntry:boolean}) => {
  return (
 <View style={styles.container}>
 <Text style={styles.label}>{label}</Text>
 <View style={styles.textBox}>
     <MaterialIcons style={styles.icon} name={iconName} size={24} color="black" />
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#A9A9A9"
        secureTextEntry={secureEntry}
      />
    </View>
 </View>
  );
};

const styles = StyleSheet.create({
    container:{
        paddingVertical:heightPercentageToDP(1)
    },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth:StyleSheet.hairlineWidth,
    borderColor:THEME.COLORS.silver,
    borderRadius:6,
    marginTop:heightPercentageToDP(1),

    marginBottom:heightPercentageToDP(0.2)

  },
  label:{
fontFamily:'Mulish_500Medium',
fontSize:fontSizeToDp(3.5),
  },
icon:{
    paddingLeft:widthPercentageToDP(3),
    color:THEME.COLORS.iconColor
},
  input: {
    flex: 1,
    padding:12,
    fontFamily:'Mulish_600SemiBold',
    fontSize:fontSizeToDp(3.2)
  },
});

export default TextInputWithIcon;
