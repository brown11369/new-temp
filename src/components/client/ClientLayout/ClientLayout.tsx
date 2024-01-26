import "./ClientLayout.css";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const ClientLayout = () => {
    return (
        <div className="client-body">
            <Header />
            <Outlet />
        </div>
    );
};

export default ClientLayout;
