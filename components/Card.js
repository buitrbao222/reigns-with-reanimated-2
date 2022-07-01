import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useStore from '../store';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const cardSpringConfig = {
  damping: 100,
  stiffness: 90,
  mass: 0.5,
};

export default function Card({ onChooseLeftAnswer, onChooseRightAnswer }) {
  const { leftText, rightText, image, backgroundColor } = useStore(
    state => state.currentCard,
  );

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value;
      ctx.startY = y.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX;
      y.value = ctx.startY + event.translationY;
    },
    onEnd: () => {
      x.value = withSpring(0, cardSpringConfig);
      y.value = withSpring(0, cardSpringConfig);
    },
  });

  const animatedMovableCard = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${interpolate(
          x.value,
          [-50, 50],
          [-0.05, 0.05],
          Extrapolate.EXTEND,
        )}rad`,
      },
      { translateX: x.value },
      { translateY: y.value },
    ],
  }));

  return (
    <View style={styles.cardWrapper}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View
          style={[animatedMovableCard, styles.wrapper, { backgroundColor }]}
        />
      </PanGestureHandler>
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
