import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../components/Header";
import TextInputWithIcon from "../components/TextInputWithIcon";
import { THEME } from "../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../utils/Responsive";

const ForgetPassword = () => {

  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Mot de passe oublié" />
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.content}>
        <View style={styles.greetings}>
          <Image
            style={styles.images}
            source={require("../assets/Onboard/recovery-password.png")}
          />
          <Text style={styles.boldText}>Recovery Password</Text>
          <Text style={styles.lightText}>
            Please Enter Your Email Address To Receive a Verification Code
          </Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.largeText}>Send OTP</Text>
          <Text style={[styles.lightText, styles.lefter]}>
            Select a method to receive the OTP
          </Text>
          <View style={styles.buttonActions}>
            <TouchableOpacity style={styles.chipButton}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="#fff"
              />
              <Text style={styles.chipButtonText}>Email</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>router.push('/otp')} style={[styles.chipButton, styles.chipGray]}>
              <Ionicons name="phone-portrait-sharp" size={24} color="#666666" />
              <Text style={[styles.chipButtonText, styles.grayText]}>
                Phone
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formGroup}>
          <TextInputWithIcon
            label="Email Address"
            placeholder="Enter your email"
            iconName="email"
            secureEntry={false}
          />
        </View>

        <Link href="/newpassword" asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sent Code</Text>
        </TouchableOpacity>
        </Link>

        <View style={styles.groupBottom}>
          <Text style={styles.textLeft}>Go to</Text>
          <Link href={"/"} asChild>
            <Text style={styles.textRight}>Login </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

export default ForgetPassword;

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
    paddingVertical: heightPercentageToDP(2),
  },
  greetings: {
    width: widthPercentageToDP(90),
    justifyContent: "center",
    alignItems: "center",
  },
  boldText: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4.4),
    paddingVertical: 8,
  },
  lightText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3),
    marginTop: 3,
    color: THEME.COLORS.primaryTextColor,
    width: widthPercentageToDP(75),
    textAlign: "center",
  },
  images: {
    marginVertical: heightPercentageToDP(1),
  },

  right: {},
  forgotText: {
    fontSize: fontSizeToDp(3.3),
  },
  groupBottom: {
    marginTop: heightPercentageToDP(3),
    flexDirection: "row",
    justifyContent: "center",
  },
  textLeft: {
    fontFamily: "Mulish_300Light",
    fontSize: fontSizeToDp(3.8),
    color: THEME.COLORS.secondaryDarkTextColor,
  },
  textRight: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(3.8),
    paddingLeft: 6,
  },
  info: {
    justifyContent: "flex-start",
    paddingTop: heightPercentageToDP(3),
    paddingBottom: heightPercentageToDP(1),
  },
  largeText: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: fontSizeToDp(4.4),
  },
  lefter: {
    textAlign: "left",
    paddingVertical: heightPercentageToDP(1.2),
  },
  buttonActions: {
    flexDirection: "row",
    paddingTop:heightPercentageToDP(1.5),
  },
  chipButton: {
    backgroundColor: THEME.COLORS.primary,
    paddingVertical: heightPercentageToDP(1.6),
    paddingHorizontal: widthPercentageToDP(8),
    borderRadius: 5,
    marginRight: widthPercentageToDP(4),
    flexDirection: "row",
  },
  chipButtonText: {
    color: "#fff",
    marginLeft:widthPercentageToDP(2),
    fontFamily:'Mulish_400Regular'
  },
  grayText: {
    color: THEME.COLORS.secondaryDarkTextColor,
  },
  chipGray: {
    backgroundColor: THEME.COLORS.secondaryLightTextColor,
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
