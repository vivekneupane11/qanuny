import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";

const CustomHeader = ({ title }: { title: string }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <MaterialIcons name="keyboard-arrow-left" size={28} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: heightPercentageToDP(8),
    paddingHorizontal: widthPercentageToDP(5),
    width: "100%",
  },
  title: {
    fontSize: fontSizeToDp(4),
    fontFamily: "Mulish_700Bold",
    width: "80%",
    textAlign: "center",
  },
});
