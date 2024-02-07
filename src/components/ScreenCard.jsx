import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";

export default function ScreenCard({ action, title }) {
  return (
    <>
      <Pressable onPress={action}>
        <ImageBackground
          source={{ uri: "https://random.imagecdn.app/400/150" }}
        >
          <Text>ScreenCard</Text>
        </ImageBackground>
      </Pressable>
    </>
  );
}
