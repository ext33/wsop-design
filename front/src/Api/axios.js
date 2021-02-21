// import axios from 'axios'

// emulating data fetch
// emulate fetching images
export async function fetchImages(){
    const img = [
        {imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', imageAlt: '1'},
        {imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', imageAlt: '2'},
        {imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', imageAlt: '3'},
        {imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', imageAlt: '4'},
        {imageSrc: 'https://i.pinimg.com/236x/51/ea/31/51ea31bf0289e426508410aac54ed2a7.jpg', imageAlt: '4'},
        {imageSrc: 'https://i.pinimg.com/236x/51/ea/31/51ea31bf0289e426508410aac54ed2a7.jpg', imageAlt: '4'},
        {imageSrc: 'https://i.pinimg.com/236x/51/ea/31/51ea31bf0289e426508410aac54ed2a7.jpg', imageAlt: '4'},
        {imageSrc: 'https://i.pinimg.com/236x/51/ea/31/51ea31bf0289e426508410aac54ed2a7.jpg', imageAlt: '4'},
    ]
    let response = {
        status: 200,
        images: img
    }
    // response = {
    //     status: 500,
    //     error: 'Server connection error'
    // }
    return response
}

// emulate fetching images
export async function sendSubmitPost(data){
    let response = {
        status: 200,
        message: 'OK'
    }
    // response = {
    //     status: 500,
    //     error: 'Server connection error'
    // }
    return response
}
