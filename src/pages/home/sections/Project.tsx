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

import bridgeImgAdd from "@/assets/images/bridge-add.png";
import bridgeImgAdminPlace from "@/assets/images/bridge-admin-place.png";
import bridgeImgSearchPlace from "@/assets/images/bridge-search-place.png";
import bridgeImgSearchProduct from "@/assets/images/bridge-search-product.png";

import drawerImgMain from "@/assets/images/drawer-main.gif";
import drawerImgCompany1 from "@/assets/images/drawer-company1.png";
import drawerImgCompany2 from "@/assets/images/drawer-company2.png";
import drawerImgInventory1 from "@/assets/images/drawer-inventory1.png";
import drawerImgLayout from "@/assets/images/drawer-layout.png";
import drawerImgReceiptBatchAdd from "@/assets/images/drawer-receipt-batchadd.png";
import drawerImgReceipt from "@/assets/images/drawer-receipt.png";
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
    tagList: string[];
}


function Project() {

    const projectList: ProjectInfo[] = [
        {
            title: "포트폴리오",
            date: "2024-2024",
            description: `
            리액트를 사용하여 포트폴리오 웹사이트를 제작하였습니다.
            `,
            github: "https://github.com/madstone290/portfolio",
            tagList: ["React", "Typescript"],
            url: "https://portfolio.mad290.com/",
            imageList: []
        },
        {
            title: "플럼 차트",
            date: "2023-2023",
            description: `
            타입스크립트를 이용한 타임라인 차트 라이브러리입니다. 시간에 따른 데이터를 차트로 표현할 수 있습니다.
            가상화 리스트와 이벤트 그룹화 등을 사용하여 대용량 데이터를 표현할 수 있습니다.
            확대/축소 및 드래그를 지원하여 사용자가 원하는 시간대의 데이터를 확인할 수 있습니다.
            `,
            github: "https://github.com/madstone290/lib-plum-chart",
            tagList: ["Typescript"],
            url: "https://madstone290.github.io/PlumChart/",
            imageList: [
            ]
        },
        {
            title: "토글 드로어 메뉴",
            date: "2023-2023",
            description: `
            자바스크립트 드로어 메뉴 라이브러리입니다. 축소/일반 상태를 토글하여 메뉴를 다르게 표시할 수 있습니다.
                `,
            github: "https://github.com/madstone290/lib-t-drawer",
            tagList: ["Typescript"],
            url: "https://madstone290.github.io/TDrawer/",
            imageList: [
            ]
        },
        {
            title: "브릿지 지도",
            date: "2022-2022",
            description: `장소 및 제품을 공유하는 지도 서비스입니다. 
                사용자는 지도에 장소를 등록하고, 등록된 장소에 제품을 등록할 수 있습니다. 
                등록된 장소와 제품은 다른 사용자들과 공유할 수 있습니다.
                Asp.Net Core/Blaozr를 사용하여 개발하였고 지도는 Naver Map API를 사용하였습니다.
                또한 Github Actions를 사용하여 CI/CD를 구축하였습니다.
            `,
            github: "https://github.com/madstone290/Bridge",
            tagList: ["C#", "Github Actions", "Postgresql", "Javascript", "Asp.net core", "Blazor", "Docker"],
            imageList: [
                {
                    url: bridgeImgAdd,
                    name: "장소등록",
                    description: "장소를 등록합니다. 등록된 장소는 지도에 표시됩니다"
                },
                {
                    url: bridgeImgAdminPlace,
                    name: "관리자페이지",
                    description: "관리자페이지에서 장소 및 제품을 관리할 수 있습니다."
                },
                {
                    url: bridgeImgSearchPlace,
                    name: "장소검색",
                    description: "장소를 검색합니다. 거리순으로 정렬하여 가까운 장소부터 표시됩니다"
                },
                {
                    url: bridgeImgSearchProduct,
                    name: "제품검색",
                    description: "제품을 검색합니다. 제품 정보 및 위치를 확인할 수 있습니다."
                },
            ]
        },
        {
            title: "드로어 인벤토리",
            date: "2022-2022",
            description: `드로어 인벤토리는 재고 관리 프로그램입니다. 
                재고위치를 캔버스로 표현하여 사용자가 재고위치를 직관적으로 확인할 수 있습니다. 
                재고위치는 계층적으로 표현되어 있어 사용자가 원하는 위치를 쉽게 찾을 수 있습니다.
                엑셀 업로드 및 다운로드를 지원하여 사용자가 쉽게 데이터를 관리할 수 있습니다.
                Asp.Net Core와 Blazor를 사용하여 개발하였으며, Github Actions를 사용하여 CI/CD를 구축하였습니다.
                `,
            github: "https://github.com/madstone290/Drawer",
            tagList: ["C#", "Github Actions", "Postgresql", "Javascript", "Asp.net core", "Blazor", "Docker"],
            imageList: [
                {
                    url: drawerImgMain,
                    name: "재고확인",
                    description: "아이템의 수량 및 재고 위치를 확인할 수 있습니다."
                },
                {
                    url: drawerImgCompany1,
                    name: "회사등록",
                    description: "회사를 생성하거나 다른 회사에 가입할 수 있습니다."
                },
                {
                    url: drawerImgCompany2,
                    name: "회사관리",
                    description: "회사 관리메뉴입니다. 구성원을 추가하거나 회사 정보를 수정할 수 있습니다."
                },
                {
                    url: drawerImgInventory1,
                    name: "재고위치",
                    description: "재고수량을 위치별로 확인할 수 있습니다"
                },
                {
                    url: drawerImgLayout,
                    name: "레이아웃 등록",
                    description: "레이아웃을 등록하거나 수정할 수 있습니다. 재고 위치를 캔버스로 ㅍ현하여 사용자가 직관적으로 확인할 수 있습니다."
                },
                {
                    url: drawerImgReceiptBatchAdd,
                    name: "일괄추가",
                    description: "엑셀파일을 업로드하여 재고를 일괄 추가할 수 있습니다."
                },
                {
                    url: drawerImgReceipt,
                    name: "입고내역",
                    description: "아이템 입고내역을 확인할 수 있습니다."
                }
            ]
        },
        {
            title: "Sim 프린터",
            date: "2022-2022",
            description: `심프린터는 주문정보를 분석, 저장 및 출력하는 프로그램입니다.
            시리얼 포트로 주문이 들어오면 프로그램이 주문을 분석하여 데이터베이스에 저장하고, 저장된 주문을 프린터로 출력합니다.
            `,
            github: "https://github.com/madstone290/SimPrinter",
            tagList: ["C#", "Winform"],
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
                    tagList={experience.tagList}
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