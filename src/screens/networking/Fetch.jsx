import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

const FetchScreen = ({ navigation }) => {
  // tipe data
  // string => all characters in keyboard with quote => "" '' `` => contoh : "Saya Budi"
  // number => 1-9 => contoh : 90909
  // boolean => true | false
  // object => kumpulan data yg menjelaskan satu entitas => person : { name:"Budi", gender: "Male" }
  // array => kumpulan data jamak => people : [{ name:"Budi", gender: "Male" }, { name:"Siska", gender: "Female" }]

  const [result, setResult] = useState(null);

  useEffect(() => {
    console.log("FETCH START");
    fetch("https://reqres.in/api/users?page=2").then((response) =>
      response.json().then((response) => setResult(response?.data))
    );
  }, []);

  return (
    <ScrollView
      style={{
        paddingHorizontal: 20,
      }}
    >
      <Text style={styles.heading}>List Person (using fetch)</Text>
      {result &&
        result.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: item.avatar }}
              style={{ height: 50, width: 50, borderRadius: 100 }}
            />
            <View style={{ flex: 1 }}>
              <Text>
                {item.first_name} {item.last_name}
              </Text>
              <Text>{item.email}</Text>
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

export default FetchScreen;

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 5,
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
  },
});
