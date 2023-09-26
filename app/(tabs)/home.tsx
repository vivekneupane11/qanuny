import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../../components/Banner";
import DatePicker from "../../components/Datepicker";
import SearchBar from "../../components/SearchInput";
import SectionHeader from "../../components/SectionHeader";
import TabsHeader from "../../components/TabsHeader";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "../../utils/Responsive";

const Home = () => {
  const [date,setDate] = useState<any>( new Date())
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <TabsHeader title="Mot de passe oublié" logo={true} avatar={true} />
    <ScrollView contentContainerStyle={{flexGrow:1}}>
    <View style={styles.content}>
      <SearchBar/>
      <Banner/>
  <DatePicker/>
  <SectionHeader/>
     <Text>hi</Text>
      </View>
    </ScrollView>
    </View>
  );
};

export default Home;

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
 
});
