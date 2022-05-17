import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '../App.css'

export default function SignUpPage() {

    return (
        <Box sx={{ borderRadius: 5, ml:1, display: 'flex', alignItems: 'center', textAlign: 'center', height: 450, }}>
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home">
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <br/>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required />
                </p>
                <br/>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <br/>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <br/>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link href="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
        </Box>
    )

}
