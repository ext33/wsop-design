import React, {useState, useEffect,} from "react"

function ErrorPage(props){

    let [title, setTitle] = useState(null)

    useEffect(() => {
        if (props.location.state) {
            if (props.location.state.type === 500){
                setTitle('Error! Try again later...')
            } else {
                setTitle('Page not found')
            }
        } else {
            setTitle('Page not found')
        }
    }, [props])

    function goHome(){
        return(
            props.history.push('/')
        )
    }

    return (
        <div className='page404 container animate__animated animate__fadeIn'>
            {props.error? <h1>{this.props.error}</h1>: null}
            <h2>{title}</h2>
            <button className='info-button' onClick={goHome}>Go to home page</button>
        </div>
    )
}


export default ErrorPage