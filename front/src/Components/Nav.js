import {NavLink} from "react-router-dom";

function Nav() {

    return(
        <>
            <div className="nav-left">
                <div className="sub">
                    <NavLink to="/submit-post" exact className="logo">SUBMIT.POST</NavLink>
                </div>
            </div>
            <div className="nav-right">
                <div className="adm">
                    <NavLink to="/admin" exact className="logo">GO.MODERS</NavLink>
                </div>
            </div>
            <div className="nav-top">
                <div className="div-logo">
                    <NavLink to="/" exact className="logo">WSOP.DESIGN</NavLink>
                </div>
            </div>
        </>
    )
}

export default Nav