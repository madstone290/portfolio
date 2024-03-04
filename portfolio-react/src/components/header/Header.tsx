import { SECTION_MAP } from '@/data/SectionList';
import css from './Header.module.scss';
import { useContext } from 'react';
import { AppContext } from '@/AppContextProvider';
export default Header;
function Header() {
    const title = '포트폴리오';
    const appContext = useContext(AppContext);
    const getActiveClass = (sectionId: string) => {
        return sectionId === appContext.selectedSectionId ? css.active : "";
    };

    return (
        <div className={css.header}>
            <div className={css.leftBar}>
                <img className={css.logo} src="https://source.unsplash.com/random/80x80" />
                <a href="/" className={css.link + " " + css.title}>{title}</a>
            </div>

            <div className={css.rightBar}>
                <a href={"#" + SECTION_MAP.About.id} className={css.link + " " + getActiveClass(SECTION_MAP.About.id)} >{SECTION_MAP.About.title}</a>
                <a href={"#" + SECTION_MAP.Experience.id} className={css.link + " " + getActiveClass(SECTION_MAP.Experience.id)}>{SECTION_MAP.Experience.title}</a>
                <a href={"#" + SECTION_MAP.Project.id} className={css.link + " " + getActiveClass(SECTION_MAP.Project.id)} >{SECTION_MAP.Project.title}</a>
                <a href={"#" + SECTION_MAP.Contact.id} className={css.link + " " + getActiveClass(SECTION_MAP.Contact.id)} >{SECTION_MAP.Contact.title}</a>
            </div>
        </div>

    );
}