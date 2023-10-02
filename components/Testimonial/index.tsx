import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../constants/Theme";
import {
    fontSizeToDp,
    heightPercentageToDP,
    widthPercentageToDP,
} from "../../utils/Responsive";
import RoundAvatar from "../Avatar";

const Testimonial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pricingContainer}>
        <View style={styles.iconTextContainer}>
          <View style={styles.row}>
            <Ionicons name="cash-outline" size={28} color="black" />
            <Text style={styles.boldText}>Pricing </Text>
          </View>
          <View style={styles.row}>
            <Text style={[styles.boldText, styles.bolder]}>$50.00</Text>
            <Text style={styles.thin}>/hrs</Text>
          </View>
        </View>
        <Text style={[styles.boldText, styles.leftText]}>
          7+ Years of Experience
        </Text>
      </View>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Ac habitasse at vitae sem ut
        enim viverra vestibulum nec. Pretium nam ut eget quis et aenean.
      </Text>

      <View style={styles.reviewsContainer}>
        <View style={styles.starIcons}>
          <FontAwesome name="star" size={18} color={THEME.COLORS.primary} />
          <FontAwesome
            name="star"
            style={{ marginLeft: -8 }}
            size={18}
            color={THEME.COLORS.primary}
          />
          <FontAwesome
            name="star"
            style={{ marginLeft: -10 }}
            size={18}
            color={THEME.COLORS.primary}
          />
          <Text style={[styles.boldText, styles.reviewTitle]}>
            Clients Reviews
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.thin}>See All</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.testimonialContainer}>
          <RoundAvatar
            source={{
              uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
            }}
            size={50}
            online={true}
          />
          <View style={styles.testimonialTextContainer}>
            <Text style={styles.userName}>Jenny Wilson</Text>
            <View style={styles.ratingIcons}>
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
            </View>
          </View>
        </View>

        <Text style={styles.testimonialText}>
          Working with was a game-changer for my case. Led to a successful
          outcome. I highly recommend.
        </Text>
      </View>
      <View>
        <View style={styles.testimonialContainer}>
          <RoundAvatar
            source={{
              uri: "https://cdn.britannica.com/68/178268-050-5B4E7FB6/Tom-Cruise-2013.jpg?w=400&h=300&c=crop",
            }}
            size={50}
            online={true}
          />
          <View style={styles.testimonialTextContainer}>
            <Text style={styles.userName}>Jenny Wilson</Text>
            <View style={styles.ratingIcons}>
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
              <FontAwesome
                name="star"
                style={{ marginRight: 5 }}
                size={20}
                color="orange"
              />
            </View>
          </View>
        </View>

        <Text style={styles.testimonialText}>
          Working with was a game-changer for my case. Led to a successful
          outcome. I highly recommend.
        </Text>
      </View>

      <View style={[ styles.marginTop]}>
       <View style={styles.row}>
       <FontAwesome
          name="newspaper-o"
          size={24}
          color={THEME.COLORS.primary}
        />
        <Text style={[styles.boldText, styles.reviewTitle]}>
          Bio
        </Text>
       </View>
        
        <Text style={[styles.description,styles.bioDescription]}>
        Lorem ipsum dolor sit amet consectetur. Ac habitasse at vitae sem ut
        enim viverra vestibulum nec. Pretium nam ut eget quis et aenean.
      </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  pricingContainer: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: widthPercentageToDP(90),
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
  boldText: {
    fontFamily: "Mulish_600SemiBold",
    fontSize: fontSizeToDp(4.4),
    paddingLeft: 10,
  },
  description: {
    marginTop: 9,
    fontFamily: "Mulish_300Light",
    fontSize: fontSizeToDp(3),
    lineHeight: 18,
  },
  reviewsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  starIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  testimonialContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  testimonialTextContainer: {
    flex: 1,
  },
  testimonialText: {
    marginTop: 12,
    fontFamily: "Mulish_400Regular",
    fontSize: fontSizeToDp(3.2),
    color: THEME.COLORS.secondaryDarkTextColor,
    paddingBottom: heightPercentageToDP(1.8),
    borderBottomWidth: 1,
    borderColor: THEME.COLORS.lightBackground,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: heightPercentageToDP(2),
  },
  bolder: {
    fontFamily: "Mulish_900Black",
  },
  thin: {
    fontFamily: "Mulish_300Light",
    fontSize: fontSizeToDp(3),
  },
  leftText: {
    width: "100%",
    fontFamily: "Mulish_700Bold",
  },
  reviewTitle: {
    fontSize: fontSizeToDp(4.2),
    fontFamily: "Mulish_700Bold",
  },
  userName: {
    fontFamily: "Mulish_700Bold",
    paddingLeft: widthPercentageToDP(4),
  },
  ratingIcons: {
    flexDirection: "row",
    paddingLeft: widthPercentageToDP(4),
    paddingTop: 4,
  },
  marginTop: {
    marginTop: heightPercentageToDP(2),
  },
  bioDescription:{
    marginTop: 0,

  }
});

export default Testimonial;
