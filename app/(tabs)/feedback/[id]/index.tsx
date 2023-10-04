import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderWithIcon from "../../../../components/HeaderWithIcon";
import SearchBar from "../../../../components/SearchInput";
import SectionHeaderWithButton from "../../../../components/SectionHeader/SectionHeaderWithButton";
import TransactionClient from "../../../../components/TransactionClient";
import { THEME } from "../../../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils/Responsive";


const Chip = ({title,highlight}:{title:string,highlight:boolean})=>  
 <View style={[styles.chip,highlight&& styles.highlight]}>
<Text style={[styles.rightText, highlight&& styles.highlightText]}>{title}</Text>
</View>

const FeedDetail = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <HeaderWithIcon title={"Factures clients"} color="#000">
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
        <View style={styles.content}>
          <Text style={styles.largeText}>Factures et devis</Text>
          <Text style={styles.smallText}>
            Note: You can created invoice on the web
          </Text>
          <SearchBar transparent={true} />
          <View style={styles.chipContainer}>
           <Chip title="Seen" highlight={true} />
         
           <Chip title="Paid" highlight={false} />
           <Chip title="UnPaid" highlight={false} />
           <Chip title="Cancelled" highlight={false} />
          </View>
          <SectionHeaderWithButton leftTitle="All" rightTitle="Last 30 days" icon={true} />
          <TransactionClient />
          <TransactionClient />
          <TransactionClient />
          <TransactionClient />
          <TransactionClient />
          <TransactionClient />
          <TransactionClient />
          <TransactionClient />
          <TransactionClient />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: heightPercentageToDP(1),
    width: widthPercentageToDP(90),
  },
  largeText: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4),
  },
  smallText: {
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3),
    paddingTop: 3,
    paddingBottom: heightPercentageToDP(2.5),
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent:'flex-start',
    paddingTop: heightPercentageToDP(2.5),
  },
  highlight:{
    backgroundColor:THEME.COLORS.primary,
    
  },
  highlightText:{
color:'#fff'
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: THEME.COLORS.lightGrayBackground,
    borderRadius: 50,
    marginHorizontal:4
  },
  rightText: {
    fontSize: fontSizeToDp(3),
    fontFamily: "Mulish_600SemiBold",
    color:THEME.COLORS.secondaryLightTextColor
  },
});
