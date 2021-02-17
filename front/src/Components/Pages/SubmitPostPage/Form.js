import React, {useEffect, useState} from "react";
import {connect} from 'react-redux'
import {submitPostAction, clearState} from '../../../Store/actions/submitPost'
import ModalWindow from "./ModalWindow";

function Form (props){

    const [image, setImage] = useState({
        base64: null,
        alt: null,
    })
    const [formData, setFormData] = useState({
        username: null,
        email: null,
        description: null,
        image: null,
    })
    const [modal, setModal] = useState(false)
    const [successModal, setSuccessModal] = useState(false)

    useEffect(()=>{
        document.getElementById('image').addEventListener('change', changeImageHandler)
        if (props.error){
            setModal(true)
        } else if (props.message && !props.error){
            setSuccessModal(true)
        }

    }, [props.message, props.error])

    function ChangeInput(newValue, param){
        if (modal === true) {
            setModal(false)
            props.clearState()
        }
        setFormData((prevState)=>{
            return{
                ...prevState,
                [param]: newValue
            }
        })
    }

    function SubmitForm(){
        props.submitPostAction(formData)
    }

    function changeImageHandler(event){
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
        <>
        <form>
            { modal ?
            <ModalWindow 
                message={props.message} 
                error={props.error}
            />
            : null }       
            { successModal? 
                <ModalWindow 
                    message={props.message} 
                    error={props.error}
                /> :
                <div className='form-main'>
                <label>Username</label>
                <input className='input input-main' type={'text'} id={'username'} onChange={(event)=>ChangeInput(event.target.value, event.target.id)} />
                <label>Email</label>
                <input className='input input-main' type={'email'} id={'email'} onChange={(event)=>ChangeInput(event.target.value, event.target.id)} />
                <label>Image</label>
                <div className='imageprev' onClick={()=>{document.getElementById('image').click()}}>
                    { image ? <img className='prev' src={image.base64} alt={image.alt}/> : null }
                </div>
                <input className='input input-main' type={'file'} id={'image'} onChange={(event)=>ChangeInput(event.target.value, event.target.id)} />
                <label>Description</label>
                <textarea className='input' id={'description'} onChange={(event)=>ChangeInput(event.target.value, event.target.id)} />
                <button className='input input-submit' type='button' onClick={()=>SubmitForm()}>
                    Submit post
                </button>
                </div>
            }           
        </form>
        
        </>
    )
}

function mapStateToProps(state){
    return{
        message: state.submitFormReducer.message,
        error: state.submitFormReducer.error,
    }
}

function mapDispatchToProps(dispatch){
    return{
        submitPostAction: (data)=> dispatch(submitPostAction(data)),
        clearState: () => dispatch(clearState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)