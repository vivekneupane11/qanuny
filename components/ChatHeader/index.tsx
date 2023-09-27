import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../utils/Responsive";
import RoundAvatar from "../Avatar";

const ChatHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
    
      <View style={styles.userInfo}>
      <TouchableOpacity style={styles.icons} onPress={() => navigation.goBack()}>
      <MaterialIcons name="keyboard-arrow-left" size={28} color="#fff" />
      </TouchableOpacity>
        <RoundAvatar
          source={{
            uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
          }}
          size={44}
          online={true}
        />
       <View style={styles.group}>
       <Text style={styles.userName}>Micheal Jordan</Text>
       <Text style={styles.userStatus}>Online</Text>
       </View>
      </View>
      <View style={styles.headerIcons}>
        <TouchableOpacity>
          <Ionicons name="ios-videocam" size={20} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome name="phone" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: heightPercentageToDP(8),
    paddingBottom:heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(3),
    backgroundColor:THEME.COLORS.primary,
    width:'100%'
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  group:{
    marginLeft:widthPercentageToDP(2)
  },
  userStatus:{
    fontFamily:'Mulish_300Light',
    fontSize:fontSizeToDp(2.8),
    color:THEME.COLORS.green
  },
  userName: {
    fontSize: fontSizeToDp(3.6),
    color:'#fff',
    fontFamily:'Mulish_700Bold'
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    width:widthPercentageToDP(30)
  },
  icons:{
    marginRight:widthPercentageToDP(2.2)

  }
});

export default ChatHeader;
