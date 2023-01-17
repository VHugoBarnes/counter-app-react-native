import React, { useState } from "react";
import { Text } from "react-native";
import { CenteredView } from "../components/CenteredView.component";
import { FloatingActionButton } from "../components/FloatingActionButton.component";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <CenteredView>
      <Text style={{ fontSize: 40 }}>
        Counter: {count}
      </Text>
      <FloatingActionButton onPress={() => { setCount(count + 1); }} text={"+"} right />
      <FloatingActionButton onPress={() => { setCount(count - 1); }} text={"-"} left />
    </CenteredView>
  );
};

export default Counter;
