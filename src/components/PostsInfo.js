import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const PostsInfo = ({ post: { title, body } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginTop: 10,
    marginBottom: 14,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 1, height: 4 },
  },
  title: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    marginBottom: 9,
  },
  content: {
    fontFamily: "roboto-regular",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    opacity: 0.54,
  },
});
