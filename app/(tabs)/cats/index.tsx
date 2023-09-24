import { Stack, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Cats = () => {
 const navigation = useRouter();

  return (
    <>
      <Stack
        screenOptions={{
          title: "Cats",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>This is cat screen</Text>
        <Text style={styles.subtitle}>Welcome</Text>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Cats;