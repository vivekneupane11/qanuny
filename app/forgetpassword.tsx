import Checkbox from "expo-checkbox";
import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";

import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
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

const PasswordRecovery = () => {
  const [isChecked, setChecked] = useState(false);

  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Mot de passe oublié" />
      <View style={styles.content}>
        <View style={styles.greetings}>
        <Image
            style={styles.images}
            source={require("../assets/Onboard/recovery-password.png")}
          />
          <Text style={styles.lightText}>Please Enter Your Email Address To Receive a Verification Code</Text>
          
        </View>
        <View style={styles.formGroup}>
          <TextInputWithIcon
            label="Email"
            placeholder="Enter your email"
            iconName="email"
            secureEntry={false}
          />

          <TextInputWithIcon
            label="Password"
            placeholder="Enter your password"
            iconName="lock-outline"
            secureEntry={true}
          />
        </View>
        <View style={styles.group}>
          <View style={styles.left}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#4630EB" : undefined}
            />

            <Text style={styles.rememberText}>Remember</Text>
          </View>
          <View style={styles.right}>
           <Link href={'/forgetpassword'} asChild>
           <Text style={styles.forgotText}>Forgot Password?</Text>
           </Link>
          </View>
        </View>
        <Button title="Sign In" onPress={() => {}} />
        <GoogleButton title="Sign In With Google" onPress={() => {}} />

        <View style={styles.groupBottom}>
          <Text style={styles.textLeft}>Don't have an account?</Text>
          <Link href={'/register'} asChild>
          <Text style={styles.textRight}>Sign up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default PasswordRecovery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: widthPercentageToDP(90),
    justifyContent:'center',
    alignItems:'center'
  },

  lightText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.3),
    marginTop: 3,
    color: THEME.COLORS.primaryTextColor,
    width:widthPercentageToDP(75),
    textAlign:'center'
  },
  images: {
  
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
