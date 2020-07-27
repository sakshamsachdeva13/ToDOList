import React from 'react';
import TodoList from './components/List/List'
import UserCard from './components/UserCard/UserCard';
import { Route } from 'react-router-dom'
import Header from './components/header/header'
import CheckBox from './components/CheckBox/CheckBox';
const App = () => {

  return (
    <div>
      <Header />
     
      <UserCard />
    </div>
  );
}

export default App;
