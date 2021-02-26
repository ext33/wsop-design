import React, {useEffect} from 'react';
import './Styles/Root.sass';
import 'animate.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Nav from "./Components/Nav";
import RouterView from './Router';
import {clearState} from './Store/actions/submitPost';
import {setNavLayout} from './Store/actions/layout'

function App(props) {


  useEffect(()=>{
    if (props.location.pathname !== '/submit-post') {
      props.clearState()
    }
    if (props.location.pathname === '/login' || props.location.pathname.includes('admin')) {
        props.showNav(false)
    }
    else {
      if (props.layout !== true) {
        props.showNav(true)
      }
    }
  }, [props])

  return (
    <div className="App">
      <Nav sideLayout={props.layout} />
      <div className={'main container'}>
          <RouterView />
      </div>
    </div>
  );
}

function mapStateToProps(state){
  return{
      message: state.submitFormReducer.message,
      error: state.submitFormReducer.error,
      layout: state.layoutReducer.showNav,
  }
}

function mapDispatchToProps(dispatch){
  return{
      clearState: () => dispatch(clearState()),
      showNav: (data) => dispatch(setNavLayout(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
