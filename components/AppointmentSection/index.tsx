import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentageToDP } from "../../utils/Responsive";
import SectionHeader from "../SectionHeader";
import UserAvatarControl from "../UserAvatarControl";

export default function AppointmentSection() {
  return (
    <View style={styles.container}>
    
      <SectionHeader leftTitle="Todays Appointment" rightTitle="See All" />
      <UserAvatarControl />
      <UserAvatarControl />
      <UserAvatarControl />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingBottom:heightPercentageToDP(2)
    }
})