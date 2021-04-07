import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Card from '../components/Card';
import {useSelector} from 'react-redux';

export default function HomeScreen() {
  const cardData = useSelector(state => state.cardsData);
  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        renderItem={({item}) => (
          <Card
            videoID={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
          />
        )}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
