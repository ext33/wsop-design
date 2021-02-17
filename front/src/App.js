import React from 'react'
import './Styles/App.sass'
import './Styles/Form.sass'
import'./Styles/Main.sass'
import'./Styles/Media.sass'
import {Route, Switch} from 'react-router-dom'
import Nav from "./Components/Nav";
import MainPage from "./Components/Pages/MainPage/MainPage";
import SubmitPostPage from "./Components/Pages/SubmitPostPage/SubmitPostPage";
import ErrorPage from "./Components/Pages/Error/ErrorPage";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className={'main container'}>
          <Switch>
              <Route path='/' exact component={MainPage} />
              <Route path='/submit-post' exact component={SubmitPostPage} />
              <Route path='/admin' exact />
              <Route path='/error' exact component={ErrorPage} />
              <Route path='*' component={ErrorPage} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
