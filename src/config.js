const API_KEY = process.env.REACT_APP_API_KEY;
console.log(process.env);

const API_URL = fetch('https://fortniteapi.io/v1/shop?lang=ru');

export { API_URL, API_KEY };
