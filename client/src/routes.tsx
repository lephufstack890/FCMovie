import { createBrowserRouter} from "react-router-dom";
import LayoutAdmin from "./layout/admin/LayoutAdmin";
import LayoutWebsite from "./layout/website/LayoutWebsite";
import { Dashboard, HomePage, PageNotFound } from "./pages";
import "./index.css"
import RapPage from "./pages/rap/RapPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <HomePage /> },
            
        ],
    },
    {
        path: "/thong-tin-rap",
        element: (
            <LayoutWebsite/>
        ),
        children: [
            { index: true, element: <RapPage /> },
            
        ],
    },
    {
        path: "/admin",
        children: [
            {
                element: <LayoutAdmin />,
                children: [
            { index: true, element: <Dashboard /> },
                    
                ],
            },
        ],
    },
    { path: "*", element: <PageNotFound/> },
]);