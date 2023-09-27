import { Stack, useGlobalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import AboutUser from "../../../../components/Profile/AboutUserCard";
import GradientView from "../../../../components/Profile/GradientView";
import { THEME } from "../../../../constants/Theme";
import {
  fontSizeToDp,
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../../utils/Responsive";

const UserProfile = () => {
  const { id } = useGlobalSearchParams();

  return (
    <>
      <Stack.Screen
        options={{ headerTitle: `userprofile`, headerShown: false }}
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
         <GradientView/>
          <View style={styles.content}>
          <AboutUser/>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    width: widthPercentageToDP(100),
    paddingHorizontal: widthPercentageToDP(5),
    paddingTop: heightPercentageToDP(20),
    justifyContent: "flex-start",
    alignItems: "center",
  },
  gradient: {
    height: heightPercentageToDP(27),
    width: widthPercentageToDP(100),
  },
  profileHeader: {
    width:widthPercentageToDP(100),
    justifyContent:'center',
    alignItems:'center',
    position:"absolute",
    top:heightPercentageToDP(19),
  },
  border:{
    borderWidth:7,
    borderRadius:999,
    borderColor:'#fff'
  },
  name:{
    fontFamily:'Mulish_700Bold',
    fontSize:fontSizeToDp(4.5)
  },
  designation:{
    fontFamily:'Mulish_500Medium',
    fontSize:fontSizeToDp(3.4),
    color:THEME.COLORS.secondaryDarkTextColor,
    paddingTop:4
  }
});

export default UserProfile;
