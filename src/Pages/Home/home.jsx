import React from 'react'
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Blog from '../BLog/Blog'


import hero from '../../Assets/Images/hero.mp4'

function Home() {

    const useStyle = makeStyles({
        header: {
            alignItems: "center",
            justifyContent: "center",
            fontFamily: 'sans-serif',
            textAlign: 'center',
            height: '50vh',
            alignItems: 'center',
            display: "flex",
        },
        heroo: {
            position: "relative",
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        Inputgroup: {
            display: "flex",
            flexDirection: "wrap",
            position: 'absolute',
            zIndex: '10'
        },
        int: {

            width: "150%",
            height: "40%",
            color: "black",
            borderRadius: "5px",
            background: "white"
        },
        but: {
            width: "10%",

        }
    })
    
    const { header, heroo, Inputgroup, int, but } = useStyle();

    return (
        <>
            <Box className={header}>
                <video className={heroo} src={hero} muted loop autoPlay ></video>

                <Box component="form" className={Inputgroup} noValidate autoComplete="off" >
                    <TextField className={int} id="outlined-basic" label="search" variant="outlined" />
                    <Button className={but} variant="contained" sx={{}}><SearchIcon /></Button>
                </Box>
            </Box>
            <Blog/>
        </>
    )
}

export default Home