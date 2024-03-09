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

interface ImageInfo {
    url: string;
    name: string;
    description: string;
}

interface ProjectInfo {
    title: string;
    company?: string;
    date: string;
    description: string;
    url?: string;
    github?: string;
    imageList: ImageInfo[];
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
                    name: "사진1",
                    description: "1번 사진"
                },
                {
                    url: img2,
                    name: "사진2",
                    description: "2번 사진"
                },
                {
                    url: img3,
                    name: "사진3",
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
                    name: "주문현황",
                    description: "주문이 들어오면 주문정보를 분석 후 저장 및 라벨을 발행합니다."
                }
            ]
        },
    ];

    const appContext = React.useContext(AppContext);
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
                <div>
                    <SliderWrapper project={project} />
                </div>
            </Modal>
        </Section >
    )
}

function SliderWrapper(props: { project: ProjectInfo }) {
    const { project } = props;
    const slickRef = useRef<Slider>(null);

    const [currentSlide, setCurrentSlide] = React.useState(0);

    const onLeftArrowClick = useCallback(() => {
        slickRef.current?.slickPrev();
    }, []);

    const onRightArrowClick = useCallback(() => {
        slickRef.current?.slickNext();
    }, []);

    return (
        <div className={css.sliderContainer}>
            {currentSlide !== 0 &&
                <div className={css.leftArrow} onClick={onLeftArrowClick}><FaArrowLeft /></div>
            }
            {currentSlide !== project.imageList.length - 1 &&
                <div className={css.rightArrow} onClick={onRightArrowClick}><FaArrowRight /></div>
            }
            {/* 슬라이드 이미지가 1장일 때 react-slick 라이브러리에서 이미지가 아래로 중복되는 버그가 있음.
            이미지가 1장일 때는 슬라이드를 사용하지 않고 이미지만 보여줌.
            */}
            {project.imageList.length === 1 &&
                <div className={css.slider}>
                    <SlideImage image={project.imageList[0]} index={0} count={1} />
                </div>
            }
            {project.imageList.length > 1 &&
                <Slider ref={slickRef}
                    afterChange={(current) => setCurrentSlide(current)}
                    dots={true}
                    infinite={false}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    className={css.slider}
                    arrows={false}
                >
                    {project.imageList.map((image, index) => (
                        <SlideImage key={index} image={image} index={index} count={project.imageList.length} />
                    ))}
                </Slider>
            }
        </div>
    );
}

interface SlideImageProps {
    /**
     * 이미지 정보
     */
    image: ImageInfo;

    /**
     * 현재 이미지 인덱스
     */
    index: number;

    /**
     * 전체 이미지 갯수
     */
    count: number;
}

function SlideImage(props: SlideImageProps) {
    const { image, index, count } = props;
    return (
        <div className={css.item} key={index}>
            <div className={css.image}>
                <img src={image.url} />
            </div>
            <div className={css.text}>
                <div>
                    <span className={css.name}>{image.name}</span>
                    <span className={css.number}>{`${index + 1}/${count} `}</span>
                </div>
                <div className={css.desc}>
                    {image.description}
                </div>
            </div>
        </div>
    );
}