import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

const MiniCard = props => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const textColor = colors.iconColor;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('videoplayer', {
          videoId: props.videoID,
          title: props.title,
        })
      }>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoID}/hqdefault.jpg`,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text ellipsizeMode="tail" numberOfLines={3} style={[styles.title, {color: textColor}]}>
            {props.title}
          </Text>
          <Text style={[styles.subtitle, {color: textColor}]}>{props.channel}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MiniCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
  },
  image: {
    width: '45%',
    height: 100,
  },
  title: {
    fontSize: 17,
    width: Dimensions.get('screen').width / 2,
  },
  subtitle: {
    fontSize: 12,
  },
  textContainer: {
    paddingLeft: 7,
  },
});
