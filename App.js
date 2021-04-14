import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Provider, useSelector} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer} from './src/redux/reducer';
import {themeReducer} from './src/redux/themeReducer';

import Header from './src/components/Header';
import SearchScreen from './src/screens/Search';
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import VideoPlayer from './src/screens/VideoPlayer';
import Suscribe from './src/screens/Suscribe';

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIconColor: 'white',
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    headerColor: 'white',
    iconColor: 'black',
    tabIconColor: 'red',
  },
};

const rootReducer = combineReducers({
  cardsData: reducer,
  settedTheme: themeReducer,
});

const store = createStore(rootReducer);
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  const {colors} = useTheme();
  return (
    <>
      <Tabs.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => {
            if (route.name === 'home') {
              return <MaterialIcons name={'home'} size={30} color={color} />;
            }
            if (route.name === 'explore') {
              return <MaterialIcons name={'explore'} size={30} color={color} />;
            }
            if (route.name === 'suscribe') {
              return (
                <MaterialIcons name={'subscriptions'} size={30} color={color} />
              );
            }

            // You can return any component that you like here!
            // return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: colors.tabIconColor,
          inactiveTintColor: 'gray',
        }}>
        <Tabs.Screen name="home" component={Home} />
        <Tabs.Screen name="explore" component={Explore} />
        <Tabs.Screen name="suscribe" component={Suscribe} />
      </Tabs.Navigator>
    </>
  );
};

export const NavigationContent = () => {
  const isDarkMode = useSelector(state => state.settedTheme);

  return (
    <NavigationContainer
      theme={isDarkMode ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="rootHome" component={RootHome} />
        <Stack.Screen name="search" component={SearchScreen} />
        <Stack.Screen name="videoplayer" component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContent />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
