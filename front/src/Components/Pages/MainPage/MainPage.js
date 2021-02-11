import React, {useState, useEffect} from 'react'
import ImageBlock from './ImageBlock'
import Loading from '../../Loading'
import {fetchImages} from '../../../Api/axios'

function MainPage() {
    const [images, setImages] = useState({
        imagesObj: [],
        dataIsReady: false,
    })

    useEffect(()=>{
        fetchData()
    }, [])

    async function fetchData() {
        let fetchingImages = await fetchImages()
        
        setImages((prevState)=>{
            return{
                ...prevState,
                imagesObj: fetchingImages,
                dataIsReady: true
            }
        })
    }

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