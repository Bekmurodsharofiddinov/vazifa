// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@mui/styles";
// import { useTheme } from "@mui/material";
// import Drawer from "@mui/material/Drawer";
// import rasm from "../../images/logo.png";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

// export default function Navigation() {
//   const theme = useTheme();
//   const useStyle = makeStyles({
//     navItem: {
//       color: "white",
//       textDecoration: "none",
//     },
//     mobileNavItem: {
//       color: "black",
//       textDecoration: "none",
//     },
//     navIcon: {
//       [theme.breakpoints.up("sm")]: {
//         display: "none !important",
//       },
//     },

//     navItemContainer: {
//       [theme.breakpoints.down("sm")]: {
//         display: "none",
//       },
//     },
//     navLogo: {
//       [theme.breakpoints.down("sm")]: {
//         textAlign: "left",
//       },
//     },
//   });

//   const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } =
//     useStyle();

//   const [state, setState] = React.useState(false);

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar
//           position="static"
//           sx={{ background: "#00AEEF", height: "97px" }}
//         >
//           <Toolbar>
//             <Typography
//               className={navLogo}
//               variant="h6"
//               component="div"

//               // sm={{ flexGrow: 1 }}
//             >
//               <Link className={navItem} to="/">
//               <div className="logo_header">
//                 <img src={rasm} className="img" />
//               </div>
//               </Link>
//             </Typography>
//             <IconButton
//               size="large"
//               color="inherit"
//               aria-label="menu"
//               sx={{ ml: 5 }}
//               className={navIcon}
//               onClick={() => setState(true)}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Box sx={{ ml: "180px" }} className={navItemContainer}>
//               <Link className={navItem} to="/about">
//                 <Button sx={{'&:hover':{color:'black'}}} color="inherit">ABOUT US</Button>
//               </Link>
//               <Link className={navItem} to="/services">
//                 <Button color="inherit" sx={{ ml: "20px",'&:hover':{color:'black'} }}>
//                   OUR CLIENTS
//                 </Button>
//               </Link>
//               <Link className={navItem} to="/home">
//                 <Button color="inherit" sx={{ ml: "20px",'&:hover':{color:'black'} }}>
//                   OUR WORK
//                 </Button>
//               </Link>
//               <Link className={navItem} to="/contact">
//                 <Button color="inherit" sx={{ ml: "20px",'&:hover':{color:'black'} }}>
//                   CONTACT US
//                 </Button>
//               </Link>
//               <Link  className={navItem} to="/">
//               <Typography
//                 variant="h6"
//                 className="button21"
//                 sx={{ml:8}}
//               >
//                 Get A Quote
//               </Typography>
//               </Link>

//             </Box>
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <div>
//         <React.Fragment>
//           <Drawer open={state} onClose={() => setState(false)}>
//             <Box sx={{ width: 250 }} role="presentation">
//               <List>
//                 <ListItem>
//                   <ListItemText>
//                     <Link className={mobileNavItem} to="/">
//                       <Button color="inherit">Home</Button>
//                     </Link>
//                   </ListItemText>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                   <ListItemText>
//                     <Link className={mobileNavItem} to="/about">
//                       <Button color="inherit">ABOUT US</Button>
//                     </Link>
//                   </ListItemText>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                   <ListItemText>
//                     <Link className={mobileNavItem} to="/services">
//                       <Button color="inherit">OUR CLIENTS</Button>
//                     </Link>
//                   </ListItemText>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                   <ListItemText>
//                     <Link className={mobileNavItem} to="/login">
//                       <Button color="inherit">OUR WORK</Button>
//                     </Link>
//                   </ListItemText>
//                 </ListItem>
//                 <Divider />
//                 <ListItem>
//                   <ListItemText>
//                     <Link className={mobileNavItem} to="/contact">
//                       <Button color="inherit">CONTACT US</Button>
//                     </Link>
//                   </ListItemText>
//                 </ListItem>
//               </List>
//             </Box>
//           </Drawer>
//         </React.Fragment>
//       </div>
//     </>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import Container from '@mui/material/Container';



export default function Navigation() {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "black",
            textDecoration: "none",
            padding: '5px 10px 5px 10px',
            fontWeight: 'bold',
            fontSize: '18px',
            transition: 'ease-in all 0.6s',
            border: 'none',
            '&:hover': {
                borderBottom: '1px solid red'
            }
        },
        mobileNavItem: {
            color: "black",
            textDecoration: "none",
        },
        navIcon: {
            [theme.breakpoints.up("sm")]: {
                display: "none !important",
            },
        },

        navItemContainer: {
            [theme.breakpoints.down("sm")]: {
                display: "none",
            },
        },
        navLogo: {
            [theme.breakpoints.down("sm")]: {
                textAlign: "left",
            },
        },
        flexRow: {
            display: 'flex',
            flexDirection: 'row',
        }
    });

    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem, flexRow } = useStyle();

    const [state, setState] = React.useState(false);

    return (
        <>

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar sx={{ background: 'white', display: 'flex', justifyContent: 'space-between', height: "40px" }}>
                            <Typography
                                className={navLogo}
                                variant="h6"
                                component="div"
                                sm={{ flexGrow: 1 }}
                            >
                                <Typography className={mobileNavItem} id="buleneek" to="/home">
                                    <h2 style={{color:"#009899", marginLeft:"40px"}}>Catalog-Z</h2>
                                </Typography>
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2, color: 'black' }}
                                className={navIcon}
                                onClick={() => setState(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Box className={navItemContainer}>
                                <Box className={flexRow}>
                                    <Typography className={navItem} to="/clients">
                                        <Button color="inherit">Photos</Button>
                                    </Typography>
                                    <Typography className={navItem} to="/works">
                                        <Button color="inherit">Videos</Button>
                                    </Typography>
                                    <Typography className={navItem} to="/about">
                                        <Button color="inherit">About</Button>
                                    </Typography>
                                    <Typography className={navItem} to="/contact">
                                        <Button color="inherit">Contact</Button>
                                    </Typography>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
                <div>
                    <React.Fragment>
                        <Drawer open={state} onClose={() => setState(false)}>
                            <Box sx={{ width: 250 }} role="presentation">
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            <Typography className={mobileNavItem} to="/about">
                                                <Button color="inherit">About</Button>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText>
                                            <Typography className={mobileNavItem} to="/services">
                                                <Button color="inherit">Our Clients</Button>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText>
                                            <Typography className={mobileNavItem} to="/contact">
                                                <Button color="inherit">Our Works</Button>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText>
                                            <Typography className={mobileNavItem} to="/login">
                                                <Button color="inherit">Contact Us</Button>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                </List>
                            </Box>
                    </Drawer>
                </React.Fragment>
            </div>
    
                     
        </>
    );
}
























