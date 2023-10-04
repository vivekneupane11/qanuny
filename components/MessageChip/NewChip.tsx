import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp } from '../../utils/Responsive';

export default function NewChip({chipText}:{chipText?:string}) {
  return (
    <TouchableOpacity style={styles.container}>
    <Text style={styles.chipText}>{chipText} </Text>
  
    </TouchableOpacity>

  )
}
const styles= StyleSheet.create({
container:{
    backgroundColor:THEME.COLORS.lightGrayBackground,
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:6,
    marginLeft:3
},
chipText:{
    fontFamily:'Mulish_400Regular',
    fontSize:fontSizeToDp(1.8),
    color:THEME.COLORS.secondaryDarkTextColor,
    paddingLeft:5
},

})
