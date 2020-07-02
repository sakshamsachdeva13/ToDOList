import React from 'react';
import TodoList from './components/List/List'
import UserCard from './components/UserCard/UserCard';
import { Route } from 'react-router-dom'
const App = () => {

  return (
    <div>
      <Route path="/Todo" render={() => <TodoList />} />
      <Route  exact path="/" render={() => <UserCard />} />
    </div>
  );
}

export default App;
