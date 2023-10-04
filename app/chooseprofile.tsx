import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../components/Header";
import { THEME } from "../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../utils/Responsive";

const ChooseProfile = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
                <CustomHeader logo={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <Text style={styles.boldText}>Choose your profile type</Text>

          <Text style={styles.lightText}>Create new account </Text>

          <View style={styles.grouper}>
            <View style={styles.group}>
              <Image style={{tintColor:'#fff'}} source={require("..//assets/Onboard/userlogo.png")} />
              <Text style={styles.groupText}>Professional Profile</Text>
            </View>
            <View style={[styles.group,{backgroundColor:'#F0F0F0'}]}>
              <Image source={require("..//assets/Onboard/userlogo.png")} />

              <Text style={[styles.groupText,{fontFamily:'Mulish_300Light',color:'#666666'}]}>Non-Professional Profile</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoContent}>
              Note: Professional Profile: "For legal experts, attorneys, and
              professionals in the field who require specialized services and
              resources. and Non-Professional Profile: "For individuals seeking
              legal assistance without specialized expertise, tailored for
              general clients and consumers.
            </Text>
          </View>

          <View style={styles.buttonAction}>
            <Link href="/(tabs)/home" asChild>
              <TouchableOpacity style={styles.button} onPress={() => {}} >
<Text style={styles.buttonText}>Confirm</Text>
                </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ChooseProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    width: widthPercentageToDP(100),
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(3),
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  boldText: {
    fontFamily: "Mulish_700Bold",
    marginTop: heightPercentageToDP(1),
    fontSize: fontSizeToDp(6),
  },
  lightText: {
    fontFamily: "Mulish_400Regular",
    paddingVertical: heightPercentageToDP(1),
  },
  buttonAction: {
    marginTop: heightPercentageToDP(5),
    width: widthPercentageToDP(90),
  },
  infoContainer: {
    backgroundColor: "#F4F4F4",
    padding: 15,
    borderRadius: 12,
    marginVertical: heightPercentageToDP(5),
  },
  infoContent: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3),
    lineHeight: 20,
    color:THEME.COLORS.primaryTextColor
  },
  grouper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width:widthPercentageToDP(90),
    marginTop:25,
  },
  group: {
    paddingTop:30,
    paddingBottom:20,
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:THEME.COLORS.primary,
    borderRadius:12,
    width:widthPercentageToDP(42)

  },
  groupText: {
    fontFamily: "Mulish_900Black",
    color:'#fff',
    textAlign:'center',
    paddingVertical:heightPercentageToDP(1)
    
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
