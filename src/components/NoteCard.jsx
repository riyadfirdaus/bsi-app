import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NoteCard = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.note}>{description}</Text>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  note: {
    fontSize: 12,
  },
});
