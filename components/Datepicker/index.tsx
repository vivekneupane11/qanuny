// DatePicker.tsx
import { MaterialIcons } from '@expo/vector-icons';
import { addDays, format } from "date-fns";
import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { THEME } from "../../constants/Theme";
import { fontSizeToDp, heightPercentageToDP } from "../../utils/Responsive";
const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) {
    dates.push(addDays(selectedDate, i));
  }

  const formatDate = (date: Date): string => format(date, "MMMM , yyyy");
  const formatDateDay = (date: Date): string => format(date, " eee ");
  const formatDateMonth = (date: Date): string => format(date, "d  ");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderChip = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => setSelectedDate(item)}>
      <View
        style={[
          styles.dateChip,
          {
            backgroundColor:
              item.toDateString() === selectedDate.toDateString()
                ? THEME.COLORS.primary
                : "#fff",

            elevation:
              item.toDateString() === selectedDate.toDateString() ? 4 : 0,
          },
        ]}
      >
        <Text
          style={[
            styles.day,
            {
              color:
                item.toDateString() === selectedDate.toDateString()
                  ? "white"
                  : THEME.COLORS.secondaryLightTextColor,
              fontFamily:
                item.toDateString() === selectedDate.toDateString()
                  ? "Mulish_700Bold"
                  : "Mulish_500Medium",
            },
          ]}
        >
          {formatDateDay(item)}
        </Text>
        <Text
          style={[
            styles.dayNumber,
            {
              color:
                item.toDateString() === selectedDate.toDateString()
                  ? "white"
                  : THEME.COLORS.primary,
            },
          ]}
        >
          {formatDateMonth(item)}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      <Text style={styles.dateHead}> {formatDate(selectedDate)}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={dates}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderChip}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: heightPercentageToDP(3),
  },
  content:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
paddingTop:heightPercentageToDP(1),
paddingBottom: heightPercentageToDP(2.5),

  },
  dateHead: {
    textAlign: "center",
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4),
  },
  dateChip: {
    marginVertical: 4,
    marginHorizontal:6,
    paddingHorizontal: 7,
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.secondaryDarkTextColor,
  },
  day: {
    fontSize: fontSizeToDp(2.7),
    fontFamily: "Mulish_300Light",
  },
  dayNumber: {
    fontSize: fontSizeToDp(3.3),
    fontFamily: "Mulish_900Black",
    paddingVertical: 6,
    paddingLeft: 6,
    textAlign: "center",
  },
});

export default DatePicker;
