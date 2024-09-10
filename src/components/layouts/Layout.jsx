import Grid from "@mui/material/Grid"
import Nav from "./Nav"
import Socials from "./Socials"
import { useMediaQuery } from '@mui/material';
import "./Layout.css"
import "../../pages/Contact.css"
import { useLocation } from "react-router-dom";
export default function Layout({bgStyles, children}) {
    
    const path = useLocation().pathname;
    const location = path.split("/")[1];
    const isMobile = useMediaQuery('(max-width:700px)');

    const styles = {
        socials: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'fixed',
          right: '35px',
          top: '25vh',      
        },       
      }

    return (
        <Grid container={true} spacing={3} className={location === "Contact" ? "contact" : ""} >
            <Grid item={true} sx={{flexDirection: "column", alignItems:"center"}} xs={1.5} sm={1.5} md={1}  lg={1.5}>
                <Nav />
            </Grid>
            <Grid item={true} sx={{ padding: "20px"}} xs={10.5} sm={10} md={10} lg={9}>
                {children}
            </Grid>
            <Grid  item={true} sx={{flexDirection: "column", alignItems: "center", }} xs={0} sm={0.5} md={1} lg={1.5}>
                {!isMobile ? (<Socials styles={styles.socials} placement={'right' } color={'secondary'} background={'transparent'} isMobile={isMobile} />) : ("")}
            
            </Grid>
        </Grid>
    )
}