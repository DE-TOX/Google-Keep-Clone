import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import ArciveContainer from "./components/ArchiveContainer";
import TrashContainer from "./components/TrashContainer";
import NoteContainer from "./components/NotesContainer";

export const Routers = () => {
    const AppRoutes = createBrowserRouter([
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/",
            element: <SignUp />
        },
        {
            path: "/dashboard",
            element: <Dashboard />,

            children: [
                { path: "notes", element: <NoteContainer /> },
                { path: "archive", element: <ArciveContainer /> },
                { path: "trash", element: <TrashContainer /> }
            ],
        },
    ])
    return (
        <RouterProvider router={AppRoutes} ></RouterProvider>
    )
}
