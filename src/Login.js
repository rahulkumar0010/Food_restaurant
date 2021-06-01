import React, { useState } from 'react'
import { browserHistory } from 'react-router'
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import Navbar1 from './Component/Navbar1';


function SignIn() {
   const [username, setUsername] = useState('')
   const [passw, setPassw] = useState('')

   const handleSignin = () => {

      if (username === "admin" && passw === "admin123") {
         browserHistory.push('/Component/FoodApp')
      } else {
         alert("Invalid Email and Password ")
         browserHistory.push('/SignIn')
      }
   }


   return (<div>
      <Navbar1 />
      <form className="login">
         <div className='signC'>
            <h1 className='h1'> Login </h1><br />
            <label style={{ marginRight: ('41%'), color: ('black') }} >Email: </label><br />
            <input type="text" className='firstText' value={username} onChange={e => setUsername(e.target.value)} /> <br />
            <label style={{ marginRight: ('35%'), color: ('black') }}>Password: </label><br />
            <input type="password" className='secondText' value={passw} onChange={e => setPassw(e.target.value)} /> <br /><br />
            <Button variant="primary" color="primary" id='btn' onClick={handleSignin}>
               Signin </Button><br /><br />
            <Link style={{ marginRight: ('25%'), color: ('black') }}  ><u> Forgot password ?</u></Link><br /><br />
            <Link to={'Register'} style={{ color: ('black') }} >You don't have an account ?<br /> <u>Sign Up</u></Link>
         </div>
      </form>
   </div>

   )
}
export default SignIn