import './App.css';
import React from 'react';
import WindowSizes from './components/WindowSizes';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => {return <h2>Home</h2>}
const About = () => {return <h2>About</h2>}
const Contact = () => {return <h2>Contact</h2>}

function App() {
    // return <>
    //   <button onClick={() => {window.close()}}>Close window</button>
    //   <button onClick={() => {window.open('https://webpack.js.org/')}}>Open window</button>
    //   <button onClick={() => {window.location.assign('https://webpack.js.org/')}}>Open assign</button>
    //   <button onClick={() => {window.location.replace('https://webpack.js.org/')}}>Open replace</button>
    //   <WindowSizes />
    // </>



    // return <BrowserRouter>
    // <nav>
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/about">About</Link></li>
    //     <li><Link to="/contact">Contact</Link></li>
    //   </ul>
    // </nav>

    // <h1>App title</h1>
    // <Routes>
    //   <Route exact path="/" element={<Home />}>
    //     <Home />
    //   </Route >
    //   <Route exact path="/about" element={<Home />}>
    //     <About />
    //   </Route>
    //   <Route exact path="/contact" element={<Home />}>
    //     <Contact />
    //   </Route>
    // </Routes>
    // <p>&copy;2023</p>
    // </BrowserRouter>


    return <>
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/sign-in">SignInForm</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/calendar" element={<Calendar />}></Route>
        <Route exact path="/sign-in" element={<SignInForm />}></Route>
      </Routes>
      <p>&copy;2023</p>
    </BrowserRouter>
    </>
}

export default App;