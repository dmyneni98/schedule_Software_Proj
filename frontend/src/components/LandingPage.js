import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import '../App.css'
import BackgroundImage from '../assets/images/Timebg.jpg'

export default function LandingPage() {
    return (
        <Box sx={{ borderRadius: 5, ml:1, display: 'flex', alignItems: 'center', textAlign: 'center', height: 700}}>
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Scheduler</h1>
            <p className="main-para text-center">Better Late than never</p>
            <br/>
            <br/>
            <Typography sx={{ minWidth: 100, ml:10, fontSize:20 }}>
                <Link href="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link href="/register">
                    <button className="primary-button" ><span>register </span></button>
                </Link>
            </Typography>
        </header>
        </Box>
    )
}

const DivStyle = {
    width: "50%",
    height: "100vh",
    rightmargin:60,
    align:"center"
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    align:"center"
}