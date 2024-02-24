import css from "@/components/main-layout/MainLayout.module.scss";

interface SectionTitleProps {
    title: string;
}
export default function SectionTitle(props: SectionTitleProps) {
    const { title } = props;
    return (
        <>
            <h2 className={css.sectionTitle}>{title}</h2>
        </>
    )
}