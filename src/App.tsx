import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts.tsx";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Gallery from "./pages/Gallery/Gallery.tsx";
import "./styles/main.css"


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayouts/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                </Route>
                <Route path="*" element={<div className="container section">404</div>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;