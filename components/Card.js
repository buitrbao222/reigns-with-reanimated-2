import React from 'react';
import { StyleSheet, View } from 'react-native';
import useStore from '../store';

export default function Card({ onChooseLeftAnswer, onChooseRightAnswer }) {
  const { leftText, rightText, image, backgroundColor } = useStore(
    state => state.currentCard,
  );

  return (
    <View style={styles.cardWrapper}>
      <View style={[styles.wrapper, { backgroundColor }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 240,
    width: 240,
    borderRadius: 35,
    overflow: 'hidden',
  },
  cardWrapper: {
    height: 240,
  },
});
