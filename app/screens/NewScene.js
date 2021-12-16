import React from "react";
import { StyleSheet } from "react-native";

import {
  Form,
  FormField,
  Submit,
} from "../components/forms";

import Screen from "../components/Screen";


function NewScene() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          subTitle: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField maxLength={255} name="subTitle" placeholder="subTitle" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <Submit title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default NewScene;