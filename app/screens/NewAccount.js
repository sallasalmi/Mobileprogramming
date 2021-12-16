import React from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import { Form, FormField, Submit } from "../components/forms";

function NewAccount() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
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
        <Submit title="Singup" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default NewAccount;