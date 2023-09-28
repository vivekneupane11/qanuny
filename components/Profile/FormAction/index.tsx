import { SimpleLineIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";
import Button from "../../Buttons";
import TransparentTextInput from "../TransparentInput";

export default function FormActions() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>User Name</Text>
        <SimpleLineIcons
          name="pencil"
          size={16}
          color={THEME.COLORS.secondaryDarkTextColor}
        />
      </View>
      <TransparentTextInput placeholder={"Enter your username"} />
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { fontFamily: "Mulish_700Bold" }]}>
          Basic Info
        </Text>
        <SimpleLineIcons
          name="pencil"
          size={16}
          color={THEME.COLORS.secondaryDarkTextColor}
        />
      </View>
      <View style={styles.formGroup}>
        <View style={styles.group}>
          <Text style={styles.label}>First Name</Text>
          <TransparentTextInput placeholder="John" />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Last Name</Text>
          <TransparentTextInput placeholder="Smith" />
        </View>
      </View>
      <View style={styles.individualForm}>
        <Text style={styles.labelBold}>Lawyer's Degree Name</Text>
        <TransparentTextInput placeholder="Smith" />
      </View>
      <View style={styles.individualForm}>
        <Text style={styles.labelBold}>Lawyer's Degree Name</Text>
        <TransparentTextInput placeholder="Smith" />
      </View>
      <View style={styles.individualForm}>
        <Text style={styles.labelBold}>Lawyer's Degree Name</Text>
        <TransparentTextInput placeholder="Smith" />
      </View>
      <View style={styles.individualForm}>
        <Text style={styles.labelBold}>Lawyer's Degree Name</Text>
        <TransparentTextInput placeholder="Smith" />
      </View>
     <Link href="/(tabs)/feedback" asChild>
     <Button title="Submit It"/>
     </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: heightPercentageToDP(1),
    paddingBottom: heightPercentageToDP(1),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: widthPercentageToDP(90),
    paddingTop: heightPercentageToDP(2),
    paddingBottom: heightPercentageToDP(1),
  },
  headerTitle: {
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3.8),
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: heightPercentageToDP(2),
  },
  group: {
    width: widthPercentageToDP(42),
  },
  individualForm: {
    marginVertical: heightPercentageToDP(1),
  },
  label: {
    fontFamily: "Mulish_400Regular",
    color: THEME.COLORS.iconColor,
  },
  labelBold: {
    fontFamily: "Mulish_500Medium",
    color: THEME.COLORS.primary,
  },
});
