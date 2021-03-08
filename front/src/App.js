import React, {useEffect, useState} from 'react';
import './Styles/Root.sass';
import 'animate.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import RouterView from './Router';
import {clearState} from './Store/actions/submitPost';
import Nav from './Components/Nav'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

function App(props) {
  let [styles, setStyles] = useState(true)

  useEffect(()=>{
    if (props.location.pathname !== '/submit-post') {
      props.clearState()
    }
    if (props.location.pathname.includes('admin')) {
      setStyles(false)
    }
    else {
      setStyles(true)
    }
  }, [props])

  return (
    <div className="App animate__animated animate__fadeIn">
      <Nav />
      <div className={ styles ? 'main container' : 'admin' }>
          <RouterView />
      </div>
    </div>
  );

}

function mapDispatchToProps(dispatch){
  return{
      clearState: () => dispatch(clearState()),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App));
