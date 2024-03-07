import Section from "@/components/main-layout/Section";
import ProjectCard from "@/components/project-card/ProjectCard";
import { SECTION_MAP } from "@/data/SectionList";
import { Modal } from "@mui/material";
import React, { useCallback, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Project.module.scss";
import "./Project.scss";

import { AppContext } from "@/AppContextProvider";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

import img1 from "@/assets/images/drawer-company2.png";
import img2 from "@/assets/images/drawer-inventory1.png";
import img3 from "@/assets/images/drawer-inventory2.png";


import simPrinterImg from "@/assets/images/simprinter.png";

export default Project;

interface ProjectInfo {
    title: string;
    company?: string;
    date: string;
    description: string;
    url?: string;
    github?: string;
    imageList: { url: string, description: string }[];
}


function Project() {

    const projectList: ProjectInfo[] = [
        {
            title: "Software Engineer",
            company: "Company A",
            date: "2021-2022",
            description: "I worked as a software engineer at Company A. I was responsible for developing and maintaining the company's web applications.",
            imageList: [
                {
                    url: img1,
                    description: "1번 사진"
                },
                {
                    url: img2,
                    description: "2번 사진"
                },
                {
                    url: img3,
                    description: "3번 사진"
                }
            ]
        },
        {
            title: "Front-end Developer",
            company: "Company B",
            date: "2019-2021",
            description: "I worked",
            imageList: []
        },
        {
            title: "Software Engineer",
            company: "Company A",
            date: "2021-2022",
            description: "I worked as a software engineer at Company A. I was responsible for developing and maintaining the company's web applications.",
            url: "https://www.naver.com",
            github: "https://www.github.com",
            imageList: []
        },
        {
            title: "Sim 프린터",
            date: "2022-2022",
            description: `심프린터는 주문정보를 분석, 저장 및 출력하는 프로그램입니다.
            시리얼 포트로 주문이 들어오면 프로그램이 주문을 분석하여 데이터베이스에 저장하고, 저장된 주문을 프린터로 출력합니다.
            `,
            url: "111",
            github: "https://github.com/madstone290/SimPrinter",
            imageList: [
                {
                    url: simPrinterImg,
                    description: "[1]. 주문현황\n주문이 들어오면 주문정보를 분석 후 저장 및 라벨을 발행합니다."
                }
            ]
        },
    ];

    const appContext = React.useContext(AppContext);
    const slickRef = useRef<Slider>(null);
    const [project, setProject] = React.useState(projectList[0]);
    const [open, setOpen] = React.useState(false);
    const openModal = (title: string) => {
        const project = projectList.find(project => project.title === title);
        if (!project)
            return;

        setProject(project);
        setOpen(true);
        appContext.enableFlashlight(false);
    };

    const onModalClose = () => {
        setOpen(false);
        appContext.enableFlashlight(true);
    };

    const onLeftArrowClick = useCallback(() => {
        slickRef.current?.slickPrev();
    }, []);

    const onRightArrowClick = useCallback(() => {
        slickRef.current?.slickNext();
    }, []);

    const slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: css.slider,
        arrows: false,
    };
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
                    hasImage={0 < experience.imageList.length}
                    openModal={() => openModal(experience.title)}
                />
            ))}
            <Modal className={css.modal}
                open={open}
                onClose={() => onModalClose()}
                hideBackdrop={false}
            >
                <div className={css.content}>
                    <div className={css.leftArrow} onClick={onLeftArrowClick}><FaArrowLeft /></div>
                    <div className={css.rightArrow} onClick={onRightArrowClick}><FaArrowRight /></div>
                    <Slider ref={slickRef}
                        {...slickSettings}
                    >
                        {project.imageList.map((image, index) => (
                            <div className={css.item} key={index}>
                                <div className={css.image}>
                                    <img src={image.url} />
                                </div>
                                <div className={css.desc}>
                                    {image.description}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Modal>
        </Section>
    )
}