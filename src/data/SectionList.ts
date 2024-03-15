interface SectionInfo {
    id: string;
    title: string;
}

interface SectionMap {
    About: SectionInfo;
    Career: SectionInfo;
    Experience: SectionInfo;
    Project: SectionInfo;
}

export const SECTION_MAP: SectionMap = {
    About: {
        id: 'about',
        title: 'About',
    },
    Career: {
        id: 'career',
        title: 'Career',
    },
    Experience: {
        id: 'experience',
        title: 'Experience',
    },
    Project: {
        id: 'project',
        title: 'Project',
    },
};