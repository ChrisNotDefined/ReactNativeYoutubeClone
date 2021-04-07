import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation, useTheme} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SET_THEME } from '../redux/themeReducer';

export default function Header() {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.settedTheme)
  const mycolor = colors.iconColor ?? '#212121';
  return (
    <View style={[styles.container, {backgroundColor: colors.headerColor}]}>
      <View style={styles.left}>
        <AntDesign
          style={styles.mainIcon}
          name="youtube"
          size={32}
          color="red"
        />
        <Text style={[styles.textTitle, {color: mycolor}]}>YouTube</Text>
      </View>
      <View style={styles.right}>
        <MaterialIcons name="videocam" size={30} color={mycolor} />
        <MaterialIcons
          name="search"
          size={30}
          color={mycolor}
          onPress={() => navigation.navigate('search')}
        />
        <IonIcons
          name={isDarkMode ? 'moon': 'sunny'}
          size={30}
          color={mycolor}
          onPress={() => {dispatch({type: SET_THEME, payload: !isDarkMode})}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 5,
  },
  left: {
    flexDirection: 'row',
    margin: 5,
  },
  textTitle: {
    fontSize: 22,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  mainIcon: {
    marginLeft: 20,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 150,
    margin: 5,
  },
});
