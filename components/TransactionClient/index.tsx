import Checkbox from 'expo-checkbox'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../constants/Theme'
import { fontSizeToDp, heightPercentageToDP } from '../../utils/Responsive'
import RoundAvatar from '../Avatar'

export default function TransactionClient() {
    const router = useRouter()
  return (
    <TouchableOpacity onPress={()=>router.push('/feedback/client')} style={styles.container}>
       <View style={styles.contentLeft}>
       <Checkbox style={styles.checkbox}/>
        <View style={styles.group}>
        <RoundAvatar
          source={{
            uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
          }}
          size={35}
          online={true}
        />
        <View>
            <Text style={styles.name}>Floyd Miles</Text>
            <Text style={styles.id}>ID: #4308</Text>
        </View>
        </View>
       </View>
       <View>
       <Text style={styles.typeText}>Personal Law</Text>
       <Text style={styles.id}>Lorem Ipsum</Text>

       </View>
       <View>
        <Text style={styles.price}>$550.50</Text>
        <Text style={styles.date}>15.05.023</Text>
       </View>
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>UnPaid</Text>
       </TouchableOpacity>
     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:heightPercentageToDP(2),
        width:'100%'
    },
    contentLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    group:{
        flexDirection:'row',
        alignItems:'center'
    },
    name:{
        fontFamily:'Mulish_700Bold',
        fontSize:fontSizeToDp(2.8),
        paddingLeft:5
    },
    id:{
        fontFamily:'Mulish_400Regular',
        fontSize:fontSizeToDp(2.2),
        paddingLeft:5

    },
    typeText:{
        fontSize:fontSizeToDp(2.5),
        fontFamily:'Mulish_600SemiBold',
        paddingLeft:5

    },
    button:{
        backgroundColor: "#E0FFDD",
        paddingVertical:9,
        paddingHorizontal:12,
        borderRadius:50
    },
    buttonText:{
        fontSize:fontSizeToDp(2.6),
        color:THEME.COLORS.secondaryDarkTextColor,
        fontFamily:'Mulish_300Light'
    },
    checkbox:{
        height:15,
        width:15,
        marginRight:3
    },
    price:{
        fontSize:fontSizeToDp(3),
        fontFamily:'Mulish_700Bold'
    },
    date:{
        fontSize:fontSizeToDp(2.3),
        fontFamily:'Mulish_300Light'
    }
})
