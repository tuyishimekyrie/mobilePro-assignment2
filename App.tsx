import React, { useEffect, useState } from "react";
import { StyleSheet, View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/routes/BottomNavigation";
import NetInfo from "@react-native-community/netinfo";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  const [isConnected, setIsConnected] = useState<boolean | null>(null); 
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected ?? null); 
      if (state.isConnected !== null) {
        Toast.show({
          type: state.isConnected ? "success" : "error",
          text1: state.isConnected ? "Connected" : "Disconnected",
          position: "bottom",
          visibilityTime: 3000,
        });
      }
    });

    return () => unsubscribe();
  }, []);

 
  if (isConnected === null) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ThemeProvider>
    <View style={styles.container}>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
      <Toast />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "flex-end",
  },
});
