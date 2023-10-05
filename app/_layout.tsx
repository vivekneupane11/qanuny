import {
  Mulish_300Light,
  Mulish_400Regular,
  Mulish_500Medium,
  Mulish_600SemiBold,
  Mulish_700Bold,
  Mulish_900Black,
  useFonts,
} from "@expo-google-fonts/mulish";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Mulish_500Medium,
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
    Mulish_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{ flex: 1, backgroundColor: "yellow" }}
    >
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#10101E",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerTitle: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="forgetpassword"
          options={{ headerTitle: "Password Recovery", headerShown: false }}
        />
        <Stack.Screen
          name="chat"
          options={{ headerTitle: "Chat", headerShown: false }}
        />
        <Stack.Screen
          name="otp"
          options={{ headerTitle: "OTP Verify", headerShown: false }}
        />
        <Stack.Screen
          name="verify"
          options={{ headerTitle: " Verify", headerShown: false }}
        />
        <Stack.Screen
          name="newpassword"
          options={{ headerTitle: "New Password", headerShown: false }}
        />
        <Stack.Screen
          name="register"
          options={{ headerTitle: "Register", headerShown: false }}
        />
        <Stack.Screen
          name="chooseprofile"
          options={{ headerTitle: "Choose Profile", headerShown: false }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </View>
  );
}
