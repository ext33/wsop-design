import React, {useState, useEffect} from 'react'
import ImageBlock from './ImageBlock'
import Loading from '../../Loading'
import img from './data'

function MainPage() {
    let [images, setImages] = useState({
        imagesObj: [],
        dataIsReady: false,
    })

    function fetchImages() {
        // emulate fetching data
        let fetchingImages = img
        
        // set fetching data to state
        setImages((prevState)=>{
            return{
                ...prevState,
                imagesObj: fetchingImages,
                dataIsReady: true
            }
        })
    }

    useEffect(()=>{
        console.log('render')
        fetchImages()
    }, [])

    return(
        <div id='MainPage'>
            {   images.dataIsReady ? 
                images.imagesObj.map((elem, index) => {
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

export default MainPage