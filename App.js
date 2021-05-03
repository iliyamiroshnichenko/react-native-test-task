// import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
// import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import apiService from "./src/services/api-service";
import { SearchBar } from "./src/components/SearchBar";
import { UserInfo } from "./src/components/userInfo";

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    apiService.fetchUsers().then((data) => setUsers(data));
    // apiService.fetchUserPosts().then((data) => console.log(data));
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

  return (
    // <NavigationContainer>
    <View style={styles.container}>
      <SearchBar search={search}></SearchBar>
      {filteredUsers.length > 0 ? (
        <FlatList
          keyExtractor={({ id }) => id.toString()}
          data={filteredUsers}
          renderItem={({ item }) => <UserInfo user={item}></UserInfo>}
        />
      ) : (
        Alert.alert("Oops!", "No results for your query!", [
          { text: "Try again" },
        ])
      )}
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
