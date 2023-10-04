import { Ionicons } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import DocumentSection from "../../../components/DocumentSection";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SearchBar from "../../../components/SearchInput";
import SectionHeader from "../../../components/SectionHeader";
import UserAvatarWithButton from "../../../components/UserAvatarControl/UserAvatarWithButton";
import { THEME } from "../../../constants/Theme";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";

const data = [
  0, 1, 2, 3, 45, 6, 7, 8, 9, 9, 1111, 2, 3, 4, 5, 6, 7, 89, 4, 3, 2, 5, 4, 345,
  345, 345,
];

const FeedbackDocument = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };
  const renderItem = () => <DocumentSection action={true} />;
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderWithIcon title={"Documents clients2"} color="#000">
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
              <SearchBar transparent={true} />

              <View style={{ paddingTop: heightPercentageToDP(1.5) }}>
                <UserAvatarWithButton
                  messageText="UserID: Qa01"
                  message={true}
                  to="/feedback/viewdocument"
                  highlight={true}
                  isNew={true}
                />
              </View>
              <SectionHeader
                leftTitle="All Documents"
                rightTitle="See All"
                icon={true}
              />
            </>
          )}
        />
      </View>
    </View>
  );
};

export default FeedbackDocument;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingTop: heightPercentageToDP(6),
  },
  content: {
    paddingTop: heightPercentageToDP(1),
    width: widthPercentageToDP(90),
  },
});
