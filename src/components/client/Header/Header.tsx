import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import DialogBox from "../DialogBox/DialogBox";

const Header = () => {


    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

    return (
        <header>
            <div className="container header-container">
                <div className="logo-container">
                    <h1><Link to={"/"}> TemplateHub </Link></h1>
                </div>
                <nav>
                    <ul>
                        <NavLink to={"/"}>home</NavLink>
                        <NavLink to={"/about"}>about us</NavLink>
                        <NavLink to={"/contact"}>contact</NavLink>
                    </ul>
                    <button
                        className="login-btn"
                        onClick={() => { setIsDialogOpen(!isDialogOpen) }}
                    >login</button>
                    {isDialogOpen && <DialogBox setIsDialogOpen={setIsDialogOpen} />}
                </nav>
            </div>

        </header>
    );
};

export default Header;
