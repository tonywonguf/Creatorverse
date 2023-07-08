import './App.css'
import Home from './Home.tsx';
import {Route, Routes} from "react-router";
import Layout from "./Layout";

function App() {
  return (
    <>
        <Routes>
           <Route path="/" element={<Layout/>}>
               <Route element={<Home/>} index/>
           </Route>
        </Routes>
    </>
  )
}

export default App
