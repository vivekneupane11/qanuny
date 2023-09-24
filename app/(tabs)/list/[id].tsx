import { Stack, useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const NewsDetailsPage = () => {
  const { id } = useGlobalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `News #${id}` }} />

      <Text>My News: {id}</Text>
    </View>
  );
};

export default NewsDetailsPage;
