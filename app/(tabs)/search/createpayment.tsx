import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from "react-native";
import Button from "../../../components/Buttons";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import TransparentTextInput from "../../../components/Profile/TransparentInput";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import { fontSizeToDp } from "../../../utils/Responsive";

const CreatePayment = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderWithIcon title={"Create Payment"} color={THEME.COLORS.primaryTextColor}>
          <Ionicons name="notifications" size={28} color={THEME.COLORS.secondaryDarkTextColor} />
        </HeaderWithIcon>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
<SectionHeader leftTitle="Payment Details" rightTitle="" />  
<Text style={styles.label}>Full Name</Text>
<TransparentTextInput placeholder="Enter your name"/>
<Text style={styles.label}>Email </Text>
<TransparentTextInput placeholder="Enter your email"/>
<Text style={styles.label}>Phone</Text>
<TransparentTextInput placeholder="Enter your phone"/>
<Text style={styles.label}>Payment Date</Text>
<TransparentTextInput placeholder="Enter your name"/>
<Text style={styles.label}>Amount </Text>
<TransparentTextInput placeholder="Enter your amount"/>
<Button onPress={()=>router.push('/search/paymentsummary')} title="Suivant" />
      </ScrollView>
    </View>
  );
};

export default CreatePayment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  label:{
    fontFamily:'Mulish_500Medium',
    color:THEME.COLORS.secondaryDarkTextColor,
    fontSize:fontSizeToDp(3.4),
    paddingTop:10
  }
});
