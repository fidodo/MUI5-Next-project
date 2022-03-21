import Grid from "@mui/material/Grid";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import ArrowDownward from "@mui/icons-material/ArrowDownward";


export default function Hero ({imgSrc, imgAlt,title,subtitle}) {
    return (
      <>
      <Grid
       component="section"
       container
        sx={{
        position: `absolute`,
        height: "605px",
        width: `850px`,
        Blend: "Pass through",
        left:"657px",
        top:"107px",
        
       }}> 

        <Image src={imgSrc} alt={imgAlt} layout="fill" objectFit="cover" />
        
       </Grid>
       
      </>
     )
}
 
