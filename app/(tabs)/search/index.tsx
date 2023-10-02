import * as Linking from "expo-linking";
import { useRouter } from "expo-router";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SearchBar from "../../../components/SearchInput";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../../utils/Responsive";

import { Entypo } from "@expo/vector-icons";
import SmallCardComponent from "../../../components/LawyerCard/SmallCard";

const Chip = ({ title, highlight }: { title: string; highlight: boolean }) => (
  <View style={[styles.chip, highlight && styles.highlight]}>
    <Text style={[styles.rightText, highlight && styles.highlightText]}>
      {title}
    </Text>
  </View>
);

const FeedDetail = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={styles.container}>

      <HeaderWithIcon title={"Search Lawyer"} color="#000">
        <Entypo
          name="dots-three-vertical"
          size={28}
          color={THEME.COLORS.secondaryDarkTextColor}
        />
      </HeaderWithIcon>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.content}>
          <SearchBar transparent={true} />
          <View style={styles.chipContainer}>
            <Chip title="All" highlight={true} />

            <Chip title="Family" highlight={false} />
            <Chip title="Personal" highlight={false} />
            <Chip title="Criminal Defense" highlight={false} />
          </View>
          <SectionHeader leftTitle="Tout" rightTitle="See All" />
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={(item, i) => i.toString()}
            numColumns={2}
            renderItem={() => (
              <SmallCardComponent
                imageSource="https://cache.careers360.mobi/media/article_images/2023/2/14/types-of-lawyers.webp"
                name="Jacob Jones"
                designation="Family Law Specialist"
                price="$50"
                country="Nepal"
                rating="4.9"
              />
            )}
          />
        </View>
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
  content: {
    paddingTop: heightPercentageToDP(1),
    width: widthPercentageToDP(96),
    alignItems: "center",
    justifyContent: "center",
  },
  largeText: {
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4),
  },
  smallText: {
    fontFamily: "Mulish_500Medium",
    fontSize: fontSizeToDp(3),
    paddingTop: 3,
    paddingBottom: heightPercentageToDP(2.5),
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingTop: heightPercentageToDP(2.5),
  },
  highlight: {
    backgroundColor: THEME.COLORS.primary,
  },
  highlightText: {
    color: "#fff",
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: THEME.COLORS.lightGrayBackground,
    borderRadius: 50,
    marginHorizontal: 4,
  },
  rightText: {
    fontSize: fontSizeToDp(3),
    fontFamily: "Mulish_600SemiBold",
    color: THEME.COLORS.secondaryLightTextColor,
  },
});
