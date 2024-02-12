import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/routes/BottomNavigation";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
  },
});
