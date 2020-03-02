import axios from 'axios';
import history from '../../histort'
import jwtdecode from 'jwt-decode'

export  const signUpHandler = (userName, userEmail, userPassword) => {
 

 

  axios
    .post('http://localhost:5000/api/registeruser/signup', {
      userName,
      userEmail,
      userPassword,
    })
    .then(function(response) {
      console.log("this is console",response.data);

       if(response.data.success===true)
       {
      history.push('/login')
       }
     


      

    })
    .catch(function(error) {
      console.log(error);
    });
};
