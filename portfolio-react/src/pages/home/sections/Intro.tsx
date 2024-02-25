import css from './Intro.module.scss';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Intro() {
    const name = `이규호`;
    const description = `변화를 추구하며 끊임없이 배우는 개발자입니다.`;
    return (
        <div className={css.intro}>
            <div className={css.name}>{name}</div>
            <div className={css.description}>{description}</div>
            <div className={css.linkList}>
                <a className={css.link} href='https://github.com/madstone290'
                    target='_blank' title='깃허브로 이동'
                ><FaGithub /></a>
                <a className={css.link} href="mailto:madstone290@gmail.com"
                    title='이메일 보내기'
                ><MdEmail /></a>
            </div>

        </div>
    )
}