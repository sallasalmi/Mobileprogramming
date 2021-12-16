import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

function InformationScreen() {
 
  return (
    <View>
      <Image style={styles.image} source={require("../assets/scene2.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Kaunis ruska metsätie</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/profilePic.jpg")}
            title="Jaakko Kuusi"
            subTitle="3 Scenes"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default InformationScreen;