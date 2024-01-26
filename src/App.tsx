import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Layout from "./components/Layout/Layout";
import ClientLayout from "./components/client/ClientLayout/ClientLayout";

import HomePage from "./pages/ClientUI/HomePage/HomePage";

// import LoginPage from "./pages/ClientUI/LoginPage/LoginPage";
// import ContactPage from "./pages/ClientUI/ContactPage/ContactPage";
// import AboutPage from "./pages/ClientUI/AboutPage/AboutPage";
// import ErrorPage from "./pages/ErrorPage/ErrorPage";
// import TemplatePage from "./pages/ClientUI/TemplatePage/TemplatePage";

const LoginPage = lazy(() => import("./pages/ClientUI/LoginPage/LoginPage"))
const ContactPage = lazy(() => import("./pages/ClientUI/ContactPage/ContactPage"))
const AboutPage = lazy(() => import("./pages/ClientUI/AboutPage/AboutPage"))
const ErrorPage = lazy(() => import("./pages/ErrorPage/ErrorPage"))
const TemplatePage = lazy(() => import("./pages/ClientUI/TemplatePage/TemplatePage"))

// import DashLayout from "./components/dashboard/DashLayout/DashLayout";
// import DashboardPage from "./pages/DashboardUI/DashboardPage/DashboardPage";
// import ProtectPrivate from "./components/ProtectPrivate/ProtectPrivate";
// import DeveloperLoginPage from "./pages/DashboardUI/DeveloperLoginPage/DeveloperLoginPage";
// import DeveloperRegisterPage from "./pages/DashboardUI/DeveloperRegisterPage/DeveloperRegisterPage";

// import AdminProfilePage from "./pages/DashboardUI/AdminProfilePage/AdminProfilePage";
// import MediaPage from "./pages/DashboardUI/MediaPage/MediaPage";

// import CreateTemplatePage from "./pages/DashboardUI/CreateTemplatePage/CreateTemplatePage";
// import TemplateListsPage from "./pages/DashboardUI/TemplateListsPage/TemplateListsPage";
// import TemplateEditPage from "./pages/DashboardUI/TemplateEditPage/TemplateEditPage";
// import TemplateViewPage from "./pages/DashboardUI/TemplateViewPage/TemplateViewPage";


// import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
// import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";


const DashLayout = lazy(() => import("./components/dashboard/DashLayout/DashLayout"))
const DashboardPage = lazy(() => import("./pages/DashboardUI/DashboardPage/DashboardPage"))
const ProtectPrivate = lazy(() => import("./components/ProtectPrivate/ProtectPrivate"))
const DeveloperLoginPage = lazy(() => import("./pages/DashboardUI/DeveloperLoginPage/DeveloperLoginPage"))
const DeveloperRegisterPage = lazy(() => import("./pages/DashboardUI/DeveloperRegisterPage/DeveloperRegisterPage"))
const AdminProfilePage = lazy(() => import("./pages/DashboardUI/AdminProfilePage/AdminProfilePage"))
const MediaPage = lazy(() => import("./pages/DashboardUI/MediaPage/MediaPage"))
const CreateTemplatePage = lazy(() => import("./pages/DashboardUI/CreateTemplatePage/CreateTemplatePage"))
const TemplateListsPage = lazy(() => import("./pages/DashboardUI/TemplateListsPage/TemplateListsPage"))
const TemplateEditPage = lazy(() => import("./pages/DashboardUI/TemplateEditPage/TemplateEditPage"))
const TemplateViewPage = lazy(() => import("./pages/DashboardUI/TemplateViewPage/TemplateViewPage"))
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage/ForgotPasswordPage"))
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage/ResetPasswordPage"))

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: < ErrorPage />,
        children: [
            {
                element: <ClientLayout />,
                children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "template/:slug",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <TemplatePage />
                            </Suspense>
                        )
                    },
                    {
                        path: "about",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                < AboutPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "contact",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContactPage />
                            </Suspense>
                        )
                    },
                ],
            },
            {
                path: "dashboard",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProtectPrivate>
                            <DashLayout />
                        </ProtectPrivate>
                    </Suspense>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <DashboardPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "users/profile",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <AdminProfilePage />
                            </Suspense>
                        )
                    },
                    {
                        path: "media",
                        element: (
                            <Suspense fallback={<div>Loading...</div>}>
                                <MediaPage />
                            </Suspense>
                        )
                    },
                    {
                        path: "templates",
                        children: [
                            {
                                index: true,
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <TemplateListsPage />
                                    </Suspense>
                                )
                            },
                            {
                                path: "create",
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <CreateTemplatePage />
                                    </Suspense>
                                )
                            },
                            {
                                path: 'edit',
                                element: (
                                    <Suspense fallback={<div>Loading...</div>}>
                                        <TemplateViewPage />
                                    </Suspense>
                                )
                            },
                        ]
                    }
                ]
            },
            {
                path: "login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <LoginPage />,
                    </Suspense>
                )
            },
            {
                path: "dashboard/login",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <DeveloperLoginPage />,
                    </Suspense>
                )
            },
            {
                path: "dashboard/register",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <DeveloperRegisterPage />,
                    </Suspense>
                )
            },
            {
                path: "/forgot-password",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ForgotPasswordPage />,
                    </Suspense>
                )
            },
            {
                path: `/reset-password/:resetPassToken`,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ResetPasswordPage />,
                    </Suspense>
                )
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
