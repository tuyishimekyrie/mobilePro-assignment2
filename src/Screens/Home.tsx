import { StyleSheet, View, Text } from "react-native";
import React from "react";
import DrawerNavigation from "../routes/DrawerNavigation";
import { useTheme } from "../context/ThemeContext";

const HomeScreen = () => {
  const { theme } = useTheme();
  console.log("Current Theme:", theme); // Log the current theme values

  return (
    <View style={[styles.home, { backgroundColor: theme.background }]}>
      <DrawerNavigation />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});
