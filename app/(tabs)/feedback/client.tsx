import { Stack } from "expo-router";
import { Text, View } from "react-native";

const ClientScreen = () => {

  return (
    <View>
      <Stack.Screen options={{ headerShown:false }} />

      <Text>ClientPage</Text>
    </View>
  );
};

export default ClientScreen;
