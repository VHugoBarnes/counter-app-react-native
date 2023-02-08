import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

const Homework2 = () => {
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
  },
  box_1: {
    backgroundColor: "#6366F1",
    width: 20,
    borderColor: "#1E3A8A",
    borderWidth: 10,
    flex: 1,
    marginRight: 10,
  },
  box_2: {
    backgroundColor: "#F59E0B",
    width: 20,
    borderColor: "#B45309",
    borderWidth: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  box_3: {
    backgroundColor: "#34D399",
    width: 20,
    borderColor: "#047857",
    borderWidth: 10,
    flex: 1,
    marginLeft: 10,
  },
});

export default Homework2;
