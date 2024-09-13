import Layout from "../components/layouts/Layout";
import About from "../components/home/About";
import Intro from "../components/home/Intro";
import Portfolio from "../components/home/Portfolio";
import Skills from "../components/home/Skills";
import Footer from "../components/Footer";
import Welcome from "../components/home/Welcome";
import Box from "@mui/material/Box";
import ScrollingText from "../components/home/ScrollingText";
import '../components/home/Intro.css'; // Import CSS file for styles

// TODO Parallax effects on this page

export default function Home() {
  return (
    <Box >
      <Welcome />
      <Intro />
      <About />
      <ScrollingText />
      <Portfolio />
      <Skills />
      <Footer />
    </Box>
  );
}
