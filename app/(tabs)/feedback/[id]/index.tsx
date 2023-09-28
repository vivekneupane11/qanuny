import { useGlobalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const FeedDetailPage = () => {
  const { id } = useGlobalSearchParams();

  return (
    <View>
     

      <Text>My Feedback INDICVIS: {id}</Text>
    </View>
  );
};

export default FeedDetailPage;
