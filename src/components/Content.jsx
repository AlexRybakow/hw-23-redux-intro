import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Input from '../pages/PostsPage/InputBox/Input';
import Posts from '../pages/PostsPage/Posts/Posts';


function Content() {
    return (
        <main className='main-block'>
        <Switch>
          <Route path='/hw-23-redux-intro/' exact>
          <Home/>
          </Route>
          <Route path='/hw-23-redux-intro/feed'>
          <Input/>
          <Posts/>
          </Route>
        </Switch>
      </main>
    )
}

export default Content;

