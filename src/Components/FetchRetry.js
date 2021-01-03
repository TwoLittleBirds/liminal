  export default function fetchRetry(url, options = {}, retries = 3, backoff = 300) {
    const retryCodes = [408, 500, 502, 503, 504, 522, 524]
    return fetch(url, options)
      .then(res => {
        if (res.ok) return res
  
        if (retries > 0 && retryCodes.includes(res.status)) {
          setTimeout(() => {
            return fetchRetry(url, options, retries - 1, backoff * 2)
          }, backoff)
        } else {
          throw new Error(res)
        }
      })
      .catch(console.error)
  }


