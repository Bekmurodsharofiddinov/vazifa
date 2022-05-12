// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import ButtonGroup from '@mui/material/ButtonGroup';

// const buttons = [
//     <Button style={{margin:"5px", border:"none" , borderRadius:"5px" ,background:"#009899", color:"white"}} key="one">1</Button>,
//     <Button style={{margin:"5px", border:"none" , borderRadius:"5px", background:"#EEEEEE", color:"#B0B0B0"}} key="two">2</Button>,
//     <Button style={{margin:"5px", border:"none" , borderRadius:"5px", background:"#EEEEEE", color:"#B0B0B0"}} key="three">3</Button>,
//     <Button style={{margin:"5px", border:"none" , borderRadius:"5px", background:"#EEEEEE", color:"#B0B0B0"}} key="three">4</Button>,


// ];

// export default function Blog() {
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',

//                 '& > *': {
//                     m: 1,
//                 },
//             }}
//         >
//             <ButtonGroup sx={{margin:"10px" , padding:"10px"}} size="large" aria-label="large button group">
//                 {buttons}
//             </ButtonGroup>
//         </Box>
//     );
// }


import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import rasm1 from "../../Assets/Images/img-01.jpg";
import rasm2 from "../../Assets/Images/img-02.jpg";
import rasm3 from "../../Assets/Images/img-03.jpg";
import rasm4 from "../../Assets/Images/img-04.jpg";
import rasm5 from "../../Assets/Images/img-05.jpg";
import rasm6 from "../../Assets/Images/img-06.jpg";
import rasm7 from "../../Assets/Images/img-07.jpg";
import rasm8 from "../../Assets/Images/img-08.jpg";
import rasm9 from "../../Assets/Images/img-09.jpg";
import rasm10 from "../../Assets/Images/img-10.jpg";
import rasm11 from "../../Assets/Images/img-11.jpg";
import rasm12 from "../../Assets/Images/img-12.jpg";
import rasm13 from "../../Assets/Images/img-13.jpg";
import rasm14 from "../../Assets/Images/img-14.jpg";
import rasm15 from "../../Assets/Images/img-15.jpg";
import rasm16 from "../../Assets/Images/img-16.jpg";
// import rasm17 from "../../Assets/Images/img-17.jpg";
// import rasm18 from "../../Assets/Images/img-18.jpg";
// import rasm19 from "../../Assets/Images/img-19.jpg";
// import rasm20 from "../../Assets/Images/img-01.jpg";


import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const buttons = [
    <Button style={{ margin: "5px", border: "none", borderRadius: "5px", background: "#009899", color: "white" }} key="one">1</Button>,
    <Button style={{ margin: "5px", border: "none", borderRadius: "5px", background: "#EEEEEE", color: "#B0B0B0" }} key="two">2</Button>,
    <Button style={{ margin: "5px", border: "none", borderRadius: "5px", background: "#EEEEEE", color: "#B0B0B0" }} key="three">3</Button>,
    <Button style={{ margin: "5px", border: "none", borderRadius: "5px", background: "#EEEEEE", color: "#B0B0B0" }} key="three">4</Button>,


];



export default function NestedGrid() {
    return (
        <>
            <Container fixed>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h5" style={{ color: "#009899", margin: "10px", marginTop: "40px", fontSize: "30px" , fontFamily:"sans-serif"}}>
                        Latest Videos
                    </Typography>
                    <Typography variant="h7" style={{ color: "#009899", margin: "10px", marginTop: "40px" }}>
                        page <Button style={{ background: "#F4F4F4", border: "1px solid #E7EAEB" }}>1</Button> of 180
                    </Typography>

                </Box>
                <Box sx={{ flexGrow: 1, }} >
                    <Grid container sx={{ border: 'none' }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={3} >
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm1} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm2} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm3} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm4} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>





                    <Grid container sx={{ mt: 2 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm5} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm6} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>
                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm7} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm8} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>



                    <Grid container sx={{ mt: 2 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm9} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm10} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm11} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm12} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>











                    <Grid container sx={{ mt: 2 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm13} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm14} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm15} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>
                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Item>
                                <img style={{ marginLeft: "-4px", width: "260px", height: "150px" }} src={rasm16} />
                                <Typography sx={{ justifyContent: 'space-between', display: 'flex' }}>
                                    <Typography variant="p">22 oct 2020</Typography>

                                    <Typography variant="p">12,860 views</Typography>
                                </Typography>
                            </Item>
                        </Grid>
                    </Grid>

                </Box>
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                        <Button sx={{ background: "#009899", color: "white", width: "150px", height: "40px", mt: "100px" }}>Previous</Button>
                        <Box sx={{ mt: "70px", display: 'flex', flexDirection: 'column', alignItems: 'center', '& > *': { m: 1, }, }}>
                            <ButtonGroup sx={{ margin: "10px", padding: "10px", mt: "" }} size="large" aria-label="large button group">
                                {buttons}
                            </ButtonGroup>
                        </Box>
                        <Button sx={{ background: "#009899", color: "white", width: "150px", height: "40px", mt: "100px" }}>New Page</Button>
                    </Box>
                </Box>
            </Container>
        </>

    );
}