import ExperienceCard from '@/components/experience-card/ExperienceCard';
import Section from '@/components/main-layout/Section';
import { SECTION_MAP } from '@/data/SectionList';

interface ExperienceInfo {
    title: string;
    date: string;
    description: string;
    tagList: string[];
}

export default Experience;
function Experience() {

    const experienctList: ExperienceInfo[] = [
        {
            title: "MES 프로그램 개발",
            date: "2020-2021",
            description: `
            사출 제조업체의 생산 관리를 위한 MES 프로그램을 개발하였습니다.
            수주, 입출고, 재고, 생산계획 및 현황 등의 모듈을 구현하였습니다.
            Asp.Net Core를 사용하여 Rest API를 제공하여 윈도우/안드로이드 클라이언트를 지원하였습니다.
            시스템 설계 및 구현을 담당하였습니다.
        `,
            tagList: ["C#", "MS SQL", "Winform", "DevExpress", "Socket", "Asp.Net Core", "Rest API",]
        },
        {
            title: "사출기 및 주변 장비 제어 시스템 개발",
            date: "2019-2019",
            description: `
            사출기 및 주변 장비를 하나의 서버에서 제어하고 모니터링 하기 위한 시스템을 개발하였습니다.
            여러 프로토콜을 적용하여 다양한 제조사(LS산전, 화낙, 우진 등)의 PLC통신을 지원하였습니다.
            또한 시리얼 통신으로 사출기 주변 장비와 연동하여 데이터를 수집하였습니다.
            모니터링 및 제어를 위한 클라이언트 프로그램을 개발하였으며 클라이언트에서 다양한 명령을 지원하여
            사출기 및 주변 장비의 제어가 가능하도록 하였습니다.
            시스템 설계 및 구현을 담당하였습니다.
        `,
            tagList: ["C#", "MS SQL", "Winform", "Socket", "Serial Port", "PLC", "Modbus", "LS산전", "화낙", "우진"]
        },
        {
            title: "사출기 종합 관제 시스템 개발",
            date: "2017-2017",
            description: `
                사출기의 제어 및 모니터링을 위한 종합 관제 시스템을 개발하였습니다. 
                데이터 수집 서버에서 PLC데이터를 수집하고, 데스크탑 및 모바일에서 실시간으로 모니터링 하였습니다.
                제품 생산에 적용된 사출기의 데이터를 수집하여 품질관리 및 생산관리에 활용하였습니다.
                또한 사출기 경보 발생시 실시간 알림을 발송하여 즉각적인 대응이 가능하도록 하였습니다.
                시스템 설계 및 구현을 담당하였습니다.
            `,
            tagList: ["C#", "MS SQL", "Winform", "DevExpress", "Socket", "안드로이드", "Java"]
        },
        {
            title: "설비 데이터 수집 프로그램 개발 및 유지보수",
            date: "2016-2021",
            description: `
                설비의 현재 상태를 실시간으로 모니터링 하기 위한 프로그램을 관리하였습니다.
                잘못된 소켓 사용으로 인한 메모리 누수 버그를 수정하였으며 다양한 신규장비의 프로토콜을 추가하였습니다.
            `,
            tagList: ["C#", "MS SQL", "Winform", "Serial Port", "Socket"]
        },
        {
            title: "POP 프로그램 개발 및 유지보수",
            date: "2016-2021",
            description: `
                제조 현장에서 사용하는 POP프로그램의 유지보수 및 신규 개발을 담당했습니다.
                시리얼 통신을 사용하여 다양한 측정 장비와 연동하였습니다. 또한 UI 개선 및 사용자 커스터마이징 기능을 추가하여 편의성을 높였습니다.
            `,
            tagList: ["C#", "MS SQL", "Winform", "DevExpress", "Serial Port"]
        },
    ];

    return (
        <Section id={SECTION_MAP.Experience.id} title={SECTION_MAP.Experience.title}>
            {experienctList.map((experience, index) => (
                <ExperienceCard key={index}
                    title={experience.title}
                    date={experience.date}
                    description={experience.description}
                    tagList={experience.tagList}
                />
            ))}
        </Section>
    )
}