import React, { useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native";
// import auth from "@react-native-firebase/auth";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<null | string>(null); // Specify the type for error state
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match"); // Set error message as a string
        return;
      }

      setLoading(true);

      // const response = await auth().createUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      // console.log("User signed up successfully!", response.user);
      // Optionally, you can navigate to another screen upon successful signup
    } catch (error: any) {
      // Handle error
      console.error("Firebase authentication error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
     
      <Button title="Sign Up" onPress={handleSignUp} disabled={loading} />
      {loading && <ActivityIndicator />}
      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
};

export default SignInScreen;
