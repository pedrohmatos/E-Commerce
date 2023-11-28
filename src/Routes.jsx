import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Padrao from './pages/Padrao'
import Shop from './pages/Shop'
import Celulares from './pages/Celulares'
import Vitrine from './pages/Vitrine'
import Carrinho from './pages/Carrinho'
import NotFound from './pages/NotFound'

function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Padrao />}>
                    <Route path='/' element={<Shop />} />
                    <Route path='/celulares/:marca' element={<Celulares />} />
                    <Route path='/celulares/:marca/:modelo' element={<Vitrine />} />
                    <Route path='/carrinho' element={<Carrinho />} />
                </Route>
                    <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
