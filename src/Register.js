import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Navbar1 from './Component/Navbar1';
import './Register.css';


function Signup() {
    function res() {
        alert('Register successful')
    }
    return (
        <div>
            <Navbar1 />
            <form className='register'>
                <div className='signup'>
                    <h3 className="title"> Registration Form  </h3>   <br /><br />

                    <label style={{ fontWeight: ('bold') }}>Full Name : </label><br />
                    <input type="text" name="name" id="name" className="Text" /><br /> <br />

                    <label style={{ fontWeight: ('bold') }}>Email :</label><br />
                    <input type="email" name="email" className="Text" /><br />  <br />

                    <label style={{ fontWeight: ('bold') }}>Password : </label><br />
                    <input type="password" name="pass" className="Text" /><br /> <br />

                    <label style={{ fontWeight: ('bold') }}>Confirm Password :</label><br />
                    <input type="password" name="pass" className="Text" /><br />

                    <br /><label style={{ fontWeight: ('bold') }}>Gender</label><br />
                    <input type="radio" id="gender" name="gender" value="male" style={{ marginRight: ('3px'), fontWeight: ('bold') }} />Male
                        <input type="radio" id="gender" name="gender" value="female" style={{ marginLeft: ('10px') }} />Female <br />    <br />

                    <Button type="submit" id="btn" onClick={res} variant="primary" >Sign-up</Button>  <br /><br />

                    <Link to={'Login'} style={{ marginLeft: ('10%'), color: ('black') }} >You have an account ? <u>SignIn</u></Link>
                </div>
            </form>
        </div>

    )
}

export default Signup