import { AntDesign, Entypo, Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { Tabs } from "expo-router";
export default () => {
  return (
    <Tabs >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabelStyle: { display: "none" },
          headerTitle: "Home Screen",
          headerShown: false,
          tabBarIcon: ({ color, size ,focused}) => (
           focused?<Entypo name="home" size={24} color="black" />: <Ionicons name="md-home-outline" size={24} color="black" />
          ),
        }}
      />
         <Tabs.Screen
        name="message"
        options={{
          tabBarLabelStyle: { display: "none" },

          headerShown: false,
          tabBarIcon: ({ color, size ,focused}) => (
focused?<Entypo name="message" size={24} color="black" />
:<Feather name="message-square" size={24} color="black" />         ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          tabBarLabelStyle: { display: "none" },

          headerShown: false,
          tabBarIcon: ({ color, size ,focused}) => (
         focused?<FontAwesome5 name="book" size={24} color="black" />:  <Feather name="book" size={24} color="black" />
          ),
        }}
      />
   
      <Tabs.Screen
        name="feedback"
        options={{
          tabBarLabelStyle: { display: "none" },
          headerShown: false,
          tabBarIcon: ({ color, size,focused }) => (
         focused ? <Entypo name="newsletter" size={24} color="black" />:  <Entypo name="news" size={24} color="black" />  
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabelStyle: { display: "none" },
          headerShown:false,

          tabBarIcon: ({ color, size,focused }) => (
           focused?<FontAwesome5 name="user-alt" size={24} color="black" />:<AntDesign name="user" size={24} color="black" /> 
          ),
        }}
      />
    </Tabs>
  );
};
