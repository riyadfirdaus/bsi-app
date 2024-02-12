import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/actions/actions";
import NoteCard from "../components/NoteCard";

const NoteScreen = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const handleAddNote = () => {
    if (!note) return;
    dispatch(addNote(note));
    setNote("");
  };
  console.log(notes);

  return (
    <View style={styles.mainContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "auto",
          gap: 20,
          marginVertical: 10,
        }}
      >
        <TextInput
          value={note}
          onChangeText={(text) => setNote(text)}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleAddNote} style={styles.button}>
          <Text style={styles.buttonText}>Add notes</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: "column",
          gap: 10,
          borderColor: "gray",
          borderWidth: 1,
        }}
      >
        {notes.length == 0 ? (
          <Text>Please add notes</Text>
        ) : (
          notes.map((item) => <NoteCard description={item}></NoteCard>)
        )}
        {/* <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item}</Text>}
        /> */}
      </View>
    </View>
  );
};

export default NoteScreen;

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 20 },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 4,
    padding: 20,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#d7d7d7",
    alignItems: "center",
    padding: 20,
  },
  button: {
    backgroundColor: "#007ACC",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});
