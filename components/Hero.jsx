import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";


export default function Hero ({imgSrc, imgAlt,title,subtitle}) {
    return (
      <>
      <Grid
       component="section"
       container
        sx={{
        position: `absolute`,
        height: "1020px",
        width: `1440px`,
        overflow: `hidden`,
        zIndex: -100,
         mb: 15,
         
       }}>
           
        <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
        
       </Grid>
       
      </>
     )
}
 
