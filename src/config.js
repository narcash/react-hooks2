const API_URL = fetch('https://dummyjson.com/products/')
  .then(res => res.json())
  .then(json => console.log(json));

export { API_URL };
