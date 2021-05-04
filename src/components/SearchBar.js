import React, { useState, useEffect } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const SearchBar = ({ search }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    search(value);
  }, [value]);

  return (
    <View style={styles.searchBar}>
      <EvilIcons name="search" size={24} color="grey" />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Search"
        autoCorrect={false}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    backgroundColor: "rgba(62, 38, 42, 0.24)",
    borderRadius: 4,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: "100%",
    marginLeft: 10,
    fontFamily: "roboto-regular",
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    opacity: 0.5,
  },
});
