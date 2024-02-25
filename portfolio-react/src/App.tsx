import MainRoutes from '@/MainRoutes'
import './App.scss'
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
                <BrowserRouter>
                    <MainRoutes />
                </BrowserRouter>
            </AppContextProvider>
        </>
    )
}

export default App;

interface AppContextValue {
    /**
     * 현재 선택된 섹션을 변경합니다.
     * @param sectionId 
     * @returns 
     */
    selectSection: (sectionId: string) => void,

    /**
     * 현재 선택된 섹션의 id
     */
    selectedSectionId: string,
}

export const AppContext = React.createContext<AppContextValue>({
    selectedSectionId: '',
    selectSection: () => { },
})

interface AppContextProviderProps {
    children: React.ReactNode;
}

function AppContextProvider(props: AppContextProviderProps) {
    const [selectedSectionId, setSelectedSection] = React.useState('');

    const selectSection = (section: string) => {
        setSelectedSection(section);
    }

    return (
        <AppContext.Provider value={{ selectSection, selectedSectionId }}>
            {props.children}
        </AppContext.Provider>
    )
}
