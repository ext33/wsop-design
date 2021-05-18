import React, {useEffect, useRef} from 'react'
import ImageBlock from './ImageBlock'
import Loading from '../../UI/Loading'
import {connect} from 'react-redux'
import {fetchSubmittedImageData} from '../../../Store/actions/fetchImages'

function MainPage(props) {

    let rendered = useRef(false)

    useEffect(()=>{
        if(rendered.current === false) {
            props.fetchImages()
            rendered.current = true
        }
    })

    function displayImages() {
        if (props.imagesObj.length > 0)
            return (
                props.imagesObj.map((elem, index) => {
                    return(
                        <ImageBlock 
                            key={index}
                            image={elem.imageSrc} 
                            alt={elem.imageAlt} 
                        />
                    )
                }) 
            )
        else
            return (
                <div className='images_img-info'>
                    <p>No posts yet...</p>
                </div>
            )
    }

    return(
        <div className='pages_mainPage animate__animated animate__fadeIn'>
            {   props.imagesObj ?
                    displayImages()
                : <Loading />
            }
        </div>
    )
}

function mapStateToProps(state){
    return {
        imagesObj: state.imagesReducer.imagesObj,
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchImages: () => dispatch(fetchSubmittedImageData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)