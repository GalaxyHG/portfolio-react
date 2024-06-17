import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sobre from './pages/Sobre'
import Home from './pages/Home'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> }></Route>
                <Route path="/sobre" element={ <Sobre /> }></Route>
                {/* <Route path="/projetos" element={ <Projetos /> }></Route>
                <Route path="/contatos" element={ <Contatos /> }></Route>
                <Route path="*" element={ <Page404 /> }></Route> */}
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes
