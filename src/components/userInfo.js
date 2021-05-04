import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const UserInfo = ({ user: { name, email, id } }) => {
  const firstLetters = name
    .split(" ")
    .map((item) => item[0])
    .join("");

  const pressHandler = (id) => {
    console.log(id);
  };

  return (
    <TouchableOpacity onPress={() => pressHandler(id)}>
      <View style={styles.container}>
        <View style={styles.firstLettersContainer}>
          <Text style={styles.firstLetters}>{firstLetters}</Text>
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <View style={styles.postsContainer}>
          <Text style={styles.posts}>10 posts</Text>
          <AntDesign name="right" size={12} color="black" />
        </View>
      </View>
    </TouchableOpacity>
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
    fontFamily: "roboto-medium",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  name: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    marginBottom: 2,
  },
  email: {
    fontFamily: "roboto-regular",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    opacity: 0.54,
  },
  postsContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  posts: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    marginRight: 12,
  },
});
