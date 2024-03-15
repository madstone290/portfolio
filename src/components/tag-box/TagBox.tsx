import css from './TagBox.module.scss';

interface TagBoxProps {
    tagList: string[];
}

export default function TagBox(props: TagBoxProps) {
    const { tagList } = props;
    return (
        <div className={css.tagBox}>
            {tagList.map((tag, index) => (
                <div key={index} className={css.tag}>
                    {tag}
                </div>
            ))}
        </div>
    )
}