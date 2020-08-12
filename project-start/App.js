import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddRestaurant from './screens/add_restaurant'
import {globalStyles} from './styles/global'

export default function App() {
  return (
    <View style={globalStyles.container}>
      <AddRestaurant/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
