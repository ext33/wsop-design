import React, {useEffect} from 'react'
import ImageBlock from './ImageBlock'
import Loading from '../../Loading'
import {connect} from 'react-redux'
import {fetchImageData} from '../../../Store/actions/fetchImages'
import { Redirect } from 'react-router-dom'


function MainPage(props) {

    useEffect(()=>{
        props.fetchImages()
        
    }, [props])

    if(props.error){
        return (<Redirect to={{
            pathname: "/error",
            state: {
                type: 500,
            }
        }} p/>)
    }

    return(
        <div id='MainPage'>
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
    console.log(state)
    return{
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