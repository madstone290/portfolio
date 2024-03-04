import './App.scss'
import MainRoutes from '@/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react';
import Ripple from '@/components/ripple/Ripple';
import AppContextProvider, { AppContext } from '@/AppContextProvider';

function App() {
    const [ripples, setRipples] = React.useState<React.ReactNode[]>([]);
    const countRef = React.useRef(0);

    function addNewRipple(clientX: number, clientY: number) {
        const listItemKey = countRef.current++;
        ripples.push(<Ripple key={listItemKey} clientX={clientX} clientY={clientY} />);
        setRipples([...ripples]);
        setTimeout(() => {
            ripples.shift();
            setRipples([...ripples]);
        }, 1200);
    }

    function handleMouseEvent(e: MouseEvent) {
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty('--cursorX', x + 'px');
        document.documentElement.style.setProperty('--cursorY', y + 'px');
    }

    function handleClickEvent(e: MouseEvent) {
        const x = e.clientX;
        const y = e.clientY;
        document.documentElement.style.setProperty('--cursorX', x + 'px');
        document.documentElement.style.setProperty('--cursorY', y + 'px');
        addNewRipple(x, y);
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseEvent);
        document.addEventListener('click', handleClickEvent);

        return () => {
            document.removeEventListener('mousemove', handleMouseEvent)
            document.removeEventListener('click', handleClickEvent)
        }
    }, []);


    return (
        <>
            <AppContextProvider>
                {ripples}
                <FlashlightPanel>
                    <BrowserRouter>
                        <MainRoutes />
                    </BrowserRouter>
                </FlashlightPanel>
            </AppContextProvider>

        </>
    )
}
export default App;


function FlashlightPanel(props: { children: React.ReactNode }) {
    const appContext = React.useContext(AppContext);
    return (
        <div className={appContext.flashlightOn ? 'flashlight' : ''}>
            {props.children}
        </div>
    )
}