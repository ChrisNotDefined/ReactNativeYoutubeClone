import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';

import MiniCard from '../components/MiniCard';
import {ADD} from '../redux/reducer';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=dnb&type=video&key=AIzaSyDsr-NTfx127RUoLgUtpRmuEeKji4IYgfc

const SearchScreen = () => {
  const [value, setValue] = useState('');
  //const [miniCardData, setMiniCardData] = useState([]);
  const miniCardData = useSelector(state => state.cardsData);
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=API_KEY`,
    )
      .then(res => res.json())
      .then(data => {
        //setMiniCardData(data.items);
        dispatch({type: ADD, payload: data.items});
        setLoading(false);
      });
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, {backgroundColor: colors.headerColor}]}>
        <IonIcons
          name="arrow-back"
          size={32}
          onPress={() => navigation.goBack()}
          color={colors.iconColor}
        />
        <TextInput
          style={[styles.searchInput, {color: colors.iconColor}]}
          value={value}
          onChangeText={text => setValue(text)}
        />
        <IonIcons
          color={colors.iconColor}
          name="send"
          size={32}
          onPress={() => fetchData()}
        />
      </View>
      {loading && (
        <ActivityIndicator
          style={styles.searchIndicator}
          size="large"
          color="red"
        />
      )}
      <FlatList
        data={miniCardData}
        renderItem={({item}) => (
          <MiniCard
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
  },
  searchInput: {
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: '#88888888',
  },
  searchIndicator: {
    marginTop: 10,
  },
});

export default SearchScreen;
