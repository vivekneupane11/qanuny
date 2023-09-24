import * as Linking from "expo-linking";
import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const LoginPage = () => {
  const router = useRouter();
  const url = Linking.useURL();

  const handleLogin = () => {
    router.push("(tabs)/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable onPress={handleLogin}>
        <Text>Login</Text>
      </Pressable>

      <Link href="/register" asChild>
        <Pressable>
          <Text>Create account</Text>
        </Pressable>
      </Link>

      <Link href="/test">Unmatched route</Link>
    </View>
  );
};

export default LoginPage;
