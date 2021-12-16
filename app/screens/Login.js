import React from "react";
import { StyleSheet, Image } from "react-native";


import Screen from "../components/Screen";
import { Form, FormField, Submit } from "../components/forms";


function Login() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/travelieLogo.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        
      >
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Submit title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default Login;