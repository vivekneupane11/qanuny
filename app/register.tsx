import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";

import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Buttons";
import GoogleButton from "../components/GoogleButton";
import CustomHeader from "../components/Header";
import TextInputWithIcon from "../components/TextInputWithIcon";
import { THEME } from "../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../utils/Responsive";

const RegisterPage = () => {
  const [isChecked, setChecked] = useState(false);

  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Create Account" />
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.content}>
        <View style={styles.greetings}>
          <Text style={styles.boldText}>Welcome,</Text>
          <Text style={styles.lightText}>Create new account!</Text>
          <Image
            style={styles.arrow}
            source={require("../assets/Onboard/arrow.png")}
          />
        </View>
        <View style={styles.formGroup}>
        <TextInputWithIcon
            label="Full Name"
            placeholder="Enter your full name"
            iconName="email"
            secureEntry={false}
          />
          <TextInputWithIcon
            label="Email"
            placeholder="Enter your email"
            iconName="email"
            secureEntry={false}
          />
   <TextInputWithIcon
            label="Phone"
            placeholder="(000) 000-0000"
            iconName="email"
            secureEntry={false}
          />
          <TextInputWithIcon
            label="Create Password"
            placeholder="Enter your password"
            iconName="lock-outline"
            secureEntry={true}
          />
        </View>
       
        <Button title="Sign In" onPress={() => {}} />
        <GoogleButton title="Sign In With Google" onPress={() => {}} />

        <View style={styles.groupBottom}>
          <Text style={styles.textLeft}>Don't have an account?</Text>
          <Link href={'/'} asChild>
          <Text style={styles.textRight}>Sign In</Text>
          </Link>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow:1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(5),
  },
  formGroup: {
    paddingTop: heightPercentageToDP(2),
  },
  greetings: {
    position: "relative",
    width: widthPercentageToDP(90),
  },
  boldText: {
    fontFamily: "Mulish_900Black",
    fontSize: fontSizeToDp(7),
    color: THEME.COLORS.primaryTextColor,
  },
  lightText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.7),
    marginTop: 3,
    color: THEME.COLORS.primaryTextColor,
  },
  arrow: {
    position: "absolute",
    right: 0,
    top: heightPercentageToDP(3),
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: widthPercentageToDP(1),
    marginBottom: 20,
    marginTop: 2,
  },
  checkbox: {
    height: 15,
    width: 15,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    marginLeft: 10,
    fontSize: fontSizeToDp(3.3),
  },
  right: {},
  forgotText: {
    fontSize: fontSizeToDp(3.3),
  },
  groupBottom: {
    marginTop: heightPercentageToDP(3),
    flexDirection: "row",
    justifyContent:'center'
  },
  textLeft: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.3),
    color: THEME.COLORS.secondaryDarkTextColor,
  },
  textRight: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(3.3),
    paddingLeft:6

  },
});
