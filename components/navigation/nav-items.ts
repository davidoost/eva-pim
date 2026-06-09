export interface NavItem {
  label: string;
  slug: string;
  icon: string;
  badge?: string;
  items?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Overview",
    slug: "",
    icon: "gravity-ui:rectangles-4",
  },
  {
    label: "Products",
    slug: "products",
    icon: "gravity-ui:box",
  },
  {
    label: "Sync",
    slug: "sync",
    icon: "gravity-ui:arrows-rotate-right",
  },
  {
    label: "Settings",
    slug: "settings",
    icon: "gravity-ui:gear",
  },
];
