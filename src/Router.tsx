import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout/RootLayout";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<RootLayout/>}>

                </Route>
            </Routes>
        </>
    );
};

export default AppRouter;