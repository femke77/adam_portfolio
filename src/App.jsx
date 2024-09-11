// Bringing in the required import from 'react-router-dom'
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { CssBaseline } from "@mui/material";
import "./App.css";
import Layout from "./components/layouts/Layout";
import {AnimationProvider} from "./utils/AnimationContext.jsx";

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <CssBaseline />
      <AnimationProvider>
        <main >
          <Layout>
            <Outlet />
          </Layout>
        </main>
      </AnimationProvider>
    </>
  );
}

export default App;
