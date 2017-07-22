// increment likes
import axios from 'axios';

export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
};

// add comments
export const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
};
// remove comments
export const removeComment = (postId, i) => {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
};