import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";
import TransparentTextInput from "../TransparentInput";

export default function NonProfessionalForm() {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingBottom: 10 }]}>
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
      <View style={styles.formGroup}>
        <View style={styles.group}>
          <Text style={styles.label}>Date of Birth</Text>
          <TransparentTextInput placeholder="01-02-1998" />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Designation</Text>
          <TransparentTextInput placeholder="Jr. Lawyer" />
        </View>
      </View>
      <View style={styles.formGroup}>
        <View style={styles.group}>
          <Text style={styles.label}>Private Company</Text>
          <TransparentTextInput placeholder="Nation Law" />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Siret Number</Text>
          <TransparentTextInput placeholder="4522" />
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.lightBackground]}
        >
<Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: heightPercentageToDP(2),
  },
  headerTitle: {
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3.8),
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: heightPercentageToDP(1),
  },
  group: {
    width: widthPercentageToDP(43),
  },

  individualForm: {
    marginVertical: heightPercentageToDP(1),
  },
  label: {
    fontFamily: "Mulish_400Regular",
    color: THEME.COLORS.secondaryDarkTextColor,
  },
  labelBold: {
    fontFamily: "Mulish_500Medium",
    color: THEME.COLORS.primary,
  },
  button: {
    width: widthPercentageToDP(42),
    backgroundColor: THEME.COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 9,
  },
  grouper: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: heightPercentageToDP(4),
  },
  lightBackground: {
    backgroundColor: THEME.COLORS.secondaryLightTextColor,
  },

  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontFamily:'Mulish_700Bold',
    fontSize:fontSizeToDp(4)
  }
});
