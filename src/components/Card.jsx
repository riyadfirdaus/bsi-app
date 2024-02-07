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
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Card({ title, description, action }) {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(title);
  const [heading, setHeading] = useState(title);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleCancel = () => {
    toggleEditMode();
    setText(heading);
  };

  const handleSave = () => {
    toggleEditMode();
    setHeading(text);
  };

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
        <View style={styles.headingContainer}>
          {!editMode ? (
            <>
              <Text style={styles.heading}>{heading}</Text>
              <TouchableOpacity onPress={toggleEditMode}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={[styles.input]}>
                <TextInput
                  value={text}
                  onChangeText={(text) => setText(text)}
                  style={styles.textInput}
                />
              </View>
              <TouchableOpacity onPress={handleCancel}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSave}>
                <Text>Save</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={action}>
        <Text style={styles.buttonText}>Sembunyikan Kartu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    flex: 1,
    borderBottomColor: "#414141",
    borderBottomWidth: 1,
    marginRight: 8,
  },
  headingContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 4,
    justifyContent: "space-between",
    gap: 4,
    marginBottom: 14,
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
  },
  heading: {
    flex: 1,
    fontSize: 24,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
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
