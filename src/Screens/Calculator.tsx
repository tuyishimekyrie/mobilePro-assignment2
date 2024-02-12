import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../Components/Button";
import Row from "../View/Row";
import calculator, { initialState } from "../util/calculator";

const CalculatorScreen = () => {
  const [state, setState] = useState(initialState);

  const handleTap = (type: string, value: any = 0) => {
    setState((prevState) => calculator(type, value, prevState));
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.value}>
        {parseFloat(state.currentValue).toLocaleString()}
      </Text>
      <View style={styles.section}>
        <Row>
          <Button
            size="primary"
            text="C"
            theme="secondary"
            onPress={() => handleTap("clear")}
          />

          <Button
            size="primary"
            text="+/-"
            theme="secondary"
            onPress={() => handleTap("posneg")}
          />

          <Button
            size="primary"
            text="%"
            theme="secondary"
            onPress={() => handleTap("percentage")}
          />

          <Button
            size="primary"
            text="/"
            theme="accent"
            onPress={() => handleTap("operator", "/")}
          />
        </Row>

        <Row>
          <Button
            theme="primary"
            size="primary"
            text="7"
            onPress={() => handleTap("number", 7)}
          />
          <Button
            theme="primary"
            size="primary"
            text="8"
            onPress={() => handleTap("number", 8)}
          />
          <Button
            theme="primary"
            size="primary"
            text="9"
            onPress={() => handleTap("number", 9)}
          />
          <Button
            size="primary"
            text="X"
            theme="accent"
            onPress={() => handleTap("operator", "*")}
          />
        </Row>

        <Row>
          <Button
            theme="primary"
            size="primary"
            text="5"
            onPress={() => handleTap("number", 5)}
          />
          <Button
            theme="primary"
            size="primary"
            text="6"
            onPress={() => handleTap("number", 6)}
          />
          <Button
            theme="primary"
            size="primary"
            text="7"
            onPress={() => handleTap("number", 7)}
          />
          <Button
            size="primary"
            text="-"
            theme="accent"
            onPress={() => handleTap("operator", "-")}
          />
        </Row>

        <Row>
          <Button
            theme="primary"
            size="primary"
            text="1"
            onPress={() => handleTap("number", 1)}
          />
          <Button
            theme="primary"
            size="primary"
            text="2"
            onPress={() => handleTap("number", 2)}
          />
          <Button
            theme="primary"
            size="primary"
            text="3"
            onPress={() => handleTap("number", 3)}
          />
          <Button
            size="primary"
            text="+"
            theme="accent"
            onPress={() => handleTap("operator", "+")}
          />
        </Row>

        <Row>
          <Button
            theme="primary"
            size="primary"
            text="0"
            onPress={() => handleTap("number", 0)}
          />
          <Button
            theme="primary"
            size="primary"
            text="."
            onPress={() => handleTap("number", ".")}
          />
          <Button
            size="primary"
            text="="
            theme="primary"
            onPress={() => handleTap("equal", "=")}
          />
        </Row>
      </View>
    </View>
  );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#374151",
    justifyContent: "flex-end",
  },
  value: {
    color: "#0f172a",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  section: {
    backgroundColor: "#1f2937",
  },
});
