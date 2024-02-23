import MainRoutes from '@/MainRoutes'
import './App.scss'
import { BrowserRouter } from 'react-router-dom'

function App() {

    return (
        <>
            <BrowserRouter>
                <MainRoutes />
            </BrowserRouter>
        </>
    )
}

export default App
