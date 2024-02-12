import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useDispatch } from "react-redux";
import { editNote, removeNote } from "../redux/actions/actions";
import { useState } from "react";

const NoteCard = ({ description, index }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(description);
  const handleDelete = () => {
    dispatch(removeNote(index));
  };

  const handleEdit = () => {
    setEditMode(true);
  };
  const handleSave = () => {
    dispatch(editNote(index, newText));
    setEditMode(false);
  };
  return (
    <View style={styles.container}>
      {editMode ? (
        <View style={{ flexDirection: "row", flex: 1, gap: 10 }}>
          <TextInput
            value={newText}
            onChangeText={(text) => setNewText(text)}
            style={styles.input}
          />
          <Button onPress={handleSave} title="Save" />
        </View>
      ) : (
        <View style={{ flexDirection: "row", flex: 1 }}>
          <Text style={styles.note}>{description}</Text>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Button onPress={handleEdit} title="Edit" />
            <Button onPress={handleDelete} title="Delete" />
          </View>
        </View>
      )}
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
  },
  note: {
    color: "#1E1E1E",
    flex: 1,
  },
  input: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 4,
    borderBottomColor: "black",
    backgroundColor: "white",
  },
});
