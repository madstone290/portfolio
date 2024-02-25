interface SectionInfo {
    id: string;
    title: string;
}

interface SectionMap {
    About: SectionInfo;
    Experience: SectionInfo;
    Project: SectionInfo;
    Contact: SectionInfo;
}

export const SECTION_MAP: SectionMap = {
    About: {
        id: 'about',
        title: 'About',
    },
    Experience: {
        id: 'experience',
        title: 'Experience',
    },
    Project: {
        id: 'project',
        title: 'Project',
    },
    Contact: {
        id: 'contact',
        title: 'Contact',
    },
};