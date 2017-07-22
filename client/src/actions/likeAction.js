// increment likes
import axios from 'axios';

export const increment = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
};

// add comments
export const incrementComment = (index) => {
  return {
    type: 'INCREMENT_COMMENT',
    index
  };
};