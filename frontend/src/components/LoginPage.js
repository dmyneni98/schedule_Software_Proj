import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default class SignInPage extends React.Component {
    render(){
    return (
        <Box sx={{ borderRadius: 5, ml:1, display: 'flex', alignItems: 'center', textAlign: 'center', height: 500}}>
            <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/CalenderHome">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <br/>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <br/>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>Not yet registered? <Link href="http://localhost:3000/register">Create an account</Link>.</p>
                <p><Link href="http://localhost:3000">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </Box>
    )
    }
}
