import Section from "@/components/main-layout/Section";
import ProjectCard from "@/components/project-card/ProjectCard";
import { SECTION_MAP } from "@/data/SectionList";
import { Modal } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import css from "./Project.module.scss";
import "./Project.scss";

import img1 from "@/assets/images/drawer-company2.png";
import img2 from "@/assets/images/drawer-inventory1.png";
import img3 from "@/assets/images/drawer-inventory2.png";

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
            title: "Sim 프린터",
            date: "2022-2022",
            description: `심프린터는 주문정보를 분석, 저장 및 출력하는 프로그램입니다.
            시리얼 포트로 주문이 들어오면 프로그램이 주문을 분석하여 데이터베이스에 저장하고, 저장된 주문을 프린터로 출력합니다.
            `,
            url: "111",
            github: "https://github.com/madstone290/SimPrinter",
            imageList: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
        },
    ];
    const [open, setOpen] = React.useState(false);
    const openModal = () => {
        setOpen(true);
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className: css.slider,
        // dotsClass: css.dots,
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
                    imageList={experience.imageList ?? []}
                    openModal={openModal}
                />
            ))}
            <Modal
                className={css.modal}
                open={open}
                onClose={() => setOpen(false)}
            >
                <div className={css.content}>
                    <Slider {...settings}>
                        <div className={css.item}>
                            <div className={css.image}>
                                <img src={img1} />
                            </div>
                            <div className={css.desc}>
                                1번 사진
                            </div>
                        </div>
                        <div className={css.item}>
                            <div className={css.image}>
                                <img src={img2} />
                            </div>
                            <div className={css.desc}>
                                2번 사진
                            </div>
                        </div>
                        <div className={css.item}>
                            <div className={css.image}>
                                <img src={img3} />
                            </div>
                            <div className={css.desc}>
                                3번 사진
                            </div>
                        </div>
                    </Slider>
                </div>
            </Modal>
        </Section>
    )
}