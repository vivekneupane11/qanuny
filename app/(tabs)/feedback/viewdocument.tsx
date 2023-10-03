import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
import DocumentSection from "../../../components/DocumentSection";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SearchBar from "../../../components/SearchInput";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../../utils/Responsive";

const data = [
  0, 1, 2, 3, 45, 6, 7, 8, 9, 9, 1111, 2, 3, 4, 5, 6, 7, 89, 4, 3, 2, 5, 4, 345,
  345, 345,
];

const ViewDocument = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };
  const renderItem = () => <DocumentSection action={true} />
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderWithIcon title={"My Documents"} color="#000">
        <Ionicons
          name="notifications"
          size={28}
          color={THEME.COLORS.secondaryDarkTextColor}
        />
      </HeaderWithIcon>

      <View style={styles.content}>
        
        <FlatList
          contentContainerStyle={{ paddingBottom: heightPercentageToDP(12) }}
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <SearchBar transparent={false} />
           
        
             <View style={{paddingTop:heightPercentageToDP(0.4)}}>
             </View>
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

            </>
          )}
        />
      </View>
    </View>
  );
};

export default ViewDocument;

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
  grouper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: heightPercentageToDP(1.5),
  },
  title: {
    fontSize: fontSizeToDp(3.1),
    fontFamily: "Mulish_700Bold",
  },
  checkbox: {
    marginRight: 6,
    height: 18,
    width: 18,
  },
});
