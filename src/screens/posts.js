import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import apiService from "../services/api-service";
import { SearchBar } from "../../src//components/SearchBar";
import { PostsInfo } from "../../src/components/PostsInfo";

export const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const { id, name } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: `${name}'s posts`,
    });
    apiService.fetchUserPosts(id).then((data) => setPosts(data));
  }, []);

  const search = (value) => {
    setQuery(value);
  };

  const normalizedQuery = query.toLowerCase();
  const filteredPosts = posts.filter(
    ({ title, body }) =>
      title.toLowerCase().includes(normalizedQuery) ||
      body.toLowerCase().includes(normalizedQuery)
  );

  return (
    <View style={styles.container}>
      <SearchBar search={search}></SearchBar>
      <FlatList
        keyExtractor={({ id }) => id.toString()}
        data={filteredPosts}
        renderItem={({ item }) => <PostsInfo post={item}></PostsInfo>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
