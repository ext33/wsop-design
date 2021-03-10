import React, {useEffect, useRef} from 'react'
import ImageBlock from './ImageBlock'
import Loading from '../../UI/Loading'
import {connect} from 'react-redux'
import {fetchImageData} from '../../../Store/actions/fetchImages'
import {useHistory} from 'react-router-dom'

function MainPage(props) {

    let history = useHistory()

    let rendered = useRef(false)

    useEffect(()=>{
        if(rendered.current === false) {
            props.fetchImages()
            if (props.imagesError){
                history.push({
                    pathname: "/error",
                    state: {
                        type: 500,
                    }
                })
            }
            rendered.current = true
        }
    })

    return(
        <div id='MainPage' className='animate__animated animate__fadeIn'>
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
        error: state.imagesReducer.error,
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchImages: () => dispatch(fetchImageData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)