import React from "react";
import { Text, Pressable, StyleSheet, GestureResponderEvent } from "react-native";

type PropType = {
  text: string,
  onPress: ((event: GestureResponderEvent) => void) | undefined,
  left?: boolean,
  right?: boolean
};

export const FloatingActionButton = ({ text, onPress, left, right }: PropType) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <Pressable
      onPress={(e) => {
        if (onPress !== undefined) {
          onPress(e);
        }
        setIsPressed(true);
      }}
      onPressOut={() => {
        setIsPressed(false);
      }}
      style={[isPressed ? { ...styles.buttonNormal, ...styles.buttonPressed } : styles.buttonNormal, left && styles.left, right && styles.right]}
    >
      <Text style={styles.buttonText}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#FFFFFF",
    fontSize: 40,
    textAlign: "center",
  },
  buttonNormal: {
    backgroundColor: "#6366F1",
    borderRadius: 100,
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 10,
  },
  buttonPressed: {
    backgroundColor: "black",
  },
  right: {
    right: 10,
  },
  left: {
    left: 10,
  },
});
