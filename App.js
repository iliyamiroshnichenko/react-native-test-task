// import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, FlatList } from "react-native";
import { useFonts } from "expo-font";
import apiService from "./src/services/api-service";
import { SearchBar } from "./src/components/SearchBar";
import { UserInfo } from "./src/components/userInfo";

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  const [loaded] = useFonts({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    apiService.fetchUsers().then((data) => setUsers(data));
  }, []);

  const search = (value) => {
    setQuery(value);
  };

  const normalizedQuery = query.toLowerCase();
  const filteredUsers = users.filter(
    ({ name, email }) =>
      name.toLowerCase().includes(normalizedQuery) ||
      email.toLowerCase().includes(normalizedQuery)
  );

  if (!loaded) {
    return null;
  }
  return (
    // <NavigationContainer>
    <View style={styles.container}>
      <SearchBar search={search}></SearchBar>
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        data={filteredUsers}
        renderItem={({ item }) => <UserInfo user={item}></UserInfo>}
      />
    </View>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: 24,
  },
});
