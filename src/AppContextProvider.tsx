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

    flashlightEnabled: boolean,

    enableFlashlight: (enable: boolean) => void,

    lightBrightness: number,

    changeLightBrightness: (brightness: number) => void,
}

export const AppContext = React.createContext<AppContext>(undefined!);

interface AppContextProviderProps {
    children: React.ReactNode;
}

export default function AppContextProvider(props: AppContextProviderProps) {
    const [selectedSectionId, setSelectedSection] = React.useState('');
    const [flashlightEnabled, setFlashlightEnabled] = React.useState(true);
    const [flashlightOn, setFlashlightOn] = React.useState(true);
    const [lightBrightness, setLightBrightness] = React.useState(5);

    const changeSelectedSection = (section: string) => {
        setSelectedSection(section);
    }

    const changeFlashLightOn = (isOn: boolean) => {
        setFlashlightOn(isOn);
    };

    const changeLightBrightness = (brightness: number) => {
        document.documentElement.style.setProperty('--lightBrightness', brightness.toString());
        setLightBrightness(brightness);
    };

    const enableFlashlight = (enable: boolean) => {
        setFlashlightEnabled(enable);
    };

    const appContextValue: AppContext = {
        selectedSectionId,
        changeSelectedSection,
        flashlightEnabled,
        enableFlashlight,
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
