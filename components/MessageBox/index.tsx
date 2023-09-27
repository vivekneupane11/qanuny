import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import { fontSizeToDp, heightPercentageToDP } from "../../utils/Responsive";
import RoundAvatar from "../Avatar";

const MessageBox = ({ user, message, date, isMyMessage }: any) => {
  return (
    <View style={isMyMessage ? styles.myMessage : styles.otherMessage}>
      <View
        style={[
          styles.messageContainer,
          isMyMessage && styles.otherMessageContainer,
        ]}
      >
        <View style={styles.avatarContainer}>
          <RoundAvatar source={{ uri: user.avatar }} online={true} size={40} />
        </View>
        <View style={isMyMessage && styles.otherMessageContent}>
          <View
            style={[
              { flexDirection: "row", alignItems: "center" },
              !isMyMessage && { flexDirection: "row-reverse" },
            ]}
          >
            <TouchableOpacity>
              <Ionicons style={{marginHorizontal:7}} name="ellipsis-vertical" size={16} color={THEME.COLORS.primary}/>
            </TouchableOpacity>
            <View
              style={[
                styles.messageContent,
                isMyMessage
                  ? {
                      borderTopRightRadius: 0,
                      backgroundColor: THEME.COLORS.primary,
                    }
                  : { borderBottomLeftRadius: 0 },
              ]}
            >
              <Text
                style={[styles.messagesText, isMyMessage && { color: "#fff" }]}
              >
                {message}
              </Text>
            </View>
          </View>
          <Text style={[styles.date, isMyMessage && styles.otherDate]}>
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myMessage: {
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginVertical: heightPercentageToDP(2),

  },
  otherMessage: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: heightPercentageToDP(2),
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    maxWidth: "70%",
  },
  messagesText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.2),
    padding: 3,
  },
  avatarContainer: {
    marginRight: 10,
  },
  messageContent: {
    backgroundColor: THEME.COLORS.silver,
    padding: 10,
    borderRadius: 20,
  },
  date: {
    fontSize: fontSizeToDp(2.5),
    color: THEME.COLORS.secondaryDarkTextColor,
    marginTop: 5,
    fontFamily: "Mulish_600SemiBold",
  },
  otherMessageContainer: {
    flexDirection: "row-reverse",
    alignItems: "flex-start",
  },
  otherMessageContent: {
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 5,
  },
  otherDate: {
    paddingBottom: 5,
  },
});

export default MessageBox;
