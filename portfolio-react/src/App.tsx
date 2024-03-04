import './App.scss'
import MainRoutes from '@/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react';
import Ripple from './components/ripple/Ripple';

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


interface AppContextValue {

    /**
     * 현재 선택된 섹션의 id
     */
    selectedSectionId: string,

    /**
     * 현재 선택된 섹션을 변경합니다.
     * @param sectionId 
     * @returns 
     */
    changeSelectedSection: (sectionId: string) => void,


    flashlightOn: boolean,

    changeFlashLightOn: (isOn: boolean) => void,

    lightBrightness: number,

    changeLightBrightness: (brightness: number) => void
}

export const AppContext = React.createContext<AppContextValue>(undefined!);

interface AppContextProviderProps {
    children: React.ReactNode;
}

function AppContextProvider(props: AppContextProviderProps) {
    const [selectedSectionId, setSelectedSection] = React.useState('');
    const [flashlightOn, setFlashlightOn] = React.useState(true);
    const [lightBrightness, setLightBrightness] = React.useState(5);

    const selectSection = (section: string) => {
        setSelectedSection(section);
    }

    const changeFlashLightOn = (isOn: boolean) => {
        setFlashlightOn(isOn);
    };

    const changeLightBrightness = (brightness: number) => {
        document.documentElement.style.setProperty('--lightBrightness', brightness.toString());
        setLightBrightness(brightness);
    };

    const appContextValue: AppContextValue = {
        selectedSectionId,
        changeSelectedSection: selectSection,
        flashlightOn,
        changeFlashLightOn,
        lightBrightness,
        changeLightBrightness
    }

    return (
        <AppContext.Provider value={appContextValue}>
            {props.children}
        </AppContext.Provider>
    )
}
