import {
  LucideArrowLeftRight,
  LucideFileArchive,
  LucideHome,
  LucideImages,
  LucideOctagonAlert,
  LucideRocket,
  LucideUsers,
} from "lucide-vue-next";

export default () => {
  const items: SidebarMenuItem[] = [
    {
      title: "layout-default.menu.home",
      icon: LucideHome,
      location: { name: "index" },
      urlCompare: "index",
    },
    {
      title: "layout-default.menu.carrier",
      icon: LucideRocket,
      location: { name: "carrier" },
      urlCompare: "carrier",
    },
    {
      title: "layout-default.menu.information",
      icon: LucideFileArchive,
      location: { name: "information" },
      urlCompare: "information",
    },
    {
      title: "layout-default.menu.commanders",
      icon: LucideUsers,
      location: { name: "commanders" },
      urlCompare: "commanders",
    },
    {
      title: "layout-default.menu.gallery",
      icon: LucideImages,
      location: { name: "gallery" },
      urlCompare: "gallery",
    },
  ];
  const bottomItems: SidebarMenuItem[] = [
    {
      title: "layout-default.menu.connector",
      icon: LucideArrowLeftRight,
      location: { name: "information" },
      urlCompare: "about",
    },
  ];
  return {
    items,
    bottomItems,
  };
};
