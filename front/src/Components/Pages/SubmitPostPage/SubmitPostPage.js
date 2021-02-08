import React, {useState} from 'react'
import Form from './Form'

function SubmitPostPage() {
    let [state, setState] = useState({
        username: null,
        email: null,
        description: null,
        image: null,
    })

    function ChangeInput(newValue, param){
        setState((prevState)=>{
            return{
                ...prevState,
                [param]: newValue,
            }
        })
    }

    function SubmitForm(){

    }

    return(
        <div id='SubmitPostPage'>
            <Form
                changeHandler={event=>ChangeInput(event.target.value, event.target.id)}
                submitHandler={SubmitForm}
            />
        </div>
    )
}

export default SubmitPostPage