import css from './Ripple.module.scss';


interface RippleProps {
    clientX: number;
    clientY: number;
}


export default function Ripple(props: RippleProps) {
    const { clientX, clientY } = props;
    return (
        <div className={css.ripple} style={{
            left: (clientX - 50) + 'px',
            top: (clientY - 50) + 'px'
        }}>
            <div className={css.line} />
            <div className={css.line} />
            <div className={css.line} />
        </div>
    );
}