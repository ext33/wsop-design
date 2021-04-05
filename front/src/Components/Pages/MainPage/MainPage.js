import React, {useEffect, useRef} from 'react'
import ImageBlock from './ImageBlock'
import Loading from '../../UI/Loading'
import {connect} from 'react-redux'
import {fetchImageData} from '../../../Store/actions/fetchImages'

function MainPage(props) {

    let rendered = useRef(false)

    useEffect(()=>{
        if(rendered.current === false) {
            props.fetchImages()
            rendered.current = true
        }
    })

    return(
        <div className='pages_mainPage animate__animated animate__fadeIn'>
            { props.imagesObj ? 
                props.imagesObj.map((elem, index) => {
                    return(
                        <ImageBlock 
                            key={index}
                            image={elem.imageSrc} 
                            alt={elem.imageAlt} 
                        />
                    )
                }) : <Loading/>
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
        fetchImages: () => dispatch(fetchImageData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)