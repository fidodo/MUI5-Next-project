import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Image from "next/image"
import MuiNextLink from "./MuiNextLink"
import Navbar from './Navbar'
import SideDrawer from "./SideDrawer";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
    { title: `Processed orders `, path: `/Processed-orders` },
    { title: `Orders accepted by naughty list`, path: `/Orders-accepted-by-naughty-list` },
    { title: `Orders rejected by naughty list`, path: `/Orders-rejected-by-naughty-list` },
    { title: `contact`, path: `/Contact` },
  ];



export default function Header () {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, justifyContent: `space-between` }}
          >
              <IconButton edge="start" aria-label="home">
             <MuiNextLink activeClassName="active" href="/">
             <Image src={"/images/logo.png"} width ={30} height ={30} alt=""/>
              </MuiNextLink>
             </IconButton>
            <Navbar navLinks={navLinks} />
            <SideDrawer navLinks={navLinks} />
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};
