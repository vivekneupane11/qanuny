import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../components/Header";
import OTPInput from "../components/OTPInput";
import { THEME } from "../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../utils/Responsive";

const OTP = () => {

  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="OTP Verify" />
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.content}>
    

        <View style={styles.info}>
          <Text style={styles.largeText}>Send OTP</Text>
          <Text style={[styles.lightText, styles.lefter]}>
          We have sent an 4 digit OTP to the mentioned email: john*********@gmail.com
          </Text>
      
        </View>

        <View style={styles.formGroup}>
        <OTPInput length={4} onOTPChange={()=>{}}/>
        </View>
        <View style={styles.groupBottom}>
          <Text style={styles.textLeft}>If don’t received the code? </Text>
          <Link href={"/"} asChild>
            <Text style={styles.textRight}>Resent </Text>
          </Link>
        </View>
        <Link href="/verify" asChild>
        <TouchableOpacity style={styles.button} onPress={() => {}} >
          <Text style={styles.buttonText}>Verify Now</Text>
        </TouchableOpacity>
        </Link>

      
      </View>
    </ScrollView>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(3),
  },
  formGroup: {
    paddingVertical: heightPercentageToDP(2),
  },

  lightText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3),
    marginTop: 3,
    color: THEME.COLORS.primaryTextColor,
    textAlign: "center",
  },


  right: {},
  forgotText: {
    fontSize: fontSizeToDp(3.3),
  },
  groupBottom: {
    marginBottom: heightPercentageToDP(6),

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
