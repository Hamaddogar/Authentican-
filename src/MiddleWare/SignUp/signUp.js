import axios from 'axios';
import history from '../../histort'
import jwtdecode from 'jwt-decode'
 import store   from '../../store/configureStore'
  import {ADD_SIGNUP} from '../../store/actions/actionTypes'

export  const signUpHandler = (userName, userEmail, userPassword) => {
 

 

  axios
    .post('http://localhost:5000/api/registeruser/signup', {
      userName,
      userEmail,
      userPassword,
    })
    .then(function(response) {
      console.log("this is console",response.data);
        store.store.dispatch({
          type:ADD_SIGNUP,
           payload:response.data
        })

      

    })
    .catch(function(error) {
      console.log(error);
    });
};
