import axios    from "axios";


const API_PATH  = 'http://member.stream.rexuni.com/api';

import cookie   from 'react-cookie';

class API {
  constructor( options ) {


    this.instance = axios.create( {
      baseURL: 'http://member.stream.rexuni.com/api',
      headers: { 'Authorization': this.getToken() }
    } );
  }

  getToken() {
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMiJ9.NTfapGRCojcJ0GbYrBuVWf02wfsGN3pjSqjUAI2BJrg'
    console.log(cookie.load('jwt_token'))
    return cookie.load('jwt_token');
  }

  get(path, params = {}) {


    return this.instance.get(path, {
      params: params
    })


  }


}


export let api = new API();