import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const UserInfo = ({ user: { name, email } }) => {
  const firstLetters = name
    .split(" ")
    .map((item) => item[0])
    .join("");

  return (
    <View>
      <Text>{firstLetters}</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};
