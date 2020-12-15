const fetch = require('isomorphic-fetch')
const CircuitBreaker = require('./CircuitBreaker.js')

// Our unstable request simulation
const unstableRequest = () => {
  return new Promise((resolve, reject) => {
      if (Math.random() > .6) {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .catch(err => console.error(err))
        .then(response => response.json())
        .then(json => console.log(json))
        resolve({data: "Success"})
      } else {
        fetch('https://jsonplacehlder.typicode.com/todos/1')
        .catch(err => console.error(err))
        reject({data: "Failed"})
      }
  })
}

const breaker = new CircuitBreaker(unstableRequest)

setInterval(() => {
    breaker
      .fire()
      .then(console.log)
      .catch(console.error)
  }, 1000)

