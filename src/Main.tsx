import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@/css/main.scss";
import { UserProvider } from "./lib";

ReactDOM.createRoot(document.getElementById("root")!).render(

    //<React.StrictMode> для разработки, добавляет двойной вызов функций
    
    <BrowserRouter> 
        <UserProvider>
            <App />
        </UserProvider>
    </BrowserRouter>
);