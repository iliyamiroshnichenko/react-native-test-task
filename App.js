import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import apiService from "./src/services/api-service";
import { UserInfo } from "./src/components/userInfo";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiService.fetchUsers().then((data) => setUsers(data));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        data={users}
        renderItem={({ item }) => <UserInfo user={item}></UserInfo>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
