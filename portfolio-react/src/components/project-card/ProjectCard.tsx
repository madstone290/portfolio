import TagBox from "@/components/tag-box/TagBox"
import css from "./ProjectCard.module.scss"
import { FaGithub } from "react-icons/fa";
import { LuMoveUpRight } from "react-icons/lu";

interface ProjectCardProps {
    title: string;
    date: string;
    description: string;
    url?: string;
    github?: string;
    tagList: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
    const { title, date, description, tagList, url, github } = props;
    return (
        <div className={css.card}>
            <div className={css.date}>{date}</div>
            <div className={css.content}>
                <div className={css.title}>{title}</div>
                <div className={css.description}>{description}</div>
                {url &&
                    <a className={css.link}
                        href={url}
                        target='_blank'
                        title='웹사이트 가기'
                    >
                        <LuMoveUpRight />
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
                <TagBox tagList={tagList} />
            </div>

        </div>
    )
}