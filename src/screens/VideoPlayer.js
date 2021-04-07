import { useTheme } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import WebView from 'react-native-webview';

const VideoPlayer = ({route}) => {
  const {videoId, title} = route.params;
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <WebView
          domStorageEnabled={true}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{uri: `https://www.youtube.com/embed/${videoId}`}}
        />
      </View>
      <Text style={[styles.title, {color: colors.iconColor}]} numberOfLines={2} ellipsizeMode="tail">
        {title}
      </Text>
      <View style={[styles.decription, {borderColor: colors.iconColor}]} />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 50,
    margin: 9,
  },
  decription: {
    borderBottomWidth: 1,
  },
});
