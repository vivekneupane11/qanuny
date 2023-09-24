import { Link } from "expo-router";
import { View } from "react-native";

const ProfilePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/">Log out</Link>
    </View>
  );
};

export default ProfilePage;
