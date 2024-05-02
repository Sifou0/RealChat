import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

function getToken() {
    const tokenString = sessionStorage.getItem("token")
    if(tokenString != null){
        const userToken = JSON.parse(tokenString)
        return userToken.token
    }
    return undefined
}

function setToken(token: object) {
    sessionStorage.setItem("token",JSON.stringify(token))
}

export default function App() {

    const token = getToken()

    console.log(token)

    if(!token) {
        return <LoginPage setToken={setToken}  />
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                {/*<Route path="login" element={<LoginPage />} />*/}
            </Routes>
        </BrowserRouter>
    );
}
