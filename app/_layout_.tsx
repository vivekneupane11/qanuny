import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";

const StackLayout = () => {
  const router = useRouter();

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
        name="modal"
        options={{
          presentation: "modal",
          headerTitle: "Create account",
          headerLeft: () => (
            <Button title="Close" onPress={() => router.back()} />
          ),
        }}
      />
    </Stack>
  );
};

export default StackLayout;
