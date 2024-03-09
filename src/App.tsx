import './App.css'
import Home from "./Containers/Home.tsx";
import {Route, Routes} from "react-router-dom";
import Categories from "./Containers/Categories.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories" element={<Categories/>}/>
        </Routes>
    </>
  )
}

export default App
