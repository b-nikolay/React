import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
  {
    id: 1,
    message: 'Lorem ipsum dolor sit.',
    likesCount: 4,
  },
  {
    id: 2,
    message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.',
    likesCount: 4,
  },
  {
    id: 3,
    message: 'onsectetur adipisicing elit. Veniam tenetur ',
    likesCount: 4,
  }
];
let users = [
  { id: 1, name: 'Дмитрий' },
  { id: 2, name: 'Антон' },
  { id: 3, name: 'Валера' },
  { id: 4, name: 'Денис' },
  { id: 5, name: 'Андрей' },
];

let messages = [
  { id: 1, message: 'Lorem ipsum dolor sit.' },
  { id: 2, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tenetur culpa ullam labore enim.' },
  { id: 3, message: 'onsectetur adipisicing elit. Veniam tenetur ' },
  { id: 4, message: 'm ipsum, dolor si' },
  { id: 5, message: 'etur culpa ullam labor' }
];

root.render(
  
  <React.StrictMode>
    <App posts={posts} users={users} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
