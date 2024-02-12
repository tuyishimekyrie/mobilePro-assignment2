import { StyleSheet, Text, Button } from "react-native";
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GenericScreen from "../Screens/Screen1";
import AboutUsScreen from "../Screens/AboutUs";
import CalculatorScreen from "../Screens/Calculator";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomePage" component={GenericScreen} />
      <Drawer.Screen name="AboutUsPage" component={AboutUsScreen} />
      <Drawer.Screen name="Calculator" component={CalculatorScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
