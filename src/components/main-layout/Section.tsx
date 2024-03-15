import css from "@/components/main-layout/MainLayout.module.scss";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}
export default function SectionAnchor(props: SectionProps) {
    const { id, title } = props;
    return (
        <section id={id} className={css.section}>
            <h2 className={css.sectionTitle}>{title}</h2>
            {props.children}
        </section>
    )
}