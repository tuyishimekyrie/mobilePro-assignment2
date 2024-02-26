import React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import GenericScreen from "../Screens/Screen1";
import AboutUsScreen from "../Screens/AboutUs";
import CalculatorScreen from "../Screens/Calculator";
import { useTheme } from "../context/ThemeContext";
import SignInScreen from "../Screens/SignIn";
import SignUpScreen from "../Screens/SignUp";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  };

  const handleEditProfilePicture = () => {
    // Handle navigation to the screen for editing profile picture
    // You can use navigation.navigate() to navigate to the desired screen
    console.log("Edit Profile Picture");
  };

  const handleSelectFromGallery = () => {
    // Handle selecting a picture from the gallery
    console.log("Select from Gallery");
  };

  const handleTakePicture = () => {
    // Handle taking a picture using the device's camera
    console.log("Take a Picture");
  };

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomePage" component={GenericScreen} />
      <Drawer.Screen name="AboutUsPage" component={AboutUsScreen} />
      <Drawer.Screen name="Calculator" component={CalculatorScreen} />
      <Drawer.Screen name="SignIn" component={SignInScreen} />
      <Drawer.Screen name="SignUp" component={SignUpScreen} />
      <Drawer.Screen
        name="ToggleTheme"
        options={{
          title: "Toggle Theme",
          drawerLabel: "Toggle Theme",
        }}
      >
        {() => (
          <Button
            title={`Toggle to ${
              theme.mode === "light" ? "Dark" : "Light"
            } Theme`}
            onPress={handleToggleTheme}
          />
        )}
      </Drawer.Screen>
      <Drawer.Screen
        name="EditProfilePicture"
        options={{
          title: "Edit Profile Picture",
          drawerLabel: "Edit Profile Picture",
        }}
      >
        {() => (
          <View>
            <Button
              title="Select from the Gallery"
              onPress={handleSelectFromGallery}
            />
            <Button title="Take a Picture" onPress={handleTakePicture} />
          </View>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
