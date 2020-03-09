import axios from 'axios';
const KEY = 'AIzaSyDRB4U2kt89cjAUBaCPSG2jDks83AXufco';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY,
    type: 'video'
  }
});