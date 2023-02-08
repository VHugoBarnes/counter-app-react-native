import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Homework3 = () => {
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
    justifyContent: "space-between",
  },
  box_1: {
    backgroundColor: "#6366F1",
    width: 100,
    height: 100,
    borderColor: "#1E3A8A",
    borderWidth: 10,
    right: 0,
    position: "absolute",
  },
  box_2: {
    backgroundColor: "#F59E0B",
    width: 100,
    height: 100,
    borderColor: "#B45309",
    borderWidth: 10,
    position: "absolute",
    margin: "auto",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
  box_3: {
    backgroundColor: "#34D399",
    width: 100,
    height: 100,
    borderColor: "#047857",
    borderWidth: 10,
    bottom: 0,
    position: "absolute",
  },
});

export default Homework3;
