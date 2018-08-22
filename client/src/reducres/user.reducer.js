import Axios from 'axios';

export default function(state = {}, action){
    switch(action.type){
        case 'SIGNUP':{
            Axios.post('http://localhost:4000/signup',action.payload)
            .then(res =>{
               /*  state = {...state, user:res.data} */
                console.log('state in user --> ', state)
            })
            break;
        }

        case 'LOGIN':{
            state = {...state, user:action.payload}
            break;
        }
    }

    return state;
}