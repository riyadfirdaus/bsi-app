import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import AsynchronousScreen from "./screens/asynchronous/Asynchronous";
import DetailsScreen from "./screens/Details";
import HomeScreen from "./screens/Home";
import SynchronousScreen from "./screens/asynchronous/Synchronous";
import AsyncAwaitPromiseExample from "./screens/asynchronous/Promise";
import Card from "./components/Card";
import CardView from "./screens/CardView";

import CallbackPromiseExample from "./screens/asynchronous/Callback";
import FunctionalComponentWithOOP from "./screens/OOP/OOP";
import FetchScreen from "./screens/networking/Fetch";

const Stack = createStackNavigator();

export default function AppSrc() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Card" component={CardView} />
        <Stack.Screen
          name="Synchronous"
          options={{}}
          component={SynchronousScreen}
        />
        <Stack.Screen
          name="Asynchronous"
          options={{}}
          component={AsynchronousScreen}
        />
        <Stack.Screen
          name="AsyncAwait"
          options={{}}
          component={AsyncAwaitPromiseExample}
        />
        <Stack.Screen
          name="Callback"
          options={{}}
          component={CallbackPromiseExample}
        />
        <Stack.Screen
          name="OOP"
          options={{}}
          component={FunctionalComponentWithOOP}
        />
        <Stack.Screen name="Fetch" options={{}} component={FetchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,
    backgroundColor: "#007ACC",
    width: "auto",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    padding: 10,
  },
});
