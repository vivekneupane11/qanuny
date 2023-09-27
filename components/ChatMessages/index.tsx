import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MessageBox from '../MessageBox';

const ChatMessages = ({ messages }:any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <MessageBox
            user={item.user}
            message={item.message}
            date={item.date}
            isMyMessage={item.isMyMessage}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      width:'100%',
      paddingVertical:10
    },
  });

export default ChatMessages;
