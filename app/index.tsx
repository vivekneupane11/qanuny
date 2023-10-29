import Checkbox from "expo-checkbox";
import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";

import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GoogleButton from "../components/GoogleButton";
import CustomHeader from "../components/Header";
import TextInputWithIcon from "../components/TextInputWithIcon";
import { THEME } from "../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../utils/Responsive";

const LoginPage = () => {
  const [isChecked, setChecked] = useState(false);

  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Sign In" />
      <View style={styles.content}>
        <View style={styles.greetings}>
          <Text style={styles.boldText}>Hello,</Text>
          <Text style={styles.lightText}>Welcome Back!</Text>
          <Image
            style={styles.arrow}
            source={require("../assets/Onboard/arrow.png")}
          />
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
          <View>
            <Link href={"/forgetpassword"} asChild>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Link>
          </View>
        </View>
       <Link href={'/(tabs)/home'} asChild>
       <TouchableOpacity style={styles.button} onPress={() => {}} >
        <Text style={styles.buttonText}>Sign In</Text>
       </TouchableOpacity>
       </Link>
        <GoogleButton title="Sign In With Google" onPress={() => {}} />

        <View style={styles.groupBottom}>
          <Text style={styles.textLeft}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>router.push('/register')} >
          <Text style={styles.textRight}>Sign up</Text>
            <Image style={styles.underlineImage} source={require('../assets/Onboard/underline-signin.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(3),
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
  forgotText: {
    fontSize: fontSizeToDp(3.3),
  },
  groupBottom: {
    marginTop: heightPercentageToDP(3),
    flexDirection: "row",
    justifyContent: "center",
    alignItems:"flex-start"
  },
  textLeft: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.3),
    color: THEME.COLORS.secondaryDarkTextColor,
  },
  textRight: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(3.3),
    paddingLeft: 6,
  },
  underlineImage:{
    marginTop:4,
    marginLeft:10
  },
  button:{
    backgroundColor:THEME.COLORS.primary,
    color:'#fff',
    paddingVertical:heightPercentageToDP(2),
    marginTop:heightPercentageToDP(1),
    borderRadius:12
  },
  buttonText:{
    color:'#fff',
    textAlign:'center',
    fontFamily:'Mulish_700Bold',
    fontSize:fontSizeToDp(4.3)
  }
});
