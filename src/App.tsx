import './App.css'
import Home from "./Containers/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Add from "./Containers/Add.tsx";
import Categories from "./Containers/Categories.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/categories" element={<Categories/>}/>
        </Routes>
    </>
  )
}

export default App
