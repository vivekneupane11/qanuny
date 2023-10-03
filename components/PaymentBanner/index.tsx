import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { THEME } from '../../constants/Theme'
import { fontSizeToDp, heightPercentageToDP } from '../../utils/Responsive'

export default function PaymentBanner() {
  return (
    <View style={styles.container}>
        <Text style={styles.priceText}>$30,75.00</Text>
        <Text style={styles.info}>Total: 35 Payments Received</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:heightPercentageToDP(5),
        alignItems:'center',
        backgroundColor:THEME.COLORS.lightGrayBackground,
        borderRadius:18,
        
    },
    priceText:{
        fontFamily:'Mulish_900Black',
        fontSize:fontSizeToDp(10)
    },
    info:{
        fontSize:fontSizeToDp(4),
        paddingTop:heightPercentageToDP(1),
        fontFamily:"Mulish_500Medium"
    }
})
