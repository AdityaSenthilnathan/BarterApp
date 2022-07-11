import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import PostScreen from '../screens/PostScreen';
import HomeScreen from '../screens/HomeScreen'

export const AppTabNavigator = createBottomTabNavigator({
  Donate: {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarLabel : "HomeScreen",
    }
  },
  Post : {
    screen: PostScreen,
    navigationOptions :{
      tabBarLabel : "Exchange",
    }
  }
});