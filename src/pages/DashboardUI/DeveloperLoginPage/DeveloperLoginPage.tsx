import "./DeveloperLoginPage.css";
import { Link, Navigate } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/rootReducer";
import usePersist from "../../../hooks/usePersist";
import { useState } from "react";


const DeveloperLoginPage = () => {
    const { email, password, setEmail, setPassword, handleLogin, handleDemoLogin, setIsTrusted } = useLogin();

    const [isDemoLoginClicked, setisDemoLoginClicked] = useState<boolean>(false)

    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    const [persist] = usePersist()


    if (persist || isAuthenticated) return <Navigate to={"/dashboard"} />;

    return (
        <main className="auth">

            <form id="sign_in">
                <h2>Sign in</h2>
                {/* <!--Email and password input are contained here and within--> */}

                <div className="input-box">

                    <div className="email">
                        <input
                            id="email"
                            type="email"
                            autoComplete="true"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Enter email</label>
                    </div>
                    <div className="password">
                        <input
                            id="password"
                            type="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Enter password</label>
                    </div>
                </div>




                <div className="trusted-check-container">
                    <input type="checkbox" name="checkbox" id="checkbox" onChange={(e) => { setIsTrusted(e.target.checked) }} />
                    <label htmlFor="checkbox">Remember Me</label>
                </div>
                <button
                    type="submit"
                    disabled={!email || !password}
                    onClick={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}>
                    Sign in
                </button>

                <button
                    type="submit"
                    disabled={isDemoLoginClicked}
                    onClick={(e) => {
                        e.preventDefault();
                        handleDemoLogin()
                        setisDemoLoginClicked(true)
                    }}>
                    {isDemoLoginClicked ? "Please Wait" : "Demo Admin"}
                </button>

                <p>
                    Don't have an account,
                    &nbsp;
                    <Link to={"/dashboard/register"}>Register</Link>
                    &nbsp;
                    here
                </p>

            </form>
        </main>

    );
};

export default DeveloperLoginPage;
