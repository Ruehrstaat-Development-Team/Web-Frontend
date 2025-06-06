import type { LucideIcon } from "lucide-vue-next";

declare global {
  export type SidebarMenuItem = {
    title: string;
    icon?: LucideIcon;
    location: NavigationLocation;
    urlCompare: string;
    children?: SidebarMenuItem[];
  };

  export type NavigationLocation = {
    name: string;
    params?: Record<string, string | number>;
  };
}
