import ExperienceCard from '@/components/experience-card/ExperienceCard';
import css from './Experience.module.scss';
import SectionTitle from '@/components/main-layout/SectionTitle';
import SectionAnchor from '@/components/main-layout/SectionAnchor';

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
        <div>
            <SectionAnchor sectionId="experience" />
            <SectionTitle title="Experience" />
            {experienctList.map((experience, index) => (
                <ExperienceCard key={index}
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                    tagList={["React", "TypeScript", "JavaScript", "HTML", "CSS"]}
                />
            ))}
        </div>
    )
}