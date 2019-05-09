import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID b052f4fba101fa1d57677d634bcb61fa15ba642fd66c9ac594d582c513dfc1a4'
    }
});