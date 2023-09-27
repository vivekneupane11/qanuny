import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../../constants/Theme";
import { fontSizeToDp, widthPercentageToDP } from "../../../utils/Responsive";

export default function AboutUser() {
  return (
    <View style={styles.aboutUser}>
      <View style={styles.aboutTop}>
        <Text style={styles.boldText}>About Myself</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.lightText, styles.buttonText]}>
            Professional
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={[styles.group, styles.lightText]}>
        Lorem ipsum dolor sit amet consectetur. Lectus potenti diam nisl leo
        enim eget feugiat ante convallis. Orci massa velit nisl leo interdum eu.
      </Text>
      <Text style={styles.boldText}>Status: Available</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutUser: {
    backgroundColor: THEME.COLORS.lightGrayBackground,
    width: widthPercentageToDP(90),
    padding: 15,
    borderRadius: 9,
  },
  aboutTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  boldText: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: fontSizeToDp(3.2),
  },
  lightText: {
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3.1),
  },
  button: {
    backgroundColor: THEME.COLORS.primary,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  buttonText: { color: "#fff", fontSize: fontSizeToDp(2.5) },
  group: {
    paddingVertical: 12,
    color: "#787878",
  },
});
