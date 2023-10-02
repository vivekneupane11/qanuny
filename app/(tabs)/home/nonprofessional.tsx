import Checkbox from "expo-checkbox";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import AppointmentSection from "../../../components/AppointmentSection";
import NonProfBanner from "../../../components/Banner/NonProfBanner";
import DocumentSection from "../../../components/DocumentSection";
import CardComponent from "../../../components/LawyerCard";
import SearchBar from "../../../components/SearchInput";
import SectionHeader from "../../../components/SectionHeader";
import TabsHeader from "../../../components/TabsHeader";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";

const Home = () => {
  const [date, setDate] = useState<any>(new Date());
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <TabsHeader title="Mot de passe oublié" logo={true} avatar={true} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <SearchBar transparent={false} />
          <NonProfBanner />

          <SectionHeader leftTitle="Search lawyer" rightTitle="See All" />
          <FlatList
            data={[0, 1, 2, 3, 4, 5]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={() => (
              <CardComponent
                imageSource="https://cache.careers360.mobi/media/article_images/2023/2/14/types-of-lawyers.webp"
                name="Jacob Jones"
                designation="Family Law Specialist"
                price="$50"
                country="Nepal"
                rating="4.9"
              />
            )}
          />

          <SectionHeader leftTitle="Recent Documents" rightTitle="See All" />
          <View style={styles.grouper}>
            <View style={[styles.grouper, { paddingVertical: 0 }]}>
              <Checkbox style={styles.checkbox} />
              <Text style={styles.title}>File Name</Text>
            </View>
            <Text style={styles.title}>File Type</Text>
            <Text style={styles.title}>Upload Date</Text>
            <Text style={styles.title}>Total</Text>
          </View>
          <DocumentSection />
          <DocumentSection />
          <DocumentSection />
          <DocumentSection />
          <DocumentSection />
          <AppointmentSection />
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
  checkbox: {
    marginRight: 6,
    height: 18,
    width: 18,
  },
  grouper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: heightPercentageToDP(1),
  },
  title: {
    fontSize: fontSizeToDp(3.1),
    fontFamily: "Mulish_700Bold",
  },
});
