import create from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import CARDS from './constants/cards';

const useStore = create(
  subscribeWithSelector(() => ({
    currentCard: CARDS[0],
    currentCardIndex: 0,
    currentMood: { happy: [], sad: [] },
    showStartButton: true,
    showCard: false,
    showReversedCard: false,
    showAnimatedReversedCard: false,
    showQuestion: false,
  })),
);

useStore.subscribe(
  state => state.currentCardIndex,
  currentCardIndex => {
    useStore.setState({
      currentCard: CARDS[currentCardIndex % 5],
    });
  },
);

export default useStore;
