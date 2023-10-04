import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet, View } from "react-native";
import SearchBar from "../../components/SearchInput";
import SectionHeader from "../../components/SectionHeader";
import TabsHeader from "../../components/TabsHeader";
import UserAvatarControl from "../../components/UserAvatarControl";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../utils/Responsive";

const data = [
  0, 1, 2, 3, 45, 6, 7, 8, 9, 9, 1111, 2, 3, 4, 5, 6, 7, 89, 4, 3, 2, 5, 4, 345,
  345, 345,
];
const renderItem = () => <UserAvatarControl chipText="1 min ago" message={true} badge={true} messageText="Hello friend"  />;
const Message = () => {
  const router = useRouter();
  const url = Linking.useURL();

  return (
    <View style={styles.container}>
      <TabsHeader title="Message List" logo={false} avatar={true} />
      <View style={styles.content}>
        <FlatList
		contentContainerStyle={{paddingBottom:heightPercentageToDP(18)}}
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => (
            <>
              <SearchBar transparent={false}/>
              <SectionHeader leftTitle="Chat List" rightTitle="Clear All" />
              <UserAvatarControl chipText="Now" message={true} badge={true} highlight={true} messageText="Hello friend" />
            </>
          )}
        />
		
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(1),
  },
});
