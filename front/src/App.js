import React from 'react'
import './Styles/App.sass'
import './Styles/Form.sass'
import'./Styles/Main.sass'
import'./Styles/Media.sass'
import {Route, Switch} from 'react-router-dom'
import Nav from "./Components/Nav";
import MainPage from "./Components/Pages/MainPage/MainPage";
import SubmitPostPage from "./Components/Pages/SubmitPostPage/SubmitPostPage";
import Page404 from "./Components/Pages/404/Page404";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className={'main container'}>
          <Switch>
              <Route path='/' exact component={MainPage} />
              <Route path='/submit-post' exact component={SubmitPostPage} />
              <Route path='/admin' exact />
              <Route component={Page404} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
