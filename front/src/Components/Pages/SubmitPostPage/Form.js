import React from "react";

function Form (props){
    return(
        <form>
            <div className='form-title'>
                SUBMIT POST
            </div>
            <div className='form-main'>
            <label>Username</label>
            <input className='input input-main' type={'text'} id={'username'} onChange={props.changeHandler} />
            <label>Email</label>
            <input className='input input-main' type={'email'} id={'email'} onChange={props.changeHandler} />
            <label>Image</label>
            <input className='input input-main' type={'file'} id={'image'} onChange={props.changeHandler} />
            <label>Description</label>
            <textarea className='input' id={'description'} onChange={props.changeHandler} />
            <button className='input input-submit' onClick={props.submitHandler}>
                Submit post
            </button>
            </div>
        </form>
    )
}

export default Form