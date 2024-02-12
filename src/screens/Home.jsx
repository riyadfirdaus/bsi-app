import React from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.heading}>Home Screen</Text>
      <View style={styles.menu}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate("Details")}
        />

        <Button
          title="Go to Card"
          onPress={() => navigation.navigate("Card")}
        />
        <Text style={styles.heading}>Sync/Async</Text>
        <Button
          title="Go to Synchronous"
          onPress={() => navigation.navigate("Synchronous")}
        />
        <Button
          title="Go to Asynchronous"
          onPress={() => navigation.navigate("Asynchronous")}
        />
        <Button
          title="Go to Promise"
          onPress={() => navigation.navigate("Promise")}
        />
        <Text style={styles.heading}>Promise</Text>
        <Button
          title="Go to AsyncAwait"
          onPress={() => navigation.navigate("AsyncAwait")}
        />
        <Button
          title="Go to Callback"
          onPress={() => navigation.navigate("Callback")}
        />
        <Button title="Go to OOP" onPress={() => navigation.navigate("OOP")} />
        <Text style={styles.heading}>Networking</Text>
        <Button
          title="Go to Fetch"
          onPress={() => navigation.navigate("Fetch")}
        />
        <Button
          title="Go to Redux Counter"
          onPress={() => navigation.navigate("ReduxCounter")}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: { flexGrow: 1, padding: 20 },
  heading: { fontSize: 24, textAlign: "center", marginVertical: 12 },
  menu: {
    flex: 1,
    marginVertical: 12,
    gap: 4,
  },
});
