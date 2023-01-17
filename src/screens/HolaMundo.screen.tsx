import React from "react";
import { Text, View } from "react-native";

const HolaMundo = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 48,
        }}
      >
        Hello World
      </Text>
    </View>
  );
};

export default HolaMundo;
