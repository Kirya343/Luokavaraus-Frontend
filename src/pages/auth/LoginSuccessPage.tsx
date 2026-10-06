// LoginSuccessPage.jsx
import { useEffect } from "react";
import { useUser } from "@/lib";
import { useNavigate, useLocation } from "react-router-dom";

const LoginSuccessPage = () => {
    const { user, loading, loadUser } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!loading && user) {
            const from = new URLSearchParams(location.search).get("redirect") || "/";
            navigate(from, { replace: true });
        }

        loadUser()
    }, [loading, user, location.search, navigate]);

    return null;
};
export default LoginSuccessPage;