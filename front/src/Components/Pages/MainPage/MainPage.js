import React, {useEffect} from 'react'
import ImageBlock from './ImageBlock'
import Loading from '../../Loading'
import {connect} from 'react-redux'
import {fetchImageData} from '../../../Store/actions/fetchImages'


function MainPage(props) {

    useEffect(()=>{
        console.log(2)
        fetchImageData()
        if(props.error){
            props.history.push({
                pathname: '/error',
                props: {
                    type: 500,
                    error: props.error,
                }
            })
        } 
    }, [props.imagesObj, props.dataIsReady, props.error, props.history])

    return(
        <div id='MainPage'>
            {   props.dataIsReady ? 
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
        imagesObj: state.imagesObj,
        dataIsReady: state.dataIsReady,
        error: state.error,
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchImages: () => dispatch(fetchImageData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainPage)