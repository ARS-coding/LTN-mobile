import 'react-native-gesture-handler';

import React, { useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, NativeModules, Platform, LogBox } from 'react-native';

import Routes from './navigation';
import { enableScreens } from 'react-native-screens';

const { StatusBarManager } = NativeModules;
const statusBarHeight = (Platform.OS === "android" && StatusBarManager.HEIGHT) || (Platform.OS === "ios" && StatusBarManager.getHeight(height => height));

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);
  
  useEffect(() => {
    enableScreens();
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar />
      <Routes />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight,
  },
});
