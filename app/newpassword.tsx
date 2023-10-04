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

const NewPassword = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Set New Password" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <View style={styles.greetings}>
            <Image
              style={styles.images}
              source={require("../assets/Onboard/set-password.png")}
            />
            <Text style={styles.boldText}>Créer nouveau mot de passe</Text>
            <Text style={styles.lightText}>
              Veuillez définir un nouveau mot de passe et le conserver
              précieusement.
            </Text>
          </View>

          <View style={styles.formGroup}>
            <TextInputWithIcon
              label="Mot de passe"
              placeholder="Enter your password"
              iconName="lock-outline"
              secureEntry={true}
            />
            <TextInputWithIcon
              label="Confirmer mot de passe"
              placeholder="Enter your password"
              iconName="lock-outline"
              secureEntry={true}
            />
          </View>
          <Link href="/otp" asChild>
          <TouchableOpacity onPress={() => {}} style={styles.button} >
<Text style={styles.buttonText}>Enregistrer</Text>
            </TouchableOpacity>
        </Link>

       
        </View>
      </ScrollView>
    </View>
  );
};

export default NewPassword;

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
    paddingVertical: heightPercentageToDP(4),
  },
  greetings: {
    width: widthPercentageToDP(90),
    justifyContent: "flex-start",
    alignItems: "flex-start",
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
  },
  images: {
    marginVertical: heightPercentageToDP(1),
    alignSelf: "center",
  },

  right: {},
  forgotText: {
    fontSize: fontSizeToDp(3.3),
  },

  info: {
    justifyContent: "flex-start",
    paddingTop: heightPercentageToDP(3),
    paddingBottom: heightPercentageToDP(1),
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
