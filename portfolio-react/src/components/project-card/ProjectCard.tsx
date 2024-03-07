import TagBox from "@/components/tag-box/TagBox"
import css from "./ProjectCard.module.scss"
import { FaGithub } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";
import { CiImageOn } from "react-icons/ci";

interface ProjectCardProps {
    title: string;
    date: string;
    description: string;
    url?: string;
    github?: string;
    imageList: string[];
    tagList: string[];
    openModal?: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
    const { title, date, description, tagList, url, github, imageList, openModal } = props;
    return (
        <div className={css.card}>
            <div className={css.date}>{date}</div>
            <div className={css.content}>
                <a className={css.title}
                    href={url ? url : undefined}
                    target='_blank'
                >
                    <span className={css.titleText}>{title}</span>
                    {url &&
                        <LuMoveUpRight className={css.titleLink} />
                    }
                </a>
                <div className={css.description}>{description}</div>
                {imageList && 0 < imageList.length &&
                    <a className={css.link}
                        onClick={openModal}
                        target='_blank'
                        title='이미지 보기'
                    >
                        <CiImageOn />
                    </a>
                }
                {github &&
                    <a className={css.link}
                        href={github}
                        target='_blank'
                        title='깃허브 가기'
                    >
                        <FaGithub />
                    </a>
                }
                {url &&
                    <a className={css.link}
                        href={url}
                        target='_blank'
                        title='웹사이트 가기'
                    >
                        <LuMoveUpRight />
                    </a>
                }
                <TagBox tagList={tagList} />
            </div>

        </div>
    )
}