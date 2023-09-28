import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";
import RoundAvatar from "../../Avatar";
import HeaderWithIcon from "../../HeaderWithIcon";

export default function GradientView() {
  return (
    <LinearGradient colors={["#063D33", "#0b5b66"]} style={styles.gradient}>
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
        <Text style={styles.designation}>Sr. Lawyer at National court</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    height: heightPercentageToDP(27),
    width: widthPercentageToDP(100),
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
    fontSize: fontSizeToDp(3.4),
    color: THEME.COLORS.secondaryDarkTextColor,
    paddingTop: 4,
  },
});
