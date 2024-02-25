import ExperienceCard from '@/components/experience-card/ExperienceCard';
import Section from '@/components/main-layout/Section';
import { SECTION_MAP } from '@/data/SectionList';

export default Experience;
function Experience() {

    const experienctList = [
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
    ];

    return (
        <Section id={SECTION_MAP.Experience.id} title={SECTION_MAP.Experience.title}>
            {experienctList.map((experience, index) => (
                <ExperienceCard key={index}
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                    tagList={["React", "TypeScript", "JavaScript", "HTML", "CSS"]}
                />
            ))}
        </Section>
    )
}