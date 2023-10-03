import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import LawyerSection from "../../../components/DocumentSection/LawyerSection";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import PaymentBanner from "../../../components/PaymentBanner";
import SearchBar from "../../../components/SearchInput";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP
} from "../../../utils/Responsive";

const PaymentScreen = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderWithIcon title={"Payment"} color={THEME.COLORS.primaryTextColor}>
          <Ionicons name="notifications" size={28} color={THEME.COLORS.secondaryDarkTextColor} />
        </HeaderWithIcon>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SearchBar transparent={false} />
        <SectionHeader leftTitle="Payment Complete" rightTitle="See all"/>
        <PaymentBanner/>

        <SectionHeader leftTitle="My Invoice" rightTitle="See All" />
        <View style={styles.grouper}>
            <View style={[styles.grouper, { paddingVertical: 0 }]}>
              <Checkbox style={styles.checkbox} />
              <Text style={styles.title}>Service Name</Text>
            </View>
            <Text style={styles.title}>Hours</Text>
            <Text style={styles.title}>Rate </Text>
            <Text style={styles.title}>Total</Text>
          </View>
          <LawyerSection/>
          <LawyerSection/>
          <LawyerSection/>
          <LawyerSection/>
          <LawyerSection/>
          <LawyerSection/>

      </ScrollView>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
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
