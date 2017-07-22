//import store from '../store';
//import watch from 'redux-watch';

export default function photoArray(state = [], action) {
  const i = action.index;
  switch (action.type) {
  case 'ALL_PHOTOS':
    return action.payload;
  case 'INCREMENT_LIKES':
    return [
      ...state.slice(0, i),
      {
        ...state[i], like_count: state[i].like_count === null ? state[i].like_count = 1 : state[i].like_count + 1, liked: true
      },
      ...state.slice(i + 1),
    ]
  case 'DECREMENT_LIKES':
    return [
      ...state.slice(0, i),
      {
        ...state[i], like_count: state[i].like_count === null ? state[i].like_count = 0 : state[i].like_count - 1, liked: false
      },
      ...state.slice(i + 1),
    ]
  default:
    return state;
  }
}
// console.log('store ', store);
// let w = watch(store.getState, 'photoArray');
// store.subscribe(w((newVal, oldVal, objectPath) => {
//   console.log('%s changed from %s to %s', objectPath, oldVal, newVal);
// }))