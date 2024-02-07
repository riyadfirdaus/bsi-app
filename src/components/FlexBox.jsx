import { StyleSheet, View, Text } from "react-native";

export default FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarText}>Sidebar</Text>
        </View>

        <View style={styles.mainContent}>
          <Text>Main Content</Text>
          <Text>Main Content</Text>
          <Text>Main Content</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    height: 48,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 10,
    fontWeight: "bold",
  },
  content: {
    flex: 2,
    flexDirection: "row",
  },
  sidebar: {
    flex: 1,
    backgroundColor: "lightgreen",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebarText: {
    fontSize: 16,
  },
  mainContent: {
    flex: 3,
    backgroundColor: "lightcoral",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    height: 48,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 10,
  },
});
