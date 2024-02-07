import { View, Text, Button } from "react-native";
import React from "react";

const AsynchronousScreen = () => {
  const handleClick = () => {
    console.log("1. Start Asynchornous operation");

    setTimeout(() => {
      console.log("3. Asynchronous Operation Complete");
    }, 2000);

    console.log("2. Continue synchronous operation");
  };

  return (
    <View>
      <Text>Asynchornouscreen</Text>
      <Button title="Run Asynchornous Operation" onPress={handleClick} />
    </View>
  );
};

export default AsynchronousScreen;
