import axios from "axios";
import{
    LOGIN_USER,
    //JOIN_USER
} from './types'

export function loginUser(dataTosubmit){
    const request = axios.post('/api/users/login', dataTosubmit)
    .then(response => response.data )
    return {
        type: LOGIN_USER,
        payload:request
    }
}

// export function JoinUser(dataTosubmit){
//     const request = axios.post('/api/users/create', dataTosubmit)
//     .then(response => response.data )

//     return {
//         type: JOIN_USER,
//         payload:request
//     }
// }