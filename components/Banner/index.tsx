import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";

export default function Banner() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerTop}>
        <View>
          <View style={styles.greeting}>
            <Text style={styles.greetText}>Good Afternoon</Text>
            <Fontisto
              name="day-cloudy"
              style={{ marginLeft: 5 }}
              size={14}
              color="#fff"
            />
          </View>
          <Text style={styles.greetName}>John Hopper</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeLeft}>02:30 PM </Text>
          <Text style={styles.dot}>.</Text>
          <Text style={styles.timeRight}>19 Feb 2023</Text>
        </View>
      </View>

      <View style={styles.bannerBottom}>
        <View style={styles.borderRight}>
          <View style={[styles.bannerGroup]}>
            <View style={styles.iconContainer}>
              <Feather name="video" size={18} color="#000" />
            </View>
            <Text style={styles.greetName}>05</Text>
          </View>

          <Text style={styles.label}>Todays Meeting</Text>
        </View>
        <View>
          <View style={[styles.bannerGroup]}>
            <View style={styles.iconContainer}>
             
              <Ionicons name="hammer-outline" size={18} color="#000" />
            </View>
            <Text style={styles.greetName}>375</Text>
          </View>

          <Text style={styles.label}>Successful Cases </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(1.8),
    backgroundColor: THEME.COLORS.primary,
    marginTop: heightPercentageToDP(2.5),
    borderRadius: 14,
    width:'100%'
  },
  bannerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  greeting: {
    flexDirection: "row",
  },
  greetText: {
    fontFamily: "Mulish_300Light",
    color: "#fff",
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeLeft: {
    fontFamily: "Mulish_300Light",
    fontSize: fontSizeToDp(2.5),
    color: THEME.COLORS.lightGrayBackground,
  },
  timeRight: {
    fontFamily: "Mulish_300Light",
    fontSize: fontSizeToDp(2.5),
    color: THEME.COLORS.lightGrayBackground,
  },
  dot: {
    height: 5,
    width: 5,
    backgroundColor: "#fff",
    marginHorizontal: 8,
    borderRadius: 999,
  },
  greetName: {
    fontFamily: "Mulish_900Black",
    fontSize: fontSizeToDp(4.3),
    color: "#fff",
    paddingTop: 4,
  },
  bannerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: heightPercentageToDP(3),
    paddingBottom: heightPercentageToDP(1),
  },
  bannerGroup: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "#fff",
    width:widthPercentageToDP(8),
    aspectRatio:1,
    borderRadius: 999,
    marginRight: 6,
    justifyContent:'center',
    alignItems:'center'
  },
  label: {
    color: "#fff",
    fontSize: fontSizeToDp(2.7),
    paddingTop: heightPercentageToDP(1),
  },
  borderRight: {
    borderRightColor: THEME.COLORS.secondaryDarkTextColor,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingRight: widthPercentageToDP(4),
  },
  button: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
    padding: 2,
    borderRadius: 3,
  },
  buttonText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(2.5),
    paddingVertical: 3,
    paddingHorizontal: widthPercentageToDP(1.25),
  },
});
