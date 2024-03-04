import './App.scss'
import MainRoutes from '@/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import React, { useEffect } from 'react';

function App() {
    function handleMouseEvent(e: MouseEvent) {
        let x = 0;
        let y = 0;
        x = e.clientX;
        y = e.clientY;
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
    }

    function handleTouchEvent(e: TouchEvent) {
        const x = e.touches[0].clientX;
        const y = e.touches[0].clientY;
        document.documentElement.style.setProperty('--cursorX', x + 'px')
        document.documentElement.style.setProperty('--cursorY', y + 'px')
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseEvent)
        document.addEventListener('touchmove', handleTouchEvent)
        return () => {
            document.removeEventListener('mousemove', handleMouseEvent)
            document.removeEventListener('touchmove', handleTouchEvent)
        }
    }, []);


    return (
        <>
            <AppContextProvider>
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
