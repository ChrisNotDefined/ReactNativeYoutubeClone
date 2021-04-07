import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Card from '../components/Card';

const LittleCard = ({name}) => {
  return (
    <View style={styles.littleCard}>
      <Text style={styles.littleCardtext}>{name}</Text>
    </View>
  );
};

const Explore = () => {
  const cardData = useSelector(state => state.cardsData);
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View>
            <View style={styles.optionList}>
              <LittleCard name="Gaming" />
              <LittleCard name="Trending" />
              <LittleCard name="Music" />
              <LittleCard name="News" />
              <LittleCard name="Movies" />
              <LittleCard name="Fashion" />
            </View>

            <Text style={[styles.exploreText, {color: colors.iconColor, borderColor: colors.iconColor}]}>Trending Videos</Text>
          </View>
        }
        data={cardData}
        renderItem={({item}) => (
          <Card
            videoID={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
          />
        )}
        keyExtractor={item => item.id.videoId}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  exploreText: {
    margin: 8,
    fontSize: 22,
    borderBottomWidth: 1,
  },
  littleCard: {
    backgroundColor: 'red',
    height: 50,
    width: 180,
    borderRadius: 4,
    marginTop: 10,
    justifyContent: 'center'
  },
  littleCardtext: {
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
  },
});
