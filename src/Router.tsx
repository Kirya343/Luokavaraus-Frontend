import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import ReservationPage from "./pages/ReservationPage";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<RootLayout/>}>
                    <Route index element={<HomePage/>}></Route>
                    <Route path="reserve" element={<ReservationPage/>}></Route>
                    <Route path="account" element={<AccountPage/>}></Route>

                    <Route path="login" element={<LoginPage/>}></Route>
                    <Route path="register" element={<RegisterPage/>}></Route>
                </Route>
            </Routes>
        </>
    );
};

export default AppRouter;