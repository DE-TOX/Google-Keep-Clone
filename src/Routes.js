import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

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