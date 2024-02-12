import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "../routes/DrawerNavigation";

const HomeScreen = () => {
  return (
    <View style={styles.home}>
      {/* <NavigationContainer> */}
        <DrawerNavigation />
      {/* </NavigationContainer> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
});
