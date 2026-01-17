export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}
export type PageType =
  | "home"
  | "about"
  | "portfolio"
  | "blog"
  | "experience"
  | "contact"
  | "project-detail"
  | "blog-detail";
