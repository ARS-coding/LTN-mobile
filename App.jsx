import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { useDispatch, Provider } from 'react-redux';
import { listenForAuthChanges } from './redux/slices/userSlice';
import { store } from "./redux/store";

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  NativeModules,
  Platform,
  Keyboard,
  LogBox
} from 'react-native';

import Routes from './navigation/RootNavigator';
import { enableScreens } from 'react-native-screens';


const { StatusBarManager } = NativeModules;
const statusBarHeight = (Platform.OS === "android" && StatusBarManager.HEIGHT) || (Platform.OS === "ios" && StatusBarManager.getHeight(height => height));

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

function App() {
  const dispatch = useDispatch()
  LogBox.ignoreLogs(['Setting a timer']);
  
  useEffect(() => {
    dispatch(listenForAuthChanges());
    enableScreens();
  }, [])

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <StatusBar />
          <Routes />  
        </>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: statusBarHeight,
  },
});