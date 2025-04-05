import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"

// data
import routes from '../data/route'

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<>loading...</>}>
                <Routes>
                    {routes.map(({ path, element, index }) => {
                        return (
                            <Route path={path} element={element} index={index} />
                        )
                    })}
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default AppRoute