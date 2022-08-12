// import { render, screen } from '@testing-library/react';
// import App from './App';

import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    {
      id: 1,
      message: 'Lorem ipsum dolor sit.',
      likesCount: 4,
      src: 'https://images.unsplash.com/photo-1658173318998-9cd7a0e18c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
    },
    {
      id: 2,
      message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.',
      likesCount: 4,
      src: 'https://images.unsplash.com/photo-1658138284539-b04c52359d64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      message: 'onsectetur adipisicing elit. Veniam tenetur ',
      likesCount: 4,
      src: 'https://images.unsplash.com/photo-1658223255517-6a0b475fdd7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
  ],

}


test('new post should be added', () => {
  let action = addPostActionCreator('Text')

  let newState = profileReducer(state, action)
  
  expect(newState.posts.length).toBe(4);
});



test('message on new post should be correct', () => {
  let action = addPostActionCreator('Text')

  let newState = profileReducer(state, action)
  
  expect(newState.posts[3].message).toBe('Text');
});


test('after deleting length of message should be decrement', () => {
  let action = deletePost(1)

  let newState = profileReducer(state, action)
  
  expect(newState.posts.length).toBe(2);
});


test('after deleting length should`t be decrement if id incorrect', () => {
  let action = deletePost(1223)

  let newState = profileReducer(state, action)
  
  expect(newState.posts.length).toBe(3);
});

