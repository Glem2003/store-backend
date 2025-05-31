import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"

// routes
import { webRoutes } from "../data/route"

const renderRoutes = (routes: any[]) => {
    return routes.map(({ path, element, index, children }, i) => (
        <Route key={i} path={path} element={element} index={index}>
            {children && renderRoutes(children)}
        </Route>
    ))
}

const AppRoute = () => {

    return (
        <BrowserRouter>
            <Suspense fallback={<>loading...</>}>
                <Routes>
                    {renderRoutes(webRoutes)}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoute