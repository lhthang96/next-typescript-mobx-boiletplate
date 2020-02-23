export interface SubMenuItem {
  id: string;
  antIcon: string;
  label: string;
  link?: string;
}

export interface MenuItem {
  id: string;
  antIcon: string;
  label: string;
  link?: string;
  children?: Array<SubMenuItem>;
}