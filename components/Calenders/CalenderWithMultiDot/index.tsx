import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React, { Fragment, useCallback, useMemo, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarUtils } from "react-native-calendars";
import { Direction } from "react-native-calendars/src/types";
import { THEME } from "../../../constants/Theme";
import testID from "../../../constants/testID";
import { fontSizeToDp, widthPercentageToDP } from "../../../utils/Responsive";

const INITIAL_DATE = "2022-07-06";

const CalenderWithMultiDot = () => {
  const [selected, setSelected] = useState(INITIAL_DATE);
  const [currentMonth, setCurrentMonth] = useState(INITIAL_DATE);

  const getDate = (count: number) => {
    const date = new Date(INITIAL_DATE);
    const newDate = date.setDate(date.getDate() + count);
    return CalendarUtils.getCalendarDateString(newDate);
  };

  const onDayPress = useCallback((day: any) => {
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
  const CustomDayComponent = ({ day, state, marking, onPress }: any) => {
    if (marking) {
      console.log(
        "🚀 ~ file: index.tsx:45 ~ CustomDayComponent ~ marking:",
        Object.keys(marking)
      );
    }
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.customStyle,
            {
              textAlign: "center",
              color:
                state === "disabled"
                  ? THEME.COLORS.secondaryLightTextColor
                  : THEME.COLORS.primary,
            },
          ]}
        >
          {day}
        </Text>
        {!!marking && (
          <View style={styles.markerContainer}>
            {state === "disabled"
              ? Object.keys(marking).map((e, i) => (
                  <View
                    key={i}
                    style={{
                      width: 12,
                      height: 12,
                      borderLeftWidth: 1,
                      borderColor: "#fff",
                      backgroundColor: THEME.COLORS.secondaryLightTextColor,
                      position: "absolute",
                      bottom: 9,
                      left: 13 + i * 9,
                      borderRadius: 999,
                    }}
                  ></View>
                ))
              : Object.keys(marking).map((e, i) => (
                  <View
                    key={i}
                    style={{
                      width: 12,
                      height: 12,
                      borderLeftWidth: 1,
                      borderColor: "#fff",
                      backgroundColor:
                        i % 2 === 0
                          ? "yellow"
                          : marking?.color
                          ? marking.color
                          : "gray",
                      position: "absolute",
                      bottom: 9,
                      left: 13 + i * 9,
                      borderRadius: 999,
                    }}
                  ></View>
                ))}
          </View>
        )}
      </View>
    );
  };

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
          dayContainerStyle={{ padding: 25 }}
          headerStyle={{ backgroundColor: THEME.COLORS.primary }}
          renderArrow={(direction: Direction) => (
            <>
              {direction === "left" ? (
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={32}
                  color="#fff"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={32}
                  color="#fff"
                />
              )}
            </>
          )}
          dayComponent={(props: any) => (
            <>
              <CustomDayComponent
                day={props.date.day}
                state={props.state}
                marking={props.marking}
                onPress={() => {
                  alert("hi");
                }}
              />
            </>
          )}
          renderHeader={(date: any) => (
            <View style={styles.header}>
              <AntDesign name="calendar" size={20} color="#fff" />
              <Text style={styles.dateText}>
                {monthNames[date.getMonth()]} {date.toString("yyyy")}
              </Text>
            </View>
          )}
          markingType={"multi-dot"}
          markedDates={{
            [getDate(-2)]: { disabled: true },
            [getDate(1)]: { textColor: "pink" },
            [getDate(2)]: { textColor: "pink" },
            [getDate(12)]: {
              startingDay: true,
              color: "green",
              endingDay: true,
            },
            [getDate(22)]: { startingDay: true, color: "green" },
            [getDate(23)]: { endingDay: true, color: "red" },
            [getDate(25)]: { startingDay: true, color: "gold" },
            [getDate(26)]: { color: "gray" },
            [getDate(27)]: { endingDay: true, color: "red" },
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
      contentContainerStyle={{ flexGrow: 1 }}
    >
      {renderExamples()}
      <View style={styles.info}>
        <Text style={styles.infoText}>Types of appointments</Text>
        <View style={styles.group}>
          <View style={styles.dot}></View>
          <Text style={styles.dotInfo}>Disable</Text>
        </View>
        <View style={styles.group}>
          <View style={[styles.dot, { backgroundColor: "red" }]}></View>
          <Text style={styles.dotInfo}>Cancel</Text>
        </View>
        <View style={styles.group}>
          <View style={[styles.dot, { backgroundColor: "green" }]}></View>
          <Text style={styles.dotInfo}>Confirm</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default CalenderWithMultiDot;

const styles = StyleSheet.create({
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    width: widthPercentageToDP(16),
    aspectRatio: 1,
    borderLeftWidth: 0,
    borderColor: THEME.COLORS.secondaryLightTextColor,
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
    padding: 5,
  },
  calendar: {
    backgroundColor: "#fff",
    margin: 0,
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
  group: {
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
  },
  info: {
    paddingVertical: 18,
    paddingHorizontal: widthPercentageToDP(5),
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
  markerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    left: 5,
    bottom: 0,
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
    marginLeft: widthPercentageToDP(2),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  dot: {
    width: 15,
    height: 15,
    backgroundColor: "gray",
    borderRadius: 999,
    marginRight: 12,
  },
  customStyle: {
    borderRadius: 16,
    paddingRight: 0,
    position: "absolute",
    top: 2,
    right: 7,
    fontFamily: "Mulish_600SemiBold",
  },
  infoText: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: fontSizeToDp(4.3),
  },
  dotInfo: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.3),
  },
});
