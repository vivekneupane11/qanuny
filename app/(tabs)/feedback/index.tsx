import { Ionicons } from '@expo/vector-icons';
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Banner from "../../../components/Banner";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SearchBar from "../../../components/SearchInput";
import SectionHeader from "../../../components/SectionHeader";
import Transaction from "../../../components/Transaction";
import { THEME } from "../../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP, widthPercentageToDP
} from "../../../utils/Responsive";

const Feed = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <HeaderWithIcon   title={'Factures et devis'} color="#000"  >
      <Ionicons name="notifications" size={28} color={THEME.COLORS.secondaryDarkTextColor} />
      </HeaderWithIcon>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <Text style={styles.largeText}>Factures et devis</Text>
          <Text style={styles.smallText}>Note: You can created invoice on the web</Text>
          <SearchBar transparent={true} />
          <Banner />
         
          <SectionHeader leftTitle="Recent Transaction" rightTitle="See All" />
       <Transaction/>
       <Transaction/>
       <Transaction/>
       <Transaction/>
       <Transaction/>
       <Transaction/>
       <Transaction/>
       <Transaction/>
       <Transaction/>

        </View>
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: heightPercentageToDP(1),
    width:widthPercentageToDP(90)
  },
  largeText:{
    fontFamily:'Mulish_700Bold',
    fontSize:fontSizeToDp(4)
  },
  smallText:{
    fontFamily:'Mulish_500Medium',
    fontSize:fontSizeToDp(3),
    paddingTop:3,
    paddingBottom:heightPercentageToDP(2.5)
  }
});
