import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";

const LoginPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>登入</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={() => alert("登入中...")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
  },
});

export default LoginPage;
