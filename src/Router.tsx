import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import ReservationPage from "./pages/ReservationPage";
import MainPage from "./pages/MainPage";
import AccountPage from "./pages/AccountPage";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<RootLayout/>}>
                    <Route index element={<MainPage/>}></Route>
                    <Route path="reserve" element={<ReservationPage/>}></Route>
                    <Route path="account" element={<AccountPage/>}></Route>
                </Route>
            </Routes>
        </>
    );
};

export default AppRouter;