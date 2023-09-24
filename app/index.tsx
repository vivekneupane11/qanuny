import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import CustomHeader from "../components/Header";
import { THEME } from "../constants/Theme";
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from "../utils/Responsive";

const LoginPage = () => {
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
          <Image style={styles.arrow} source={require('../assets/Onboard/arrow.png')} />
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
    backgroundColor:'#fff'
  },
  content: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(5),
  },
  greetings: {
    position:'relative',
    width:widthPercentageToDP(90),
  },
  boldText:{
    fontFamily:'Mulish_900Black',
    fontSize:fontSizeToDp(7),
    color:THEME.COLORS.primaryTextColor
  },
  lightText:{
    fontFamily:'Mulish_400Regular',
    fontSize:fontSizeToDp(3.7),
    marginTop:3,
    color:THEME.COLORS.primaryTextColor

  },
  arrow:{
    position:'absolute',
    right:0,
    top:heightPercentageToDP(3)
  }
});
