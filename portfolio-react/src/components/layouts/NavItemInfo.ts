export interface NavItemInfo {
    title: string;
    href: string;
    basePath?: string;
    children?: NavItemInfo[];
}