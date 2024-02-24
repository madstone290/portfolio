import css from "@/components/main-layout/MainLayout.module.scss";

interface SectionAnchorProps {
    sectionId: string;
}
export default function SectionAnchor(props: SectionAnchorProps) {
    const { sectionId } = props;
    return (
        <div id={sectionId} className={css.sectionAnchor}>
        </div>
    )
}