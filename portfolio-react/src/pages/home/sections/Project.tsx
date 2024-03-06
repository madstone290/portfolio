import Section from "@/components/main-layout/Section";
import ProjectCard from "@/components/project-card/ProjectCard";
import { SECTION_MAP } from "@/data/SectionList";

export default Project;
function Project() {
    const projectList = [
        {
            title: "Software Engineer",
            company: "Company A",
            date: "2021-2022",
            description: "I worked as a software engineer at Company A. I was responsible for developing and maintaining the company's web applications."
        },
        {
            title: "Front-end Developer",
            company: "Company B",
            date: "2019-2021",
            description: "I worked",
        },
        {
            title: "Software Engineer",
            company: "Company A",
            date: "2021-2022",
            description: "I worked as a software engineer at Company A. I was responsible for developing and maintaining the company's web applications.",
            url: "https://www.naver.com",
            github: "https://www.github.com"
        },
        {
            title: "Front-end Developer",
            company: "Company B",
            date: "2019-2021",
            description: "I worked",
            url: "111",
            github: ""
        },
    ];
    return (
        <Section id={SECTION_MAP.Project.id} title={SECTION_MAP.Project.title}>
            {projectList.map((experience, index) => (
                <ProjectCard key={index}
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                    url={experience.url ?? ""}
                    github={experience.github ?? ""}
                    tagList={["React", "TypeScript", "JavaScript", "HTML", "CSS"]}
                />
            ))}
        </Section>
    )
}