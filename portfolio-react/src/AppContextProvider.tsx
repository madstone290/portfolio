import { Box, Modal } from "@mui/material";
import React from "react";


interface AppContext {

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

    changeLightBrightness: (brightness: number) => void,
}

export const AppContext = React.createContext<AppContext>(undefined!);

interface AppContextProviderProps {
    children: React.ReactNode;
}

export default function AppContextProvider(props: AppContextProviderProps) {
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

    const appContextValue: AppContext = {
        selectedSectionId,
        changeSelectedSection: selectSection,
        flashlightOn,
        changeFlashLightOn,
        lightBrightness,
        changeLightBrightness,
    }

    return (
        <AppContext.Provider value={appContextValue}>
            {props.children}
        </AppContext.Provider>
    )
}
