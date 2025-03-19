import { View, Text, StyleSheet } from "react-native";

const Settings = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Settings</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Settings;
