import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack
    screenOptions={{
  headerShown:false
    }}
  >
    <Stack.Screen
      name="Welcome"
      options={{
        title: "Welcome",
      }}
    />
  </Stack>
  );
}