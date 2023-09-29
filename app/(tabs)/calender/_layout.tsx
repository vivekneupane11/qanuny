import { Stack } from "expo-router";
import React from "react";

const NewsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "Calender",headerShown:false }} />
    </Stack>
  );
};

export default NewsLayout;
