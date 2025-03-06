import Footer from "./component/Footer";
import TopNav from "./component/TopNav";
import {Outlet} from "react-router-dom";

const Layout = ()=>{
    return(
        <>
        <TopNav/>
        <main style={{margin:"50px"}}><Outlet/></main>
        <Footer/>
        </>
    )
}

export default Layout;