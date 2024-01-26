import "./AdminProfilePage.css"

import useLogout from "../../../hooks/useLogout";
import { useOutletContext } from "react-router-dom";
import { UserInfo } from "../../../utils/types";

type OutletContextType = [UserInfo, boolean];



const AdminProfilePage = () => {
    const [userInfo, loading]: OutletContextType = useOutletContext()
    const { handleLogout } = useLogout();
    return (
        <main>
            <section className="dashpage">
                <h2 className="heading">Profile</h2>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>Admin Color Scheme</span>
                    </div>
                    <div className="dash-last clr-schm-contain">
                        <div>
                            <span>Default</span>
                            <div className="clr-container">
                                <div>
                                    <div className="clr-box bx1"></div>
                                    <div className="clr-box bx2"></div>
                                </div>
                                <div>
                                    <div className="clr-box bx3"></div>
                                    <div className="clr-box bx4"></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span>Light</span>
                            <div className="clr-container">
                                <div>
                                    <div className="clr-box bx1"></div>
                                    <div className="clr-box bx2"></div>
                                </div>
                                <div>
                                    <div className="clr-box bx3"></div>
                                    <div className="clr-box bx4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>User Email</span>
                    </div>
                    <div className="dash-last">
                        {loading ? "Loading" : <input type="text" name="email" defaultValue={userInfo?.email} autoComplete="true" />}
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>User Name</span>
                    </div>
                    <div className="dash-last">
                        {loading ? "Loading" : <input type="text" name="username" defaultValue={userInfo?.name} autoComplete="true" />}
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>Nickname (required)</span>
                    </div>
                    <div className="dash-last">
                        <span>Dr. Fury</span>
                    </div>
                </div>

                <div className="dash-container">
                    <div className="dash-first">
                        <span>Display name publicly as</span>
                    </div>
                    <div className="dash-last">
                        <select name="select">
                            <option value="GoGo">GOGo</option>
                            <option value={userInfo?.name}>{userInfo?.name}</option>
                        </select>
                    </div>
                </div>


                <div className="dash-container">
                    <div className="dash-first">
                        <span>Profile Picture</span>
                    </div>
                    <div className="dash-last">
                        <span>Image</span>
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>New Password</span>
                    </div>
                    <div className="dash-last">
                        <button>Set New Password</button>
                    </div>
                </div>
                <div className="dash-container">
                    <div className="dash-first">
                        <span>Sessions</span>
                    </div>
                    <div className="dash-last">
                        <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                            e.preventDefault();
                            handleLogout();
                        }}>Log Out Everywhere Else</button>
                    </div>
                </div>
                <div className="dash-container">
                    <div>
                        <button>Update Profile</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AdminProfilePage;
