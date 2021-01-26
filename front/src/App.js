import React from 'react'
import './Styles/App.sass'
import {Route} from 'react-router-dom'
import Nav from "./Components/Nav";
import MainPage from "./Components/Pages/MainPage/MainPage";
import SubmitPostPage from "./Components/Pages/SubmitPostPage/SubmitPostPage";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='main'>
          <Route path='/' exact component={MainPage} />
          <Route path='/submit-post' component={SubmitPostPage} />
          <Route path='/admin' exact />
      </div>
    </div>
  );
}

export default App;
