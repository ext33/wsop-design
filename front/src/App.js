import React, {useEffect, useState} from 'react'
import './Styles/Root.sass'
import 'animate.css'
import {Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from "./Components/Nav";
import MainPage from "./Components/Pages/MainPage/MainPage";
import SubmitPostPage from "./Components/Pages/SubmitPostPage/SubmitPostPage";
import ErrorPage from "./Components/Pages/Error/ErrorPage";
import {clearState} from './Store/actions/submitPost'

function App(props) {

  const [layout, setLayout] = useState(true)

  useEffect(()=>{
    if (props.location.pathname !== '/submit-post') {
      props.clearState()
    }
    if (props.location.pathname === '/error') {
      setLayout(false)
    }
    else {
      setLayout(true)
    }
}, [props])

  return (
    <div className="App">
      <Nav sideLayout={layout} />
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

function mapStateToProps(state){
  return{
      message: state.submitFormReducer.message,
      error: state.submitFormReducer.error,
  }
}

function mapDispatchToProps(dispatch){
  return{
      clearState: () => dispatch(clearState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
