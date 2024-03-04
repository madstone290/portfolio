import React from 'react';
import css from './LightControl.module.scss';
import { AppContext } from '@/App';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

export default function LightControl() {
    const [visible, setVisible] = React.useState(false);
    const handleShowHide = () => {
        setVisible(!visible);
    }
    return (
        <div className={css.lightControl}>
            <div className={css.row}>
                <div className={css.showHideBtn} onClick={handleShowHide}>
                    {visible ?
                        <MdExpandLess fontSize={"2rem"} /> :
                        <MdExpandMore fontSize={"2rem"} />
                    }
                </div>
            </div>
            {visible &&
                <div className={css.row}>
                    <div>라이트 효과</div>
                    <Switch />
                </div>
            }
            {
                visible &&
                <div className={css.row}>
                    <div>라이트 밝기</div>
                    <RangeSlider />
                </div>
            }
        </div>
    );
}

function Switch() {
    const appContext = React.useContext(AppContext);
    const handleCheck = () => {
        appContext.changeFlashLightOn(!appContext.flashlightOn);
    }
    return (
        <div className={css.switch} onClick={handleCheck}>
            <input type="checkbox" checked={appContext.flashlightOn} onChange={handleCheck} />
            <div className={css.slider}></div>
        </div>
    );
}

function RangeSlider() {
    const appContext = React.useContext(AppContext);
    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const brightness = parseInt(e.target.value);
        appContext.changeLightBrightness(brightness);
    }
    return (
        <div className={css.rangeSlider}>
            <input type="range" min="1" max="10" value={appContext.lightBrightness}
                onChange={handleRangeChange}></input>
        </div>

    );
}