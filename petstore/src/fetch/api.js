// fetch/api.js

import axios from 'axios'

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(response => {
      resolve(response.data)
    }).catch(error => {
      console.log(error)
      reject(error)
    })
  })
}

getDefaultData = () => {
  return fetch('/api/getBoardList')
}

export default {
  getDefaultData
}
