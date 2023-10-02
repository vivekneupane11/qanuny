import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";

import ImageBackgroundHead from "../../../components/ImageBackground";
import Testimonial from "../../../components/Testimonial";
import { THEME } from "../../../constants/Theme";

const FeedDetail = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
      <ImageBackgroundHead/>
      <Testimonial/>
      </ScrollView>
    </View>
  );
};

export default FeedDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    height: heightPercentageToDP(35),
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: widthPercentageToDP(100),
  },
  rating: {
    justifyContent: "flex-end",
    paddingTop: heightPercentageToDP(1),
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: widthPercentageToDP(5),
  },
  review: {
    textAlign: "right",
    paddingHorizontal: widthPercentageToDP(5),
    color: THEME.COLORS.secondaryDarkTextColor,
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.2),
    paddingVertical: 5,
  },
  ratingCount: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4.5),
    paddingLeft: 8,
  },
  avatarFloat: {
    position: "absolute",
    bottom: -60,
    left: 20,
    borderWidth: 4,
    borderColor: "#fff",
    borderRadius: 999,
  },
  infoContainer: {
    marginHorizontal: widthPercentageToDP(5),
    borderBottomWidth:StyleSheet.hairlineWidth,
    paddingBottom:10,
    borderColor:THEME.COLORS.secondaryLightTextColor
  },
  rowGroup: {
    flexDirection: "row",
    paddingTop: heightPercentageToDP(0.5),
  },
  userName: {
    fontFamily: "Mulish_700Bold",
    fontSize:fontSizeToDp(4),
    paddingRight:5
  },
  designation: {
    fontFamily: "Mulish_400Regular",
    color: THEME.COLORS.secondaryDarkTextColor,
    paddingTop: 4,
    paddingBottom:2
  },
});
