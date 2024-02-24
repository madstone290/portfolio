import css from "@/pages/Home.module.scss";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Project from "@/sections/Project";
import Intro from "@/sections/Intro";
import { useEffect } from "react";

export default function Home() {

    // check current scroll position
    // if scroll is section element, change the color of the link
    // if scroll is not section element, change the color of the link to default


    const handleScroll = () => {
        const about = document.getElementById('about');
        const experience = document.getElementById('experience');
        const project = document.getElementById('project');
        const contact = document.getElementById('contact');
        const links = document.querySelectorAll(`.${css.link}`);
        const linksArr = Array.from(links);
        const sections = [about, experience, project, contact];
        const sectionArr = Array.from(sections);
        const currentScroll = window.scrollY;
        // section 높이 계산필요
        const currentSection = sectionArr.find(section => {
            if (section) {
                return currentScroll <= section.offsetTop;
            }
        });
        if (!currentSection)
            return;
        const currentSectionIndex = sectionArr.indexOf(currentSection);
        linksArr.forEach(link => {
            link.classList.remove(css.active);
        });
        linksArr[currentSectionIndex].classList.add(css.active);
    }
    useEffect(() => {

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div className={css.homePage}>
            <div className={css.sidebar}>
                <Intro />
                <div className={css.linkList}>
                    <Link href="#about" title="About" />
                    <Link href="#experience" title="Experience" />
                    <Link href="#project" title="Project" />
                    <Link href="#contact" title="Contact" />
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
            className={css.link}
        >
            <div className={css.line}></div>
            <div>{props.title}</div>
        </a>
    );
}
