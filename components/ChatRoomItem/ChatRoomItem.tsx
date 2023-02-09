import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const ChatRoomItem = ({ chatRoom }) => {
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onPress = () => {
    console.warn("Pressed on:", user.name);
    navigation.navigate("ChatRoom", { id: chatRoom.id });
    // navigation.setOptions({ title: user.name });
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      {/* TODO:Conditionally render the badgeContainer   */}

      {chatRoom.newMessages && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>
      )}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>
          {chatRoom.lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
