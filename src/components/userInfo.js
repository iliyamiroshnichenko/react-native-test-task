import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const UserInfo = ({ user: { name, email } }) => {
  const firstLetters = name
    .split(" ")
    .map((item) => item[0])
    .join("");

  return (
    <View style={styles.container}>
      <View style={styles.firstLettersContainer}>
        <Text style={styles.firstLetters}>{firstLetters}</Text>
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <Text style={styles.posts}>10 posts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  firstLettersContainer: {
    marginRight: 16,
    backgroundColor: "#6FCF97",
    borderRadius: 50,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  firstLetters: {
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  name: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    marginBottom: 2,
  },
  email: {
    fontFamily: "Roboto",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    opacity: 0.54,
  },
  posts: {
    fontFamily: "Roboto",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    marginLeft: "auto",
  },
});
