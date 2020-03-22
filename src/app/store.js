import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import roomReducer from '../features/room/roomSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    room: roomReducer,
  },
});
