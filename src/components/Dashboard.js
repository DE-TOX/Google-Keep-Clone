import { useState } from "react"
import { Outlet } from "react-router-dom"
import PrimarySearchAppBar from "./PrimarySearchAppBar";
import ViewModeContext from "./ViewModeContext";
import TemporaryDrawer from "./SideBar";



function Dashboard() {
    const [toggleDrawer, setToggleDrawer] = useState(false)
    const [viewMode, setViewMode] = useState('list');

    const updateView = (viewMode) => {
        setViewMode(viewMode)
    }
    const handleClose = () => {
        setToggleDrawer(false)
    }

    return (
        <>
            <ViewModeContext.Provider value={{ viewMode, setViewMode,toggleDrawer,setToggleDrawer }}>
                <PrimarySearchAppBar onMenuButtonClick={() => setToggleDrawer(!toggleDrawer)} updateView={updateView} />
                <br />
                <TemporaryDrawer open={toggleDrawer} onClose={handleClose}/>
                <Outlet />
            </ViewModeContext.Provider>
        </>
    )
}

export default Dashboard