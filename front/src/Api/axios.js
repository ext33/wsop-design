import axios from 'axios'

const url = 'http://127.0.0.1:8080/api/'


// Middlware API functions
function errorsHandler(error) {
  if (error.response) 
    return {status: error.response.data.status, error: error.response.data.error}
  else if (error.request) 
    return {status: 500, error: error.message}
  else 
    return {status: 400, error: error.message}
}


// API functions
// fetch all images functions
export async function fetchSubmittedImages() {
  let response

  await axios({
    method: 'GET',
    url: `${url}getSubmittedPosts/`,
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })

  return response
}

// fetch images in admin panel
export async function fetchImages(token) { 
  let response

  await axios({
    method: 'GET',
    url: `${url}getPosts/`,
    headers: {
      authorization: token
    }
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })

  return response
}

// fetch image by id fucntion
export async function fetchImageById(id, token) {
  let response

  await axios({
    method: 'GET',
    url: `${url}getPost/${id}`,
    headers: {
      authorization: token
    }
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  
  return response
}

// post submit function
export async function sendSubmitPost(data) {
  let response
  let formData = new FormData() 

  formData.append('username', data.username)
  formData.append('email', data.email)
  formData.append('description', data.description)
  formData.append('image', data.image)
  
  await axios({
    method: 'POST',
    url: `${url}createPost/`,
    headers: {
      ...formData.getHeaders,
    },
    data: formData, 
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  
  return response
}

// login function
export async function loginUser(data) {
  let response
  let formData = new FormData() 

  formData.append('email', data.email)
  formData.append('password', data.password)

  await axios({
    method: 'POST',
    url: `${url}login/`,
    headers: {
      ...formData.getHeaders,
    },
    data: formData,
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  
  return response
}

// logout user
export async function logoutUser(token) {
  let response

  await axios({
    method: 'GET',
    url: `${url}logout/`,
    headers: {
      authorization: token
    },
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  
  return response
}


export async function submitImageById(id, token) {
  let response

  await axios({
    method: 'GET',
    url: `${url}acceptPost/${id}`,
    headers: {
      authorization: token
    },
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })

  return response
}

export async function archiveImageById(id, token) {
  let response

  await axios({
    method: 'GET',
    url: `${url}archivePost/${id}`,
    headers: {
      authorization: token
    },
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  
  return response
}

export async function deleteImageById(id, token) {
  let response

  await axios({
    method: 'GET',
    url: `${url}deletePost/${id}`,
    headers: {
      authorization: token
    },
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  
  return response
}


export async function getStatsData (token) {
    // let response = {
    //     status: 200,
    //     allTimeData: {
    //         visits: 1200,
    //         posts: 220
    //     },
    //     daysTimeData: [
    //         {
    //           "id": "new posts",
    //           "data": [
    //             {
    //               "x": '01.02',
    //               "y": 21
    //             },
    //             {
    //               "x": '02.02',
    //               "y": 56
    //             },
    //             {
    //               "x": '03.02',
    //               "y": 104
    //             },
    //             {
    //               "x": '04.02',
    //               "y": 119
    //             },
    //             {
    //               "x": '05.02',
    //               "y": 258
    //             },
    //             {
    //               "x": '06.02',
    //               "y": 269
    //             },
    //             {
    //               "x": '07.02',
    //               "y": 265
    //             },
    //           ]
    //         },
    //         {
    //           "id": "visits",
    //           "data": [
    //             {
    //               "x": '01.02',
    //               "y": 248
    //             },
    //             {
    //               "x": '02.02',
    //               "y": 76
    //             },
    //             {
    //               "x": '03.02',
    //               "y": 29
    //             },
    //             {
    //               "x": '04.02',
    //               "y": 100
    //             },
    //             {
    //               "x": '05.02',
    //               "y": 89
    //             },
    //             {
    //               "x": '06.02',
    //               "y": 278
    //             },
    //             {
    //               "x": '07.02',
    //               "y": 213
    //             },
    //           ]
    //         },
    //     ]
    // }

    // response = {
    //     status: 500,
    //     error: 'Server connection error'
    // }
  let response

  await axios({
    method: 'GET',
    url: `${url}getStats/`,
    headers: {
      authorization: token
    },
  })
  .then(res => {response = res.data})
  .catch((e) => {
      response = errorsHandler(e)
  })
  console.log(response)
  
  return response
    
}


