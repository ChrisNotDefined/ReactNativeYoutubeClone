import React from 'react';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';
import Card from '../components/Card';
import {useSelector} from 'react-redux';
import Header from '../components/Header';
import { scrollY, translateY } from '../animations/hideHeader';

export default function HomeScreen() {
  // const scrollY = new Animated.Value(0);

  // const diffClamp = Animated.diffClamp(scrollY, 0, 45);

  // // const translateY = scrollY.interpolate({
  // //   inputRange: [0, 45],
  // //   outputRange: [0, -45],
  // // });

  // const translateY = diffClamp.interpolate({
  //   inputRange: [0, 45],
  //   outputRange: [0, -45]
  // })

  const cardData = useSelector(state => state.cardsData);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          zIndex: 99,
          transform: [{translateY: translateY}],
        }}>
        <Header />
      </Animated.View>
      <FlatList
        data={cardData}
        renderItem={({item}) => (
          <Card
            videoID={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
          />
        )}
        keyExtractor={item => item.id.videoId}
        onScroll={e => {
          scrollY.setValue(e.nativeEvent.contentOffset.y);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
