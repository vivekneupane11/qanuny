import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import AppointmentSection from "../../../components/AppointmentSection";
import Banner from "../../../components/Banner";
import DatePicker from "../../../components/Datepicker";
import DocumentSection from "../../../components/DocumentSection";
import SearchBar from "../../../components/SearchInput";
import SectionHeader from "../../../components/SectionHeader";
import TabsHeader from "../../../components/TabsHeader";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";

const Home = () => {
  const [date, setDate] = useState<any>(new Date());
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home/nonprofessional");
  };

  return (
    <View style={styles.container}>
      <TabsHeader title="Mot de passe oublié" logo={true} avatar={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <TouchableOpacity onPress={()=>router.push('/search')}>
          <SearchBar transparent={false} />

          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} >
          <Banner />

          </TouchableOpacity>
          <DatePicker />
          <AppointmentSection />
          <SectionHeader leftTitle="Current Document" rightTitle="See All" />
        
          <DocumentSection />
          <DocumentSection />
          <DocumentSection />
          <DocumentSection />
          <DocumentSection />
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
    paddingTop: heightPercentageToDP(1),
  },

});
