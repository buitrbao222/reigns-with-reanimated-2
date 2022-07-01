import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Card onChooseLeftAnswer={() => null} onChooseRightAnswer={() => null} />
    </View>
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
