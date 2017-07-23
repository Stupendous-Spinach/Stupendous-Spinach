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
  case 'INCREMENT_COMMENT':
    return [
      ...state.slice(0, i),
      {
        ...state[i], comment_count: state[i].comment_count === null ? state[i].comment_count = 1 : state[i].comment_count + 1
      },
      ...state.slice(i + 1),
    ]
  default:
    return state;
  }
}