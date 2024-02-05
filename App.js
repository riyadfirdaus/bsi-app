import { StyleSheet, TextInput, View, Button } from "react-native";
import Card from "./components/Card";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("Ini judul");
  const [text, setText] = useState(title);
  const [isOnCart, setIsOnCart] = useState(true);

  const toggleCart = () => {
    setIsOnCart(!isOnCart);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          marginVertical: 10,
        }}
      >
        <TextInput
          value={text}
          onChangeText={(text) => setText(text)}
          style={styles.input}
        />
        <Button
          title="Ganti"
          onPress={() => {
            setTitle(text);
          }}
        />
      </View>
      {isOnCart ? (
        <Card
          title={title}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer risus orci, molestie ac blandit bibendum."
          }
          action={toggleCart}
        />
      ) : (
        <Button title="Tampilkan Kartu" onPress={toggleCart} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
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
});
