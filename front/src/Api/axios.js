import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/'

function errorsHandler(error) {
  if (error.response) 
    return {status: error.response.data.status, error: error.response.data.error}
  else if (error.request) 
    return {status: 500, error: error.message}
  else 
    return {status: 400, error: error.message}
}

export async function fetchImages() { 
  let response

  await axios.get(url + 'getPosts/')
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })

  return response
}

export async function fetchImageById(id) {
  let response

  await axios.get(url + 'getPost/' + id)
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  console.log(response)
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

export async function loginUser(data) {
  
  let userData = {
    user: {
      uid: '212132',
      username: 'admin',
      userImage: 'https://i.pinimg.com/236x/df/df/6c/dfdf6ca5c620a7981d8b2da2fd22d37a.jpg',
      email: 'admin@admin.ru',
    },
    token: 'gjGH5GFH6ewjbGH5ghj',
    refreshToken: 'jkh4bBKH5cgv434Jh3l'
  }

  let response = {
    user: userData.user,
    token: userData.token,
    refreshToken: userData.refreshToken,
    status: 200
  }
  return response
}