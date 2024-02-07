import { View, Text } from "react-native";
import RowLayout from "./components/RowLayout";
import ColumnLayout from "./components/ColumnLayout";
import BasicScrollView from "./components/BasicScrollview";
import BasicFlatlist from "./components/BasicFlatlist";

export default function AppSrc() {
  return (
    <>
      {/* <RowLayout /> */}
      {/* <ColumnLayout /> */}
      {/* <BasicScrollView /> */}
      <BasicFlatlist />
    </>
  );
}
