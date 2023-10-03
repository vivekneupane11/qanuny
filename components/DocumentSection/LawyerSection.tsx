import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from "../../utils/Responsive";

export default function LawyerSection({ action }: { action?: boolean }) {
  return (
    <TouchableOpacity onPress={()=>router.push('/search/createpayment')} style={styles.container}>
      <View style={styles.leftContent}>
        <Checkbox style={styles.checkbox} />
        <View>
          <Text style={styles.leftText}>Family Law</Text>
          <Text style={styles.thin}>
            Lorem ipsum dolor sit amet, consectetur.
          </Text>
        </View>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.centerText}>5</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.centerText}>$50.00</Text>
      </View>
      <View style={styles.centerContent}>
        <Text style={styles.centerText}>$250.00</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: heightPercentageToDP(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.secondaryDarkTextColor,
  },
  checkbox: {
    marginRight: 6,
    height: 18,
    width: 18,
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  leftText: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(3.8),
 },
  thin: {
    fontFamily: "Mulish_300Light",
    fontSize: fontSizeToDp(2.7),
    width:widthPercentageToDP(33) 
  },
  centerText: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(3.6),
  },

  centerContent: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

 
});
