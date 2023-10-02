import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import HeaderWithIcon from "../../components/HeaderWithIcon";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";

import { FontAwesome } from "@expo/vector-icons";
import RoundAvatar from "../../components/Avatar";
import { THEME } from "../../constants/Theme";
export default function ImageBackgroundHead() {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://images.pexels.com/photos/696407/pexels-photo-696407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        }}
        style={styles.header}
      >
        <HeaderWithIcon title={"Lawyer Profile"} color="#fff">
          <Ionicons name="notifications" size={28} color={"#fff"} />
        </HeaderWithIcon>
        <View style={styles.avatarFloat}>
          <RoundAvatar
            source={{
              uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
            }}
            size={110}
            online={true}
          />
        </View>
      </ImageBackground>
      <View style={styles.rating}>
        <View style={styles.row}>
          <FontAwesome
            style={{ marginHorizontal: 1 }}
            name="star"
            size={22}
            color="#FFA500"
          />
          <FontAwesome
            style={{ marginHorizontal: 1 }}
            name="star"
            size={22}
            color="#FFA500"
          />
          <FontAwesome
            style={{ marginHorizontal: 1 }}
            name="star"
            size={22}
            color="#FFA500"
          />
          <FontAwesome
            style={{ marginHorizontal: 1 }}
            name="star"
            size={22}
            color="#FFA500"
          />
          <FontAwesome
            style={{ marginHorizontal: 1 }}
            name="star"
            size={22}
            color="#FFA500"
          />
          <Text style={styles.ratingCount}>4.7</Text>
        </View>
        <Text style={styles.review}>235 Reviews</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.rowGroup}>
          <Text style={styles.userName}>Darlene Robertson</Text>
          <Ionicons name="shield-checkmark-sharp" size={24} color="#05D4ED" />
        </View>
        <Text style={styles.designation}>Jr. Lawyer at Judicial Court</Text>
        <View style={styles.rowGroup}>
          <Entypo
            style={{ marginRight: 5 }}
            name="facebook"
            size={20}
            color={THEME.COLORS.secondaryDarkTextColor}
          />
          <FontAwesome5
            name="facebook-messenger"
            style={{ marginRight: 5 }}
            size={20}
            color={THEME.COLORS.secondaryDarkTextColor}
          />

          <Entypo
            style={{ marginRight: 5 }}
            name="facebook"
            size={20}
            color={THEME.COLORS.secondaryDarkTextColor}
          />
          <FontAwesome5
            name="facebook-messenger"
            style={{ marginRight: 5 }}
            size={20}
            color={THEME.COLORS.secondaryDarkTextColor}
          />
          <Entypo
            style={{ marginRight: 5 }}
            name="facebook"
            size={20}
            color={THEME.COLORS.secondaryDarkTextColor}
          />
        </View>
        <View style={styles.rowGroup}>
          <View style={[styles.rowGroup, { alignItems: "center" }]}>
            <FontAwesome
              name="map-marker"
              style={{ marginRight: 5 }}
              size={22}
              color={THEME.COLORS.secondaryDarkTextColor}
            />

            <Text style={styles.info}>Los Angeles</Text>
          </View>
          <View style={[styles.rowGroup, { alignItems: "center" }]}>
            <MaterialCommunityIcons
              name="email-outline"
              style={{ marginRight: 5 }}
              size={22}
              color={THEME.COLORS.secondaryDarkTextColor}
            />
            <Text style={styles.info}>emailme@gmail.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: heightPercentageToDP(30),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: widthPercentageToDP(100),
  },
  rating: {
    justifyContent: "flex-end",
    paddingTop: heightPercentageToDP(1),
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: widthPercentageToDP(5),
  },
  review: {
    textAlign: "right",
    paddingHorizontal: widthPercentageToDP(5),
    color: THEME.COLORS.secondaryDarkTextColor,
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.2),
    paddingVertical: 5,
  },
  ratingCount: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4.5),
    paddingLeft: 8,
  },
  avatarFloat: {
    position: "absolute",
    bottom: -60,
    left: 20,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 999,
  },
  infoContainer: {
    marginHorizontal: widthPercentageToDP(5),
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
    borderColor: THEME.COLORS.secondaryLightTextColor,
  },
  rowGroup: {
    flexDirection: "row",
    paddingTop: heightPercentageToDP(0.5),
  },
  userName: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4),
    paddingRight: 5,
  },
  designation: {
    fontFamily: "Mulish_400Regular",
    color: THEME.COLORS.secondaryDarkTextColor,
    paddingTop: 4,
    paddingBottom: 2,
  },
  info: {
    fontFamily: "Mulish_400Regular",
    marginRight: 12,
    paddingVertical: 6,
  },
});
