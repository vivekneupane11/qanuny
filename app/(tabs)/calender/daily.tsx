import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import CalenderWithMultiDot from "../../../components/Calenders/CalenderWithMultiDot";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SectionHeaderCalender from "../../../components/SectionHeader/SectionHeaderCalender";
import { THEME } from "../../../constants/Theme";
import { widthPercentageToDP } from "../../../utils/Responsive";

const CalenderDetailPage = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerTitle: `D.Calendier`, headerShown: false }}
      />
      <HeaderWithIcon title="D.Calendier">
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
      <View style={{ paddingHorizontal: widthPercentageToDP(5) }}>
        <SectionHeaderCalender leftTitle="Your Schedule" rightTitle="Monthly" />
      </View>

      <View style={styles.content}>
        
        <CalenderWithMultiDot />
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
  content: {
    flex: 1,
  },
  rowGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
