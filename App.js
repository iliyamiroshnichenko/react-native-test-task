import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import apiService from "./src/services/api-service";
import { SearchBar } from "./src/components/SearchBar";
import { UserInfo } from "./src/components/userInfo";

export default function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");

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

  return (
    <View style={styles.container}>
      <SearchBar search={search}></SearchBar>
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        data={filteredUsers}
        renderItem={({ item }) => <UserInfo user={item}></UserInfo>}
      />
    </View>
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
