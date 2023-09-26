import { Entypo, FontAwesome } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../constants/Theme";
import { fontSizeToDp, heightPercentageToDP } from "../../utils/Responsive";

export default function DocumentSection() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Checkbox style={styles.checkbox} />
        <Entypo name="news" size={18} color={THEME.COLORS.iconColor} />
        <Text style={styles.leftText}>Agreement/all/files</Text>
      </View>
      <View style={styles.centerContent}>
        <View style={styles.chip}>
          <FontAwesome
            style={styles.icon}
            name="file-pdf-o"
            size={16}
            color={THEME.COLORS.iconColor}
          />
          <Text style={styles.centerText}>Pdf</Text>
        </View>
        <Text style={styles.dateText}>09-09-23</Text>
      </View>
        <View style={styles.chip}>
          <Text style={styles.rightText}>Seen</Text>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: heightPercentageToDP(1),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 6,
    height: 18,
    width: 18,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftText: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: fontSizeToDp(2.8),
  },
  centerText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(2.5),
  },
  dateText:{
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(2.6),
    marginLeft:4
  },
  centerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
  },
  rightText: {
    fontSize:fontSizeToDp(3),
    fontFamily: "Mulish_400Regular",

  },
  icon: {
    marginRight: 2,
  },
  chip: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: THEME.COLORS.lightGrayBackground,
    borderRadius: 50,
  },
});
