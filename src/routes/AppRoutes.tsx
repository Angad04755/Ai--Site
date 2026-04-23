import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
const   HomePage = lazy(() => import("../pages/HomePage"));
function AppRoutes() {
return (
    <Suspense>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
    </Routes>
    </Suspense>
)
}
export default AppRoutes;