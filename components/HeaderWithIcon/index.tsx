import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";

const HeaderWithIcon = ({ title, logo,children }: { title?: string; logo?: boolean,children?:React.ReactNode }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={28} color="#fff" />
      </TouchableOpacity>
      {logo ? (
        <Image
          style={styles.headerLogo}
          resizeMode="contain"
          tintColor={"#000"}
          source={require("../../assets/Onboard/logo.png")}
        />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
<AntDesign name="export" size={24} color="#fff" />
    </View>
  );
};

export default HeaderWithIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: heightPercentageToDP(8),
    paddingBottom: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(5),
  },
  title: {
    fontSize: fontSizeToDp(4.4),
    fontFamily: "Mulish_700Bold",
    textAlign: "center",
    flex:1,
    color:'#fff'
  },
  headerLogo: {
    height: heightPercentageToDP(4),
    width: widthPercentageToDP(80),
    flex:1

  },
});
