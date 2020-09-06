import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotMatch from './Components/NotMatch/NotMatch';
import ViewPost from './Components/ViewPost/ViewPost';
import ViewComment from './Components/ViewComment/ViewComment';


function App() {
  const [posts,setPosts] = useState([]);
    useEffect( ()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Header></Header>
            <Home posts={posts} setPosts={setPosts}></Home>
          </Route>
          <Route path="/post/:postId">
            <ViewPost></ViewPost>
          </Route>
          <Route path="/comment/:commentId">
            <ViewComment></ViewComment>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Home posts={posts} setPosts={setPosts}></Home>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
