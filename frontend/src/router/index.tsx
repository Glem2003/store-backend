import { HashRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"

// routes
import { webRoutes } from "../data/route"

// components
import { Box, CircularProgress } from "@mui/material"

const renderRoutes = (routes: any[]) => {
    return routes.map(({ path, element, index, children }, i) => (
        <Route key={i} path={path} element={element} index={index}>
            {children && renderRoutes(children)}
        </Route>
    ))
}

const AppRoute = () => {
    return (
        <HashRouter>
            <Suspense fallback={
                <Box
                    width={'100vw'}
                    height={'100vh'}
                    display={'grid'}
                    sx={{
                        placeContent: 'center'
                    }}
                >
                    <CircularProgress size={'5rem'} />
                </Box>
            }>
                <Routes>
                    {renderRoutes(webRoutes)}
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

export default AppRoute