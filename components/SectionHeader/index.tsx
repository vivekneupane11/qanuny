import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP } from '../../utils/Responsive'

export default function SectionHeader() {
  return (
    <View style={styles.container}>
<Text style={styles.textLeft}>Todays Appointment</Text>
<Text style={styles.textRight}>See All</Text>

    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        paddingVertical:heightPercentageToDP(2),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    textLeft:{

    },
    textRight:{

    }
})
