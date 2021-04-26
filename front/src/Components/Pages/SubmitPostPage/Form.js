import React, { useEffect, useState, useRef } from "react";
import { connect } from 'react-redux'
import { submitPostAction } from '../../../Store/actions/submitPost'
import Info from "../../UI/FormMessage";
import { CSSTransition } from "react-transition-group"

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

    const rendered = useRef(false)

    useEffect(()=>{
        if(!rendered.current) {
            document.getElementById('image').addEventListener('change', changeImageHandler)
            rendered.current = true
        }

        if (props.error) setModal(true)
        else if (props.message && !props.error) setSuccessModal(true)
        
    }, [props])

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
        <form className='form_submit-form'>
            <div className='form_message'>
                { modal ? 
                    <Info 
                        message={props.message} 
                        error={props.error}
                    />
                : null
                }
            </div>
        
            <CSSTransition in={successModal} timeout={500} classNames='success-modal-an'>
                <Info
                    message={props.message} 
                    error={props.error}
                />
            </CSSTransition>

            <CSSTransition in={!successModal} timeout={500} classNames='form-main' unmountOnExit>
                <div className='form_main-container'>
                    <label>Username</label>
                    <input className='input input-main' type={'text'} id={'username'} onChange={(event)=>ChangeInput(event.target.value, event.target.id)} />
                    <label>Email</label>
                    <input className='input input-main' type={'email'} id={'email'} onChange={(event)=>ChangeInput(event.target.value, event.target.id)} />
                    <label>Image</label>
                    <div className='form_image-prev-div' onClick={()=>{document.getElementById('image').click()}}>
                        { image ? <img className='form_image-prev' src={image.base64} alt={image.alt}/> : null }
                    </div>
                    <input className='input input-main' type={'file'} id={'image'} onChange={(event)=>ChangeInput(event.target.files[0], event.target.id)} />
                    <label>Description</label>
                    <textarea className='input' id={'description'} onChange={(event)=>ChangeInput(event.target.value, event.target.id)} />
                    <button className='input input-submit' type='button' onClick={()=>SubmitForm()}>
                        Submit post
                    </button>
                </div>
            </CSSTransition>
        </form>
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
        clearState: () => dispatch ({type: 'FORM-CLEAR'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)