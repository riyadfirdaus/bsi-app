// Synchronous, Asynchronous, Promise, Callback
import { View, Text, Button } from "react-native";
import React from "react";

const SynchronousScreen = () => {
  const handleClick = () => {
    console.log("1. Start Synchronous operation");

    for (let i = 0; i < 3; i++) {
      console.log("2. Synchronous Operation");
    }
    console.log("3. End synchronous operation");
  };

  return (
    <View>
      <Text>SynchronouScreen</Text>
      <Button title="Run Synchronous Operation" onPress={handleClick} />
    </View>
  );
};

export default SynchronousScreen;
