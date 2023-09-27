import React from "react";
import { StyleSheet, View } from "react-native";
import ChatFooter from "../components/ChatFooter";
import ChatHeader from "../components/ChatHeader";
import ChatMessages from "../components/ChatMessages";
import { messages } from "../constants/Message";

const Chat = () => {

  return (
    <View style={styles.container}>
      <ChatHeader />
      <ChatMessages messages={messages}></ChatMessages>
     <ChatFooter/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
});
export default Chat;
