export default async function fetchWithTimeout(url, options, timeout) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
  
    console.log("url", url);
     const response = await fetch(url, {
         ...options,
         signal: controller.signal  
       });

    clearTimeout(id);
  
    return response;
  }