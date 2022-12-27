import axios, { type AxiosInstance } from 'axios';

const httpClient: AxiosInstance = axios.create({
  baseURL:
    // need to go to this site and press the button for access
    // 'https://cors-anywhere.herokuapp.com/https://onair.radioapi.io/thisisgo/go',
    `https://api.allorigins.win/raw?url=https://onair.radioapi.io/thisisgo/go`,
});

export default httpClient;
