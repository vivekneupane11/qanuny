import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import { fontSizeToDp, heightPercentageToDP, widthPercentageToDP } from "../../utils/Responsive";

const ChatFooter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="photo" size={16} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="ios-camera" size={22} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Ionicons name="ios-document" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.microphoneContainer}>
          <Feather name="mic" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendContainer}>
        <Ionicons name="ios-send" size={18} color="#000" />
      </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: 10,
    backgroundColor: THEME.COLORS.primary,
  },
  iconContainer: {
    marginRight: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: THEME.COLORS.primary,
    borderRadius: 9,
    paddingLeft: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: fontSizeToDp(3),
    color:'#fff',
    
  },
  microphoneContainer: {
    marginLeft: 10,
  },
  sendContainer: {
    paddingVertical:heightPercentageToDP(1.4),
    paddingHorizontal:widthPercentageToDP(3.8),
    marginLeft:10,
    backgroundColor:'#fff',
    borderTopRightRadius:9,
    borderBottomRightRadius:9
  },
});

export default ChatFooter;
