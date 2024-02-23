import MainRoutes from '@/MainRoutes'
import './App.css'
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
