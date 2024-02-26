import React from "react";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../context/ThemeContext";

const Screen1 = ({ ...props }) => {
  const { title, content, img } = props;
  const { theme } = useTheme();

  return (
    <View style={[styles.generic, { backgroundColor: theme.background }]}>
      <View style={styles.section}>
        <Text style={[styles.title, { color: theme.text }]}>
          {title || "The Future of Typescript"}
        </Text>
      </View>
      <View style={styles.section}>
        {img ? (
          <ImageBackground
            source={{
              uri: img,
            }}
            style={{ width: "100%", height: 200 }}
          />
        ) : (
          <ImageBackground
            source={{
              uri: "https://img-c.udemycdn.com/course/750x422/3591648_7284_6.jpg",
            }}
            style={{ width: "100%", height: 200 }}
          />
        )}
      </View>
      <View style={styles.section}>
        <Text style={[styles.content, { color: theme.text }]}>
          {content ||
            `TypeScript is a strongly typed superset of JavaScript developed by Microsoft. It adds static typing to the dynamic nature of JavaScript, providing developers with tools for building more robust and scalable applications. Here's a detailed description of `}
        </Text>
        <Button title="Explore More" />
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  generic: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
  },
  content: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 20,
  },
  section: {
    padding: 15,
  },
});
