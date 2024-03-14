import TagBox from "@/components/tag-box/TagBox"
import css from "./CareerCard.module.scss"
import { LuMoveUpRight } from "react-icons/lu";

interface CareerCardProps {
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

export default function CareerCard(props: CareerCardProps) {
    const { company, homepage, date, duties, techStack } = props;
    return (
        <div className={css.card}>
            <div className={css.date}>{date}</div>
            <div className={css.content}>
                <a className={css.title}
                    href={homepage ? homepage : undefined}
                    target='_blank'
                >
                    <span className={css.titleText}>{company}</span>
                    {homepage &&
                        <LuMoveUpRight className={css.titleLink} />
                    }
                </a>
                {
                    duties.map((duty, index) => {
                        return <div key={index} className={css.duty}>{duty}</div>
                    })
                }
                <TagBox tagList={techStack} />
            </div>

        </div>
    )
}