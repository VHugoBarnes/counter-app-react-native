import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const RelativePosition = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blueBox} />
      <View style={styles.pinkBox} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6366F1",
    flex: 1,
  },
  blueBox: {
    width: 100,
    height: 100,
    backgroundColor: "#3B82F6",
    borderWidth: 10,
    borderColor: "#1E40AF",
    bottom: 50,
    right: 50,
  },
  pinkBox: {
    width: 100,
    height: 100,
    backgroundColor: "#EC4899",
    borderWidth: 10,
    borderColor: "#9D174D",
  },
});

export default RelativePosition;
