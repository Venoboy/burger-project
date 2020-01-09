import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-6804e.firebaseio.com/'
});

export default instance;
