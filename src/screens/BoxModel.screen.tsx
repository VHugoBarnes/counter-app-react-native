import React from "react";
import { Text, SafeAreaView, StyleSheet, useWindowDimensions } from "react-native";

const BoxModel = () => {

  const { width, height } = useWindowDimensions();

  return (
    <SafeAreaView
      style={[styles.container]}
    >
      <Text
        style={{
          ...styles.title,
          width: width * 0.5,
          height: height * 0.3,
        }}
      >
        Box object model
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EF4444",
  },
  title: {
    fontSize: 20,
    marginHorizontal: 30,
    marginVertical: 50,
    borderWidth: 10,
    borderColor: "#F59E0B",
    backgroundColor: "#3B82F6",
  },
});

export default BoxModel;
