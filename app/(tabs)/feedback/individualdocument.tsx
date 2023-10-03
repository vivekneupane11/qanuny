import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

import { SimpleLineIcons } from '@expo/vector-icons';
import * as Linking from "expo-linking";
import { Stack, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RoundAvatar from "../../../components/Avatar";
import DocumentSection from "../../../components/DocumentSection";
import HeaderWithIcon from "../../../components/HeaderWithIcon";
import SectionHeader from "../../../components/SectionHeader";
import { THEME } from "../../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../../utils/Responsive";

const data = [
  0, 1, 2, 3, 45, 6, 7, 8, 9, 9, 1111, 2, 3, 4, 5, 6, 7, 89, 4, 3, 2, 5, 4, 345,
  345, 345,
];

const IndividualDocument = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };
  const renderItem = () => <DocumentSection action={true} />;
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <HeaderWithIcon title={"View Document"} color="#000">
        <Ionicons
          name="notifications"
          size={28}
          color={THEME.COLORS.secondaryDarkTextColor}
        />
      </HeaderWithIcon>

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.content}>
          <View style={styles.borderBottom}>
            <SectionHeader leftTitle="Document Info" rightTitle="See All" />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.thin}>Nom du document</Text>
            <Text style={styles.title}>Family Statement/document</Text>

            <View style={styles.infoSection}>
              <Text style={styles.thin}>Document envoyé par</Text>
              <View style={styles.avatarContainer}>
                <View style={styles.avatarContent}>
                  <RoundAvatar
                    source={{
                      uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
                    }}
                    online={false}
                    size={35}
                  />
                  <View style={styles.avatarInfo}>
                    <Text style={styles.userName}>Floyd Miles</Text>
                    <Text style={styles.idStyle}>ID: #4308</Text>
                  </View>
                </View>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={28}
                  color={THEME.COLORS.secondaryDarkTextColor}
                />
              </View>
              <View style={styles.details}>
                <Text style={styles.thin}>Type de document</Text>
                <Text>
                 
                  <View style={styles.chip}>
                    <FontAwesome
                      style={styles.icon}
                      name="file-pdf-o"
                      size={16}
                      color={THEME.COLORS.secondaryDarkTextColor}
                    />
                    <Text style={styles.centerText}>Pdf</Text>
                  </View>
                </Text>
              </View>
              <View style={styles.details}>
                <Text style={styles.thin}>Date du téléchargement</Text>
                <Text style={styles.userName}>1/28/23</Text>
              </View>
              <TouchableOpacity style={styles.button}>
              <SimpleLineIcons name="cloud-upload" size={18} color={THEME.COLORS.primaryTextColor} />
                <Text style={styles.buttonText}>Télécharger</Text>
              </TouchableOpacity>
              <Image
            style={styles.imageStyle}
            source={{
              uri: "https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg",
            }}
          />
            </View>

          </View>
        
        </View>
      </ScrollView>
    </View>
  );
};

export default IndividualDocument;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingTop: heightPercentageToDP(1),
  },
  content: {
    paddingTop: heightPercentageToDP(1),
    width: widthPercentageToDP(90),
    alignItems: "flex-start",
  },
  borderBottom: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: THEME.COLORS.secondaryLightTextColor,
  },
  infoContainer: {
    borderRadius: 14,
    marginVertical: heightPercentageToDP(4),
    paddingVertical: heightPercentageToDP(2),
    paddingHorizontal: widthPercentageToDP(2.5),
    backgroundColor: THEME.COLORS.lightGrayBackground,
    width: "100%",
  },
  thin: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.2),
    color: THEME.COLORS.primaryTextColor,
    paddingVertical: 12,
  },
  title: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: fontSizeToDp(4),
    paddingBottom: 5,
  },
  infoSection: {
    paddingTop: 4,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: heightPercentageToDP(1),
  },
  avatarContent: {
    flexDirection: "row",
  },
  avatarInfo: {
    paddingLeft: 6,
  },
  userName: {
    fontFamily: "Mulish_700Bold",
  },
  idStyle: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(2.5),
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chip: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: THEME.COLORS.silver,
    borderRadius: 50,
  },
  icon: {
    marginRight: 6,
  },
  centerText: {
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(2.5),
    color:THEME.COLORS.primaryTextColor,
  },
  imageStyle:{
    width:'100%',
    height:heightPercentageToDP(70),
    resizeMode:'cover',
    borderRadius:12,
    marginTop:heightPercentageToDP(4)
  },
  button:{
    backgroundColor:THEME.COLORS.silver,
    alignItems:'center',
    padding:10,
    marginVertical:10,
    borderRadius:20,
    flexDirection:'row',
    justifyContent:'center'
  },
  buttonText:{
    fontFamily:'Mulish_700Bold',
    fontSize:fontSizeToDp(3),
    marginLeft:widthPercentageToDP(2)
  }
});
