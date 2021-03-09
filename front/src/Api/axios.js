// import axios from 'axios'

// emulating data fetch
// emulate fetching images
export async function fetchImages() {
    const img = [
        {
            imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', 
            imageAlt: '1',
            id: '121', 
            username: 'user',
            email: 'email',
            description: 'description',
            uploadDate: '01-02-2021',
            submitted: 'true'
        },
        {
            imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', 
            imageAlt: '1', 
            id: '122',
            username: 'user',
            email: 'email',
            description: 'description',
            uploadDate: '01-02-2021',
            submitted: 'true'
        },
        {
            imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', 
            imageAlt: '1',
            id: '123', 
            username: 'user',
            email: 'email',
            description: 'description',
            uploadDate: '01-02-2021',
            submitted: 'true'
        },
        {
            imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', 
            imageAlt: '1', 
            id: '124',
            username: 'user',
            email: 'email',
            description: 'description',
            uploadDate: '01-02-2021',
            submitted: 'true'
        },
        {
            imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', 
            imageAlt: '1', 
            id: '125',
            username: 'user',
            email: 'email',
            description: 'description',
            uploadDate: '01-02-2021',
            submitted: 'false'
        },
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

export async function fetchImageById(id) {
    let data = {
      imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', 
      imageAlt: '1', 
      id: id,
      username: 'user',
      email: 'email',
      description: 'description',
      uploadDate: '01-02-2021',
      submitted: 'false'
    }
    let response = {
      status: 200,
      image: data
    }
    // response = {
    //     status: 404,
    //     error: 'Not found'
    // }
    return response
}

export async function updateImageById(id) {
  let data = {
    imageSrc: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg', 
    imageAlt: '1', 
    id: id,
    username: 'user',
    email: 'email',
    description: 'description',
    uploadDate: '01-02-2021',
    submitted: 'true'
  }
  let response = {
    status: 200,
    image: data
  }
  // response = {
  //     status: 500,
  //     error: 'Server connection error'
  // }
  return response
}

export async function deleteImageById(id) {
  let response = {
    status: 200,
  }
  return response
}

// emulate fetching images
export async function sendSubmitPost(data) {
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


export async function getStatsData () {
    let response = {
        status: 200,
        allTimeData: {
            visits: 1200,
            posts: 220
        },
        daysTimeData: [
            {
              "id": "new posts",
              "data": [
                {
                  "x": '01.02',
                  "y": 21
                },
                {
                  "x": '02.02',
                  "y": 56
                },
                {
                  "x": '03.02',
                  "y": 104
                },
                {
                  "x": '04.02',
                  "y": 119
                },
                {
                  "x": '05.02',
                  "y": 258
                },
                {
                  "x": '06.02',
                  "y": 269
                },
                {
                  "x": '07.02',
                  "y": 265
                },
              ]
            },
            {
              "id": "visits",
              "data": [
                {
                  "x": '01.02',
                  "y": 248
                },
                {
                  "x": '02.02',
                  "y": 76
                },
                {
                  "x": '03.02',
                  "y": 29
                },
                {
                  "x": '04.02',
                  "y": 100
                },
                {
                  "x": '05.02',
                  "y": 89
                },
                {
                  "x": '06.02',
                  "y": 278
                },
                {
                  "x": '07.02',
                  "y": 213
                },
              ]
            },
        ]
    }

    // response = {
    //     status: 500,
    //     error: 'Server connection error'
    // }

    return response
}