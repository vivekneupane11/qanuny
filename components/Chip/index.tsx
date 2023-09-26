import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

export default function Chip() {
  return (
    <TouchableOpacity style={styles.container}>
        <Feather name="video" size={18} color={THEME.COLORS.iconColor}/>
    <Text style={styles.chipText}>Zoom Cell</Text>
    </TouchableOpacity>

  )
}
const styles= StyleSheet.create({
container:{
    backgroundColor:THEME.COLORS.lightGrayBackground,
    paddingHorizontal:widthPercentageToDP(4),
    paddingVertical:heightPercentageToDP(2),
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
},
chipText:{
    fontFamily:'Mulish_400Regular',
    fontSize:fontSizeToDp(3),
    color:THEME.COLORS.secondaryDarkTextColor,
    paddingLeft:10
}
})
