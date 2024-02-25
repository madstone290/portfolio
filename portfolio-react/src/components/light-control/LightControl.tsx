import React from 'react';
import css from './LightControl.module.scss';
export default function LightControl() {
    return (
        <div className={css.lightControl}>
            <div className={css.row}>
                <div>라이트 전원</div>
                <Switch />
            </div>
            <div className={css.row}>
                <div>라이트 밝기</div>
                <RangeSlider />
            </div>

            {/* <input type="range" min="1" max="100" value="50" id="myRange"></input> */}
        </div>
    );
}

function Switch() {
    const [isOn, setIsOn] = React.useState(true);
    const handleCheck = () => {
        setIsOn(!isOn);
    }
    return (
        <div className={css.switch} onClick={handleCheck}>
            <input type="checkbox" checked={isOn} onChange={handleCheck} />
            <div className={css.slider}></div>
        </div>
    );
}

function RangeSlider() {
    const [value, setValue] = React.useState(5);
    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(parseInt(e.target.value));
    }
    return (
        <div className={css.rangeSlider}>
            <input type="range" min="1" max="10" value={value} id="myRange" onChange={handleRangeChange}></input>
        </div>

    );
}