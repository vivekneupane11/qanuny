import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import { widthPercentageToDP } from "../../utils/Responsive";
interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={28} color="black" style={styles.searchIcon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TouchableOpacity>
        <FontAwesome5 size={22} name="filter" style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.COLORS.lightGrayBackground,
    borderRadius: 9,
    paddingVertical: 4,
    paddingHorizontal:10,
    width: widthPercentageToDP(90),
  },
  searchIcon: {
    color: "gray",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 13,
    color: "black",
    fontFamily:'Mulish_500Medium',
    borderRightWidth:StyleSheet.hairlineWidth,
    borderRightColor:THEME.COLORS.secondaryLightTextColor,
  },
  filterIcon: {
    color: "gray",
    paddingHorizontal:widthPercentageToDP(3)
  },
});

export default SearchBar;
