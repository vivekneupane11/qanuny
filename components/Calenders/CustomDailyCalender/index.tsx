import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../../constants/Theme";
import { fontSizeToDp, heightPercentageToDP } from "../../../utils/Responsive";

const BACKGROUND_COLORS = [
  "#04D4041A",
  "#EB25251A",
  "#FFA5001A",
  "#04D4041A",
  "#EB25251A",
  "#FFA5001A",
];
const COLORS = ["red", "green", "orange", "red", "green", "orange"];
const ScheduleCell = ({ content, hasTask, index }: any) => {
  return (
    <TouchableOpacity
      onPress={() => router.push("/calender/daily")}
      style={[
        styles.cell,
        hasTask && {
          backgroundColor: BACKGROUND_COLORS[Math.floor(Math.random() * 5)],
        },
        !!index && { backgroundColor: THEME.COLORS.lightBackground },
      ]}
    >
      {content === "dot" ? (
        <View
          style={[
            styles.dot,
            { backgroundColor: COLORS[Math.floor(Math.random() * 5)] },
          ]}
        ></View>
      ) : (
        <Text style={[styles.cellText]}>{content}</Text>
      )}
      <Text style={styles.dayNum}>{!!index && index}</Text>
    </TouchableOpacity>
  );
};

const MySchedule = () => {
  const scheduleData = [
    {
      time: "8:00",
      tasks: [false, false, true, false, false, true, false],
    },
    {
      time: "9:00",
      tasks: [true, false, false, true, false, false, false],
    },
    {
      time: "8:00",
      tasks: [false, false, false, false, false, true, false],
    },
    {
      time: "9:00",
      tasks: [true, false, true, true, false, false, false],
    },
    {
      time: "8:00",
      tasks: [false, false, false, false, false, true, false],
    },
    {
      time: "9:00",
      tasks: [true, false, true, true, false, false, false],
    },
    {
      time: "8:00",
      tasks: [false, false, true, false, false, true, false],
    },
    {
      time: "9:00",
      tasks: [true, false, true, true, false, false, false],
    },
    {
      time: "8:00",
      tasks: [false, false, true, false, false, true, false],
    },
    {
      time: "9:00",
      tasks: [true, false, false, true, false, false, false],
    },
    {
      time: "8:00",
      tasks: [false, false, true, false, false, true, false],
    },
    {
      time: "9:00",
      tasks: [true, false, false, true, false, false, false],
    },
    {
      time: "8:00",
      tasks: [false, false, false, false, false, true, false],
    },
    {
      time: "9:00",
      tasks: [true, false, true, true, false, false, false],
    },
    // Add more time slots with tasks as needed
  ];

  const daysOfWeek = ["Time", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {daysOfWeek.map((day, index) => (
          <ScheduleCell key={index} index={index} content={day} />
        ))}
      </View>
      {scheduleData.map((timeSlot, timeIndex) => (
        <View style={styles.row} key={timeIndex}>
          <ScheduleCell content={timeSlot.time} />
          {timeSlot.tasks.map((hasTask, dayIndex) => (
            <ScheduleCell
              key={dayIndex}
              content={hasTask ? "dot" : ""}
              hasTask={hasTask}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.secondaryLightTextColor,
    marginVertical: heightPercentageToDP(3),
  },
  row: {
    flexDirection: "row",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.secondaryLightTextColor,
    backgroundColor: "#fff",
  },
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.silver,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 1,
  },
  cellText: {
    fontSize: fontSizeToDp(2.5),
    padding: 2,
    fontFamily: "Mulish_700Bold",
    textTransform: "uppercase",
  },

  dayNum: {
    fontFamily: "Mulish_700Bold",
    paddingLeft: 4,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: "#000",
    borderRadius: 999,
    position: "absolute",
    bottom: 5,
    left: 5,
  },
});

export default MySchedule;
