import React from 'react'
import {NavLink, withRouter} from "react-router-dom"

function Nav(props) {

    let navTopStyles = ['nav_nav-top', 'animate__animated ', 'animate__fadeIn']

    if(props.location.pathname.includes('admin')){
        navTopStyles.push('nav-top-adm')
    }

    return(
        <>
            { props.location.pathname === '/' ?
            <>
               <div className="nav_nav-left animate__animated animate__fadeIn">
                   <div className="nav_sub-link">
                       <NavLink to="/submit-post" exact className="logo_logo">SUBMIT.POST</NavLink>
                   </div>
               </div>
               <div className="nav_nav-right animate__animated animate__fadeIn" >
                   <div className="nav_admin-link">
                       <NavLink to="/login" exact className="logo_logo">GO.MODERS</NavLink>
                   </div>
               </div>
            </> 
            : null}
            
            { props.location.pathname.includes('admin') ? null :
            <div className={navTopStyles.join(' ')}>
                <div className="logo_div-logo">
                    <NavLink to="/" exact className="logo_logo">WSOP.DESIGN</NavLink>
                </div>
            </div>
            }
        </>
    )
}


export default withRouter(Nav)