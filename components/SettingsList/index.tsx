import { MaterialIcons } from "@expo/vector-icons";

import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";
export default function SettingList({
  active,
  title,
  children
}: {
  active: boolean;
  title: string;
  children:React.JSX.Element
}) {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={()=> router.push('/profile/vivek')} style={[styles.content, active && styles.highlight]}>
      <View style={styles.leftContent}>
      {children}
        <Text style={[styles.menuTitle, active && styles.whiteText]}>
          {title}
        </Text>
      </View>
      {!active ? (
        <MaterialIcons
          name="keyboard-arrow-down"
          size={32}
          color={active ? "#fff" : THEME.COLORS.iconColor}
        />
      ) : (
        <MaterialIcons
          name="keyboard-arrow-right"
          size={32}
          color={active ? "#fff" : THEME.COLORS.iconColor}
        />
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: widthPercentageToDP(90),
    paddingHorizontal: widthPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.5),
    marginVertical: heightPercentageToDP(0.5),
    backgroundColor: "transparent",
  },
  leftContent: {
    flexDirection: "row",
  },
  menuTitle: {
    fontFamily: "Mulish_500Medium",
    marginLeft: widthPercentageToDP(2.5),
    fontSize: fontSizeToDp(3.8),
    color: THEME.COLORS.iconColor,
  },
  whiteText: {
    color: "#fff",
  },
  highlight: {
    backgroundColor: THEME.COLORS.primary,
  },
});
