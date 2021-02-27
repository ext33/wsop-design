import React, {useEffect} from 'react';
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

  useEffect(()=>{
    if (props.location.pathname !== '/submit-post') {
      props.clearState()
    }
  }, [props])

  return (
    <div className="App">
      <Nav />
      <div className={'main container'}>
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
