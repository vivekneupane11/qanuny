import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

interface SectionHeaderProps {
    leftTitle:string,
    rightTitle:string,
    icon?:boolean
}
export default function SectionHeader({leftTitle,rightTitle,icon}:SectionHeaderProps) {
  return (
    <View style={styles.container}>
        <View style={styles.row}>

        <Text style={styles.textLeft}>{leftTitle}</Text>
        {
            icon && <MaterialIcons name="keyboard-arrow-down" size={28} color={THEME.COLORS.secondaryDarkTextColor}/>
        }
        </View>
<Text style={styles.textRight}>{rightTitle}</Text>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingTop:heightPercentageToDP(3),
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
color:THEME.COLORS.secondaryDarkTextColor
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    }
})
