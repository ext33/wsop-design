import {NavLink} from "react-router-dom";

function Nav(props) {

    return(
        <>
            {props.sideLayout ? 
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
            <div className="nav-top animate__animated animate__fadeIn">
                <div className="div-logo">
                    <NavLink to="/" exact className="logo">WSOP.DESIGN</NavLink>
                </div>
            </div>
        </>
    )
}

export default Nav