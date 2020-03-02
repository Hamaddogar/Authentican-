import axios from 'axios';
import jwt_decode from 'jwt-decode';
export const loginUpHandler = (userEmail, userPassword) => {
  axios
    .post('http://localhost:5000/api/loginuser/login', {
      userEmail,
      userPassword,
    })
    .then(function(response) {
   console.log(response.data)
    localStorage.setItem('token',JSON.stringify(response.data.data))

       const decoded=jwt_decode(response.data.data)

        console.log(decoded)
        if(Date.now()/1000>decoded.exp)
        {
         console.log("Session has been Expir")

        }
        else{

          console.log("Not Expire")


        }

      
         


 
      
        
    })
    .catch(function(error) {
      console.log(error);
    });
};
