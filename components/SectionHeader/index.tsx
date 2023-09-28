import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { THEME } from '../../constants/Theme'
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive'

interface SectionHeaderProps {
    leftTitle:string,
    rightTitle:string
}
export default function SectionHeader({leftTitle,rightTitle}:SectionHeaderProps) {
  return (
    <View style={styles.container}>
<Text style={styles.textLeft}>{leftTitle}</Text>
<Text style={styles.textRight}>{rightTitle}</Text>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingVertical:heightPercentageToDP(2),
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
    }
})
