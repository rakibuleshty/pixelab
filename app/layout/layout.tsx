import { Outlet } from "react-router";
import Footer from "~/footer/footer";
import Navbar from "~/navbar/navbar";

export default function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}