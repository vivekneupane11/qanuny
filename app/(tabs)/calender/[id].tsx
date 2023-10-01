import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import CalenderWithMultiDot from "../../../components/Calenders/CalenderWithMultiDot";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import { widthPercentageToDP } from "../../../utils/Responsive";

const CalenderDetailPage = () => {
  return (
    <View style={styles.container}>
        <Stack.Screen
        options={{ headerTitle: `userprofile`, headerShown: false }}
      />
      <HeaderWithIcon title="Calendrier">
        <View style={styles.rowGroup}>
          <AntDesign
            name="search1"
            size={28}
            color="gray"
            style={{ marginRight: 10 }}
          />
          <Ionicons
            name="notifications"
            size={28}
            color={THEME.COLORS.secondaryDarkTextColor}
          />
        </View>
      </HeaderWithIcon>
      <View style={styles.content}>
        <SectionHeader leftTitle="Your Schedule" rightTitle="See All" />
        <CalenderWithMultiDot/>
      </View>
    </View>
  );
};

export default CalenderDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content:{
    paddingHorizontal: widthPercentageToDP(5),
	flex:1

  },
    rowGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

});
