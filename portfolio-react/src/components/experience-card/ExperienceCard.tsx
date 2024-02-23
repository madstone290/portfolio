import TagBox from "@/components/tag-box/TagBox"

interface ExperienceCardProps {
    title: string;
    duration: string;
    description: string;
    tagList: string[];
}

export default function ExperienceCard(props: ExperienceCardProps) {
    const { title, duration, description, tagList } = props;
    return (
        <div>
            <div>{duration}</div>
            <div>{title}</div>
            <div>{description}</div>
            <TagBox tagList={tagList} />
        </div>
    )
}