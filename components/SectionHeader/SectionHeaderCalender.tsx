import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";

import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../utils/Responsive";

interface SectionHeaderCalenderProps {
  leftTitle: string;
  rightTitle: string;
}
export default function SectionHeaderCalender({
  leftTitle,
  rightTitle,
}: SectionHeaderCalenderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textLeft}>{leftTitle}</Text>
      </View>
   <View style={styles.row}>
   <TouchableOpacity style={styles.button}>
        <Text style={styles.textRightIcon}>{rightTitle}</Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          color={'#fff'}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
          <AntDesign name="plus" size={24} color="#fff" />
        </View>
   </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: heightPercentageToDP(2.5),
    paddingBottom: heightPercentageToDP(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: widthPercentageToDP(90),
  },
  textLeft: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4.4),
  },
  textRight: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: fontSizeToDp(3.6),
    color: "#fff",
    paddingHorizontal: widthPercentageToDP(2),
  },
  textRightIcon: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(4),
    color: '#fff',
    paddingHorizontal: widthPercentageToDP(2),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: heightPercentageToDP(1),
    paddingHorizontal: widthPercentageToDP(3),
    borderRadius: 6,
    backgroundColor: THEME.COLORS.primary,
  },
  iconContainer: {
    backgroundColor: "#05D4ED",
    padding:6,
    borderRadius:6,marginLeft:5
  },
});
