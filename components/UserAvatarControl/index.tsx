import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";
import RoundAvatar from "../Avatar";
import Chip from "../Chip";
import MessageChip from "../MessageChip";

export default function UserAvatarControl({ message }: { message?: boolean }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <RoundAvatar
          source={{
            uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
          }}
          size={60}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Micheal Jordan</Text>
          <View style={styles.userActiveInfo}>
            <SimpleLineIcons name="clock" size={12} color="black" />
            <Text style={styles.time}>10:30 pm</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightSection}>
        {message ? <MessageChip /> : <Chip />}
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
  leftSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightSection: {},
  userInfo: {
    paddingHorizontal: widthPercentageToDP(2),
  },
  userName: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4.1),
  },
  time: {
    paddingHorizontal: 4,
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.1),
    color: THEME.COLORS.secondaryDarkTextColor,
  },
  userActiveInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 4,
  },
});
