// DatePicker.tsx
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
                  : THEME.COLORS.secondaryDarkTextColor,
              fontFamily:
                item.toDateString() === selectedDate.toDateString()
                  ? "Mulish_700Bold"
                  : "Mulish_300Light",
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
      <Text style={styles.dateHead}> {formatDate(selectedDate)}</Text>

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
    paddingVertical: heightPercentageToDP(2),
  },
  dateHead: {
    textAlign: "center",
    paddingTop: 2,
    paddingBottom: heightPercentageToDP(2),
    fontFamily: "Mulish_700Bold",
    fontSize: fontSizeToDp(4),
  },
  dateChip: {
    margin: 4,
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