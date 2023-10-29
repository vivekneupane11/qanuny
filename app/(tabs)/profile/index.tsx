import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SearchBar from "../../../components/SearchInput";
import SettingList from "../../../components/SettingsList";
import { THEME } from "../../../constants/Theme";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";
const Profile = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <HeaderWithIcon title="Réglages">
        <Entypo name="dots-three-vertical" size={18} color="black" />
      </HeaderWithIcon>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <SearchBar transparent={true} />
          <View style={styles.grouper}>
            <SettingList title="Profile Settings" active={true}>
              <AntDesign name="user" size={22} color={"#fff"} />
            </SettingList>
            <SettingList title="Notifications" active={false}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={THEME.COLORS.iconColor}
              />
            </SettingList>
            <SettingList title="Invoice Settings" active={false}>
              <Ionicons
                name="newspaper-outline"
                size={22}
                color={THEME.COLORS.iconColor}
              />
            </SettingList>
            <SettingList title="Payment Settings" active={false}>
              <MaterialIcons
                name="payment"
                size={22}
                color={THEME.COLORS.iconColor}
              />
            </SettingList>
            <SettingList title="Contrack History" active={false}>
              <MaterialIcons
                name="payment"
                size={22}
                color={THEME.COLORS.iconColor}
              />
            </SettingList>
            <SettingList title="Appearance" active={false}>
              <Ionicons
                name="sunny-outline"
                size={22}
                color={THEME.COLORS.iconColor}
              />
            </SettingList>
            <SettingList title="Application" active={false}>
              <MaterialCommunityIcons
                name="newspaper-check"
                size={22}
                color={THEME.COLORS.iconColor}
              />
            </SettingList>
            <SettingList title="API" active={false}>
              <AntDesign name="API" size={22} color={THEME.COLORS.iconColor} />
            </SettingList>
            <SettingList title="Term Conditions" active={false}>
              <Ionicons
                name="terminal-outline"
                size={22}
                color={THEME.COLORS.iconColor}
              />
            </SettingList>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    width: widthPercentageToDP(100),
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(1),
    justifyContent: "flex-start",
    alignItems: "center",
  },
  grouper: {
    paddingVertical: heightPercentageToDP(2.5),
  },
});
