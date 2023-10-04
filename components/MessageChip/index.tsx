import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

export default function MessageChip({badge,chipText}:{badge?:boolean,chipText?:string}) {
  return (
    <TouchableOpacity style={styles.container}>
    <Text style={styles.chipText}>{chipText} </Text>
  {
    badge &&   <Text style={styles.badge}>
    3
</Text>
  }
    </TouchableOpacity>

  )
}
const styles= StyleSheet.create({
container:{
    backgroundColor:THEME.COLORS.lightGrayBackground,
    paddingHorizontal:widthPercentageToDP(2),
    paddingVertical:heightPercentageToDP(1.2),
    borderRadius:50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
},
chipText:{
    fontFamily:'Mulish_400Regular',
    fontSize:fontSizeToDp(3),
    color:THEME.COLORS.secondaryDarkTextColor,
    paddingLeft:10
},
badge:{
    backgroundColor:'#000',
    borderRadius:999,
    fontSize:fontSizeToDp(2.5),
    color:'#fff',
aspectRatio:1,
    width:widthPercentageToDP(6),
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    paddingTop:3
}
})
