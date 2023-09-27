import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomHeader from "../../components/Header";
import SearchBar from "../../components/SearchInput";
import SettingList from "../../components/SettingsList";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "../../utils/Responsive";

const Profile = () => {

  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Réglages"/>
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.content}>
    <SearchBar transparent={true}/>
    <View style={styles.grouper}>
    <SettingList/>

    </View>
    <Text>Account</Text>
    
       
   
      
      </View>
    </ScrollView>
    </View>
  );
};

export default Profile;

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
    paddingTop: heightPercentageToDP(1),
    justifyContent:'flex-start',
    alignItems:'center'
  },
  grouper:{
    paddingVertical:heightPercentageToDP(2.5)
  }
});
