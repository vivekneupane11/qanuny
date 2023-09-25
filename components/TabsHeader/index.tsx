import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";
import RoundAvatar from "../Avatar";

const TabsHeader = ({
  title,
  logo,
  avatar,
}: {
  title?: string;
  logo?: boolean;
  avatar?: boolean;
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
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
      {avatar && (
        <RoundAvatar
          source={{
            uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
          }}
          size={44}
          online={true}
        />
      )}
      {/* // <RoundAvatar text="JD" size={80} backgroundColor="blue" /> */}
    </View>
  );
};

export default TabsHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: heightPercentageToDP(7),
    paddingHorizontal: widthPercentageToDP(5),
    width:'100%'
  },
  title: {
    fontSize: fontSizeToDp(4),
    fontFamily: "Mulish_700Bold",
    textAlign: "center",
  },
  headerLogo: {
    height: heightPercentageToDP(3.5),
  },
});
