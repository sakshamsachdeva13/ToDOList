import React from 'react';
import TodoList from './components/List/List'
import UserCard from './components/UserCard/UserCard';
import { Route } from 'react-router-dom'
import Header from './components/header/header'
const App = () => {

  return (
    <div>
      <Route path="/Todo" render={() => <TodoList />} />
      <Route exact path="/" render={() => <Header />} />
    </div>
  );
}

export default App;
