import { Mulish_500Medium, useFonts } from '@expo-google-fonts/mulish';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from './constants/Theme';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Mulish_500Medium,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Mulish_500Medium', fontSize: 14,color:THEME.COLORS.primaryTextColor }}>mulish</Text>
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
