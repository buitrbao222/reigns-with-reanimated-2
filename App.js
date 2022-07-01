import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './components/Card';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.wrapper}>
      <Card onChooseLeftAnswer={() => null} onChooseRightAnswer={() => null} />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
