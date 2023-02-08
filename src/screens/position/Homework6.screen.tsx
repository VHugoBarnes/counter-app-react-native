import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Homework6 = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.box_1]} />
      <View style={[styles.box_2]} />
      <View style={[styles.box_3]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E40AF",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box_1: {
    backgroundColor: "#6366F1",
    width: 100,
    height: 100,
    borderColor: "#1E3A8A",
    borderWidth: 10,
  },
  box_2: {
    backgroundColor: "#F59E0B",
    width: 100,
    height: 100,
    borderColor: "#B45309",
    borderWidth: 10,
    top: 40,
  },
  box_3: {
    backgroundColor: "#34D399",
    width: 100,
    height: 100,
    borderColor: "#047857",
    borderWidth: 10,
  },
});

export default Homework6;
