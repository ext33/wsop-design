import React from "react";

function Form (props){
    return(
        <form>
            <div className={'form-title'}>
                SUBMIT POST
            </div>
            <div className={'form-main'}>
                <input type={'email'} id={'email'} onChange={props.changeHandler} />
                <input type={'text'} id={'description'} onChange={props.changeHandler} />
                <input type={'file'} id={'image'} onChange={props.changeHandler} />
            </div>
        </form>
    )
}

export default Form