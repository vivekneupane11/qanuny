import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../../components/Buttons";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import TransparentTextInput from "../../../components/Profile/TransparentInput";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../../utils/Responsive";

const PaymentSummary = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderWithIcon
        title={" Payment Summary"}
        color={THEME.COLORS.primaryTextColor}
      >
        <Ionicons
          name="notifications"
          size={28}
          color={THEME.COLORS.secondaryDarkTextColor}
        />
      </HeaderWithIcon>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <SectionHeader leftTitle="Payment Summary" rightTitle="" />
      <View style={styles.content}>
      <View style={styles.contentSection}>
            <Text style={styles.thin}>Amount</Text>
            <Text style={styles.bold}>$500.00</Text>
        </View>
        <View style={styles.contentSection}>
            <Text style={styles.thin}>VAT (0%)</Text>
            <Text style={styles.bold}>0.00</Text>
        </View>
      </View>
      <View style={styles.bottomContentSection}>
            <Text style={styles.bold}>Total Amount</Text>
            <Text style={styles.bold}>$500.00</Text>
        </View>
        <Text style={styles.label}>Email </Text>
        <TransparentTextInput placeholder="Enter your email" />
        <Text style={styles.label}>Phone</Text>
        <TransparentTextInput placeholder="Enter your phone" />
        <Text style={styles.label}>Payment Date</Text>
        <TransparentTextInput placeholder="Enter your name" />
        <Text style={styles.label}>Amount </Text>
        <TransparentTextInput placeholder="Enter your amount" />
        <View style={styles.formGroup}>
          <View style={styles.group}>
            <Text style={styles.label}>First Name</Text>
            <TransparentTextInput placeholder="John" />
          </View>
          <View style={styles.group}>
            <Text style={styles.label}>Last Name</Text>
            <TransparentTextInput placeholder="Smith" />
          </View>
        </View>
        <Button title="Suivant" />
      </ScrollView>
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  label: {
    fontFamily: "Mulish_500Medium",
    color: THEME.COLORS.secondaryDarkTextColor,
    fontSize: fontSizeToDp(3.4),
    paddingTop: 10,
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: heightPercentageToDP(1),
  },
  group: {
    width: widthPercentageToDP(43),
  },
  content:{
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderColor:THEME.COLORS.secondaryLightTextColor
  },
  contentSection:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:10
  },
  bottomContentSection:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:18
  },
  thin:{
    fontFamily:'Mulish_500Medium',
    fontSize:fontSizeToDp(3.4)
  },
  bold:{
    fontFamily:'Mulish_700Bold',
    fontSize:fontSizeToDp(3.4)

  }
});
