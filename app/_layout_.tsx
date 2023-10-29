import { Stack, useRouter } from "expo-router";

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
        }}
      />
    </Stack>
  );
};

export default StackLayout;
