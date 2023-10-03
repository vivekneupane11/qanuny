import { router } from "expo-router";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Agenda,
  AgendaEntry,
  AgendaSchedule,
  DateData,
} from "react-native-calendars";
import { THEME } from "../../../constants/Theme";
import testID from "../../../constants/testID";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utils/Responsive";
import RoundAvatar from "../../Avatar";

interface State {
  items?: AgendaSchedule;
}

export default class AgendaCalender extends Component<State> {
  state: State = {
    items: undefined,
  };

  // reservationsKeyExtractor = (item, index) => {
  //   return `${item?.reservation?.day}${index}`;
  // };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Agenda
          contentContainerStyle={{ flex: 1 }}
          testID={testID.agenda.CONTAINER}
          items={this.state.items}
          loadItemsForMonth={this.loadItems}
          selected={"2017-05-16"}
          renderItem={this.renderItem}
          renderEmptyDate={this.renderEmptyDate}
          rowHasChanged={this.rowHasChanged}
          showClosingKnob={true}
          style={{ backgroundColor: "#fff" }}
          markedDates={{
            ["2017-05-16"]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: THEME.COLORS.primary,
              selectedTextColor: "white",
            },
          }}
          theme={
            {
              // calendarBackground:'red',
            }
          }
          // theme={{
          //   agendaDayTextColor: 'yellow',
          //   agendaDayNumColor: 'green',
          //   agendaTodayColor: 'red',
          //   agendaKnobColor: 'blue'
          // }}
          // markingType={'period'}
          // markedDates={{
          //    '2017-05-08': {textColor: '#43515c'},
          //    '2017-05-09': {textColor: '#43515c'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
          // monthFormat={'yyyy'}
          // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          renderDay={this.renderDay}
          // hideExtraDays={false}
          showOnlySelectedDayItems
          // reservationsKeyExtractor={this.reservationsKeyExtractor}
        />
      </View>
    );
  }

  loadItems = (day: DateData) => {
    const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 12 + 6);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              index: j,
              name: "Micheal Jordan",
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: "1",
              time: Math.floor(Math.random() * 6 + 5) + ": 00",
            });
          }
        }
      }

      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
  };

  renderDay = (day: any) => {
    return <></>
    // if (day) {
    //   return <Text style={styles.customDay}>09:00</Text>;
    // }
    // return <View style={styles.dayItem}>
    //   <Text>hi</Text>
    // </View>;
  };

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? "black" : "#43515c";

    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          justifyContent: "space-between",
          alignItems: "flex-start",
          paddingVertical: heightPercentageToDP(1),
        }}
      >
        <Text
          style={{
            fontSize: fontSizeToDp(2),
            color: THEME.COLORS.secondaryDarkTextColor,
          }}
        >
          {reservation.time}
        </Text>
        <TouchableOpacity
          testID={testID.agenda.ITEM}
          style={[
            styles.item,
            {
              borderRadius:9,
              backgroundColor:
                reservation.index % 2 === 0 ? "#717EEE" : "#FFA500",
            },
          ]}
          onPress={() => router.push('/calender/1')}
        >
          <View
            style={{
              borderWidth: 2,
              aspectRatio: 1,
              borderRadius: 999,
              borderColor: "#fff",
            }}
          >
            <RoundAvatar
              source={{
                uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
              }}
              online={false}
              size={35}
            />
          </View>
          <View style={{ marginLeft: 3, justifyContent: "space-evenly" }}>
            <Text
              style={[
                {
                  fontSize: fontSizeToDp(2.7),
                  fontFamily: "Mulish_900Black",
                  color,
                },
                { color: THEME.COLORS.primary },
              ]}
            >
              {reservation.name}
            </Text>
            <Text
              style={[
                {
                  fontSize: fontSizeToDp(2.2),
                  fontFamily: "Mulish_500Medium",
                  color,
                },
                { color: THEME.COLORS.primary },
              ]}
            >
              User ID: Qa001
            </Text>
          </View>
          <View
            style={{
                  backgroundColor: THEME.COLORS.primary,
              borderRadius: 9,
              padding: 5,
              marginHorizontal: 3,
              width:widthPercentageToDP(10),
              justifyContent:'center',
              alignItems:'center',
              aspectRatio:1
            }}
          >
            <Text
              style={{
                fontSize: fontSizeToDp(2.2),
                fontFamily: "Mulish_500Medium",
                color: THEME.COLORS.secondaryLightTextColor,
              }}
            >
              Time
            </Text>
            <Text
              style={{
                fontSize: fontSizeToDp(2.3),
                color: "#fff",
                fontFamily: "Mulish_700Bold",
              }}
            >
              01 hr
            </Text>
          </View>
          <View
            style={{
                  backgroundColor: THEME.COLORS.primary,
              borderRadius: 9,
              padding: 5,
              marginHorizontal: 3,
              width:widthPercentageToDP(10),
              justifyContent:'center',
              alignItems:'center',
              aspectRatio:1
           
            }}
          >
            <Text
              style={{
                fontSize: fontSizeToDp(2.2),
                fontFamily: "Mulish_500Medium",
                color: THEME.COLORS.secondaryLightTextColor,
              }}
            >
              SL
            </Text>
            <Text
              style={{
                fontSize: fontSizeToDp(2.3),
                color: "#fff",
                fontFamily: "Mulish_700Bold",
              }}
            >
              04
            </Text>
          </View>
          <View
            style={{
                  backgroundColor: THEME.COLORS.primary,
              borderRadius: 9,
              padding: 5,
              marginHorizontal: 3,
              width:widthPercentageToDP(10),
              justifyContent:'center',
              alignItems:'center',
              aspectRatio:1
            }}
          >
            <Text
              style={{
                fontSize: fontSizeToDp(2.2),
                fontFamily: "Mulish_500Medium",
                color: THEME.COLORS.secondaryLightTextColor,
              }}
            >
              Time
            </Text>
            <Text
              style={{
                fontSize: fontSizeToDp(2.3),
                color: "#fff",
                fontFamily: "Mulish_700Bold",
              }}
            >
              01 hr
            </Text>
          </View>
       
          <View
            style={{
                  backgroundColor: THEME.COLORS.primary,
              borderRadius: 9,
              padding: 5,
              marginHorizontal: 3,
              width:widthPercentageToDP(10),
              justifyContent:'center',
              alignItems:'center',
              aspectRatio:1
            }}
          >
            <Text
              style={{
                fontSize: fontSizeToDp(2.2),
                fontFamily: "Mulish_500Medium",
                color: THEME.COLORS.secondaryLightTextColor,
              }}
            >
              Time
            </Text>
            <Text
              style={{
                fontSize: fontSizeToDp(2.3),
                color: "#fff",
                fontFamily: "Mulish_700Bold",
              }}
            >
              01 hr
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderEmptyDate = () => {
    return (
      <View>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  };

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split("T")[0];
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#717EEE",
    flex: 1,
    borderRadius: 5,
    flexDirection: "row",
    paddingHorizontal: widthPercentageToDP(2),
    paddingVertical: heightPercentageToDP(1.5),
    marginLeft: 2,
    alignItems:'center'
  },

  customDay: {
    margin: 10,
    fontSize: 24,
    color: "green",
  },
  dayItem: {
    marginLeft: 34,
  },
});
