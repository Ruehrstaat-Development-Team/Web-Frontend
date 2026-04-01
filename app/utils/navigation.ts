export default function () {
  return {
    IsExpanded: ref(false),
    Destinations: [
      new NavigationItem("Home", "/", "home", "default", true),
      new NavigationItem("Carrier", "/carrier", "handyman", "default", true),
      new NavigationItem("Commander", "/commander", "group", "default", true),
      new NavigationItem("Management", "/management", "inventory", "default", true),
      new NavigationItem("Login", "/login", "login", "centered", false),
    ],
  };
}

class NavigationItem {
  readonly Name: string;
  readonly Path: string;
  readonly Icon: string;
  readonly Layout: string;
  readonly VisibleInNavigation: boolean;
  readonly NavigationItems: NavigationItem[] | null;
  Badge: number | null;

  constructor(
    name: string,
    path: string,
    icon: string,
    layout: string,
    visibleInNavigation: boolean,
    badge: number | null = null,
    navigationItems: NavigationItem[] | null = null
  ) {
    this.Name = name;
    this.Path = path;
    this.Icon = icon;
    this.Layout = layout;
    this.VisibleInNavigation = visibleInNavigation;
    this.Badge = badge;
    this.NavigationItems = navigationItems;
  }
}
