
import { Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

interface SectionHeaderWithButtonProps {
    leftTitle:string,
    rightTitle:string,
    icon?:boolean
}
export default function SectionHeaderWithButton({leftTitle,rightTitle,icon}:SectionHeaderWithButtonProps) {
  return (
    <View style={styles.container}>
        <View style={styles.row}>

        <Text style={styles.textLeft}>{leftTitle}</Text>
        {
            icon && <MaterialIcons name="keyboard-arrow-down" size={28} color={THEME.COLORS.secondaryDarkTextColor}/>
        }
        </View>
        <TouchableOpacity style={styles.button}>
        <Feather name="calendar" size={16} color={THEME.COLORS.secondaryLightTextColor} />
        <Text style={styles.textRightIcon}>{rightTitle}</Text>
        <MaterialIcons name="keyboard-arrow-down" size={20} color={THEME.COLORS.secondaryDarkTextColor}/>
        </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingTop:heightPercentageToDP(3.8),
        paddingBottom:heightPercentageToDP(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:widthPercentageToDP(90)
    },
    textLeft:{
        fontFamily:'Mulish_700Bold',
        fontSize:fontSizeToDp(4.4)
    },
    textRight:{
fontFamily:'Mulish_400Regular',
fontSize:fontSizeToDp(3.1),
color:THEME.COLORS.secondaryDarkTextColor,
paddingHorizontal:widthPercentageToDP(2)
    },
    textRightIcon:{
        fontFamily:'Mulish_400Regular',
        fontSize:fontSizeToDp(2.8),
        color:THEME.COLORS.secondaryDarkTextColor,
        paddingHorizontal:widthPercentageToDP(2)
            },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderWidth:StyleSheet.hairlineWidth,
        paddingVertical:heightPercentageToDP(1),
        paddingHorizontal:widthPercentageToDP(3),
        borderRadius:100,
        borderColor:THEME.COLORS.secondaryLightTextColor
    }
})
