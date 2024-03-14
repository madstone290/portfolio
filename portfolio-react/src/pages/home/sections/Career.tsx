import CareerCard from "@/components/career-card/CareerCard";
import Section from "@/components/main-layout/Section";
import { SECTION_MAP } from "@/data/SectionList";


interface CareerInfo {
    /**
     * 회사명
     */
    company: string;
    /**
     * 근무 기간
     */
    date: string;

    /**
     * 업무 내용
     */
    duties: string[];

    /**
     * 기술 스택
     */
    techStack: string[];

    /**
     * 회사 홈페이지
     */
    homepage?: string;
}
const careerList: CareerInfo[] = [
    {
        company: "JS System",
        date: "2023-현재",
        duties: [
            "신규 시스템 설계 및 구현",
        ],
        homepage: "http://js-system.co.kr/",
        techStack: ["C#", "Oracle", "Maria DB", "Asp.Net Core", "DevExpress", "Java", "Springboot", "Winform"]
    },
    {
        company: "PDM Tech",
        date: "2016-2021",
        duties: [
            "신규 시스템 설계 및 구현",
            "기존 시스템 유지보수",
        ],
        homepage: "http://www.pdmtech.co.kr/",
        techStack: ["C#", "MS SQL", "Winform", "DevExpress", "Socket", "Asp.Net Core", "Rest API", "Andoroid", "Java"]
    },
    
];

export default function Career() {
    return (
        <Section id={SECTION_MAP.Career.id} title={SECTION_MAP.Career.title}>
            {careerList.map((career, index) => (
                <CareerCard key={index}
                    company={career.company}
                    date={career.date}
                    duties={career.duties}
                    techStack={career.techStack}
                    homepage={career.homepage}
                />
            ))}
        </Section>
    );
}