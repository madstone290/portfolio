import layoutCss from "@/components/main-layout/MainLayout.module.scss";
import homeCss from "@/pages/home/Home.module.scss";
import About from "@/pages/home/sections/About";
import Experience from "@/pages/home/sections/Experience";
import Project from "@/pages/home/sections/Project";
import Intro from "@/pages/home/sections/Intro";
import { useContext, useEffect } from "react";
import { SECTION_MAP } from "@/data/SectionList";
import { AppContext } from "@/AppContextProvider";

export default function Home() {

    const appContext = useContext(AppContext);

    /**
     * 스크롤변경시 현재 섹션에 맞는 링크 활성화
     * @returns 
     */
    const handleScroll = () => {
        const sections = document.querySelectorAll(`.${layoutCss.section}`);
        const sectionArrary = Array.from(sections);

        const links = document.querySelectorAll(`.${homeCss.link}`);
        const linksArray = Array.from(links);

        // section 높이 계산필요
        const headerHeight = 48;
        const currentSection = sectionArrary.find(section => {
            const htmlSectionEl = section as HTMLElement;
            if (htmlSectionEl) {
                return window.scrollY <= htmlSectionEl.offsetTop + htmlSectionEl.offsetHeight - headerHeight;
            }
        });
        if (!currentSection)
            return;
        const currentSectionIndex = sectionArrary.indexOf(currentSection);
        linksArray.forEach(link => {
            link.classList.remove(homeCss.active);
        });

        linksArray[currentSectionIndex].classList.add(homeCss.active);

        // context에 현재섹션 저장
        appContext.changeSelectedSection(currentSection.id);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={homeCss.homePage}>
            <div className={homeCss.sidebar}>
                <Intro />
                <div className={homeCss.linkList}>
                    <Link href={"#" + SECTION_MAP.About.id} title={SECTION_MAP.About.title} />
                    <Link href={"#" + SECTION_MAP.Experience.id} title={SECTION_MAP.Experience.title} />
                    <Link href={"#" + SECTION_MAP.Project.id} title={SECTION_MAP.Project.title} />
                </div>
            </div>
            <div>
                <About />
                <Experience />
                <Project />
            </div>
        </div>
    )
}

function Link(props: { href: string, title: string }) {
    return (
        <a
            href={props.href}
            className={homeCss.link}
        >
            <div className={homeCss.line}></div>
            <div>{props.title}</div>
        </a>
    );
}
