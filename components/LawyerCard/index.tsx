import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { THEME } from '../../constants/Theme';
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from '../../utils/Responsive';

const CardComponent = ({ imageSource, name, designation, price, country, rating }:any) => {
  return (
    <View style={styles.card}>
       <View style={styles.iconContainer}>
      <AntDesign name="hearto" size={18} color="black" />
      </View>
      <Image
        source={{uri:imageSource}}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <View style={styles.nameDesignationContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.designation}>{designation}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Ionicons name="eye" size={14} color="gray" /> 
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Ionicons name="location" size={16} color="gray" /> 
          <Text style={styles.detailText}>{country}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="call" size={16} color="gray" /> 
          <Text style={styles.detailText}>Contact Me</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="star" size={16} color="orange" /> 
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
      flexDirection: 'column',
      backgroundColor: 'white',
      borderRadius: 8,
     marginRight:20,
borderWidth:StyleSheet.hairlineWidth,
borderColor:THEME.COLORS.secondaryLightTextColor,
      width:widthPercentageToDP(55),
      marginBottom:heightPercentageToDP(4)
    },
    image: {
      width: '100%',
      aspectRatio:3/2.5,
      resizeMode: 'cover',
      borderRadius: 8,
      borderBottomLeftRadius:0,
      borderBottomRightRadius:0,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: 4,
      paddingHorizontal:5
    },
    nameDesignationContainer: {
      flexDirection: 'column',
      padding:5
    },
    name: {
      fontSize: fontSizeToDp(4),
fontFamily:'Mulish_700Bold' 
   },
    designation: {
      fontSize: fontSizeToDp(2.6),
      color: THEME.COLORS.secondaryDarkTextColor,
      paddingTop:5,
      fontFamily:'Mulish_300Light'
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical:5
    },
    price: {
      fontSize: fontSizeToDp(3.3),
      fontFamily:'Mulish_700Bold',
      marginLeft: 8,
    },
    detailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 1,
      paddingHorizontal:6

    },
    detailItem: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    detailText: {
      fontSize: fontSizeToDp(2.6),
      color: THEME.COLORS.secondaryDarkTextColor,
      paddingVertical:5,
      fontFamily:'Mulish_300Light',
      marginLeft: 2,
    },
    ratingText: {
      fontSize: fontSizeToDp(4),
      color: THEME.COLORS.primary,
      paddingVertical:5,
      fontFamily:'Mulish_700Bold',
      marginLeft: 2,
    },
    iconContainer:{
      padding:5,
      position:'absolute',
      zIndex:900,
      backgroundColor:'#fff',
      borderRadius:999,
      alignItems:'center',
      justifyContent:'center',
      right:10,
      top:8
    }
  });
  

export default CardComponent;
