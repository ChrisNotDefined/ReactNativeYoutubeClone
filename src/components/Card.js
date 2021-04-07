import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Card(props) {
  const {colors} = useTheme();
  const textColor = colors.iconColor;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoplayer', {
          videoId: props.videoID,
          title: props.title,
        })
      }>
      <View style={styles.container}>
        <View>
          <Image
            source={{
              uri: `https://i.ytimg.com/vi/${props.videoID}/hqdefault.jpg`,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.content}>
          <MaterialCommunityIcons
            name="account-circle"
            size={40}
            color={'#212121'}
          />
          <View style={styles.textContainer}>
            <Text ellipsizeMode="tail" numberOfLines={2} style={[styles.title, {color: textColor}]}>
              {props.title}
            </Text>
            <Text style={{color: textColor}}>{props.channel}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    flexDirection: 'row',
    margin: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 60,
  },
});
