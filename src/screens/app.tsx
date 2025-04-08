import { registerRootComponent } from "expo";
import Footer from "../components/Footer";
import React from "react";
import {
  StyleSheet,
  View
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

registerRootComponent(App);
