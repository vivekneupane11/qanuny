import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MySchedule from "../../../components/Calenders/CustomDailyCalender";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import { fontSizeToDp, widthPercentageToDP } from "../../../utils/Responsive";

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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ paddingHorizontal: widthPercentageToDP(5) }}>
          <SectionHeader leftTitle="Your Schedule" rightTitle="See All" />
        </View>

        <View style={styles.content}>
          <View style={styles.header}>
            <MaterialIcons name="keyboard-arrow-left" size={32} color="#fff" />
            <View style={styles.grouper}>
              <AntDesign name="calendar" size={20} color="#fff" />
              <Text style={styles.dateText}>01 to 07 September 2023</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={32} color="#fff" />
          </View>
          <MySchedule />
        </View>
      </ScrollView>
    </View>
  );
};

export default CalenderDetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  rowGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.COLORS.primary,
    paddingVertical: 9,
    marginHorizontal: widthPercentageToDP(4),
  },
  dateText: {
    fontSize: fontSizeToDp(4.2),
    fontFamily: "Mulish_700Bold",
    color: "#fff",
    marginLeft: widthPercentageToDP(2),
  },
  grouper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
