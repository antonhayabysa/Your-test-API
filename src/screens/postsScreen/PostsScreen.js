import React, { useState } from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import { getPosts, deletePost } from "../../utils/service";
import styles from "./styles";

export default function PostsScreen() {
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (error) {
      console.error("Ошибка при получении постов: ", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      fetchPosts();
    } catch (error) {
      console.error(`Ошибка при удалении поста с ID=${id}: `, error);
    }
  };

  return (
      <View style={styles.container}>
        <Button title="Получить посты" onPress={fetchPosts} />
        {posts && (
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.post}>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.text}>{item.text}</Text>
                      <Image source={{ uri: item.image }} style={styles.image} />
                      <Button title="Удалить пост" onPress={() => handleDeletePost(item.id)} />
                    </View>
                )}
            />
        )}
      </View>
  );
}
