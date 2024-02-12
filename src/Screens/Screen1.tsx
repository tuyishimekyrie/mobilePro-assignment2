import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

const Screen1 = ({ ...props }) => {
  const { title, content,img } = props;
  return (
    <View style={styles.generic}>
      <View style={styles.section}>
        <Text style={styles.title}>{title || "The Future of Typescript"} </Text>
      </View>
      <View style={styles.section}>
        {/*  */}
        {img ? (
          <ImageBackground
            source={{
              uri: img,
            }}
            style={{ width: "100%", height: 200 }}
          >
            {/* Optional: You can add additional components inside the ImageBackground if needed */}
          </ImageBackground>
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
        <Text style={styles.content}>
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
    color: "#06b6d4",
  },
  content: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom:20
  },
  section: {
    padding: 15,
  }
});
