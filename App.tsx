import { Mulish_300Light, Mulish_500Medium, useFonts } from '@expo-google-fonts/mulish';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { THEME } from './constants/Theme';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Mulish_500Medium,
    Mulish_300Light
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Mulish_500Medium', fontSize: 40,color:THEME.COLORS.primaryTextColor }}>mulish</Text>
      <Header/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
