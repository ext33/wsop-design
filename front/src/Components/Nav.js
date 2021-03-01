import React from 'react'
import {NavLink, withRouter} from "react-router-dom";


function Nav(props) {

    let navTopStyles = ['nav-top', 'animate__animated ', 'animate__fadeIn']

    if(props.location.pathname.includes('admin')){
        navTopStyles.push('nav-top-adm')
    }

    return(
        <>
            { props.location.pathname === '/' || props.location.pathname === '/submit-post' ?
            <>
               <div className="nav-left animate__animated animate__fadeIn">
                   <div className="sub">
                       <NavLink to="/submit-post" exact className="logo">SUBMIT.POST</NavLink>
                   </div>
               </div>
               <div className="nav-right animate__animated animate__fadeIn" >
                   <div className="adm">
                       <NavLink to="/admin" exact className="logo">GO.MODERS</NavLink>
                   </div>
               </div>
            </> 
            : null}
            
            { props.location.pathname.includes('admin') ? null :
            <div className={navTopStyles.join(' ')}>
                <div className="div-logo">
                    <NavLink to="/" exact className="logo">WSOP.DESIGN</NavLink>
                </div>
            </div>
            }
        </>
    )
}

export default withRouter(Nav)