import { Stack } from "expo-router";
import React from "react";

const ProfileLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "profile" , headerShown:false}} />
    </Stack>
  );
};

export default ProfileLayout;
