import React from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, NativeModules } from 'react-native';

import HomeScreen from './screens/HomeScreen';

const { StatusBarManager } = NativeModules;
const statusBarHeight = (Platform.OS === "android" && StatusBarManager.HEIGHT) || (Platform.OS === "ios" && StatusBarManager.getHeight(height => height));

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight
  },
});
