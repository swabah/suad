import React from "react";
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home'
import Contact from './pages/Contact'
import Library from './pages/Library'
import Services from './pages/Services'
import Events from './pages/Events'
import PreMessege from './pages/PreMessege'
import Committee from './pages/Committee'
import Asathida from './pages/Asathida'
import QiuckContact from './pages/QiuckContact'
import Photos from "./pages/Photos";
import Videos from "./pages/Videos";
import Layout from "./assets/Layout";




function App() {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/library" element={<Library/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/Event" element={<Events/>}/>
        <Route path="/PreMessege" element={<PreMessege/>}/>
        <Route path="/Committee" element={<Committee/>}/>
        <Route path="/Asathida" element={<Asathida/>}/>
        <Route path="/Photos" element={<Photos/>}/>
        <Route path="/Videos" element={<Videos/>}/>
        <Route path="/QiuckContact" element={<QiuckContact/>}/>
      </Route>
    </Routes>
  </Router>
  </>;
}

export default App;
