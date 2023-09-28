import { Stack } from "expo-router";
import React from "react";

const FeedbackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerTitle: "feedback",headerShown:false }} />
    </Stack>
  );
};

export default FeedbackLayout;
