import {Outlet} from "react-router-dom"
import Header from "../sections/Header/Header.tsx"
import Footer from "../sections/Footer/Footer.tsx"


const MainLayouts = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>

    );
};

export default MainLayouts;