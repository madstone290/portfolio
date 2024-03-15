import TagBox from "@/components/tag-box/TagBox"
import css from "./ExperienceCard.module.scss"

interface ExperienceCardProps {
    title: string;
    date: string;
    description: string;
    tagList: string[];
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const { title, date, description, tagList } = props;
    return (
        <div className={css.card}>
            <div className={css.date}>{date}</div>
            <div className={css.content}>
                <div className={css.title}>{title}</div>
                <div className={css.description}>{description}</div>
                <TagBox tagList={tagList} />
            </div>

        </div>
    )
}