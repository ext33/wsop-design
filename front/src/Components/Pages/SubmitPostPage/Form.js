import React, {useEffect, useState} from "react";

function Form (props){

    const [image, setImage] = useState({
        base64: null,
        alt: null,
    })

    useEffect(()=>{
        document.getElementById('image').addEventListener('change', changeHandler)
    })

    function changeHandler(event){
        const files = Array.from(event.target.files)
        files.forEach(file => {
            const reader = new FileReader()
            reader.onload = (ev) => {
                setImage((prevState)=>{
                    return{
                        ...prevState,
                        base64: ev.target.result,
                        alt: file.name,
                    }
                })
            }
            reader.readAsDataURL(file)
        })
    }


    return(
        <form>
            <div className='form-main'>
            <label>Username</label>
            <input className='input input-main' type={'text'} id={'username'} onChange={props.changeHandler} />
            <label>Email</label>
            <input className='input input-main' type={'email'} id={'email'} onChange={props.changeHandler} />
            <label>Image</label>
            <div className='imageprev' onClick={()=>{document.getElementById('image').click()}}>
                { image ? <img className='prev' src={image.base64} alt={image.alt}/> : null }
            </div>
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