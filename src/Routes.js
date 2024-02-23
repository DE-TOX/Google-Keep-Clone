import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' Component={SignUp}>
                    
                </Route>
                <Route path='/login' Component={Login}>
                    
                </Route>
            </Routes>
        </Router>
    )
}