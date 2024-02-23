import css from './Header.module.scss';
export default Header;
function Header() {
    const title = '이규호의 포트폴리오';
    return (
        <div className={css.header}>
            <div className={css.leftBar}>
                <img className={css.logo} src="https://source.unsplash.com/random/80x80" />
                <a href="/" className={css.link}>{title}</a>
            </div>


            <div className={css.rightBar}>
                <a href="#about" className={css.link}>About</a>
                <a href="#experience" className={css.link}>Experience</a>
                <a href="#project" className={css.link}>Project</a>
                <a href="#contact" className={css.link}>Contact</a>
            </div>
        </div>

    );
}