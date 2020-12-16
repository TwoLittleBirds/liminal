const fetch = require('isomorphic-fetch')
const CircuitBreaker = require('opossum')

// Our unstable request simulation
function asyncFunctionThatCouldFail(x, y) {
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
  });
}

const options = {
  timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 10, // After ? milliseconds, try again.
  cache: false,
};

const breaker = new CircuitBreaker(asyncFunctionThatCouldFail, options);

breaker.fallback(() => ({ body: `unavailable right now. Try later.` }));

setInterval(() => {
  breaker
    .fire()
    .then(console.log)
    .catch(console.error)
}, 1000)

