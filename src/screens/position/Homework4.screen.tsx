import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Homework4 = () => {
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
  },
  box_1: {
    backgroundColor: "#6366F1",
    borderColor: "#1E3A8A",
    borderWidth: 10,
    flex: 1,
  },
  box_2: {
    backgroundColor: "#F59E0B",
    borderColor: "#B45309",
    borderWidth: 10,
    flex: 1,
  },
  box_3: {
    backgroundColor: "#34D399",
    borderColor: "#047857",
    borderWidth: 10,
    flex: 3,
  },
});

export default Homework4;
