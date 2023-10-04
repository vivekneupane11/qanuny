import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import { widthPercentageToDP } from "../../utils/Responsive";

interface SearchBarProps {
  transparent: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ transparent }) => {
  return (
    <View style={[styles.container, transparent && styles.transparent]}>
      <AntDesign
        name="search1"
        size={28}
        color="black"
        style={styles.searchIcon}
      />
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="gray"
      />
      <TouchableOpacity>
      <MaterialCommunityIcons name="tune-variant" size={22} style={styles.filterIcon}/>
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
    paddingHorizontal: 10,
    width: widthPercentageToDP(90),
  },
  searchIcon: {
    color: "gray",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: "black",
    fontFamily: "Mulish_500Medium",
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: THEME.COLORS.secondaryLightTextColor,
  },
  filterIcon: {
    color: THEME.COLORS.primaryTextColor,
    paddingHorizontal: widthPercentageToDP(3),
  },
  transparent: {
    backgroundColor: "transparent",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.secondaryLightTextColor,
  },
});

export default SearchBar;
