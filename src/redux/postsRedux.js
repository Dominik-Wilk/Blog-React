import { createSelector, nanoid } from '@reduxjs/toolkit';

// selectors
const selectPosts = state => state.posts;
const selectPostId = (state, id) => id;
export const getPosts = createSelector([selectPosts], posts => posts);
export const getPostById = createSelector(
  [selectPosts, selectPostId],
  (posts, id) => posts.find(post => post.id === id)
);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

export const removePost = payload => ({ type: REMOVE_POST, payload });
export const addPost = payload => ({ type: ADD_POST, payload });
export const editPost = payload => ({ type: EDIT_POST, payload });

// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case EDIT_POST:
      return statePart.map(post =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return statePart;
  }
};
export default postsReducer;
