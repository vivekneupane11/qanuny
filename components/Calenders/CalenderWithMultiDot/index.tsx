import { MaterialIcons } from "@expo/vector-icons";
import React, { Fragment, useCallback, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import { Direction } from "react-native-calendars/src/types";
import { THEME } from "../../../constants/Theme";
import testID from "../../../constants/testID";
import { fontSizeToDp } from "../../../utils/Responsive";

const INITIAL_DATE = "2022-07-06";

const CalenderWithMultiDot = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day:any) => {
    setSelected(day.dateString);
  }, []);

  const marked = useMemo(() => {
    return {
      [getDate(-1)]: {
        dotColor: "red",
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: "orange",
        selectedTextColor: "red",
      },
    };
  }, [selected]);

  const customHeaderProps: any = useRef();

  const setCustomHeaderNewMonth = (next = false) => {
    const add = next ? 1 : -1;
    const month = new Date(customHeaderProps?.current?.month);
    const newMonth = new Date(month.setMonth(month.getMonth() + add));
    customHeaderProps?.current?.addMonth(add);
    setCurrentMonth(newMonth.toISOString().split("T")[0]);
  };
  const moveNext = () => {
    setCustomHeaderNewMonth(true);
  };
  const movePrevious = () => {
    setCustomHeaderNewMonth(false);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const renderCalendarWithMultiDotMarking = () => {
    return (
      <Fragment>
        <Calendar
          style={styles.calendar}
          current={INITIAL_DATE}
          headerStyle={{ backgroundColor: THEME.COLORS.primary }}
          renderArrow={(direction: Direction) => (
            <>
              
             { direction ==='left' ?
              <MaterialIcons
                name="keyboard-arrow-left"
                size={32}
                color="#fff"
              />
              :
              <MaterialIcons
                name="keyboard-arrow-right"
                size={32}
                color="#fff"
              />}
            </>
          )}
          renderHeader={(date: any) => (
           <View style={styles.header}>
             <Text style={styles.dateText}>
              {monthNames[date.getMonth()]} {date.toString("yyyy")}
            </Text>
           </View>
          )}
          markingType={"multi-dot"}
          markedDates={{
            [getDate(2)]: {
              selected: true,
              dots: [
                { key: "vacation", color: "blue", selectedDotColor: "red" },
                { key: "massage", color: "red", selectedDotColor: "green" },
              ],
            },
            [getDate(3)]: {
              disabled: true,
              dots: [
                { key: "vacation", color: "green", selectedDotColor: "red" },
                { key: "massage", color: "red", selectedDotColor: "green" },
              ],
            },
          }}
        />
      </Fragment>
    );
  };

  const renderExamples = () => {
    return <Fragment>{renderCalendarWithMultiDotMarking()}</Fragment>;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      testID={testID.calendars.CONTAINER}
    >
      {renderExamples()}
    </ScrollView>
  );
};

export default CalenderWithMultiDot;

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
  },
  switchText: {
    margin: 10,
    fontSize: 16,
  },
  text: {
    textAlign: "center",
    padding: 10,
    backgroundColor: "lightgrey",
    fontSize: 16,
  },
  disabledText: {
    color: "grey",
  },
  defaultText: {
    color: "purple",
  },
  customCalendar: {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  customDay: {
    textAlign: "center",
  },
  customHeader: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: -4,
    padding: 8,
  },
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  customTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#00BBF2",
  },
  dateText: {
    fontSize: fontSizeToDp(4.2),
    fontFamily: "Mulish_700Bold",
    color: "#fff",
  },
  header:{

  }
});
