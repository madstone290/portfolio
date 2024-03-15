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
            "다양한 웹 애플리케이션을 개발하고 있습니다."
        ],
        homepage: "http://js-system.co.kr/",
        techStack: ["C#", "Oracle", "Maria DB", "Asp.Net Core", "DevExpress", "Java", "Springboot", "Winform"]
    },
    {
        company: "PDM Tech",
        date: "2016-2021",
        duties: [
            `윈도우용 POP/MES 프로그램과 PLC 및 시리얼 장비의 통신 프로그램을 개발하였습니다.
            
            `
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