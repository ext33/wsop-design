import React from "react";

function Form (props){
    return(
        <form>
            <div className='form-title'>
                SUBMIT POST
            </div>
            <input className='input input-main' placeholder={'email'} type={'email'} id={'email'} onChange={props.changeHandler} />
            <input className='input input-main' placeholder={'description'} type={'textarea'} id={'description'} onChange={props.changeHandler} />
            <input className='input input-main' placeholder={'choose image'} type={'file'} id={'image'} onChange={props.changeHandler} />
            <input className='input input-submit' value={'Submit'} type={'submit'} onClick={props.submitHandler} />
        </form>
    )
}

export default Form