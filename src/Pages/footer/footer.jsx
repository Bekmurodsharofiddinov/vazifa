import * as React from "react";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from '@mui/material/Container';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const useStyle = makeStyles({
  navItem: {
    color: "white",
    textDecoration: "none",
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ariaLabel = { "aria-label": "description" };

export default function Footer() {
  const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } =
    useStyle();

  return (
    <>
    <Box sx={{background:"#EEEEEE" , mt:"50pxa"}}>

    <Container>

      <Grid container sx={{ border: 'none', background:"#EEEEEE" }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={6} md={4} style={{}} >
          <Typography sx={{ color: "#009899" , mt:"5%" }} variant="h4">About Catalog-Z</Typography>
          <Typography sx={{mt:"5%" }}>
            warning earch for the keywords to learn more about each warning
            the keywords to learn each warning.earch for the keywords to learn
            more about each.
          </Typography>
          <br />
          <Typography sx={{}}>
            each warning.earch for the keywords to learn
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Typography sx={{ }}>
              <Typography variant="h4" sx={{ color: "#009899", mt:"5%"  }}>Our Links</Typography>
              <Typography sx={{width:"100px", mt:"5%" }}>
                Adventure Support Our Company contact
              </Typography>
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} sx={{}}>
           <Typography sx={{mt:"5%" }}>
              <FacebookIcon style={{ width: '40px', height: "30px",margin:"5px", color:'#042431', background: 'white' }} />
              <TwitterIcon style={{ width: '40px', height: "30px", margin:"5px",color: '#042431',background: 'white' }} />
              <InstagramIcon style={{ width: '40px', height: "30px",margin:"5px", color: '#042431', background: 'white' }} />
              <GoogleIcon style={{ width: '40px', height: "30px",margin:"5px", color: '#042431', background: 'white' }} />
              <Typography sx={{mt:"5%"}}>Terms of Use</Typography>
              <Typography sx={{}}>Privice Policy</Typography>
              <Typography sx={{mt:"20%"}}>Adventure Support Our Company</Typography>
            </Typography>

        </Grid>
      </Grid>
    </Container>
          </Box>
    </>
  );
}