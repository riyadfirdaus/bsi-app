import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import {
  decrement,
  divide,
  increment,
  multiply,
  reset,
} from "../redux/actions/actions";
import { TouchableOpacity } from "react-native-gesture-handler";

const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleMultiply = () => {
    dispatch(multiply());
  };
  const handleDivide = () => {
    dispatch(divide());
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Text style={styles.heading}>ReduxCounter</Text>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>{count}</Text>
      </View>
      <Button title="+" onPress={handleIncrement}></Button>
      <Button title="-" onPress={handleDecrement}></Button>
      <Button title="x" onPress={handleMultiply}></Button>
      <Button title="/" onPress={handleDivide}></Button>
      <Button title="Reset" onPress={handleReset}></Button>
    </View>
  );
};

export default ReduxCounter;

const styles = StyleSheet.create({
  mainContainer: { flexGrow: 1, padding: 20 },
  heading: { fontSize: 24, textAlign: "center", marginVertical: 12 },
});
