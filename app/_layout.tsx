import { Mulish_300Light, Mulish_400Regular, Mulish_500Medium, Mulish_600SemiBold, Mulish_700Bold, Mulish_900Black, useFonts } from '@expo-google-fonts/mulish';
import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";
const StackLayout = () => {
  const router = useRouter();
  let [fontsLoaded, fontError] = useFonts({
    Mulish_500Medium,
    Mulish_300Light,
    Mulish_400Regular,
    Mulish_600SemiBold,
    Mulish_700Bold,
    Mulish_900Black
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
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
        name="register"
        options={{
          headerTitle: "Create account",
          headerRight: () => (
            <Button title="Open" onPress={() => router.push("/modal")} />
          ),
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default StackLayout;
