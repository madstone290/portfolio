import css from './Ripple.module.scss';


interface RippleProps {
    clientX: number;
    clientY: number;
}

/**
 * 컴포넌트 렌더링시에 물결 효과가 생성되는 컴포넌트.
 * 애니메이션이 종료될 때 컴포넌트를 제거해줘야 한다.
 * @param props 
 * @returns 
 */
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