import { Stack, useGlobalSearchParams } from "expo-router";
import { Text } from "react-native";

const UserProfile = () => {
  const { id } = useGlobalSearchParams();

  return (
    <>
     <Stack.Screen
        options={{ headerTitle: `userprofile`, headerShown: false }}
      />

      <Text>My Profile: {id}</Text>
    </>
     
  );
};

export default UserProfile;
