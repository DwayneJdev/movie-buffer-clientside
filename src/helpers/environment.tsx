let APIURL = '';

switch(window.location.hostname) {
    case 'localhost' || '127.0.0.1':

    APIURL = 'http://localhost:3000';

    break;

    case 'https://dkj-movie-buffer-client.herokuapp.com':

    APIURL = 'https://dkj-movie-buffer-server.herokuapp.com'
}

export default APIURL;