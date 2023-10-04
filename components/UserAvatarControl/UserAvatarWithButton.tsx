import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../utils/Responsive";
import RoundAvatar from "../Avatar";
import NewChip from "../MessageChip/NewChip";

type UserAvatarProps = {
  message?: boolean;
  badge?: boolean;
  chipText?: string;
  to?: string;
  highlight?: boolean;
  messageText?: string;
  isNew?: boolean;
};
export default function UserAvatarWithButton({
  message,
  to,
  highlight,
  messageText,
  isNew,
}: UserAvatarProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push(`${to ? to : "/chat"}`)}
      style={[styles.container, highlight && styles.highlight]}
    >
      <View style={styles.leftSection}>
        <RoundAvatar
          source={{
            uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
          }}
          size={55}
        />
        <View style={styles.userInfo}>
          <View style={styles.row}>
            <Text style={[styles.userName, highlight && styles.highlightText]}>
              Micheal Jordan
            </Text>
            {isNew && <NewChip chipText="new" />}
          </View>
          {messageText ? (
            <View style={styles.userActiveInfo}>
              <Text style={styles.time}>{messageText}</Text>
            </View>
          ) : (
            <View style={styles.userActiveInfo}>
              <SimpleLineIcons
                name="clock"
                size={12}
                color={THEME.COLORS.secondaryDarkTextColor}
              />
              <Text style={styles.time}>10:30 am</Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.iconContainer}>
          <AntDesign name="plus" size={24} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: heightPercentageToDP(1.5),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: widthPercentageToDP(3),
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
    fontSize: fontSizeToDp(3.8),
  },
  time: {
    paddingHorizontal: 4,
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3.1),
    color: THEME.COLORS.secondaryLightTextColor,
  },
  userActiveInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: heightPercentageToDP(0.6),
  },
  highlight: {
    backgroundColor: THEME.COLORS.primary,
    borderRadius: 9,
  },
  highlightText: {
    color: "#fff",
  },
  row: {
    flexDirection: "row",
  },
  iconContainer: {
    backgroundColor: "#05D4ED",
    padding:6,
    borderRadius:6
  },
});
