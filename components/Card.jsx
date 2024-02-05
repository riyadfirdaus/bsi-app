import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Card({ title, description, action }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.flexContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqthQpwchqYSrjvGYOglrel40iv4evwfwt_6d6DKRksw&s",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text style={styles.buttonText}>Sembunyikan Kartu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginBottom: 14,
  },
  description: {
    color: "#717171",
  },
  cardContainer: {
    display: "flex",
    marginVertical: 20,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },

  button: {
    backgroundColor: "#E64A19",
    width: "auto",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  textContainer: { marginVertical: 20, marginHorizontal: 10 },
  image: { alignSelf: "stretch", height: 200, borderRadius: 10 },
});
