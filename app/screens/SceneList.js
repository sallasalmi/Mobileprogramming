import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const scenes = [
  {
    id: 1,
    title: "Ihana lomamaisema",
    subTitle: "Venetsia",
    image: require("../assets/scene1.jpg"),
  },
  {
    id: 2,
    title: "Kaunis ruska metsätie",
    subTitle: "Vaasassa",
    image: require("../assets/scene2.jpg"),
  },
  {
    id: 3,
    title: "Upea puu aukiolla",
    subTitle: "Joensuu",
    image: require("../assets/scene3.jpg"),
  },
];

function SceneList({navigation}) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={scenes}
        keyExtractor={(scene) => scene.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate("Scenes", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default SceneList;