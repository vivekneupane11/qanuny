import { Stack } from "expo-router";
import React from "react";

const HomeLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "home" , headerShown:false}} />
    </Stack>
  );
};

export default HomeLayout;
