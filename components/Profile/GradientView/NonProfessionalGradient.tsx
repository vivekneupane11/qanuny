import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";
import RoundAvatar from "../../Avatar";
import HeaderWithIcon from "../../HeaderWithIcon";

export default function NonProfessionalGradient() {
  return (
    <LinearGradient  start={{ x: 0.0, y: 1.0 }}
    end={{ x: 1.0, y: 1.0 }} colors={["#104D78", "#1C9E85"]} style={styles.gradient}>
      <HeaderWithIcon title="Paramètres profil" color="#fff">
        <AntDesign name="export" size={24} color="#fff" />
      </HeaderWithIcon>
      <View style={styles.profileHeader}>
        <View style={styles.border}>
          <RoundAvatar
            source={{
              uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
            }}
            size={110}
            online={true}
          />
        </View>
        <Text style={styles.name}>John Smith</Text>
        <View style={styles.grouper}>
          <View style={styles.grouper}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={THEME.COLORS.iconColor}
            />
            <Text style={styles.designation}>vivek@gmail.com</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.lightText, styles.buttonText]}>
              Non Professional
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: heightPercentageToDP(27),
    width: widthPercentageToDP(100),
    overflow:'visible'
  },
  profileHeader: {
    width: widthPercentageToDP(100),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: heightPercentageToDP(19),
  },
  border: {
    borderWidth: 7,
    borderRadius: 999,
    borderColor: "#fff",
  },
  name: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4.5),
  },
  designation: {
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3),
    color: THEME.COLORS.secondaryDarkTextColor,
    paddingLeft:5
  },
  lightText: {
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3.1),
  },
  button: {
    backgroundColor: THEME.COLORS.primary,
    paddingVertical: 4,
    paddingHorizontal: widthPercentageToDP(2.5),
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: { color: "#fff", fontSize: fontSizeToDp(2.5),padding:4 },
  grouper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 7,
  },
});
