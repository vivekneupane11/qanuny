import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../components/Buttons";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP
} from "../utils/Responsive";

const OTP = () => {

  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.content}>
    
    <Image  source={require('../assets/Onboard/check.png')}/>
     <Text style={styles.boldText}>
     Félicitation
     </Text>
     <Text style={styles.lightText}>
     Votre mot de passe ont été modifié avec succès
     </Text>

    
       
       <View style={styles.buttonAction}>
       <Link href="/chooseprofile" asChild    >
        <Button title="Acceuil" onPress={() => {}} />
        </Link>
       </View>

      
      </View>
    </ScrollView>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  content: {
    flex:1,
    width:widthPercentageToDP(100),
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(3),
    justifyContent:'center',
    alignItems:'center'
  },
  boldText:{
    fontFamily:'Mulish_700Bold',
    marginTop:heightPercentageToDP(2),
    fontSize:fontSizeToDp(6)
  },
  lightText:{
    fontFamily:'Mulish_400Regular',
    textAlign:'center',
    paddingVertical:heightPercentageToDP(2)
  },
  buttonAction:{
    marginTop:heightPercentageToDP(20),
    width:widthPercentageToDP(90)
  }
});
