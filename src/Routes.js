import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import ArciveContainer from "./components/ArchiveContainer";
import TrashContainer from "./components/TrashContainer";
import NoteContainer from "./components/NotesContainer";
import ProtectedRoute from "./components/ProtectedRoute";

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
            element: <ProtectedRoute><Dashboard /></ProtectedRoute>,

            children: [
                { path: "notes", element: <ProtectedRoute><NoteContainer /> </ProtectedRoute>},
                { path: "archive", element: <ProtectedRoute><ArciveContainer /> </ProtectedRoute>},
                { path: "trash", element: <ProtectedRoute><TrashContainer /></ProtectedRoute> }
            ],
        },
    ])
    return (
        <RouterProvider router={AppRoutes} ></RouterProvider>
    )
}
