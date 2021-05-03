import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home/Home';
import Input from '../pages/PostsPage/InputBox';
import Posts from '../pages/PostsPage/Posts';


function Content() {
    return (
        <main className='main-block'>
        <Switch>
          <Route path='/hw23-redux-intro/' exact>
          <Home/>
          </Route>
          <Route path='/hw23-redux-intro/feed'>
          <Input/>
          <Posts/>
          </Route>
        </Switch>
      </main>
    )
}

export default Content;

