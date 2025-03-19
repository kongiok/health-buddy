import { View, Text, StyleSheet } from "react-native";

const WaterDataInput = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Water Data Input</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

export default WaterDataInput;
